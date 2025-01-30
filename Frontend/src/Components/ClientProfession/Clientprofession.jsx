import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import ClientNavbar from '../ClientNavbar/ClientNavbar';
import Sidebar from '../Sidebar/Sidebar';
import { Camera } from 'lucide-react';
// import image from '../../images/img1.jpg';
import ClientFooter from '../ClientFooter/ClientFooter';

// Validation schema with yup
const schema = yup.object({
  educationLevel: yup.string().required('Education level is required'),
  employedStatus: yup.string().required('Employed status is required'),
  occupation: yup.string().required('Occupation is required'),
  healthCondition: yup.string().required('Health condition is required'),
  height: yup.string().required('Height is required'),
  salaryIncome: yup.string().required('Salary/Income is required'),
  complexion: yup.string().required('Complexion is required'),
}).required();

const Clientprofession = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  // Handle form submission
  const onSubmit = data => {
    console.log(data);
    // Implement your submission logic here
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
            (Profession)
          </p>
        </div>

        <div className="flex flex-col items-center mt-24">
          {/* Circular Container */}
          <div className="relative">
            <img
              src="https://res.cloudinary.com/dh32zavox/image/upload/v1738260076/sidebar/uokjxw03pinhxibom2jc.png"
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
            />
            {/* Camera Icon */}
            <div className="absolute bottom-0 right-0 bg-[#E42B88] rounded-full p-2 shadow-lg">
              <Camera className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* Form Section */}
          <div className="w-full max-w-5xl mt-12">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Side Dropdowns */}
                <div className="space-y-4">
                  {/* Dropdown 1 */}
                  <div>
                    <Controller
                      name="educationLevel"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <select {...field} className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-pink-500">
                          <option value="">Education Level</option>
                          <option value="Matric">Matric</option>
                          <option value="Inter">Inter</option>
                          <option value="Graduate">Graduate</option>
                        </select>
                      )}
                    />
                    {errors.educationLevel && <p className="text-red-500 text-sm">{errors.educationLevel.message}</p>}
                  </div>

                  {/* Dropdown 2 */}
                  <div>
                    <Controller
                      name="employedStatus"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <select {...field} className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-pink-500">
                          <option value="">Employed Status</option>
                          <option value="Job holder">Job holder</option>
                          <option value="Inter">Inter</option>
                          <option value="Jobless">Jobless</option>
                        </select>
                      )}
                    />
                    {errors.employedStatus && <p className="text-red-500 text-sm">{errors.employedStatus.message}</p>}
                  </div>

                  {/* Dropdown 3 */}
                  <div>
                    <Controller
                      name="occupation"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <select {...field} className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-pink-500">
                          <option value="">Occupation</option>
                          <option value="Business">Business</option>
                          <option value="Job">Job</option>
                          <option value="None">None</option>
                        </select>
                      )}
                    />
                    {errors.occupation && <p className="text-red-500 text-sm">{errors.occupation.message}</p>}
                  </div>

                  {/* Dropdown 4 */}
                  <div>
                    <Controller
                      name="healthCondition"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <select {...field} className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-pink-500">
                          <option value="">Health Condition</option>
                          <option value="Option 1">Option 1</option>
                          <option value="Option 2">Option 2</option>
                          <option value="Option 3">Option 3</option>
                        </select>
                      )}
                    />
                    {errors.healthCondition && <p className="text-red-500 text-sm">{errors.healthCondition.message}</p>}
                  </div>
                </div>

                {/* Right Side Dropdowns */}
                <div className="space-y-4">
                  {/* Dropdown 5 */}
                  <div>
                    <Controller
                      name="height"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <select {...field} className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-pink-500">
                          <option value="">Height</option>
                          <option value="Option 1">Option 1</option>
                          <option value="Option 2">Option 2</option>
                          <option value="Option 3">Option 3</option>
                        </select>
                      )}
                    />
                    {errors.height && <p className="text-red-500 text-sm">{errors.height.message}</p>}
                  </div>

                  {/* Dropdown 6 */}
                  <div>
                    <Controller
                      name="salaryIncome"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <select {...field} className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-pink-500">
                          <option value="">Salary/Income</option>
                          <option value="Option 1">Option 1</option>
                          <option value="Option 2">Option 2</option>
                          <option value="Option 3">Option 3</option>
                        </select>
                      )}
                    />
                    {errors.salaryIncome && <p className="text-red-500 text-sm">{errors.salaryIncome.message}</p>}
                  </div>

                  {/* Dropdown 7 */}
                  <div>
                    <Controller
                      name="complexion"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <select {...field} className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-pink-500">
                          <option value="">Complexion</option>
                          <option value="Option 1">Option 1</option>
                          <option value="Option 2">Option 2</option>
                          <option value="Option 3">Option 3</option>
                        </select>
                      )}
                    />
                    {errors.complexion && <p className="text-red-500 text-sm">{errors.complexion.message}</p>}
                  </div>
                </div>
              </div>
              <button type="submit" className="flex items-center justify-center bg-pink-500 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-full shadow-lg absolute bottom-6 right-8 transition-colors duration-300 z-50">
                Next
              </button>
            </form>
          </div>
        </div>
      </div>
      <ClientFooter />
    </div>
  );
};

export default Clientprofession;
