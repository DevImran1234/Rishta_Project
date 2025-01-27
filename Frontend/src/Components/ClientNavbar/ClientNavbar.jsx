import React, { useState } from 'react';
import logo from '../../images/logo-blk.png';
import image from '../../images/img1.jpg';
import { Bell, Menu } from 'lucide-react'; 
import './ClientNavbar.css';
import { Link } from 'react-router-dom';

const ClientNavbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };


  const handleLogout = () => {
    localStorage.removeItem('usertoken'); 
  };

  return (
    <div className="navbar-div"> 
      <nav className="navbar">
        <div className="logo">
          <img src={"https://res.cloudinary.com/dh32zavox/image/upload/v1735119595/rishta%20images/ygj8usznjrirtiegpwxh.png"} alt="Logo" />
        </div>
        <div className="nav-options">
          <Link to="/" className="nav-link">Home</Link>
          <Bell className="nav-link" />
          <div className="profile-button">
            <img src={"https://res.cloudinary.com/dh32zavox/image/upload/v1735119587/rishta%20images/eb37grh0oib5r7aq9kur.jpg"} alt="Profile" />
          </div>
          <Link to="/UserProfile" className="nav-link">Profile</Link>
          <Link to="/" className="nav-link" onClick={handleLogout}>Logout</Link>
        </div>
        <Menu className="menu-icon" onClick={toggleSidebar} /> 
      </nav>

      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <Link to="/" className="nav-link" onClick={toggleSidebar}>Home</Link>
        <Link to="/UserProfile" className="nav-link" onClick={toggleSidebar}>Profile</Link>
        <Link to="/" className="nav-link" onClick={() => { handleLogout(); toggleSidebar(); }}>Logout</Link>
      </div>

      {sidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </div>
  );
};

export default ClientNavbar;
