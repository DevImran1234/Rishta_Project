import React from 'react';
import image from '../../images/img1.jpg';
import chat from '../../images/chat.png';
import Home from '../../images/home.png';
import settings from '../../images/settings.png';
import logout from '../../images/Logout.png'
const UseSidebar = () => {
  return (
    <div className="absolute top-[70%] left-6 transform -translate-y-1/2 cursor-pointer w-[70px] h-[50vh] rounded-full bg-gradient-to-b from-[#3e8aa5cc] to-[#18353f99] flex flex-col items-center justify-center shadow-md overflow-hidden z-50">
    <div className="flex flex-col items-center justify-center space-y-4">
      <img src={Home} alt="Location" className="h-[6vh]" />
      <img src={chat} alt="ID" className="h-[6vh]" />
      <img src={settings} alt="Family" className="h-[6vh]" />
      <img src={logout} alt="Romance" className="h-[6vh]" />
    </div>
  </div>
  );
};

export default UseSidebar;
