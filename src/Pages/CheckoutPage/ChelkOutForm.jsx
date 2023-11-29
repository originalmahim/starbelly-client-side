import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { AuthContex } from './../Providers/AuthProvider';
import axios from "axios";

const ChelkOutForm = ({ data }) => {
const [error, setError] = useState('');
  const [clientSecret, setClientSecret] = useState('')
  const stripe = useStripe();
  const elements = useElements();
const { user } = useContext(AuthContex)

  const totalPrice = data.price;

  useEffect(() => {
    if (totalPrice > 0) {
      axios.post('http://localhost:5000/create-payment-intent', { price: totalPrice })
        .then(res => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        })
    }

  }, [totalPrice])



  const handleSubmit = async (event) => {
    console.log('payment');
    event.preventDefault();


    if (!stripe || !elements) {
      return
    }

    const card = elements.getElement(CardElement)

    if (card === null) {
      return
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card
    })

    if (error) {
      console.log('payment error', error);
    setError(error.message);
    } 
    else {
      console.log('payment method', paymentMethod)
      setError('');
    }

    // confirm payment
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          email: user?.email || 'anonymous',
          name: user?.displayName || 'anonymous'
        }
      }
    })

    if (confirmError) {
      console.log(confirmError.message)
      setError(confirmError.message)
    }
    else {
      console.log('payment intent', paymentIntent)
      if (paymentIntent.status === 'succeeded') {
        console.log('transaction id', paymentIntent.id);
      }
    }
  }
  return (
    <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: "16px",
                            color: "#424770",
                            "::placeholder": {
                                color: "#aab7c4",
                            },
                        },
                        invalid: {
                            color: "#9e2146",
                        },
                    },
                }}
            />
            <button className="btn btn-sm btn-primary my-4" type="submit" disabled={!stripe}>
                Proceed Checkout
            </button>
            {error && <p className="text-xl text-red-500">{error}</p>}
        </form>
  );
}

export default ChelkOutForm;