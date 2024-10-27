import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function UserCreate() {
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  const myFormik = useFormik({
    initialValues: {
      username: "",
      email: "",
      city: "",
      state: "",
      country: ""
    },
    validate: (values) => {
      let errors = {};

      if (!values.username) {
        errors.username = "Please enter username";
      } else if (values.username.length < 5) {
        errors.username = "Name shouldn't be less than 5 letters";
      } else if (values.username.length > 20) {
        errors.username = "Name shouldn't be more than 20 letters";
      }

      if (!values.email) {
        errors.email = "Please enter email";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }

      if (!values.city) {
        errors.city = "Please select a city";
      }

      if (!values.state) {
        errors.state = "Please select a state";
      }

      if (!values.country) {
        errors.country = "Please select a country";
      }

      return errors;
    },
    onSubmit: async (values) => {
      try {
        setLoading(true);
        await axios.post("https://63a9bccb7d7edb3ae616b639.mockapi.io/users", values);
        navigate("/portal/user-list");
      } catch (error) {
        console.log(error);
        alert("An error occurred while creating the user.");
        setLoading(false);
      }
    }
  });

  return (
    <div className='container mx-auto p-6'>
      <h1 className='text-2xl font-bold mb-6'>Create User</h1>
      <form onSubmit={myFormik.handleSubmit} className='bg-white p-6 rounded-lg shadow-lg'>
        <div className='grid gap-4 md:grid-cols-2'>
          <div>
            <label className='block text-sm font-medium mb-2' htmlFor='username'>Name</label>
            <input
              id='username'
              name='username'
              type='text'
              value={myFormik.values.username}
              onChange={myFormik.handleChange}
              className={`w-full px-3 py-2 border rounded-md shadow-sm ${myFormik.errors.username ? 'border-red-500' : 'border-gray-300'}`}
            />
            {myFormik.errors.username && <p className='text-red-500 text-xs mt-1'>{myFormik.errors.username}</p>}
          </div>

          <div>
            <label className='block text-sm font-medium mb-2' htmlFor='email'>E-Mail</label>
            <input
              id='email'
              name='email'
              type='email'
              value={myFormik.values.email}
              onChange={myFormik.handleChange}
              className={`w-full px-3 py-2 border rounded-md shadow-sm ${myFormik.errors.email ? 'border-red-500' : 'border-gray-300'}`}
            />
            {myFormik.errors.email && <p className='text-red-500 text-xs mt-1'>{myFormik.errors.email}</p>}
          </div>

          <div>
            <label className='block text-sm font-medium mb-2' htmlFor='city'>City</label>
            <select
              id='city'
              name='city'
              value={myFormik.values.city}
              onChange={myFormik.handleChange}
              className={`w-full px-3 py-2 border rounded-md shadow-sm ${myFormik.errors.city ? 'border-red-500' : 'border-gray-300'}`}
            >
              <option value=''>----Select----</option>
              <option value='CN'>Chennai</option>
              <option value='KN'>Kochin</option>
              <option value='MU'>Mumbai</option>
              <option value='SA'>Seattle</option>
              <option value='MI'>Miami</option>
              <option value='VB'>Virginia Beach</option>
            </select>
            {myFormik.errors.city && <p className='text-red-500 text-xs mt-1'>{myFormik.errors.city}</p>}
          </div>

          <div>
            <label className='block text-sm font-medium mb-2' htmlFor='state'>State</label>
            <select
              id='state'
              name='state'
              value={myFormik.values.state}
              onChange={myFormik.handleChange}
              className={`w-full px-3 py-2 border rounded-md shadow-sm ${myFormik.errors.state ? 'border-red-500' : 'border-gray-300'}`}
            >
              <option value=''>----Select----</option>
              <option value='TN'>TamilNadu</option>
              <option value='KL'>Kerala</option>
              <option value='MH'>Maharashtra</option>
              <option value='WA'>Washington</option>
              <option value='FL'>Florida</option>
              <option value='VA'>Virginia</option>
            </select>
            {myFormik.errors.state && <p className='text-red-500 text-xs mt-1'>{myFormik.errors.state}</p>}
          </div>

          <div>
            <label className='block text-sm font-medium mb-2' htmlFor='country'>Country</label>
            <select
              id='country'
              name='country'
              value={myFormik.values.country}
              onChange={myFormik.handleChange}
              className={`w-full px-3 py-2 border rounded-md shadow-sm ${myFormik.errors.country ? 'border-red-500' : 'border-gray-300'}`}
            >
              <option value=''>----Select----</option>
              <option value='IN'>India</option>
              <option value='US'>USA</option>
            </select>
            {myFormik.errors.country && <p className='text-red-500 text-xs mt-1'>{myFormik.errors.country}</p>}
          </div>
        </div>

        <div className='mt-6'>
          <button
            type='submit'
            disabled={isLoading}
            className={`w-50 px-4 py-2 rounded-md text-white bg-pink-700 ${isLoading ? 'bg-pink-300' : 'bg-deep-pink'} ${isLoading ? 'cursor-not-allowed' : 'cursor-pointer'} transition-colors`}
          >
            {isLoading ? 'Submitting...' : 'Create User'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default UserCreate;
