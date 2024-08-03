import React from "react";
import Navbar from "../Navbar/Navbar";

import img1 from "../../images/img8.png";
import "./Home.css";
import Cards from "../Cards/Cards";
import ProfileCard from "../ProfileCards/ProfileCard";
import Match from "../Matchmaker/match";
import Relationship from "../Advices/Relationship";
import Sucess from "../SuccessStories/Stories";
import Footer from "../Footer/Footer";
const Home = () => {
  return (
    <body>
      <div className="couple">
        <Navbar />
        <div className="couple_contant">
          <img src={img1} alt="ghin" className="years" />
          <p className="title">
            Best Matchmaking <br />
            and Matrimonial Services
          </p>
        </div>
      </div>
      <div>
        <Cards />
      </div>
      <ProfileCard />
      <Match />
      <Relationship />
      <div>
        <Sucess />
        <Footer />
      </div>
    </body>
  );
};

export default Home;
