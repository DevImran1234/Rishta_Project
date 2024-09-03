import React from 'react';
import { Star, FileText, Info, Share, ChevronRight } from 'lucide-react'; // Import icons from Lucide
import ClientNavbar from '../ClientNavbar/ClientNavbar';
import UseSidebar from '../UsersSidebar/UsersSidebar';
import ClientFooter from '../ClientFooter/ClientFooter';

const Settings = () => {
  return (
    <div>
      <ClientNavbar />
      <UseSidebar />
      <div className="bg-white flex-grow min-h-[125vh] mt-10 relative flex flex-col items-center w-full max-w-[1200px] mx-auto p-10 box-border rounded-lg overflow-x-hidden">
        <div className="absolute top-0 left-0 right-0 bg-pink-700 h-[10vh] flex flex-col items-center justify-center p-4">
          <h1 className="text-3xl font-medium text-white">
            Settings
          </h1>
        </div>

        <div className="mt-[10vh] w-full flex flex-col items-center gap-4">
          {/* Rate the Website */}
          <a 
            href="#" 
            className="flex items-center justify-between w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 text-black"
          >
            <div className="flex items-center gap-4">
              <Star className="w-6 h-6 text-[#2F82A0B2]" />
              <span className="font-semibold">Rate the Website</span>
            </div>
            <ChevronRight className="w-6 h-6 text-[#2F82A0B2]" />
          </a>

          {/* Terms and Conditions */}
          <a 
            href="#" 
            className="flex items-center justify-between w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 text-black"
          >
            <div className="flex items-center gap-4">
              <FileText className="w-6 h-6 text-[#2F82A0B2]" />
              <span className="font-semibold">Terms and Conditions</span>
            </div>
            <ChevronRight className="w-6 h-6 text-[#2F82A0B2]" />
          </a>

          {/* About Us */}
          <a 
            href="#" 
            className="flex items-center justify-between w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 text-black"
          >
            <div className="flex items-center gap-4">
              <Info className="w-6 h-6 text-[#2F82A0B2]" />
              <span className="font-semibold">About Us</span>
            </div>
            <ChevronRight className="w-6 h-6 text-[#2F82A0B2]" />
          </a>

          {/* Share */}
          <a 
            href="#" 
            className="flex items-center justify-between w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 text-black"
          >
            <div className="flex items-center gap-4">
              <Share className="w-6 h-6 text-[#2F82A0B2]" />
              <span className="font-semibold">Share</span>
            </div>
            <ChevronRight className="w-6 h-6 text-[#2F82A0B2]" />
          </a>
        </div>
      </div>
      <ClientFooter/>
    </div>
  );
}

export default Settings;
