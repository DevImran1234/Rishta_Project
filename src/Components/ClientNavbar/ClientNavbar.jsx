import React from 'react';
import logo from '../../images/logo-blk.png';
import image from '../../images/img1.jpg';
import { Bell } from 'lucide-react';
import './ClientNavbar.css'

const ClientNavbar = () => {
  return (
    <div className="navbar-div"> 
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="nav-options">
          <a href="/home" className="nav-link">Home</a>
          <Bell className="nav-link" />
          <div className="profile-button">
            <img src={image} alt="Profile" />
          </div>
          <a href="/profile" className="nav-link">Profile</a>
        </div>
      </nav>
    </div>
  );
};

export default ClientNavbar;