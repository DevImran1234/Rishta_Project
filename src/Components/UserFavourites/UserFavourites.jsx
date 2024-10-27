import React from 'react'
import UserSidebar from '../UsersSidebar/UsersSidebar';
import ClientNavbar from '../ClientNavbar/ClientNavbar';
import Links from '../Links/Links';
import ClinetCards from '../ClientCards/ClientCards';
import { Plus } from 'lucide-react';
import ClientFooter from '../ClientFooter/ClientFooter';
const UserFavourites = () => {
  return (
    <div>
       <ClientNavbar />
      <UserSidebar />
      <div className="bg-white flex-grow min-h-[125vh] mt-10 relative flex flex-col items-center w-[90%] max-w-[1200px] mx-auto p-10 box-border rounded-lg shadow-md overflow-auto">
           <Links/>
        <button className="flex items-center justify-center bg-pink-500 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-full shadow-lg absolute bottom-2 right-8 transition-colors duration-300 z-50">
            <Plus className="w-5 h-5 mr-2" />
            Add Client
          </button>
       <p className='mt-20'>It seems like no favourite user found. 
       When you add it’ll appear here.</p>
      </div>
      <ClientFooter/>
    </div>
  )
}

export default UserFavourites;
