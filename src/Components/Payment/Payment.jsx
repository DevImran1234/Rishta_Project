import React from 'react';
import ClientNavbar from '../ClientNavbar/ClientNavbar';

const Payment = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">Payment Information</h2>

        <form action="" className="space-y-4">
          <div>
            <label htmlFor="card_number" className="block text-sm font-medium text-gray-700">Card Number</label>
            <input
              type="text"
              id="card_number"
              name="card_number"
              placeholder="1234 5678 9012 3456"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="card_name" className="block text-sm font-medium text-gray-700">Card Holder Name</label>
            <input
              type="text"
              id="card_name"
              name="card_name"
              placeholder="John Doe"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="flex space-x-4">
            <div className="w-1/2">
              <label htmlFor="expiry_date" className="block text-sm font-medium text-gray-700">Expiration Date</label>
              <input
                type="text"
                id="expiry_date"
                name="expiry_date"
                placeholder="MM/YY"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="w-1/2">
              <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">CVC</label>
              <input
                type="text"
                id="cvc"
                name="cvc"
                placeholder="123"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label htmlFor="billing_address" className="block text-sm font-medium text-gray-700">Billing Address</label>
            <input
              type="text"
              id="billing_address"
              name="billing_address"
              placeholder="123 Main Street"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="New York"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="flex space-x-4">
            <div className="w-1/2">
              <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
              <input
                type="text"
                id="state"
                name="state"
                placeholder="NY"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="w-1/2">
              <label htmlFor="zip" className="block text-sm font-medium text-gray-700">ZIP</label>
              <input
                type="text"
                id="zip"
                name="zip"
                placeholder="10001"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-pink-600 hover:bg-pink-500 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
            >
              Submit Payment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Payment;
