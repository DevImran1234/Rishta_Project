import React, { useState } from 'react';
import ClientNavbar from '../ClientNavbar/ClientNavbar';
import Sidebar from '../Sidebar/Sidebar';
import ClientCards from '../ClientCards/ClientCards';
import { Plus } from 'lucide-react';
import ClientFooter from '../ClientFooter/ClientFooter';
import { Link } from 'react-router-dom';
import UserSidebar from '../UsersSidebar/UsersSidebar';
import Links from '../Links/Links';

const UsersCaste = () => {
  return (
    <div>
      <ClientNavbar />
      <UserSidebar />
      <div className="bg-white flex-grow min-h-[125vh] mt-10 relative flex flex-col items-center w-[90%] max-w-[1200px] mx-auto p-10 box-border rounded-lg shadow-md overflow-auto">
        {/* Buttons container */}
         <Links/>
        <Link className="flex items-center justify-center bg-pink-500 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-full shadow-lg absolute bottom-2 right-8 transition-colors duration-300 z-50">
          <Plus className="w-5 h-5 mr-2" />
          Add Client
        </Link>
        <ClientCards />
      </div>
      <ClientFooter />
    </div>
  );
};

export default UsersCaste;
