import React from 'react';
import logo from '../../images/logo-blk.png';
import './Client.css';
import { Bell, User } from 'lucide-react'; // Import the User icon
import user from '../../images/img1.jpg';

const ClientRequest = () => {
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
        <div className="client-hero-banner">
            <h1>Select your client against Sending Request</h1>
        </div>
        <div className="new">
            <div className="icon-container">
                <User /> {/* User icon */}
                <div>
                    <h1>New NEW</h1>
                    <p>Pakistan</p>
                </div>
            </div>
            <input type="radio" name='client'/>
        </div>
        <div className="new-item">
            <div className="icon-container">
                <User /> {/* User icon */}
                <div>
                    <h1>New New</h1>
                    <p>PK</p>
                </div>
            </div>
            <input type="radio" name='client'/>
        </div>
      </div>
    </div>
  );
}

export default ClientRequest;
