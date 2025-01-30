import React from 'react';
import './Footer.css'; 
import Footermenu from './Footermenu';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <h1 className="footer-title" >
          RISHTA.COM BEST ONLINE <br /> MATRIMONY SITE
        </h1>
        <p className="footer-description">
          We have been making memorable memories through matchmaking for more than 20 years. It all began with creating many successful marriages for family and friends in upstate New York. To take the essence of matchmaking to the next level, Rishtaappoffical.com was created. The most important component of our network is that users find their match through our platform. We are proud to mention that millions of users have been impacted with our online marriage portal with happy endings. Our commitment lies in helping members meet someone special for a long-lasting relationship. Today, Rishtaappoffical.com is known worldwide as one of the top introductions and matrimonial services providers. We are happy to welcome you to our matchmaking network and wish you success every step of the way.
        </p>
      </div>
      <Footermenu/>
    </div>
  );
}

export default Footer;
