import React from 'react';
import logo from '../../images/white.png';
import '../Navbar/Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

  return (
    <nav className='navbar'>
      <img className='logo' src={logo} alt="Logo" />
      <div className="buttons">
        <button className='button'  onClick={() => navigate('/Login')}>Login</button>
        <button className='button' onClick={() => navigate('/Signup')}>Join Now</button>
      </div>
    </nav>
  );
}

export default Navbar;







