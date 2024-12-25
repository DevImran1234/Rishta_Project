import React, { useState } from 'react';
import { User, Menu, X } from 'lucide-react';
import Locaton from '../../images/userLoc.png';
import id from '../../images/id.png';
import family from '../../images/FullFamily.png';
import Romance from '../../images/Romance.png';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Menu Button - Positioned lower */}
      <button
        onClick={toggleSidebar}
        className="absolute top-24 left-8 z-50 md:hidden bg-[#3e8aa5] p-2 rounded-full shadow-md"
        aria-label="Toggle sidebar"
      >
        {isOpen ? <X color="white" /> : <Menu color="white" />}
      </button>

      {/* Sidebar */}
      <div
        className={`absolute top-0 md:top-[70%] left-0 md:left-6 transform md:-translate-y-1/2 w-full md:w-[70px] h-full md:h-[50vh] bg-gradient-to-b from-[#3e8aa5cc] to-[#18353f99] flex flex-col items-center justify-center shadow-md overflow-hidden z-40 transition-transform duration-300 ease-in-out rounded-lg ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="flex flex-col items-center justify-center space-y-8 md:space-y-4">
          <User color="white" size={32} className="text-white" />
          <img src={Locaton} alt="Location" width={48} height={48} className="h-[6vh] w-auto" />
          <img src={id} alt="ID" width={48} height={48} className="h-[6vh] w-auto" />
          <img src={family} alt="Family" width={48} height={48} className="h-[6vh] w-auto" />
          <img src={Romance} alt="Romance" width={48} height={48} className="h-[6vh] w-auto" />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
