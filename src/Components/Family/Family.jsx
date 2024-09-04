import React from 'react';
import { useForm } from 'react-hook-form';
import ClientNavbar from '../ClientNavbar/ClientNavbar';
import Sidebar from '../Sidebar/Sidebar';
import { Camera, Plus } from 'lucide-react';
import image from '../../images/img1.jpg';
import ClientFooter from '../ClientFooter/ClientFooter';
import { Link } from 'react-router-dom';

const Family = () => {
  // Initialize React Hook Form
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Submit handler
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <ClientNavbar />
      <Sidebar />
      <div className="bg-white flex-grow min-h-[125vh] mt-10 relative flex flex-col items-center w-full max-w-[1200px] mx-auto p-10 box-border rounded-lg shadow-md overflow-x-hidden">
        <div className="absolute top-0 left-0 right-0 bg-pink-700 h-[15vh] flex flex-col items-center justify-center p-4">
          <h1 className='text-3xl font-medium text-white'>
            Create Your Client Profile
          </h1>
          <p className='text-lg text-white mt-2'>
            (Family)
          </p>
        </div>

        <div className="flex flex-col items-center mt-24">
          {/* Circular Container */}
          <div className="relative">
            <img
              src={image}
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
            />
            {/* Camera Icon */}
            <div className="absolute bottom-0 right-0 bg-[#E42B88] rounded-full p-2 shadow-lg">
              <Camera className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* Form Section */}
          <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-5xl mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Side Inputs */}
              <div className="space-y-4">
                {/* Father Name */}
                <div>
                  <input
                    id="fatherName"
                    type="text"
                    placeholder="Father name"
                    {...register('fatherName', { required: 'Father name is required' })}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-pink-500"
                  />
                  {errors.fatherName && <p className="text-red-500">{errors.fatherName.message}</p>}
                </div>

                {/* Mother's Name */}
                <div>
                  <input
                    id="motherName"
                    type="text"
                    placeholder="Mother's name"
                    {...register('motherName', { required: 'Mother\'s name is required' })}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-pink-500"
                  />
                  {errors.motherName && <p className="text-red-500">{errors.motherName.message}</p>}
                </div>

                {/* Siblings */}
                <div>
                  <select
                    id="siblings"
                    {...register('siblings', { required: 'Please select number of siblings' })}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-pink-500"
                  >
                    <option value="">Select number of siblings</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                  {errors.siblings && <p className="text-red-500">{errors.siblings.message}</p>}
                </div>

                {/* Health Condition */}
                {/* Uncomment if needed */}
                <div>
                  <select
                    id="healthCondition"
                    {...register('healthCondition' ,  { required: 'Please Health  condition' })}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-pink-500"
                  >
                    <option value="">Health Condition</option>
                    <option value="Condition1">Condition 1</option>
                    <option value="Condition2">Condition 2</option>
                    <option value="Condition3">Condition 3</option>
                  </select>
                  {errors.siblings && <p className="text-red-500">{errors.healthCondition.message}</p>}
                </div>
              </div>

              {/* Right Side Dropdowns */}
              <div className="space-y-4">
                {/* Father Occupation */}
                <div>
                  <select
                    id="fatherOccupation"
                    {...register('fatherOccupation', { required: 'Please select father\'s occupation' })}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-pink-500"
                  >
                    <option value="">Father Occupation</option>
                    <option value="Businessman">Businessman</option>
                    <option value="Job">Job</option>
                  </select>
                  {errors.fatherOccupation && <p className="text-red-500">{errors.fatherOccupation.message}</p>}
                </div>

                {/* Mother Occupation */}
                <div>
                  <select
                    id="motherOccupation"
                    {...register('motherOccupation', { required: 'Please select mother\'s occupation' })}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-pink-500"
                  >
                    <option value="">Mother Occupation</option>
                    <option value="House Wife">House Wife</option>
                    <option value="Teacher">Teacher</option>
                    <option value="Professor">Professor</option>
                  </select>
                  {errors.motherOccupation && <p className="text-red-500">{errors.motherOccupation.message}</p>}
                </div>
              </div>
            </div>
          
        <button type='submit'
          className="flex items-center justify-center bg-pink-500 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-full shadow-lg absolute bottom-6 right-8 transition-colors duration-300"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add Client
        </button>
        </form>
        </div>
      </div>
      <ClientFooter />
    </div>
  );
};

export default Family;
