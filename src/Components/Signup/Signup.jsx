import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';
import Wedding from '../../images/wedding.png';
import { Facebook, Linkedin, Twitter} from 'lucide-react';

const Signup = () => {
  const [isSignupMode, setIsSignupMode] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef(null);
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    setIsSignupMode(true);
    setIsTransitioning(true);
  };

  const handleSignInClick = () => {
    setIsSignupMode(false);
    setIsTransitioning(true);
  };

  useEffect(() => {
    const container = containerRef.current;
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");

    const handleTransitionEnd = () => {
      navigate(isSignupMode ? '/signup' : '/login');
      setIsTransitioning(false);
    };

    if (container && isTransitioning) {
      container.addEventListener('transitionend', handleTransitionEnd);
    }

    sign_up_btn.addEventListener("click", handleSignUpClick);
    sign_in_btn.addEventListener("click", handleSignInClick);

    return () => {
      container.removeEventListener('transitionend', handleTransitionEnd);
      sign_up_btn.removeEventListener("click", handleSignUpClick);
      sign_in_btn.removeEventListener("click", handleSignInClick);
    };
  }, [isSignupMode, isTransitioning, navigate]);

  return (
    <div
      className={`container ${isTransitioning ? 'transitioning' : ''} ${isSignupMode ? 'sign-up-mode' : ''}`}
      ref={containerRef}
    >
      <div className="forms-container">
        <div className="signin-signup">
          <form className={`sign-up-form ${!isSignupMode ? 'hidden' : ''}`}>
            <h2 className="signin">Sign Up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
            <i className="fa fa-envelope"></i>
            <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Sign Up" className="btn solid" />
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon"><Facebook /></a>
              <a href="#" className="social-icon"><Twitter /></a>
              <a href="#" className="social-icon"><i className="fab fa-google"></i></a>
              <a href="#" className="social-icon"><Linkedin /></a>
            </div>
          </form>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here?</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, ex ratione. Aliquid!</p>
            <button className="btn transparent" onClick={handleSignUpClick} id="sign-up-btn">Sign up</button>
          </div>
          <img src="img/log.svg" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laboriosam ad deleniti.</p>
            <button className="btn transparent" onClick={handleSignInClick} id="sign-in-btn">Sign in</button>
          </div>
          <img src={Wedding} className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
