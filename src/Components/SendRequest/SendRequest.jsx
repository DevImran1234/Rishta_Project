import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ClientNavbar from '../ClientNavbar/ClientNavbar';
import Sidebar from '../Sidebar/Sidebar';
import { Plus } from 'lucide-react';
import ClientFooter from '../ClientFooter/ClientFooter'; 

const SendRequest = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const currentPath = location.pathname;
  const getActiveButton = () => {
    if (currentPath.includes('/send-requests')) return 'send-requests';
    if (currentPath.includes('/other-clients')) return 'other-clients';
    if (currentPath.includes('/received-request')) return 'received-request';
    if (currentPath.includes('/accept-request')) return 'accept-request';
    return 'clients'; // Default
  };

  const [activeButton, setActiveButton] = useState(getActiveButton());

  const handleButtonClick = (path) => {
    navigate(path);
    setActiveButton(path.split('/').pop());
  };

  return (
    <div>
      <ClientNavbar />
      <Sidebar />
      <div className="bg-white h-[90vh] mt-10 relative flex flex-col items-center w-[90%] max-w-[1200px] mx-auto p-10 box-border rounded-lg shadow-md">
        {/* Buttons container */}
        <div className="flex flex-wrap justify-center items-center w-full space-y-4 md:space-y-0 md:space-x-4 mt-4">
          <button
            onClick={() => handleButtonClick('/clients')}
            className={`bg-white ${activeButton === 'my-clients' ? 'bg-pink-700 text-white' : 'text-pink-500'} font-bold py-2 px-6 rounded-lg shadow-lg w-full md:w-auto transition-colors duration-300`}
          >
            My Clients
          </button>
          <button
            onClick={() => handleButtonClick('/other-clients')}
            className={`bg-white ${activeButton === 'other-clients' ? 'bg-pink-700 text-white' : 'text-pink-500'} font-bold py-2 px-6 rounded-lg shadow-lg w-full md:w-auto transition-colors duration-300`}
          >
            Other Clients
          </button>
          <button
            onClick={() => handleButtonClick('/send-requests')}
            className={`bg-white ${activeButton === 'send-requests' ? 'bg-pink-700 text-white' : 'text-pink-500'} font-bold py-2 px-6 rounded-lg shadow-lg w-full md:w-auto transition-colors duration-300`}
          >
            Send Request
          </button>
          <button
            onClick={() => handleButtonClick('/received-request')}
            className={`bg-white ${activeButton === 'received-request' ? 'bg-pink-700 text-white' : 'text-pink-500'} font-bold py-2 px-6 rounded-lg shadow-lg w-full md:w-auto transition-colors duration-300`}
          >
            Received Request
          </button>
          <button
            onClick={() => handleButtonClick('/accept-request')}
            className={`bg-white ${activeButton === 'accept-request' ? 'bg-pink-700 text-white' : 'text-pink-500'} font-bold py-2 px-6 rounded-lg shadow-lg w-full md:w-auto transition-colors duration-300`}
          >
            Accept Request
          </button>
        </div>

        {/* Content container */}
        <div className="mt-60">
          <p>It seems like no user found right now. When we find it will appear here</p>
        </div>

        {/* Add Client button */}
        <button className="flex items-center justify-center bg-pink-500 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-full shadow-lg absolute bottom-6 right-8 transition-colors duration-300 z-50">
          <Plus className="w-5 h-5 mr-2" />
          Add Client
        </button>
      </div>
      <ClientFooter /> 
    </div>
  );
};

export default SendRequest;
