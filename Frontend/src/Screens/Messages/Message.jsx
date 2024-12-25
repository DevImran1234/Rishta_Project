import React from 'react'
import ClientNavbar from '../../Components/ClientNavbar/ClientNavbar';
// import Sidebar from './../Components/Sidebar/Sidebar'
import Sidebar from '../../Components/Sidebar/Sidebar';
import ClientFooter from '../../Components/ClientFooter/ClientFooter';

const Message = () => {
  return (
    <div>
      <ClientNavbar />
      <Sidebar />
      <div className="bg-white flex-grow min-h-[125vh] mt-10 relative flex flex-col items-center w-full max-w-[1200px] mx-auto p-10 box-border rounded-lg shadow-md overflow-x-hidden">
        <div className="absolute top-0 left-0 right-0 bg-pink-700 h-[10vh] flex items-center justify-center">
          <h1 className='text-3xl font-medium text-white'>
            Messages
          </h1>
        </div>
        <div className="pt-[10vh] mt-5">
          <p>It seems like no user found right now. When we find it will appear here</p>
        </div>
      </div>
      <ClientFooter />
    </div>
  )
}

export default Message
