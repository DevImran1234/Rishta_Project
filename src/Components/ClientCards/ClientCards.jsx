import React from 'react';
import './css/ClinetCards.css';
import chaticon from '../../images/chat.png';
import star from '../../images/Star.png';

const ClinetCards = () => {
  return (
    <div className="grid container mx-auto pt-[40px] grid-cols-1 md:grid-cols-2 gap-8 p-4">
      {/* Card 1 */}
      <div className="bg-white mb-[10px] mx-auto rounded-lg w-[500px] shadow-md px-[30px] py-[20px] max-[767px]:w-[100%] max-[767px]:px-[20px]">
        <div className="flex items-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex-shrink-0"></div>
          <div className="ml-4">
            <h2 className="text-[28px] font-semibold text-[#2F82A0] max-[767px]:text-[18px]">Nayla Riaz</h2>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="age text-center pt-[12px]">
            <p className="text-[22px] text-[#797979] max-[767px]:text-[14px]"><b>Age:</b> 34</p>
            <p className="text-[22px] text-[#797979] max-[767px]:text-[14px]"><b>Country:</b> US</p>
          </div>
          <div className="age pt-[12px]">
            <p className="text-[22px] text-[#797979] max-[767px]:text-[14px]"><b>Height:</b> 5'5"</p>
            <p className="text-[22px] text-[#797979] max-[767px]:text-[14px]"><b>Education:</b> Bachelors</p>
          </div>
        </div>
        <div className="mx-auto flex flex-col md:flex-row justify-between md:justify-between pt-[20px] gap-2 md:gap-0">
          <button className="bg-[#E42B88B2] flex justify-center items-center gap-[5px] text-white py-2 px-4 rounded-[12px] text-[14px]">
            <img src={star} alt="Star Icon" className="w-[16px] h-[16px]" /> Favourite
          </button>
          <button className="bg-[#2F82A0B2] flex justify-center items-center gap-[5px] text-white py-2 px-4 rounded-[12px] text-[14px]">
            <img src={chaticon} alt="Chat Icon" className="w-[16px] h-[16px]" /> Chat Now
          </button>
        </div>
      </div>

      {/* Repeat similar structure for Card 2, Card 3, and Card 4 */}
      <div className="bg-white rounded-lg mx-auto mb-[10px] w-[500px] shadow-md px-[30px] py-[20px] max-[767px]:w-[100%] max-[767px]:px-[20px]">
        <div className="flex items-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex-shrink-0"></div>
          <div className="ml-4">
            <h2 className="text-[28px] font-semibold text-[#2F82A0] max-[767px]:text-[18px]">Faiza</h2>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="age text-center pt-[12px]">
            <p className="text-[22px] text-[#797979] max-[767px]:text-[14px]"><b>Age:</b> 34</p>
            <p className="text-[22px] text-[#797979] max-[767px]:text-[14px]"><b>Country:</b> US</p>
          </div>
          <div className="age pt-[12px]">
            <p className="text-[22px] text-[#797979] max-[767px]:text-[14px]"><b>Height:</b> 5'5"</p>
            <p className="text-[22px] text-[#797979] max-[767px]:text-[14px]"><b>Education:</b> Bachelors</p>
          </div>
        </div>
        <div className="mx-auto flex flex-col md:flex-row justify-between md:justify-between pt-[20px] gap-2 md:gap-0">
          <button className="bg-[#E42B88B2] flex justify-center items-center gap-[5px] text-white py-2 px-4 rounded-[12px] text-[14px]">
            <img src={star} alt="Star Icon" className="w-[16px] h-[16px]" /> Favourite
          </button>
          <button className="bg-[#2F82A0B2] flex justify-center items-center gap-[5px] text-white py-2 px-4 rounded-[12px] text-[14px]">
            <img src={chaticon} alt="Chat Icon" className="w-[16px] h-[16px]" /> Chat Now
          </button>
        </div>
      </div>

      {/* Repeat similar structure for Card 3 and Card 4 */}
      <div className="bg-white rounded-lg mx-auto w-[500px] shadow-md px-[30px] py-[20px] max-[767px]:w-[100%] max-[767px]:px-[20px]">
        <div className="flex items-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex-shrink-0"></div>
          <div className="ml-4">
            <h2 className="text-[28px] font-semibold text-[#2F82A0] max-[767px]:text-[18px]">Kanwal</h2>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="age text-center pt-[12px]">
            <p className="text-[22px] text-[#797979] max-[767px]:text-[14px]"><b>Age:</b> 34</p>
            <p className="text-[22px] text-[#797979] max-[767px]:text-[14px]"><b>Country:</b> US</p>
          </div>
          <div className="age pt-[12px]">
            <p className="text-[22px] text-[#797979] max-[767px]:text-[14px]"><b>Height:</b> 5'5"</p>
            <p className="text-[22px] text-[#797979] max-[767px]:text-[14px]"><b>Education:</b> Bachelors</p>
          </div>
        </div>
        <div className="mx-auto flex flex-col md:flex-row justify-between md:justify-between pt-[20px] gap-2 md:gap-0">
          <button className="bg-[#E42B88B2] flex justify-center items-center gap-[5px] text-white py-2 px-4 rounded-[12px] text-[14px]">
            <img src={star} alt="Star Icon" className="w-[16px] h-[16px]" /> Favourite
          </button>
          <button className="bg-[#2F82A0B2] flex justify-center items-center gap-[5px] text-white py-2 px-4 rounded-[12px] text-[14px]">
            <img src={chaticon} alt="Chat Icon" className="w-[16px] h-[16px]" /> Chat Now
          </button>
        </div>
      </div>

      <div className="bg-white mx-auto rounded-lg w-[500px] shadow-md px-[30px] py-[20px] max-[767px]:w-[100%] max-[767px]:px-[20px]">
        <div className="flex items-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex-shrink-0"></div>
          <div className="ml-4">
            <h2 className="text-[28px] font-semibold text-[#2F82A0] max-[767px]:text-[18px]">Harisa Khursheed</h2>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="age text-center pt-[12px]">
            <p className="text-[22px] text-[#797979] max-[767px]:text-[14px]"><b>Age:</b> 34</p>
            <p className="text-[22px] text-[#797979] max-[767px]:text-[14px]"><b>Country:</b> US</p>
          </div>
          <div className="age pt-[12px]">
            <p className="text-[22px] text-[#797979] max-[767px]:text-[14px]"><b>Height:</b> 5'5"</p>
            <p className="text-[22px] text-[#797979] max-[767px]:text-[14px]"><b>Education:</b> Bachelors</p>
          </div>
        </div>
        <div className="mx-auto flex flex-col md:flex-row justify-between md:justify-between pt-[20px] gap-2 md:gap-0">
          <button className="bg-[#E42B88B2] flex justify-center items-center gap-[5px] text-white py-2 px-4 rounded-[12px] text-[14px]">
            <img src={star} alt="Star Icon" className="w-[16px] h-[16px]" /> Favourite
          </button>
          <button className="bg-[#2F82A0B2] flex justify-center items-center gap-[5px] text-white py-2 px-4 rounded-[12px] text-[14px]">
            <img src={chaticon} alt="Chat Icon" className="w-[16px] h-[16px]" /> Chat Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClinetCards;
