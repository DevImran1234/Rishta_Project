import React from 'react';

import { Plus } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import ClientNavbar from '../../Components/ClientNavbar/ClientNavbar';
import ClinetCards from '../../Components/ClientCards/ClientCards';
import ClientFooter from '../../Components/ClientFooter/ClientFooter';
import Links from '../../Components/Links/Links';
const UsersSide = () => {

  const navigate = useNavigate()

  const handleAddClientClick = () => {
    navigate("/UserCreate-profile")
  }
  return (
    <div>
      <ClientNavbar />
     
      <div className="bg-white flex-grow min-h-[125vh] mt-10 relative flex flex-col items-center w-[90%] max-w-[1100px] mx-auto p-10 box-border rounded-lg shadow-md overflow-auto">
      {/* Buttons container */}
            <Links/>
        <button onClick={handleAddClientClick} className="flex items-center justify-center bg-pink-500 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-full shadow-lg absolute bottom-2 right-8 transition-colors duration-300 z-50">
            <Plus className="w-5 h-5 mr-2" />
            Add Client
          </button>
        <ClinetCards />
      </div>
      <ClientFooter/>
    </div>
  );
};

export default UsersSide;