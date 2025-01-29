import React, { useEffect } from 'react';

import { Camera, Plus } from 'lucide-react';
import image from '../../images/img1.jpg';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import ClientNavbar from '../../Components/ClientNavbar/ClientNavbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import ClientFooter from '../../Components/ClientFooter/ClientFooter';

// Define the validation schema using Yup
const schema = yup.object().shape({
  fatherName: yup.string().required('Father name is required'),
  motherName: yup.string().required('Mother name is required'),
  siblings: yup.string().required('Please select the number of siblings'),
  fatherOccupation: yup.string().required('Please select father\'s occupation'),
  motherOccupation: yup.string().required('Please select mother\'s occupation'),
});

const UserFamily = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, getValues ,formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const location = useLocation();
  const formData = location.state?.formData;

  useEffect(() => {
    if (formData) {
      console.log("Received User Data in UserProfessional:", formData);
    }
  }, [formData]);
  const onSubmit = data => {
    console.log(data);
  };

  const handlenextclick = () => {
    const data = getValues(); 
    navigate("/UserPartner", { state: { formData: { ...formData, ...data } } });
  };
  

  return (
    <div>
      <ClientNavbar />
      <Sidebar />
      <div className="bg-white flex-grow min-h-[125vh] mt-10 relative flex flex-col items-center w-full max-w-[1200px] mx-auto p-10 box-border rounded-lg shadow-md overflow-x-hidden">
      <div className="absolute top-0 left-0 right-0 bg-pink-700 h-[10vh] flex flex-col items-center justify-center p-4">
      <h1 className='text-3xl font-medium text-white'>
            Create User Profile
          </h1>
          <p className='text-lg text-white mt-2'>
            (Family)
          </p>
        </div>

        <div className="flex flex-col items-center mt-24">
          {/* <div className="relative">
            <img
              src={image} 
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
            />
            <div className="absolute bottom-0 right-0 bg-[#E42B88] rounded-full p-2 shadow-lg">
              <Camera className="w-6 h-6 text-white" />
            </div>
          </div> */}

          {/* Form Section */}
          <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-5xl mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Side Inputs */}
              <div className="space-y-4">
                {/* Input 1 */}
                <div>
                  <input 
                    id="fatherName" 
                    type="text" 
                    placeholder="Father name" 
                    {...register('fatherName')}
                    className={`mt-1 block w-full px-4 py-2 border ${errors.fatherName ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-pink-500`}
                  />
                  {errors.fatherName && <p className="text-red-500 text-sm mt-1">{errors.fatherName.message}</p>}
                </div>

                {/* Input 2 */}
                <div>
                  <input 
                    id="motherName" 
                    type="text" 
                    placeholder="Mother's name" 
                    {...register('motherName')}
                    className={`mt-1 block w-full px-4 py-2 border ${errors.motherName ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-pink-500`}
                  />
                  {errors.motherName && <p className="text-red-500 text-sm mt-1">{errors.motherName.message}</p>}
                </div>

                {/* Dropdown 3 */}
                <div>
                  <select 
                    id="siblings" 
                    {...register('siblings')}
                    className={`mt-1 block w-full px-4 py-2 border ${errors.siblings ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-pink-500`}
                  >
                    <option value="">Siblings</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                  {errors.siblings && <p className="text-red-500 text-sm mt-1">{errors.siblings.message}</p>}
                </div>
              </div>

              {/* Right Side Dropdowns */}
              <div className="space-y-4">
                {/* Dropdown 6 */}
                <div>
                  <select 
                    id="fatherOccupation" 
                    {...register('fatherOccupation')}
                    className={`mt-1 block w-full px-4 py-2 border ${errors.fatherOccupation ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-pink-500`}
                  >
                    <option value="">Father Occupation</option>
                    <option value="Businessman">Businessman</option>
                    <option value="Job">Job</option>
                  </select>
                  {errors.fatherOccupation && <p className="text-red-500 text-sm mt-1">{errors.fatherOccupation.message}</p>}
                </div>

                {/* Dropdown 7 */}
                <div>
                  <select 
                    id="motherOccupation" 
                    {...register('motherOccupation')}
                    className={`mt-1 block w-full px-4 py-2 border ${errors.motherOccupation ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-pink-500`}
                  >
                    <option value="">Mother Occupation</option>
                    <option value="House Wife">House Wife</option>
                    <option value="Teacher">Teacher</option>
                    <option value="Professor">Professor</option>
                  </select>
                  {errors.motherOccupation && <p className="text-red-500 text-sm mt-1">{errors.motherOccupation.message}</p>}
                </div>
              </div>
            </div>

            <button onClick={handlenextclick} type="submit" className="flex items-center justify-center bg-pink-500 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-full shadow-lg absolute bottom-6 right-8 transition-colors duration-300 z-50">
               Next
            </button>
          </form>
        </div>
      </div>
      <ClientFooter />
    </div>
  )
}

export default UserFamily;
