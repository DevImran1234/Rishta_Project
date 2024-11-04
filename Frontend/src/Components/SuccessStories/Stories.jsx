import React from 'react';
import img from '../../images/img7.jpg';
import img2 from '../../images/img13.jpeg';
import img3 from '../../images/img5.jpg';

const Stories = () => {
  return (
    <div className="stories px-4 py-8 md:px-8 md:py-12">
      <h1 className="text-center text-[#2F82A0] text-4xl font-romanesco mt-3 mb-6 md:text-5xl md:mb-10">
        Success Stories
      </h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
        {/* First Card */}
        <div className="bg-white rounded-lg shadow-md px-4 py-6 md:px-6 md:py-8 flex flex-col justify-center items-center">
          <img
            src={img}
            className="rounded-full w-32 h-32 object-cover border-4 border-pink-600 mb-4 md:w-40 md:h-40 md:mb-6"
            alt="Success Story"
          />
          <p className="text-center text-sm md:text-base">
            I want to thank Shadi.com for making me meet my life partner. I have found a great friend in my life partner. I am excited to start a new phase of my life with him in Canada. This shift from India has only been possible through his continuous support and unconditional care and love.
          </p>
        </div>

        {/* Second Card */}
        <div className="bg-white rounded-lg shadow-md px-4 py-6 md:px-6 md:py-8 flex flex-col justify-center items-center">
          <img
            src={img2}
            className="rounded-full w-32 h-32 object-cover border-4 border-pink-600 mb-4 md:w-40 md:h-40 md:mb-6"
            alt="Success Story"
          />
          <p className="text-center text-sm md:text-base">
            I want to thank Shadi.com for making me meet my life partner. I have found a great friend in my life partner. I am excited to start a new phase of my life with him in Canada. This shift from India has only been possible through his continuous support and unconditional care and love.
          </p>
        </div>

        {/* Third Card */}
        <div className="bg-white rounded-lg shadow-md px-4 py-6 md:px-6 md:py-8 flex flex-col justify-center items-center">
          <img
            src={img3}
            className="rounded-full w-32 h-32 object-cover border-4 border-pink-600 mb-4 md:w-40 md:h-40 md:mb-6"
            alt="Success Story"
          />
          <p className="text-center text-sm md:text-base">
            I want to thank Shadi.com for making me meet my life partner. I have found a great friend in my life partner. I am excited to start a new phase of my life with him in Canada. This shift from India has only been possible through his continuous support and unconditional care and love.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Stories;
