import React from 'react';
import { Link } from 'react-router-dom';
import ClientNavbar from '../../Components/ClientNavbar/ClientNavbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { Plus } from 'lucide-react';
import ClientFooter from '../../Components/ClientFooter/ClientFooter'; 

const AcceptRequest = () => {
  return (
    <div>
      <ClientNavbar />
      <Sidebar />
      <div className="bg-white h-[100vh] mt-10 relative flex flex-col items-center w-[90%] max-w-[1200px] mx-auto p-10 box-border rounded-lg shadow-md">
        {/* Buttons container */}
        <div className="flex flex-wrap justify-center items-center w-full space-y-4 md:space-y-0 md:space-x-4 mt-4">
          <Link 
            to="/clients"
            className="bg-white text-pink-500 font-bold py-2 px-6 rounded-lg shadow-lg w-full md:w-auto transition-colors duration-300 hover:bg-pink-700 hover:text-white"
          >
            My Clients
          </Link>
          <Link 
            to="/other-clients"
            className="bg-white text-pink-500 font-bold py-2 px-6 rounded-lg shadow-lg w-full md:w-auto transition-colors duration-300 hover:bg-pink-700 hover:text-white"
          >
            Other Clients
          </Link>
          <Link 
            to="/send-requests"
            className="bg-white text-pink-500 font-bold py-2 px-6 rounded-lg shadow-lg w-full md:w-auto transition-colors duration-300 hover:bg-pink-700 hover:text-white"
          >
            Send Request
          </Link>
          <Link 
            to="/received-request"
            className="bg-white text-pink-500 font-bold py-2 px-6 rounded-lg shadow-lg w-full md:w-auto transition-colors duration-300 hover:bg-pink-700 hover:text-white"
          >
            Received Request
          </Link>
          <Link 
            to="/accept-request"
            className="bg-white text-pink-500 font-bold py-2 px-6 rounded-lg shadow-lg w-full md:w-auto transition-colors duration-300 hover:bg-pink-700 hover:text-white"
          >
            Accept Request
          </Link>
        </div>

        {/* Content container */}
        <div className="mt-60">
          <p>It seems like no user found right now. When we find it will appear here</p>
        </div>

        {/* Add Client button */}
        <Link 
          to="/add-client"
          className="flex items-center justify-center bg-pink-500 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-full shadow-lg absolute bottom-6 right-8 transition-colors duration-300"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add Client
        </Link>
      </div>
      <ClientFooter /> 
    </div>
  );
};

export default AcceptRequest;
