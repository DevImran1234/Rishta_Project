'use client'

import React from 'react'
import ClientNavbar from '../../Components/ClientNavbar/ClientNavbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import ClientFooter from '../../Components/ClientFooter/ClientFooter'

const Message = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ClientNavbar />
      <div className="flex flex-grow">
        <Sidebar />
        <main className="flex-grow p-4 sm:p-6 md:p-8 lg:p-10">
          <div className="bg-white min-h-[calc(100vh-theme(spacing.20))] mt-5 sm:mt-8 md:mt-10 relative flex flex-col items-center w-full max-w-[1200px] mx-auto rounded-lg shadow-md overflow-hidden">
            <div className="absolute top-0 left-0 right-0 bg-pink-700 h-[10vh] flex items-center justify-center">
              <h1 className='text-2xl sm:text-3xl font-medium text-white'>
                Messages
              </h1>
            </div>
            <div className="pt-[12vh] mt-2 sm:mt-3 md:mt-5 px-4 sm:px-6 md:px-8 text-center">
              <p className="text-sm sm:text-base">It seems like no user found right now. When we find it will appear here</p>
            </div>
          </div>
        </main>
      </div>
      <ClientFooter />
    </div>
  )
}

export default Message

