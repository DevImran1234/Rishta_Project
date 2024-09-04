import React from 'react';
import { useForm } from 'react-hook-form';
import ClientNavbar from '../ClientNavbar/ClientNavbar';
import ClientFooter from '../ClientFooter/ClientFooter';

const Payment = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Payment Information Submitted', data);
    // Handle payment submission
  };

  return (
    <div>
      <ClientNavbar />
      <div className="min-h-screen flex flex-col justify-between">
        <div className="flex-grow flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mt-3">
            <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">Payment Information</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label htmlFor="card_number" className="block text-sm font-medium text-gray-700">Card Number</label>
                <input
                  type="text"
                  id="card_number"
                  placeholder="1234 5678 9012 3456"
                  className={`mt-1 block w-full px-4 py-2 border ${errors.card_number ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                  {...register('card_number', {
                    required: 'Card number is required',
                    pattern: {
                      value: /^[0-9]{16}$/,
                      message: 'Invalid card number',
                    },
                  })}
                />
                {errors.card_number && <p className="text-red-500 text-xs mt-1">{errors.card_number.message}</p>}
              </div>

              <div>
                <label htmlFor="card_name" className="block text-sm font-medium text-gray-700">Card Holder Name</label>
                <input
                  type="text"
                  id="card_name"
                  placeholder="John Doe"
                  className={`mt-1 block w-full px-4 py-2 border ${errors.card_name ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                  {...register('card_name', { required: 'Card holder name is required' })}
                />
                {errors.card_name && <p className="text-red-500 text-xs mt-1">{errors.card_name.message}</p>}
              </div>

              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label htmlFor="expiry_date" className="block text-sm font-medium text-gray-700">Expiration Date</label>
                  <input
                    type="text"
                    id="expiry_date"
                    placeholder="MM/YY"
                    className={`mt-1 block w-full px-4 py-2 border ${errors.expiry_date ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                    {...register('expiry_date', {
                      required: 'Expiration date is required',
                      pattern: {
                        value: /^(0[1-9]|1[0-2])\/?([0-9]{2})$/,
                        message: 'Invalid expiration date',
                      },
                    })}
                  />
                  {errors.expiry_date && <p className="text-red-500 text-xs mt-1">{errors.expiry_date.message}</p>}
                </div>

                <div className="w-1/2">
                  <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">CVC</label>
                  <input
                    type="text"
                    id="cvc"
                    placeholder="123"
                    className={`mt-1 block w-full px-4 py-2 border ${errors.cvc ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                    {...register('cvc', {
                      required: 'CVC is required',
                      pattern: {
                        value: /^[0-9]{3,4}$/,
                        message: 'Invalid CVC',
                      },
                    })}
                  />
                  {errors.cvc && <p className="text-red-500 text-xs mt-1">{errors.cvc.message}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="billing_address" className="block text-sm font-medium text-gray-700">Billing Address</label>
                <input
                  type="text"
                  id="billing_address"
                  placeholder="123 Main Street"
                  className={`mt-1 block w-full px-4 py-2 border ${errors.billing_address ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                  {...register('billing_address', { required: 'Billing address is required' })}
                />
                {errors.billing_address && <p className="text-red-500 text-xs mt-1">{errors.billing_address.message}</p>}
              </div>

              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                <input
                  type="text"
                  id="city"
                  placeholder="New York"
                  className={`mt-1 block w-full px-4 py-2 border ${errors.city ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                  {...register('city', { required: 'City is required' })}
                />
                {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>}
              </div>

              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
                  <input
                    type="text"
                    id="state"
                    placeholder="NY"
                    className={`mt-1 block w-full px-4 py-2 border ${errors.state ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                    {...register('state', { required: 'State is required' })}
                  />
                  {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state.message}</p>}
                </div>

                <div className="w-1/2">
                  <label htmlFor="zip" className="block text-sm font-medium text-gray-700">ZIP</label>
                  <input
                    type="text"
                    id="zip"
                    placeholder="10001"
                    className={`mt-1 block w-full px-4 py-2 border ${errors.zip ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                    {...register('zip', {
                      required: 'ZIP code is required',
                      pattern: {
                        value: /^[0-9]{5}$/,
                        message: 'Invalid ZIP code',
                      },
                    })}
                  />
                  {errors.zip && <p className="text-red-500 text-xs mt-1">{errors.zip.message}</p>}
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-pink-600 hover:bg-pink-500 text-white font-semibold py-2 px-4 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                >
                  Submit Payment
                </button>
              </div>
            </form>
          </div>
        </div>
        <ClientFooter />
      </div>
    </div>
  );
};

export default Payment;
