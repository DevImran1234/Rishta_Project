import React from 'react';
import logo from '../../images/logo-blk.png';
import './Allclients.css';
import { Bell, Home, LogOutIcon, MessageCircle, SettingsIcon, UserRoundPlus } from 'lucide-react';
import user from '../../images/img1.jpg';
import { Link } from 'react-router-dom';

const AllClient = () => {
  return (
    <div>
      <nav className="client-navbar">
        <div className="client-logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="client-nav-options">
          <a href="/home" className="client-nav-link">Home</a>
          <Bell className='client-nav-link' />
          <div className="client-profile-button">
            <img src={user} alt="Profile" />
          </div>
          <a href="/profile" className="client-nav-link">Profile</a>
        </div>
      </nav>
      <div className="client-hero">
        <div className="client-hero-content">
          <Link className='button' to="/other-clients">Other Clients</Link>
          <Link className='button' to="/send-requests">Send Requests</Link>
          <Link className='button' to="/Received-request">Recieved Requests</Link>
          <Link className='button' to="/Accept-request">Accept Request</Link>
        </div>
          {/* <ClinetCards/> */}
        <p className='client-text'>it seems Like no user found right now. When we find it will appear here</p>
        
        <button className='client-add-button'><UserRoundPlus /> Add Client</button>
      </div>
      <div className="client-sidebar">
        <Home color='white' />
        <br />
        <MessageCircle color='white' />
        <br />
        <SettingsIcon color='white' />
        <br />
        <LogOutIcon color='white' />
      </div>
      <footer className='client-footer'>
        <p>Privacy and Policy</p>
        <p>Terms and Conditions</p>
      </footer>
    </div>
  );
}

export default AllClient;
