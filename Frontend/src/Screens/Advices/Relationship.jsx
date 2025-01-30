import React from "react";
import "./Relationship.css";

const Relationship = () => {
  return (
    <div className="bg">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-[768px]:gap-[80px] mt-10">
        {/* First Card */}
        <div className="flex flex-col bg-white rounded-[16px] shadow-md px-6 py-12">
          <h2 className="font-romanesco text-[#2F82A0] text-4xl md:text-5xl mb-6 text-center">
            Relationship Advice
          </h2>
          <img src={"https://res.cloudinary.com/dh32zavox/image/upload/v1735121586/rishta%20images/aex0fv658tifvqzxnczy.jpg"} alt="Ring on book" className="w-full mb-6" />
          <p className="text-gray-600">
            Here we have experts who work hard to write blogs on relationships,
            marriage, dating, and finding love, giving you vista and motivation
            to have a great love life. Following these tips can help you in your
            relationship journey. Nowadays people are finding their love by
            socializing, traveling, or using a dating app/website.{" "}
            <a href="#" className="text-red-500">
              Read more
            </a>
          </p>
        </div>

        {/* Second Card */}
        <div className="flex flex-col bg-white rounded-[16px] shadow-md px-6 py-12">
          <h2 className="font-romanesco text-[#2F82A0] text-4xl md:text-5xl mb-6 text-center">
            Find someone special near you
          </h2>
          <img src={"https://res.cloudinary.com/dh32zavox/image/upload/v1735121739/rishta%20images/j6mjzbjctynccjci6l6u.webp"} alt="Couple" className="w-full mb-6" />
          <p className="text-gray-600">
            Connect with your soulmate that can be nearby or within your city.
            Our members are committed to looking for long-term healthy
            relationships. This platform will help you to find love and give a
            taste of meaningful connection.{" "}
            <a href="#" className="text-red-500">
              Read more
            </a>
          </p>
        </div>

        {/* Third Card */}
        <div className="flex flex-col bg-white rounded-[16px] shadow-md px-6 py-12">
          <h2 className="font-romanesco text-[#2F82A0] text-4xl md:text-5xl mb-6 text-center">
            Let a matchmaker help you
          </h2>
          <img src={"https://res.cloudinary.com/dh32zavox/image/upload/v1735119586/rishta%20images/aby2jidciq1a0apv8gj9.webp"} alt="img" className="w-full mb-6" />
          <p className="text-gray-600">
            If you are a busy professional, then it’s time to think about a
            matchmaker who can help you. There are various reasons to take help
            from a matchmaker.
            <ul className="list-disc list-inside mt-2">
              <li>Discreet and privacy</li>
              <li>Saves time and safety</li>
              <li>Personalized service</li>
              <li>Dedicated matchmaker</li>
              <li>
                Meet commitment-minded singles.{" "}
                <a href="#" className="text-red-500">
                  Read more
                </a>
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Relationship;
