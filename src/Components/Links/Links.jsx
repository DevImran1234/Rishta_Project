import React from 'react'
import { Link } from 'react-router-dom'

const Links = () => {
  return (
    <div>
        <div className="flex flex-wrap justify-center items-center w-full space-y-4 md:space-y-0 md:space-x-4 mt-4">
          <Link to="/clients" className="bg-white hover:bg-pink-700 hover:text-white text-pink-500 font-bold py-2 px-6 rounded-lg shadow-lg w-full md:w-auto transition-colors duration-300">
            ALL
          </Link>
          <Link to="/cast" className="bg-white hover:bg-pink-700 hover:text-white text-pink-500 font-bold py-2 px-6 rounded-lg shadow-lg w-full md:w-auto transition-colors duration-300">
            Cast
          </Link>
          <Link to="/user-religion" className="bg-white hover:bg-pink-700 hover:text-white text-pink-500 font-bold py-2 px-6 rounded-lg shadow-lg w-full md:w-auto transition-colors duration-300">
            Religion
          </Link>
          <Link to="/Section" className="bg-white hover:bg-pink-700 hover:text-white text-pink-500 font-bold py-2 px-6 rounded-lg shadow-lg w-full md:w-auto transition-colors duration-300">
            Section
          </Link>
          <Link to="/user-height" className="bg-white hover:bg-pink-700 hover:text-white text-pink-500 font-bold py-2 px-6 rounded-lg shadow-lg w-full md:w-auto transition-colors duration-300">
            Height
          </Link>
          <Link to="/user-residence" className="bg-white hover:bg-pink-700 hover:text-white text-pink-500 font-bold py-2 px-6 rounded-lg shadow-lg w-full md:w-auto transition-colors duration-300">
            Residence
          </Link>
          <Link to="/user-favourite"  className="bg-white hover:bg-pink-700 hover:text-white text-pink-500 font-bold py-2 px-6 rounded-lg shadow-lg w-full md:w-auto transition-colors duration-300">
             Favourites
          </Link>
        </div>
    </div>
  )
}

export default Links
