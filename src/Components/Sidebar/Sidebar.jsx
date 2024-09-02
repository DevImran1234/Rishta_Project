import React from 'react';
import { User } from 'lucide-react'; 
import image from '../../images/img1.jpg';
import family from '../../images/FullFamily.png';
import Romance from '../../images/Romance.png';
import Locaton from '../../images/userLoc.png';
import id from '../../images/id.png'
const Sidebar = () => {
  return (
    <div className="absolute top-[70%] left-6 transform -translate-y-1/2 cursor-pointer w-[70px] h-[50vh] rounded-full bg-gradient-to-b from-[#3e8aa5cc] to-[#18353f99] flex flex-col items-center justify-center shadow-md overflow-hidden z-50">
    <div className="flex flex-col items-center justify-center space-y-4">
      <User color="white" className="text-white" />
      <img src={Locaton} alt="Location" className="h-[6vh]" />
      <img src={id} alt="ID" className="h-[6vh]" />
      <img src={family} alt="Family" className="h-[6vh]" />
      <img src={Romance} alt="Romance" className="h-[6vh]" />
    </div>
  </div>
  );
};

export default Sidebar;
