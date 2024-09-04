import React from 'react';
import { useForm } from 'react-hook-form';
import ClientNavbar from '../ClientNavbar/ClientNavbar';
import ClientFooter from '../ClientFooter/ClientFooter';
import { FaUser, FaLock } from 'react-icons/fa'; // FontAwesome Icons

const Delete = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Form Submitted', data);
    // Handle form submission, e.g., send data to API
  };

  return (
    <div className="flex flex-col min-h-screen">
      <ClientNavbar />
      <div className="flex-grow flex items-center justify-center">
        <div className="login_form bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input_field mb-4 flex items-center border border-gray-300 rounded">
            <FaUser className='text-gray-400 m-2'/>
              <input
                type="text"
                placeholder="Username"
                className='Name w-full px-3 py-2 border-none rounded'
                {...register('username', { required: 'Username is required' })}
              />
            </div>
            {errors.username && <p className="text-red-500 text-xs text-center">{errors.username.message}</p>}
            <div className="input_field mb-4 flex items-center border border-gray-300 rounded">
             <FaLock className='text-gray-400 m-2'/>
              <input
                type="password"
                placeholder="Password"
                className='Name w-full px-3 py-2 border-none rounded'
                {...register('password', { required: 'Password is required' })}
              />
            </div>
            {errors.password && <p className="text-red-500 text-xs text-center">{errors.password.message}</p>}
            <input
              type="submit"
              value="Delete"
              className="btn solid bg-pink-500 ml-16 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-full shadow-lg mt-4 w-full"
            />
          </form>
        </div>
      </div>
      <ClientFooter />
    </div>
  );
};

export default Delete;
