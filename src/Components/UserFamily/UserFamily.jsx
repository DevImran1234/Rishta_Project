import React from 'react'
import ClientNavbar from '../ClientNavbar/ClientNavbar'
import Sidebar from '../Sidebar/Sidebar'
import { Camera, Plus } from 'lucide-react';
import image from '../../images/img1.jpg';
import ClientFooter from '../ClientFooter/ClientFooter';
import { Link } from 'react-router-dom';

const UserFamily = () => {
  return (
    <div>
      <ClientNavbar/>
      <Sidebar/>
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
              {/* Left Side Inputs */}
              <div className="space-y-4">
                {/* Input 1 */}
                <div>
                  <input 
                    id="input1" 
                    type="text" 
                    placeholder="Father name" 
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-pink-500"
                  />
                </div>


                {/* Dropdown 2 */}
                <div>
                  {/* <label htmlFor="input2" className="block text-sm font-medium text-gray-700">Mother's Name</label> */}
                  <input 
                    id="input2" 
                    type="text" 
                    placeholder="mother's name" 
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-pink-500"
                  />
                </div>

                {/* Dropdown 3 */}
                <div>
                  {/* <label htmlFor="dropdown3" className="block text-sm font-medium text-gray-700">Dropdown 3</label> */}
                  <select id="dropdown3" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-pink-500">
                    <option value="">Siblings</option>
                    <option value="Option1">1</option>
                    <option value="Option2">2</option>
                    <option value="Option3">3</option>
                  </select>
                </div>

                {/* Dropdown 4 */}
                {/* <div>
                  <select id="dropdown4" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-pink-500">
                    <option value="">Health Condition</option>
                    <option value="Option1">Option 1</option>
                    <option value="Option2">Option 2</option>
                    <option value="Option3">Option 3</option>
                  </select>
                </div> */}
              </div>

              {/* Right Side Dropdowns */}
              <div className="space-y-4">
                {/* Dropdown 5 */}
                {/* <div>
                  <select id="dropdown5" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-pink-500">
                    <option value="">Height</option>
                    <option value="Option1">Option 1</option>
                    <option value="Option2">Option 2</option>
                    <option value="Option3">Option 3</option>
                  </select>
                </div> */}

                {/* Dropdown 6 */}
                <div>
                  {/* <label htmlFor="dropdown6" className="block text-sm font-medium text-gray-700">Dropdown 6</label> */}
                  <select id="dropdown6" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-pink-500">
                    <option value="">Father Occupation</option>
                    <option value="Option1">Bussinessman</option>
                    <option value="Option2">Job</option>
                  </select>
                </div>

                {/* Dropdown 7 */}
                <div>
                  {/* <label htmlFor="dropdown7" className="block text-sm font-medium text-gray-700">Dropdown 7</label> */}
                  <select id="dropdown7" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-pink-500">
                    <option value="">Mother Occupation</option>
                    <option value="Option1">House Wife</option>
                    <option value="Option2">Teacher</option>
                    <option value="Option3">Professor</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link 
          to="/add-client"
          className="flex items-center justify-center bg-pink-500 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-full shadow-lg absolute bottom-6 right-8 transition-colors duration-300"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add Client
        </Link>
        </div>
      <ClientFooter/>
    </div>
  )
}

export default UserFamily;
