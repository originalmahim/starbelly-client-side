import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContex } from './../Providers/AuthProvider';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ChelkOutForm from "./ChelkOutForm";

const CheckoutPage = () => {
  const stripePromiss = loadStripe('pk_test_51OFW1EI046RRop3ptKjeKIdZN7a9rxfZkGsDCdAOExlV6MqPTSnnjYsW4yljF6u5fqCHqLmLV3v1vetWUOrgSqbx009Jd7Lz3x')
  const paymentInfo = useLoaderData()
  const {user} = useContext(AuthContex)
  console.log(user.displayName);
  console.log(user.email);
  return (
          <div className="bg-gray-100 font-sans max-w-7xl mx-auto">
          <div className="container mx-auto p-4 mt-8">
            <div className="bg-white p-8 rounded shadow-md">
              <h1 className="text-2xl font-semibold mb-6">Checkout</h1>
  
              {/* Product summary section */}
              <div className="mb-6">
                <h2 className="text-lg font-medium mb-2">Product Summary</h2>
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="text-xl font-bold">{paymentInfo?.name} Subscription Plans For 1 Mounth</span>
                  <span className="text-xl font-bold">${paymentInfo?.price}</span>
                </div>
              </div> 
  
              {/* Billing details form */}
              <form>
                <h2 className="text-lg font-medium mb-4">Billing Details</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {['Full Name', 'Email Address', 'Address', 'City', 'Zip Code'].map((label) => (
                <div key={label}>
                  <label htmlFor={label.toLowerCase()} className="block text-sm font-medium text-gray-600">
                    {label}
                  </label>
                  <input
                    type={label.toLowerCase() === 'email' ? 'email' : 'text'}
                    id={label.toLowerCase()}
                    name={label.toLowerCase()}
                    className="mt-1 p-2 w-full border rounded-md"
                    defaultValue={
                      label.toLowerCase() === 'full name' ? user.displayName : label.toLowerCase() === 'email address' ? user.email : ''
                    }
                  />
                </div>
              ))}
            </div>
            <div className="mt-6">
                  <h2 className="text-lg font-medium mb-4">Order Summary</h2>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span>Subtotal</span>
                    <span>${paymentInfo?.price}</span>
                   </div>
                  <div className="flex justify-between items-center pt-2">
                    <span>Total</span>
                    <span className="text-xl font-semibold">${paymentInfo?.price}</span>
                  </div>
                </div>
  
                <div className="mt-6">
                  <div className="">
           <Elements stripe={stripePromiss} >
          <ChelkOutForm></ChelkOutForm>
          </Elements>                   
          </div>
                </div>
  
                {/* Order summary section */}
                
              </form>
            </div>
          </div>
        </div>
  );
};

export default CheckoutPage;
