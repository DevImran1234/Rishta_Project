import React, { useState } from 'react';
import logo from '../../images/white.png';
import '../Navbar/Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className='navbar'>
            <img className='logo' src={logo} alt="Logo" />
            <div className={`buttons_1 ${isMenuOpen ? 'hide' : ''}`}>
                <button className='button' onClick={() => navigate('/Login')}>Login</button>
                <button className='button' onClick={() => navigate('/Signup')}>Join Now</button>
            </div>
            <div className='hamburger-menu' onClick={toggleMenu}>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </div>
            <div className={`slide-menu ${isMenuOpen ? 'active' : ''}`}>
                <div className='close-menu' onClick={toggleMenu}>&times;</div>
                <div className="buttons">
                    <button className='button' onClick={() => navigate('/Login')}>Login</button>
                    <button className='button' onClick={() => navigate('/Signup')}>Join Now</button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
