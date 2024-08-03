// import React  , {useEffect}from 'react'
// import './Login.css';
// import register from '../../images/register.svg'
// import { Facebook, Linkedin, Twitter } from 'lucide-react';
// const Login = () => {
//   useEffect(() => {
//     const sign_in_btn = document.querySelector("#sign-in-btn");
//     const sign_up_btn = document.querySelector("#sign-up-btn");
//     const container = document.querySelector(".container");

//     sign_up_btn.addEventListener("click", () => {
//       container.classList.add("sign-up-mode");
//     });

//     sign_in_btn.addEventListener("click", () => {
//       container.classList.remove("sign-up-mode");
//     });
//     return () => {
//       sign_up_btn.removeEventListener("click", () => {
//         container.classList.add("sign-up-mode");
//       });

//       sign_in_btn.removeEventListener("click", () => {
//         container.classList.remove("sign-up-mode");
//       });
//     };
//   }, []);
//   return (
//     <div className="container">
//         <div className="forms-container">
//           <div className="signin-signup">
//             <form action="" className="sign-in-form">
//               <h2 className="signin">Signin</h2>
//               <div className="input-field">
//                 <i className="fas fa-user"></i>
//                 <input type="text" placeholder="Username" />
//               </div>
//               <div className="input-field">
//                 <i className="fas fa-lock"></i>
//                 <input type="password" placeholder="Password" />
//               </div>
//               <input type="submit" value="Login" className="btn solid" />
//               <p className="social-text">Or Sign in with social platforms</p>
//               <div className="social-media">
//                 <a href="#" className="social-icon">
//                   <Facebook/>
//                 </a>
//                 <a href="#" className="social-icon">
//                   <Twitter/>
//                 </a>
//                 <a href="#" className="social-icon">
//                 <i className="fab fa-google"></i>
//                 </a>
//                 <a href="#" className="social-icon">
//                   <Linkedin/>
//                 </a>
//               </div>
//             </form>
//           </div>
//         </div>
//         <div className="panels-container">
//         <div className="panel left-panel">
//           <div className="content">
//             <h3>New here ?</h3>
//             <p>
//               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
//               ex ratione. Aliquid!
//             </p>
//             <button className="btn transparent" id="sign-up-btn">
//               Sign up
//             </button>
//           </div>
//           <img src="img/log.svg" className="image" alt="" />
//         </div>
//         <div className="panel right-panel">
//           <div className="content">
//             <h3>One of us ?</h3>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
//               laboriosam ad deleniti.
//             </p>
//             <button className="btn transparent" id="sign-in-btn">
//               Sign in
//             </button>
//           </div>
//           <img src={register} className="image" alt="" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login






















import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; 
import { Facebook, Linkedin, Twitter } from 'lucide-react';

const Login = () => {
  const [isSignupMode, setIsSignupMode] = useState(false); 
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
      if (isSignupMode) {
        navigate('/signup');
      } else {
        navigate('/login');
      }
      setIsTransitioning(false);
    };

    if (container && isTransitioning) {
      container.addEventListener('transitionend', handleTransitionEnd);
    }

    if (sign_up_btn && sign_in_btn) {
      sign_up_btn.addEventListener("click", handleSignUpClick);
      sign_in_btn.addEventListener("click", handleSignInClick);
    }
    return () => {
      if (container) {
        container.removeEventListener('transitionend', handleTransitionEnd);
      }
      if (sign_up_btn && sign_in_btn) {
        sign_up_btn.removeEventListener("click", handleSignUpClick);
        sign_in_btn.removeEventListener("click", handleSignInClick);
      }
    };
  }, [isSignupMode, isTransitioning, navigate]);

  return (
    <div
      className={`container ${isTransitioning ? 'transitioning' : ''} ${isSignupMode ? 'sign-up-mode' : ''}`}
      ref={containerRef}
    >
      <div className="forms-container">
        <div className="signin-signup">
          <form className={`sign-in-form ${isSignupMode ? 'hidden' : ''}`}>
            <h2 className="signin">Signin</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="btn solid" />
            <p className="social-text">Or Sign in with social platforms</p>
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
        </div>
      </div>
    </div>
  );
};

export default Login;
