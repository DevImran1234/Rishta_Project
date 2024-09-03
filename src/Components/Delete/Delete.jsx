import React from 'react';
import ClientNavbar from '../ClientNavbar/ClientNavbar';
import ClientFooter from '../ClientFooter/ClientFooter';

const Delete = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ClientNavbar />
      <div className="flex-grow flex items-center justify-center">
        <div className="login_form bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <div className="input_field mb-4">
            <i className="fas fa-user"></i>
            <input type="text" placeholder="Username" className='Name' />
          </div>
          <div className="input_field mb-4">
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="Password" className='Name' />
          </div>
          <input type="submit" value="Delete" className="btn solid" />
        </div>
      </div>
      <ClientFooter />
    </div>
  );
};

export default Delete;
