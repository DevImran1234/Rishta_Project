import React from 'react';
import { Link } from 'react-router-dom';

const Links = () => {
  return (
    <div className="px-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center mt-4">
        <Link
          to="/clients"
          className="bg-white hover:bg-pink-700 hover:text-white text-pink-500 font-bold py-2 px-6 rounded-lg shadow-lg w-full sm:w-auto text-center transition-colors duration-300"
        >
          ALL
        </Link>
        <Link
          to="/cast"
          className="bg-white hover:bg-pink-700 hover:text-white text-pink-500 font-bold py-2 px-6 rounded-lg shadow-lg w-full sm:w-auto text-center transition-colors duration-300"
        >
          Cast
        </Link>
        <Link
          to="/user-religion"
          className="bg-white hover:bg-pink-700 hover:text-white text-pink-500 font-bold py-2 px-6 rounded-lg shadow-lg w-full sm:w-auto text-center transition-colors duration-300"
        >
          Religion
        </Link>
        <Link
          to="/Section"
          className="bg-white hover:bg-pink-700 hover:text-white text-pink-500 font-bold py-2 px-6 rounded-lg shadow-lg w-full sm:w-auto text-center transition-colors duration-300"
        >
          Section
        </Link>
        <Link
          to="/user-height"
          className="bg-white hover:bg-pink-700 hover:text-white text-pink-500 font-bold py-2 px-6 rounded-lg shadow-lg w-full sm:w-auto text-center transition-colors duration-300"
        >
          Height
        </Link>
        <Link
          to="/user-residence"
          className="bg-white hover:bg-pink-700 hover:text-white text-pink-500 font-bold py-2 px-6 rounded-lg shadow-lg w-full sm:w-auto text-center transition-colors duration-300"
        >
          Residence
        </Link>
        <Link
          to="/user-favourite"
          className="bg-white hover:bg-pink-700 hover:text-white text-pink-500 font-bold py-2 px-6 rounded-lg shadow-lg w-full sm:w-auto text-center transition-colors duration-300"
        >
          Favourites
        </Link>
      </div>
    </div>
  );
};

export default Links;
