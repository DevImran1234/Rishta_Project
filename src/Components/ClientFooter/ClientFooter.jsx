// ClientFooter.js
import React from 'react';

const ClientFooter = () => {
  return (
    <footer className="bg-[#2F82A0] text-white py-4 flex justify-between items-center w-full mt-10">
      <div className="ml-4">
        <p>&copy; 2024 Your Company</p>
      </div>
      <div className="mr-4 flex space-x-6">
        <a href="/privacy-policy" className="hover:underline">
          Privacy and Policy
        </a>
        <a href="/terms-conditions" className="hover:underline">
          Terms and Conditions
        </a>
      </div>
    </footer>
  );
};

export default ClientFooter;
