import React from 'react';
import ClientNavbar from '../ClientNavbar/ClientNavbar';
import Sidebar from '../Sidebar/Sidebar';
import { Camera, Plus } from 'lucide-react';
import image from '../../images/img1.jpg';
import ClientFooter from '../ClientFooter/ClientFooter';

const UserReligious = () => {
  return (
    <div>
      <ClientNavbar />
      <Sidebar />
      <div className="bg-white flex-grow min-h-[125vh] mt-10 relative flex flex-col items-center w-full max-w-[1200px] mx-auto p-10 box-border rounded-lg shadow-md overflow-x-hidden">
        <div className="absolute top-0 left-0 right-0 bg-pink-700 h-[10vh] flex flex-col items-center justify-center p-4">
          <h1 className='text-3xl font-medium text-white'>
             User Create Profile
          </h1>
          <p className='text-lg text-white mt-2'>
            (Religious)
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
          <div className="mt-12 w-full max-w-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Nationality */}
              <div className="col-span-1">
                <label htmlFor="nationality" className="block text-sm font-medium text-gray-700">Nationality</label>
                <select id="nationality" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-pink-500">
                  <option value="">None</option>
                  <option value="Pakistani">Pakistani</option>
                  <option value="American">American</option>
                  <option value="Canadian">Canadian</option>
                  <option value="British">British</option>
                  <option value="Australian">Australian</option>
                </select>
              </div>

              {/* Residence Details */}
              <div className="col-span-1">
                <label htmlFor="residence" className="block text-sm font-medium text-gray-700">Residence Details</label>
                <select id="residence" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-pink-500">
                  <option value="">None</option>
                  <option value="Urban">Urban</option>
                  <option value="Suburban">Suburban</option>
                  <option value="Rural">Rural</option>
                  <option value="International">International</option>
                </select>
              </div>

              {/* Ethnicity */}
              <div className="col-span-1">
                <label htmlFor="ethnicity" className="block text-sm font-medium text-gray-700">Ethnicity</label>
                <select id="ethnicity" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-pink-500">
                  <option value="">None</option>
                  <option value="Asian">Asian</option>
                  <option value="Black">Black</option>
                  <option value="Hispanic">Hispanic</option>
                  <option value="White">White</option>
                  <option value="Mixed">Mixed</option>
                </select>
              </div>

              {/* Province */}
              <div className="col-span-1">
                <label htmlFor="province" className="block text-sm font-medium text-gray-700">Province</label>
                <select id="province" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-pink-500">
                  <option value="">None</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Sindh">Sindh</option>
                  <option value="Khyber Pakhtunkhwa">Khyber Pakhtunkhwa</option>
                  <option value="Balochistan">Balochistan</option>
                  <option value="Gilgit-Baltistan">Gilgit-Baltistan</option>
                  <option value="Azad Kashmir">Azad Kashmir</option>
                </select>
              </div>

              {/* Religion */}
              <div className="col-span-1">
                <label htmlFor="religion" className="block text-sm font-medium text-gray-700">Religion</label>
                <select id="religion" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-pink-500">
                  <option value="">None</option>
                  <option value="Islam">Islam</option>
                  <option value="Christianity">Christianity</option>
                  <option value="Hinduism">Hinduism</option>
                  <option value="Buddhism">Buddhism</option>
                  <option value="Judaism">Judaism</option>
                </select>
              </div>

              {/* Caste */}
              <div className="col-span-1">
                <label htmlFor="caste" className="block text-sm font-medium text-gray-700">Caste</label>
                <select id="caste" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-pink-500">
                  <option value="">None</option>
                  <option value="Rajput">Rajput</option>
                  <option value="Jutt">Jutt</option>
                  <option value="Butt">Butt</option>
                  <option value="Sheikh">Sheikh</option>
                  <option value="Malik">Malik</option>
                  <option value="Mughal">Mughal</option>
                  <option value="Syed">Syed</option>
                  <option value="Pathan">Pathan</option>
                </select>
              </div>

              {/* City */}
              <div className="col-span-1">
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                <select id="city" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-pink-500">
                  <option value="">None</option>
                  <option value="Karachi">Karachi</option>
                  <option value="Lahore">Lahore</option>
                  <option value="Islamabad">Islamabad</option>
                  <option value="Faisalabad">Faisalabad</option>
                  <option value="Rawalpindi">Rawalpindi</option>
                </select>
              </div>

              {/* Sect */}
              <div className="col-span-1">
                <label htmlFor="sect" className="block text-sm font-medium text-gray-700">Sect</label>
                <select id="sect" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-pink-500">
                  <option value="">None</option>
                  <option value="Sunni">Sunni</option>
                  <option value="Shia">Shia</option>
                  <option value="Ahmadiyya">Ahmadiyya</option>
                  <option value="Deobandi">Deobandi</option>
                  <option value="Barelvi">Barelvi</option>
                </select>
              </div>
            </div>
          </div>
          <button className="flex items-center justify-center bg-pink-500 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-full shadow-lg absolute bottom-6 right-8 transition-colors duration-300 z-50">
             Next
          </button>
        </div>
      </div>
            <ClientFooter/>
    </div>
  );
}

export default UserReligious;
