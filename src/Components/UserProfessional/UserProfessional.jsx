import React from 'react'
import ClientNavbar from '../ClientNavbar/ClientNavbar'
import Sidebar from '../Sidebar/Sidebar'
import { Camera } from 'lucide-react';
import image from '../../images/img1.jpg';
import ClientFooter from '../ClientFooter/ClientFooter';

const UserProfessional = () => {
  return (
    <div>
      <ClientNavbar/>
      <Sidebar/>
      <div className="bg-white flex-grow min-h-[125vh] mt-10 relative flex flex-col items-center w-full max-w-[1200px] mx-auto p-10 box-border rounded-lg shadow-md overflow-x-hidden">
        <div className="absolute top-0 left-0 right-0 bg-pink-700 h-[10vh] flex flex-col items-center justify-center p-4">
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
          <div className="w-full max-w-5xl mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Side Dropdowns */}
              <div className="space-y-4">
                {/* Dropdown 1 */}
                <div>
                  {/* <label htmlFor="dropdown1" className="block text-sm font-medium text-gray-700">Dropdown 1</label> */}
                  <select id="dropdown1" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-pink-500">
                    <option value="" selected>Education Level</option>
                    <option value="Option1">Matric</option>
                    <option value="Option2">Inter</option>
                    <option value="Option3">Graduate</option>
                  </select>
                </div>

                {/* Dropdown 2 */}
                <div>
                  {/* <label htmlFor="dropdown2" className="block text-sm font-medium text-gray-700">Dropdown 2</label> */}
                  <select id="dropdown2" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-pink-500">
                    <option value="" selected>Employed Status</option>
                    <option value="Option1">Job holder</option>
                    <option value="Option2">Inter</option>
                    <option value="Option3">Jobless</option>
                  </select>
                </div>

                {/* Dropdown 3 */}
                <div>
                  {/* <label htmlFor="dropdown3" className="block text-sm font-medium text-gray-700">Dropdown 3</label> */}
                  <select id="dropdown3" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-pink-500">
                    <option value="">Occupation</option>
                    <option value="Option1">Business</option>
                    <option value="Option2">Job</option>
                    <option value="Option3">None</option>
                  </select>
                </div>

                {/* Dropdown 4 */}
                <div>
                  {/* <label htmlFor="dropdown4" className="block text-sm font-medium text-gray-700">Dropdown 4</label> */}
                  <select id="dropdown4" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-pink-500">
                    <option value="">Health Condition</option>
                    <option value="Option1">Option 1</option>
                    <option value="Option2">Option 2</option>
                    <option value="Option3">Option 3</option>
                  </select>
                </div>
              </div>

              {/* Right Side Dropdowns */}
              <div className="space-y-4">
                {/* Dropdown 5 */}
                <div>
                  {/* <label htmlFor="dropdown5" className="block text-sm font-medium text-gray-700">Dropdown 5</label> */}
                  <select id="dropdown5" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-pink-500">
                    <option value="">Height</option>
                    <option value="Option1">Option 1</option>
                    <option value="Option2">Option 2</option>
                    <option value="Option3">Option 3</option>
                  </select>
                </div>

                {/* Dropdown 6 */}
                <div>
                  {/* <label htmlFor="dropdown6" className="block text-sm font-medium text-gray-700">Dropdown 6</label> */}
                  <select id="dropdown6" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-pink-500">
                    <option value="">Salary/Income</option>
                    <option value="Option1">Option 1</option>
                    <option value="Option2">Option 2</option>
                    <option value="Option3">Option 3</option>
                  </select>
                </div>

                {/* Dropdown 7 */}
                <div>
                  {/* <label htmlFor="dropdown7" className="block text-sm font-medium text-gray-700">Dropdown 7</label> */}
                  <select id="dropdown7" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-pink-500">
                    <option value="">Complexion</option>
                    <option value="Option1">Option 1</option>
                    <option value="Option2">Option 2</option>
                    <option value="Option3">Option 3</option>
                  </select>
                </div>
              </div>
            </div>
            <button className="flex items-center justify-center bg-pink-500 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-full shadow-lg absolute bottom-6 right-8 transition-colors duration-300 z-50">
             Next
          </button>
          </div>
        </div>
        </div>
      <ClientFooter/>
    </div>
  )
}

export default UserProfessional;
