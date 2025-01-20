import React, { useEffect, useState } from 'react';
import './css/ClinetCards.css';
import chaticon from '../../images/chat.png';
import star from '../../images/Star.png';

const ClinetCards = () => {
  const [profiles, setProfiles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8000/api/profile')
      .then((response) => response.json())
      .then((data) => {
        setProfiles(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching profiles:', error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading profiles...</div>;
  }

  if (profiles.length === 0) {
    return <div>No profiles available.</div>;
  }

  return (
    <div className="grid container mx-auto pt-[40px] grid-cols-1 md:grid-cols-2 gap-8 p-4">
      {profiles.map((profile) => (
        <div
          key={profile.id}
          className="bg-white mb-[10px] mx-auto rounded-lg w-[500px] shadow-md px-[30px] py-[20px] max-[767px]:w-[100%] max-[767px]:px-[20px]"
        >
          <div className="flex items-center">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex-shrink-0">
              {profile.image && (
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="w-full h-full rounded-full object-cover"
                />
              )}
            </div>
            <div className="ml-4">
              <h2 className="text-[28px] font-semibold text-[#2F82A0] max-[767px]:text-[18px]">
                {profile.name}
              </h2>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="age text-center pt-[12px]">
              <p className="text-[22px] text-[#797979] max-[767px]:text-[14px]">
                <b>Age:</b> {profile.age}
              </p>
              <p className="text-[22px] text-[#797979] max-[767px]:text-[14px]">
                <b>Country:</b> {profile.country}
              </p>
            </div>
            <div className="age pt-[12px]">
              <p className="text-[22px] text-[#797979] max-[767px]:text-[14px]">
                <b>Height:</b> {profile.height}
              </p>
              <p className="text-[22px] text-[#797979] max-[767px]:text-[14px]">
                <b>Education:</b> {profile.education}
              </p>
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
      ))}
    </div>
  );
};

export default ClinetCards;
