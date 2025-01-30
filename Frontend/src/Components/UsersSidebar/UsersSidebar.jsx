import React from 'react';
// import image from '../../images/img1.jpg';
// import chat from '../../images/chat.png';
// import Home from '../../images/home.png';
// import settings from '../../images/settings.png';
// import logout from '../../images/Logout.png'
const UseSidebar = () => {
  return (
    <div className="absolute top-[70%] left-6 transform -translate-y-1/2 cursor-pointer w-[70px] h-[50vh] rounded-full bg-gradient-to-b from-[#3e8aa5cc] to-[#18353f99] flex flex-col items-center justify-center shadow-md overflow-hidden z-50">
    <div className="flex flex-col items-center justify-center space-y-4">
      <img src="https://res.cloudinary.com/dh32zavox/image/upload/v1738260077/sidebar/jhffutriw2cdcvvtam9g.png" alt="Location" className="h-[6vh]" />
      <img src="https://res.cloudinary.com/dh32zavox/image/upload/v1738260076/sidebar/uokjxw03pinhxibom2jc.png" alt="ID" className="h-[6vh]" />
      <img src="https://res.cloudinary.com/dh32zavox/image/upload/v1738260093/sidebar/okctcvbnl274wjsqhyy4.png" alt="Family" className="h-[6vh]" />
      <img src="https://res.cloudinary.com/dh32zavox/image/upload/v1738260078/sidebar/scdesydgwqti50xcpufq.png" alt="Romance" className="h-[6vh]" />
    </div>
  </div>
  );
};

export default UseSidebar;
