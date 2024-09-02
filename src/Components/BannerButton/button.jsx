import React from 'react';
import { Link } from 'react-router-dom';

const BannerButton = ({ to, children }) => {
  return (
    <Link 
      to={to} 
      className="bg-whitesmoke text-deeppink border-none rounded-lg px-6 py-3 text-base mx-2 transition-colors duration-300 ease-in-out shadow-md hover:bg-[#bd3b80] hover:text-white w-auto min-w-[150px] text-center"
    >
      {children}
    </Link>
  );
};

export default BannerButton;
