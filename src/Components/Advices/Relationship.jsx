import React from "react";
import img from "../../images/img2.jpg";
import img2 from "../../images/img6.webp";
import img3 from "../../images/img4.webp";
import "./Relationship.css";
const Relationship = () => {
  return (
     <div className="bg">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-[768px]:gap-[80px] mt-10 ml-90">
      {/* First Card */}
      <div className="relative">
        <div className="bg-white rounded-[16px] shadow-md px-6 py-12 h-[100vh]">
          <h2 className="font-romanesco text-[#2F82A0] text-4xl md:text-5xl -top-10 md:top-[-50px] w-[93%] text-center md:text-center md:-top-[-55px] absolute">
            Relationship Advice
          </h2>
          <img src={img} alt="Ring on book" className="w-full pb-12 md:pb-6" />
          <p className="mt-2 text-gray-600">
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
      </div>

      {/* Second Card */}
      <div className="relative ml-90">
        <div className="bg-white rounded-[16px] shadow-md px-6 py-12 h-[100vh]">
          <h2 className="font-romanesco text-[#2F82A0] text-4xl md:text-5xl -top-10 md:top-[-50px] w-[93%] text-center md:text-center md:-top-[-55px] absolute">
            Find someone special near you
          </h2>
          <img src={img2} alt="Couple" className="w-full pb-12 md:pb-6" />
          <p className="mt-2 text-gray-600">
            Connect with your soulmate that can be nearby or within your city.
            Our members are committed to looking for long-term healthy
            relationships. This platform will help you to find love and give a
            taste of meaningful connection.{" "}
            <a href="#" className="text-red-500">
              Read more
            </a>
          </p>
        </div>
      </div>

      {/* Third Card */}
      <div className="relative">
        <div className="bg-white rounded-[16px] shadow-md px-6 py-12 h-[100vh]">
          <h2 className="font-romanesco text-[#2F82A0] text-4xl md:text-5xl -top-10 md:top-[-50px] w-[93%] text-center md:text-center md:-top-[-55px] absolute">
            Let a matchmaker help you{" "}
          </h2>
          <img src={img3} alt="img" className="w-full pb-12 md:pb-6" />
          <p className="mt-2 text-gray-600">
            If you are a busy professionals then it’s time to think about a
            matchmaker who can help you. There are various reasons to take help
            from a matchmaker.
            <ul className="list-disc list-inside mt-2 list-red">
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
    </div>
  );
};

export default Relationship;
