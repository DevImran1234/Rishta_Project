// import React, { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Login.css'; 
// import { Facebook, Linkedin, Twitter } from 'lucide-react';

// const Login = () => {
//   const [isSignupMode, setIsSignupMode] = useState(false); 
//   const [isTransitioning, setIsTransitioning] = useState(false);
//   const containerRef = useRef(null);
//   const navigate = useNavigate();

//   const handleSignUpClick = () => {
//     setIsSignupMode(true);
//     setIsTransitioning(true);
//   };
//   const handleSignInClick = () => {
//     setIsSignupMode(false);
//     setIsTransitioning(true);
//   };
//   useEffect(() => {
//     const container = containerRef.current;
//     const sign_in_btn = document.querySelector("#sign-in-btn");
//     const sign_up_btn = document.querySelector("#sign-up-btn");

//     const handleTransitionEnd = () => {
//       if (isSignupMode) {
//         navigate('/signup');
//       } else {
//         navigate('/login');
//       }
//       setIsTransitioning(false);
//     };

//     if (container && isTransitioning) {
//       container.addEventListener('transitionend', handleTransitionEnd);
//     }

//     if (sign_up_btn && sign_in_btn) {
//       sign_up_btn.addEventListener("click", handleSignUpClick);
//       sign_in_btn.addEventListener("click", handleSignInClick);
//     }
//     return () => {
//       if (container) {
//         container.removeEventListener('transitionend', handleTransitionEnd);
//       }
//       if (sign_up_btn && sign_in_btn) {
//         sign_up_btn.removeEventListener("click", handleSignUpClick);
//         sign_in_btn.removeEventListener("click", handleSignInClick);
//       }
//     };
//   }, [isSignupMode, isTransitioning, navigate]);

//   return (
//     <div
//       className={`container ${isTransitioning ? 'transitioning' : ''} ${isSignupMode ? 'sign-up-mode' : ''}`}
//       ref={containerRef}
//     >
//       <div className="forms-container">
//         <div className="signin-signup">
//           <form className={`sign-in-form ${isSignupMode ? 'hidden' : ''}`}>
//             <h2 className="signin">Signin</h2>
//             <div className="input-field">
//               <i className="fas fa-user"></i>
//               <input type="text" placeholder="Username" />
//             </div>
//             <div className="input-field">
//               <i className="fas fa-lock"></i>
//               <input type="password" placeholder="Password" />
//             </div>
//             <input type="submit" value="Login" className="btn solid" />
//             <p className="social-text">Or Sign in with social platforms</p>
//             <div className="social-media">
//               <a href="#" className="social-icon"><Facebook /></a>
//               <a href="#" className="social-icon"><Twitter /></a>
//               <a href="#" className="social-icon"><i className="fab fa-google"></i></a>
//               <a href="#" className="social-icon"><Linkedin /></a>
//             </div>
//           </form>
//             </div>
//       </div>
//       <div className="panels-container">
//         <div className="panel left-panel">
//           <div className="content">
//             <h3>New here?</h3>
//             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, ex ratione. Aliquid!</p>
//             <button className="btn transparent" onClick={handleSignUpClick} id="sign-up-btn">Sign up</button>
            
          
//           </div>

//           <img src="img/log.svg" className="image" alt="" />
//         </div>
//         <div className="panel right-panel">
//           <div className="content">
//             <h3>One of us?</h3>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laboriosam ad deleniti.</p>
//             <button className="btn transparent" onClick={handleSignInClick} id="sign-in-btn">Sign in</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;




import React, { useEffect } from 'react';
import logo from '../../images/logo-blk.png';
import '../Login/Login.css';
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
        <div className="first-image">
          <img src={couple} alt="marriage" />
        </div>
      </div>
    </div>
  );
}

export default Login;
