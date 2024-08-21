import React from 'react';
import logo from '../../images/logo-blk.png';
import './Client.css';
import { Bell, Home, LogOutIcon, LogsIcon, MessageCircle, Settings, Settings2, SettingsIcon, UserRoundPlus } from 'lucide-react';
import user from '../../images/img1.jpg'

const Client = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="logo-client">
          <img src={logo} alt="Logo" />
        </div>
        <div className="nav-options">
          <a href="/home" className="nav-link">Home</a>
          <Bell className='nav-link' />
          <div className="profile-button">
            <img src={user} alt="Profile" style={{ borderRadius: '50%', width: '100%', height: '100%' }} />
          </div>
          <a href="/profile" className="nav-link">Profile</a>
        </div>
      </nav>
      <div className="client-hero">
        <div className="client-hero-content">
          <button className='button'>My Clients</button>
          <button  className='button'>Other Clients</button>
          <button className='button'>Send Requests</button>
          <button className='button'>Recieved Requests</button>
          <button className='button'>Accept Request</button>
        </div>
        <p className='text'>
            it seems Like no user found right now. When we find it will appear here
        </p>
        <button className='add-button'><UserRoundPlus/> Add client</button>
      </div>
      <div className="client-sidebar">
        <Home color='white'/>
        <br />
         <MessageCircle color='white'/>
         <br />
         <SettingsIcon color='white'/>
         <br />
         <LogOutIcon color='white'/>
      </div>
      <footer className='footer'>
          <p>Privacy and Policy</p>
          <p>Terms and conditions</p>
      </footer>
    </div>
  );
}

export default Client;
