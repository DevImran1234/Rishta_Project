import React, { useEffect } from 'react';
import $ from 'jquery';
import '../Matchmaker/MatchMaker.css';
import img from '../../images/Rectangle8.png';
import img2 from '../../images/img3.jpg';

const Match = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.content-left, .content-right');

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            $(entry.target).css('position', 'relative').css('top', '-50px').css('opacity', '0').animate({ top: '0px', opacity: 1 }, 500);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="match-container">
      <div className="content-left">
        <div className="title1">
          <h1>Prime Assist</h1>
        </div>
        <div className="engage">
          <img src={"https://res.cloudinary.com/dh32zavox/image/upload/v1735121204/Rectangle8_oyjve5.png"} alt="Matchmaking" />
        </div>
        <div className="text">
          <p>
            This service is for those members who want personal matchmaking
            using WhatsApp service. <br />
            Prime Assist is best for people who want an introduction with no
            emails flooding their mailbox. No special app required.
          </p>
        </div>
        <div
          className="buttons"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10px",
          }}
        >
          <button className="read">Read More</button>
          <button className="join">Join</button>
        </div>
      </div>
      <div className="content-right">
        <div className="title1">
          <h1>Prime Plus</h1>
        </div>
        <div className="engage">
          <img src={"https://res.cloudinary.com/dh32zavox/image/upload/v1735119598/rishta%20images/otqk9kjzvu9ditc3fglp.jpg"} alt="Matchmaking"/>
        </div>
        <div className="text">
          <p>
            Your customized membership at Prime Plus is a unique concept. <br />
            We offer you a discreet personalized approach. We do the search for
            you and introduce you to selected potential matches. While
            concentrate on your work!
          </p>
        </div>
        <div
          className="joinbuttons"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button className="read">Read More</button>
          <button className="join" style={{ marginLeft: "10px" }}>
            Join
          </button>
        </div>
      </div>
    </div>
  );
};

export default Match;
