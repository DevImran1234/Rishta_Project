import React from 'react';
import { Camera, Edit } from 'lucide-react'; // Assuming you're using Lucide icons
import ClientNavbar from '../ClientNavbar/ClientNavbar';
import ClientFooter from '../ClientFooter/ClientFooter';

const UserProfile = () => {
  const image = "https://via.placeholder.com/150"; // Replace with your image source

  return (
    <div>
      <ClientNavbar />
      <div className="bg-white flex-grow min-h-[125vh] mt-10 relative flex flex-col items-start w-full max-w-[1100px] mx-auto p-10 box-border rounded-lg shadow-md overflow-x-hidden">
        <div className="absolute top-0 left-0 right-0 bg-pink-700 h-[10vh] flex flex-col items-center justify-center p-4">
          <h1 className="text-3xl font-medium text-white">
            Profile
          </h1>
        </div>

        {/* Profile Image with Upload Icon */}
        <div className="relative mt-[12vh] flex flex-col md:flex-row items-start w-full">
          <div className="relative flex-shrink-0 mb-6 md:mb-0 md:mr-8">
            <img
              src={image}
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
            />
            {/* Camera Icon */}
            <div className="absolute bottom-0 right-0 bg-[#E42B88] rounded-full p-2 shadow-lg transform translate-x-2 translate-y-2">
              <Camera className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full flex-grow">
            {/* First Card */}
            <a 
              href="#" 
              className="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:bg-gray-100"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#2F82A0B2] flex items-center justify-between">
                Basic Details
                <Edit className="w-5 h-5 text-[#2F82A0B2]" />
              </h5>
              <p className="font-normal text-black">First Name: John</p>
              <p className="font-normal text-black">Last Name: Doe</p>
              <p className="font-normal text-black">Marital Status: Single</p>
              <p className="font-normal text-black">Date Of Birth: 01/01/1990</p>
              <p className="font-normal text-black">Nationality: American</p>
              <p className="font-normal text-black">Address: 123 Main St</p>
            </a>

            {/* Second Card */}
            <a 
              href="#" 
              className="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:bg-gray-100"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#2F82A0B2] flex items-center justify-between">
                Religious Information
                <Edit className="w-5 h-5 text-[#2F82A0B2]" />
              </h5>
              <p className="font-normal text-black">Religion: Christianity</p>
              <p className="font-normal text-black">Denomination: Catholic</p>
              <p className="font-normal text-black">Church: St. Mary's Church</p>
              <p className="font-normal text-black">Member Since: 2005</p>
            </a>

            {/* Third Card */}
            <a 
              href="#" 
              className="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:bg-gray-100"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#2F82A0B2] flex items-center justify-between">
                Professional Information
                <Edit className="w-5 h-5 text-[#2F82A0B2]" />
              </h5>
              <p className="font-normal text-black">Job Title: Software Engineer</p>
              <p className="font-normal text-black">Company: Tech Corp</p>
              <p className="font-normal text-black">Duration: 2015-2020</p>
              <p className="font-normal text-black">Job Title: Senior Developer</p>
              <p className="font-normal text-black">Company: DevSolutions</p>
            </a>

            {/* Fourth Card with Family Information */}
            <a 
              href="#" 
              className="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:bg-gray-100"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#2F82A0B2] flex items-center justify-between">
                Family Information
                <Edit className="w-5 h-5 text-[#2F82A0B2]" />
              </h5>
              <p className="font-normal text-black">Spouse: Jane Doe</p>
              <p className="font-normal text-black">Children: Alice (5), Bob (3)</p>
              <p className="font-normal text-black">Parents: Robert Doe, Emily Doe</p>
              <p className="font-normal text-black">Siblings: Sarah Doe, Michael Doe</p>
            </a>

            {/* Fifth Card with Partner Details */}
            <a 
              href="#" 
              className="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:bg-gray-100"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#2F82A0B2] flex items-center justify-between">
                Partner Details
                <Edit className="w-5 h-5 text-[#2F82A0B2]" />
              </h5>
              <p className="font-normal text-black">Partner Name: Emily Smith</p>
              <p className="font-normal text-black">Relationship: Spouse</p>
              <p className="font-normal text-black">Occupation: Graphic Designer</p>
              <p className="font-normal text-black">Married Since: 2018</p>
            </a>
          </div>
        </div>
        <button className="flex items-center justify-center bg-pink-500 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-full shadow-lg absolute bottom-2 right-8 transition-colors duration-300 z-50">
            Save
        </button>
      </div>
      <ClientFooter/>
    </div>
  );
};

export default UserProfile;
