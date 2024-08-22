import React from 'react';
import logo from '../../images/logo-blk.png';
import '../Clients/Client.css';
import { Bell, Camera, CreditCard, Home, LocateIcon, LogOutIcon, LogsIcon, MessageCircle, Plus, Settings, Settings2, SettingsIcon, User, UserRoundPlus } from 'lucide-react';
import user from '../../images/image-01.png'
import image from '../../images/img1.jpg';
import family from '../../images/FullFamily.png';
import Romance from '../../images/Romance.png';
import Locaton from '../../images/userLoc.png';
import id from '../../images/id.png'
const ClientProfile = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="logo-client">
          <img src={logo} alt="Logo" />
        </div>
        <div className="nav-options">
          <a href="/home" className="nav-link">
            Home
          </a>
          <Bell className="nav-link" />
          <div className="profile-button">
            <img
              src={image}
              alt="Profile"
              style={{ borderRadius: "50%", width: "100%", height: "100%" }}
            />
          </div>
          <a href="/profile" className="nav-link">
            Profile
          </a>
        </div>
      </nav>
      <div className="client-hero">
        <div className="client-hero-banner">
          <h1>Create Your client Profile</h1>
          <h2>(Partner Details)</h2>
        </div>
        <div className="form">
          <div className="image">
            <img src={user} alt="User" className="form-image" />
            <div className="icons-container">
              <Camera color="white" />
            </div>
            <input
              type="text"
              className="form-input"
              placeholder="First Name"
            />
            <input
              type="text"
              className="form-input"
              placeholder="Last Name"
            />
            <input
              type="text"
              className="form-input"
              placeholder="Martial Status"
            />
            <input
              type="text"
              className="form-input"
              placeholder="Date of Birth"
            />
            <input
              type='text'
              className="form-input"
              placeholder="Gender"
            />
            <input
              type="text"
              className="form-input"
              placeholder="Contact"
            />
          </div>
        </div>

        <button className="add-button">
          Next
        </button>
      </div>
      <div className="client-sidebar">
        <User color="white" />
        <br />
        <img src={Locaton} style={{height:'6vh'}}/>
        <br />
        <img src={id} style={{height:'6vh'}}/>       <br />
        <img src={family} style={{height:'6vh'}}/> <br />
        <img src={Romance} style={{height:'6vh'}}/>
      </div>
      <footer className="footer_client">
        <p>Privacy and Policy</p>
        <p>Terms and conditions</p>
      </footer>
    </div>
  );
}

export default ClientProfile;
