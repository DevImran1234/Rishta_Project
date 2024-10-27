import React from 'react';
import './Footermenu.css'
import rishta from '../../images/white.png';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footermenu = () => {
  return (
    <div className="footer">
      <div className="footer-containers">
        <div className="column">
          <h2>ABOUT Rishta®</h2>
          <p>
            Rishta®.com is a registered and trademarked corporation based in the USA. We are a leading international matchmaking company for singles globally. Through our network, we want to make the process of relationship journey relatively effortless. All profiles are checked manually with phone verification to ensure a safe environment for the users.
          </p>
        </div>
        <div className="column">
          <h3>NEED HELP?</h3>
          <ul>
            <li><a href="#">Member Login</a></li>
            <li><a href="#">Shadi® 101</a></li>
            <li><a href="#">Sign Up</a></li>
            <li><a href="#">Member Support</a></li>
          </ul>
        </div>
        <div className="column">
          <h3>COMPANY</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Helpful Tips</a></li>
            <li><a href="#">Submit Story</a></li>
          </ul>
        </div>
        <div className="column">
          <h3>PRIVACY & YOU</h3>
          <ul>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className="column">
          <h3>MORE</h3>
          <ul>
            <li><a href="#">Top Ranking Cities</a></li>
            <li><a href="#">Parent Involved</a></li>
            <li><a href="#">Intimate Cozy Wedding</a></li>
            <li><a href="#">Site Map</a></li>
          </ul>
        </div>
      </div>
      <div className="social"  >
        <h1 className='follow'>Follow us on</h1>
        <a href="#"><Instagram /></a>
        <a href="#"><Facebook /></a>
        <a href="#"><Twitter size={28} /></a>
      </div>
      <div className="copyright">
        <p>SHADI® is a registered trademark and should not be used without permission</p>
        <p>&copy; Copyright Rishta®.com 1997 - 2024. All rights reserved.</p>
        <img src={rishta} alt="Shadi logo" />
      </div>
    </div>
  );
}

export default Footermenu;
