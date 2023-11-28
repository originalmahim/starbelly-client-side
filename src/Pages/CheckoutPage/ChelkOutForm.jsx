import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useEffect, useState } from "react";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
const [error, setError] = useState('')

          useEffect(() => {
          fetch('http://localhost:5000/cart')
          .then(res => res.json())
          .then(data => console.log(data))
          },[])

          useEffect(() => {
             axios.post('/')        
          },[])

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Get additional form data
    const email = event.target.email.value;
//     const zipCode = event.target.zipCode.value;
    const cardholderName = event.target.cardholderName.value;

    // Use the collected data as needed, for example, include it in the payment method creation
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
      billing_details: {
        name: cardholderName,
        email: email,
      },
    });

    if (error) {
      console.log('[error]', error);
      setError(error.message)
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      setError('')
    }
  };

  return (
    <div className="container mx-auto my-8">
      <div className="bg-white ">
        <h2 className="text-2xl font-semibold mb-6 text-center">Secure Checkout</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="cardholderName" className="block text-sm font-medium text-gray-700">
              Cardholder Name
            </label>
            <input
              type="text"
              id="cardholderName"
              name="cardholderName"
              autoComplete="name"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="cardDetails" className="block text-sm font-medium text-gray-700">
              Card Details
            </label>
            <div className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
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
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-3 px-6 rounded-md w-full hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
            disabled={!stripe}
          >
            Complete Purchase
          </button>
        </form>
        <p className="text-red-500 text-center">{error}</p>
      </div>
    </div>
  );
};

export default CheckoutForm;