
import React, { useEffect } from 'react';
import logo from '../../images/logo-blk.png';
import './Login.css';
import couple from '../../images/couple.png';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const nextButton = document.getElementById('next');
    const container = document.querySelector('.Logincontainer_1');
    
    const handleNextClick = () => {
      const selectedValue = document.querySelector('input[name="users"]:checked').value;
      if (selectedValue === 'User') {
        container.classList.add('user-mode');
        setTimeout(() => navigate('/users'), 500);
      } else if (selectedValue === 'Marriage Consultant') {
        container.classList.add('marriage-mode');
        setTimeout(() => navigate('/marriage'), 500);
      }
    };

    nextButton.addEventListener('click', handleNextClick);
    
    return () => {
      nextButton.removeEventListener('click', handleNextClick);
    };
  }, [navigate]);

  return (
    <div className="Logincontainer_1">
      <div className="lefts-side">
        <div className="circles_zaheers"></div>
        <img src={logo} alt="logo" className="image_style lg:text-sm" />
        <div className="options">
          <input 
            type="radio" 
            id="user" 
            name="users" 
            value="User" 
          />
          <label htmlFor="user">User</label>
          <br />
          <input 
            type="radio"
            id="marriage"
            name="users"
            value="Marriage Consultant"
          />
          <label htmlFor="marriage">Marriage Consultant</label>
          <br />
          <button className='nxt' id='next'>Next</button>
        </div>
        <div className="firsts-image">
          <img src={couple} alt="marriage" />
        </div>
      </div>
      <div className="rights-side">
         <div className="login">
               <h1 className="login_heading">Login</h1>
               <div className="login_form">
                  <div className="input_field">
                     <i className="fas fa-user"></i>
                     <input type="text" placeholder="Username"  className='Name'/>
                  </div>
                  <div className="input_field">
                     <i className="fas fa-lock"></i>
                     <input type="password" placeholder="Password"  className='Name'/>
                  </div>
                  <input type="submit" value="Login" className="btn solid" />
                  <p className="social-text">Or Signin with</p>
                  <div className="social-media">
                    {/* <Facebook/> */}
                    <span className="logos--facebook"></span>
                     {/* <Twitter/> */}
                     <span className="devicon--google"></span>
                     <span className="logos--twitter"></span>
                    </div>
               </div>
         </div>
      </div>
    </div>
  );
}

export default Login;
