import React from "react";
// import Navbar from "../Navbar/Navbar";
import Navbar from "../../Components/Navbar/Navbar"
import "./Home.css";
// import Cards from "../Cards/Cards";
import Cards from "../../Components/Cards/Cards"
// import ProfileCard from "../../ProfileCards/ProfileCard";
import ProfileCard from "../../Components/ProfileCards/ProfileCard"
import Match from "../../Components/Matchmaker/match";
import Relationship from "../Advices/Relationship";
import Sucess from "../../Components/SuccessStories/Stories";
import Footer from "../../Components/Footer/Footer";
const Home = () => {
  return (
    <body>
      <div className="couple">
        <Navbar />
        <div className="couple_contant">
          <img src={"https://res.cloudinary.com/dh32zavox/image/upload/v1735119587/rishta%20images/jm8rdragka8hotqvhiun.png"} alt="ghin" className="years" />
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
