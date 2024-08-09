import React, { useState } from 'react';
import logo from '../../images/logo-blk.png';
import './Signup.css';
import couple from '../../images/mask.png';
import { Eye, EyeOff } from 'lucide-react'; 
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="Signupcontainer_1">
      <div className="signup-left">
        <div className="circles_zaheers_circle"></div>
        <img src={logo} alt="logo" className="image_style lg:text-sm" />
        <div className="firsts-image-signup">
          <img src={couple} alt="marriage" />
        </div>
      </div>
      <div className="signup-right">
        <div className="Signup">
          <h1 className="login_heading">Signup</h1>
          <div className="Signup_form">
            <div className="input_field">
              <input type="text" placeholder="Username" className='Name' />
            </div>
            <div className="input_field">
              <input type="Email" placeholder="Email" className='Name' />
            </div>
            <div className="input_field">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className='Name'
              />
              <button
                type="button"
                className="toggle-password"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>
            <div className="input_field">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Confirm Password"
                className='Name'
              />
              <button
                type="button"
                className="toggle-password"
                onClick={toggleConfirmPasswordVisibility}
              >
                {showConfirmPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>
            <input type="submit" value="Signup" className="btn solid" />
            <div className="social-media">
              <p>Already have an account? <a href="" style={{ color: 'deeppink' }} onClick={() => navigate("/Login")}> Signin</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
