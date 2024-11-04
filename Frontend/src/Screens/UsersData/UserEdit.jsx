import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function UserEdit() {
    const params = useParams();
    const [isLoading, setLoading] = useState(false);
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        getUserData();
    }, [params.id]);

    const getUserData = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`https://63a9bccb7d7edb3ae616b639.mockapi.io/users/${params.id}`);
            setUserData(response.data);
        } catch (error) {
            console.error("Error fetching user data:", error);
        } finally {
            setLoading(false);
        }
    };

    const myFormik = useFormik({
        initialValues: {
            username: userData?.username || "",
            email: userData?.email || "",
            city: userData?.city || "",
            state: userData?.state || "",
            country: userData?.country || ""
        },
        validate: (values) => {
            let errors = {};

            if (!values.username) {
                errors.username = "Please enter username";
            } else if (values.username.length < 5) {
                errors.username = "Name should be at least 5 characters";
            } else if (values.username.length > 25) {
                errors.username = "Name should not exceed 25 characters";
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
                await axios.put(`https://63a9bccb7d7edb3ae616b639.mockapi.io/users/${params.id}`, values);
                navigate("/portal/user-list");
            } catch (error) {
                console.error("Error updating user:", error);
            } finally {
                setLoading(false);
            }
        }
    });

    useEffect(() => {
        if (userData) {
            myFormik.setValues(userData);
        }
    }, [userData]);

    return (
        <div className='container mx-auto p-6'>
            <h1 className='text-3xl font-bold mb-6 text-center'>Edit User - ID: {params.id}</h1>
            <form onSubmit={myFormik.handleSubmit} className='bg-white p-6 rounded-lg shadow-md'>
                <div className='grid gap-4 md:grid-cols-2'>
                    <div>
                        <label className='block text-sm font-medium mb-2' htmlFor='username'>Name</label>
                        <input
                            id='username'
                            name='username'
                            type='text'
                            value={myFormik.values.username}
                            onChange={myFormik.handleChange}
                            className={`w-full px-3 py-2 border rounded-md shadow-sm ${myFormik.errors.username ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-deep-pink focus:border-transparent`}
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
                            className={`w-full px-3 py-2 border rounded-md shadow-sm ${myFormik.errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-deep-pink focus:border-transparent`}
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
                            className={`w-full px-3 py-2 border rounded-md shadow-sm ${myFormik.errors.city ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-deep-pink focus:border-transparent`}
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
                            className={`w-full px-3 py-2 border rounded-md shadow-sm ${myFormik.errors.state ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-deep-pink focus:border-transparent`}
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
                            className={`w-full px-3 py-2 border rounded-md shadow-sm ${myFormik.errors.country ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-deep-pink focus:border-transparent`}
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
                        className={`w-full px-4 py-2 rounded-md text-white bg-pink-700 font-semibold ${isLoading ? 'bg-pink-300' : 'bg-deep-pink'} ${isLoading ? 'cursor-not-allowed' : 'cursor-pointer'} transition-colors`}
                    >
                        {isLoading ? 'Updating...' : 'Update User'}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default UserEdit;
