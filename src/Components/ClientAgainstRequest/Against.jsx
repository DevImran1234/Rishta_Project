import React from 'react';
import ClientNavbar from '../ClientNavbar/ClientNavbar';
import { User } from 'lucide-react'; // Import User icon from Lucide React
import ClientFooter from '../ClientFooter/ClientFooter';

const Against = () => {
  return (
    <div>
      <ClientNavbar />
      <div className="bg-white flex-grow min-h-[125vh] mt-10 relative flex flex-col items-center w-full max-w-[1200px] mx-auto p-10 box-border rounded-lg shadow-md overflow-x-hidden">
        <div className="absolute top-0 left-0 right-0 bg-pink-700 h-[10vh] flex flex-col items-center justify-center p-4">
          <h1 className='text-3xl font-medium text-white'>
            Select your client against request
          </h1>
        </div>

        {/* Radio Buttons Section */}
        <div className="flex flex-col items-center mt-24 space-y-4">
          <label className="flex items-center border border-gray-400 p-2 w-[300px] rounded-md">
            {/* Profile Icon */}
            <div className="flex-shrink-0 flex items-center justify-center">
              <User className="w-8 h-8 text-gray-600" />
            </div>
            {/* Radio Button and Label */}
            <div className="flex-grow flex flex-col justify-center ml-4">
              <span className="text-lg">NEW NEW</span>
              <p className="text-sm text-gray-600">Pakistan</p>
            </div>
            <input type="radio" name="client-request" value="Option1" className="form-radio text-pink-500" />
          </label>
          <label className="flex items-center border border-gray-400 p-2 w-[300px] rounded-md">
            {/* Profile Icon */}
            <div className="flex-shrink-0 flex items-center justify-center">
              <User className="w-8 h-8 text-gray-600" />
            </div>
            {/* Radio Button and Label */}
            <div className="flex-grow flex flex-col justify-center ml-4">
              <span className="text-lg ">NEW NEW</span>
              <p className="text-sm text-gray-600">Pk</p>
            </div>
            <input type="radio" name="client-request" value="Option2" className="form-radio text-pink-500" />
          </label>
        </div>
      </div>
      <ClientFooter/>
    </div>
  );
};

export default Against;
