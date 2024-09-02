import React from 'react';
import ClientNavbar from '../ClientNavbar/ClientNavbar';
import Sidebar from '../Sidebar/Sidebar';
import ClinetCards from '../ClientCards/ClientCards';
import { Plus } from 'lucide-react';
import ClientFooter from '../ClientFooter/ClientFooter';
import { Link } from 'react-router-dom';

const OtherClients = () => {
  return (
    <div>
      <ClientNavbar />
      <Sidebar />
      <div className="bg-white flex-grow min-h-[125vh] mt-10 relative flex flex-col items-center w-[90%] max-w-[1200px] mx-auto p-10 box-border rounded-lg shadow-md overflow-auto">
      {/* Buttons container */}
        <div className="flex flex-wrap justify-center items-center w-full space-y-4 md:space-y-0 md:space-x-4 mt-4">
          <Link to="/clients" className="bg-white hover:bg-pink-700 hover:text-white text-pink-500 font-bold py-2 px-6 rounded-lg shadow-lg w-full md:w-auto transition-colors duration-300">
            My Clients
          </Link>
          <Link to="/otherclients" className="bg-white hover:bg-pink-700 hover:text-white text-pink-500 font-bold py-2 px-6 rounded-lg shadow-lg w-full md:w-auto transition-colors duration-300">
            Other Clients
          </Link>
          <button className="bg-white hover:bg-pink-700 hover:text-white text-pink-500 font-bold py-2 px-6 rounded-lg shadow-lg w-full md:w-auto transition-colors duration-300">
            Send Request
          </button>
          <button className="bg-white hover:bg-pink-700 hover:text-white text-pink-500 font-bold py-2 px-6 rounded-lg shadow-lg w-full md:w-auto transition-colors duration-300">
            Received Request
          </button>
          <button className="bg-white hover:bg-pink-700 hover:text-white text-pink-500 font-bold py-2 px-6 rounded-lg shadow-lg w-full md:w-auto transition-colors duration-300">
            Accept Request
          </button>
        </div>
        <button className="flex items-center justify-center bg-pink-500 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-full shadow-lg absolute bottom-2 right-8 transition-colors duration-300 z-50">
            <Plus className="w-5 h-5 mr-2" />
            Add Client
          </button>
        <ClinetCards />
      </div>
      <ClientFooter/>
    </div>
  );
};

export default OtherClients;
