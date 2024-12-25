import React, { useState } from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { Plus } from 'lucide-react';
import ClientNavbar from '../../Components/ClientNavbar/ClientNavbar';
import ClientFooter from '../../Components/ClientFooter/ClientFooter';
import Links from '../../Components/Links/Links';

const Client = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col min-h-screen ">
      <ClientNavbar onMenuClick={toggleSidebar} />

      <div className="flex flex-grow">
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

        <main className="flex-grow p-4 md:p-6 lg:p-8 relative">
          <div className="bg-white min-h-[calc(100vh-theme(spacing.20))] mt-4 md:mt-6 lg:mt-8 flex flex-col items-center w-full max-w-[1200px] mx-auto p-4 md:p-6 lg:p-8 box-border rounded-lg shadow-md">
            <div className="flex flex-wrap justify-center items-center w-full space-y-2 md:space-y-0 md:space-x-2 mt-2 md:mt-4">
              <Links />
            </div>

            <div className="mt-8 md:mt-12 lg:mt-16 text-center">
              <p className="text-gray-600">
                It seems like no user found right now. When we find it, it will appear here.
              </p>
            </div>
          </div>
        </main>
      </div>

      <button className="flex items-center justify-center bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded-full shadow-lg absolute bottom-4 right-16 md:bottom-6 md:right-20 transition-colors duration-300 z-50">
        <Plus className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" />
        <span className="text-sm md:text-base">Add Client</span>
      </button>



      <ClientFooter />

    </div>
  );
};

export default Client;

