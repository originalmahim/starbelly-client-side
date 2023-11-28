import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContex } from './../Providers/AuthProvider';

const CheckoutPage = () => {
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
                      />
                    </div>
                  ))}
                </div>
  
                <div className="mt-6">
                  <h2 className="text-lg font-medium mb-4">Payment Details</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {['Card Number', 'Expiry Date', 'CVV'].map((label) => (
                      <div key={label}>
                        <label htmlFor={label.toLowerCase()} className="block text-sm font-medium text-gray-600">
                          {label}
                        </label>
                        <input
                          type={label.toLowerCase() === 'card number' ? 'text' : 'text'}
                          id={label.toLowerCase().replace(' ', '')}
                          name={label.toLowerCase().replace(' ', '')}
                          className="mt-1 p-2 w-full border rounded-md"
                        />
                      </div>
                    ))}
                  </div>
                </div>
  
                {/* Order summary section */}
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
  
                {/* Checkout button */}
                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600"
                  >
                    Complete Purchase
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
  );
};

export default CheckoutPage;
