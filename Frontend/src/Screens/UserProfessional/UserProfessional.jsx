import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { Camera } from 'lucide-react';
import image from '../../images/img1.jpg';
import { useLocation, useNavigate } from 'react-router-dom';
import ClientNavbar from '../../Components/ClientNavbar/ClientNavbar';
import ClientFooter from '../../Components/ClientFooter/ClientFooter';

const schema = yup.object().shape({
  dropdown1: yup.string().required('Education Level is required'),
  dropdown2: yup.string().required('Employed Status is required'),
  dropdown3: yup.string().required('Occupation is required'),
  dropdown4: yup.string().required('Health Condition is required'),
  dropdown5: yup.string().required('Height is required'),
  dropdown6: yup.string().required('Salary/Income is required'),
  dropdown7: yup.string().required('Complexion is required'),
});

const UserProfessional = () => {
  const navigate = useNavigate();
  const { control, handleSubmit, getValues , formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  const location = useLocation();
  const formData = location.state?.formData;

  useEffect(() => {
    if (formData) {
      console.log("Received User Data in UserProfessional:", formData);
    }
  }, [formData]);

  const handlenextclick = () => {
    const data = getValues(); 
    navigate("/UserPartner", { state: { formData: { ...formData, ...data } } });
  };
  

  return (
    <div>
      <ClientNavbar />
      <Sidebar />
      <div className="bg-white flex-grow min-h-[125vh] mt-10 relative flex flex-col items-center w-full max-w-[1200px] mx-auto p-10 box-border rounded-lg shadow-md overflow-x-hidden">
        <div className="absolute top-0 left-0 right-0 bg-pink-700 h-[15vh] flex flex-col items-center justify-center p-4">
          <h1 className='text-3xl font-medium text-white'>
            User Create Professional
          </h1>
          <p className='text-lg text-white mt-2'>
            (Profession)
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
              {/* Left Side Dropdowns */}
              <div className="space-y-4">
                {/* Dropdown 1 */}
                <div>
                  <Controller
                    name="dropdown1"
                    control={control}
                    render={({ field }) => (
                      <select id="dropdown1" {...field} className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-pink-500">
                        <option value="">Education Level</option>
                        <option value="Matric">Matric</option>
                        <option value="Inter">Inter</option>
                        <option value="Graduate">Graduate</option>
                        <option value="Postgraduate">Postgraduate</option>
                      </select>
                    )}
                  />
                  {errors.dropdown1 && <p className="text-red-500 text-sm mt-1">{errors.dropdown1.message}</p>}
                </div>

                {/* Dropdown 2 */}
                <div>
                  <Controller
                    name="dropdown2"
                    control={control}
                    render={({ field }) => (
                      <select id="dropdown2" {...field} className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-pink-500">
                        <option value="">Employed Status</option>
                        <option value="Employed">Employed</option>
                        <option value="Unemployed">Unemployed</option>
                        <option value="Freelancer">Freelancer</option>
                      </select>
                    )}
                  />
                  {errors.dropdown2 && <p className="text-red-500 text-sm mt-1">{errors.dropdown2.message}</p>}
                </div>

                {/* Dropdown 3 */}
                <div>
                  <Controller
                    name="dropdown3"
                    control={control}
                    render={({ field }) => (
                      <select id="dropdown3" {...field} className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-pink-500">
                        <option value="">Occupation</option>
                        <option value="Business Owner">Business Owner</option>
                        <option value="Employee">Employee</option>
                        <option value="Unemployed">Unemployed</option>
                      </select>
                    )}
                  />
                  {errors.dropdown3 && <p className="text-red-500 text-sm mt-1">{errors.dropdown3.message}</p>}
                </div>

                {/* Dropdown 4 */}
                <div>
                  <Controller
                    name="dropdown4"
                    control={control}
                    render={({ field }) => (
                      <select id="dropdown4" {...field} className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-pink-500">
                        <option value="">Health Condition</option>
                        <option value="Healthy">Healthy</option>
                        <option value="Chronic Illness">Chronic Illness</option>
                        <option value="Injured">Injured</option>
                      </select>
                    )}
                  />
                  {errors.dropdown4 && <p className="text-red-500 text-sm mt-1">{errors.dropdown4.message}</p>}
                </div>
              </div>

              {/* Right Side Dropdowns */}
              <div className="space-y-4">
                {/* Dropdown 5 */}
                <div>
                  <Controller
                    name="dropdown5"
                    control={control}
                    render={({ field }) => (
                      <select id="dropdown5" {...field} className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-pink-500">
                        <option value="">Height</option>
                        <option value="5'0''">5'0''</option>
                        <option value="5'5''">5'5''</option>
                        <option value="6'0''">6'0''</option>
                        <option value="6'5''">6'5''</option>
                      </select>
                    )}
                  />
                  {errors.dropdown5 && <p className="text-red-500 text-sm mt-1">{errors.dropdown5.message}</p>}
                </div>

                {/* Dropdown 6 */}
                <div>
                  <Controller
                    name="dropdown6"
                    control={control}
                    render={({ field }) => (
                      <select id="dropdown6" {...field} className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-pink-500">
                        <option value="">Salary/Income</option>
                        <option value="Below 20k">Below 20k</option>
                        <option value="20k-50k">20k-50k</option>
                        <option value="50k-100k">50k-100k</option>
                        <option value="Above 100k">Above 100k</option>
                      </select>
                    )}
                  />
                  {errors.dropdown6 && <p className="text-red-500 text-sm mt-1">{errors.dropdown6.message}</p>}
                </div>

                {/* Dropdown 7 */}
                <div>
                  <Controller
                    name="dropdown7"
                    control={control}
                    render={({ field }) => (
                      <select id="dropdown7" {...field} className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-pink-500">
                        <option value="">Complexion</option>
                        <option value="Fair">Fair</option>
                        <option value="Medium">Medium</option>
                        <option value="Dark">Dark</option>
                      </select>
                    )}
                  />
                  {errors.dropdown7 && <p className="text-red-500 text-sm mt-1">{errors.dropdown7.message}</p>}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button onClick={handlenextclick} type="submit" className="flex items-center justify-center bg-pink-500 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-full shadow-lg absolute bottom-6 right-8 transition-colors duration-300 z-50">
              Next
            </button>
          </form>
        </div>
      </div>
      <ClientFooter />
    </div>
  );
};

export default UserProfessional;
