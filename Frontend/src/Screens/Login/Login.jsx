import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import logo from '../../images/logo-blk.png';
import couple from '../../images/couple.png';
import { useNavigate } from 'react-router-dom';
import './Login.css';

// Validation Schema
const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required').min(6, 'Username must be at least 6 characters'),
  password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
  otp: Yup.string().required('OTP is required'),
});

const Login = () => {
  const navigate = useNavigate();
  
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    // Handle login logic here
  };

  // useEffect(() => {
  //   const nextButton = document.getElementById('next');
  //   const container = document.querySelector('.Logincontainer_1');
    
  //   const handleNextClick = () => {
  //     const selectedValue = document.querySelector('input[name="users"]:checked').value;
  //     if (selectedValue === 'User') {
  //       container.classList.add('user-mode');
  //       setTimeout(() => navigate('/users'), 500);
  //     } else if (selectedValue === 'Marriage Consultant') {
  //       container.classList.add('marriage-mode');
  //       setTimeout(() => navigate('/marriage'), 500);
  //     }
  //   };

  //   // nextButton.addEventListener('click', handleNextClick);
    
  //   return () => {
  //     nextButton.removeEventListener('click', handleNextClick);
  //   };
  // }, [navigate]);

  return (
    <div className="Logincontainer_1">
      <div className="lefts-side">
        <div className="circles_zaheer"></div>
        <img src={logo} alt="logo" className="image_style lg:text-sm" />
        {/* <div className="options">
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
        </div> */}
        <div className="firsts-image_login">
          <img src={couple} alt="marriage" />
        </div>
      </div>
      <div className="rights-side">
        <div className="login">
          <h1 className="login_heading">Login</h1>
          <form className="login_form" onSubmit={handleSubmit(onSubmit)}>
            <div className="input_field">
              <i className="fas fa-user"></i>
              <input 
                type="text" 
                placeholder="Username"  
                className={`Name ${errors.username ? 'is-invalid' : ''}`} 
                {...register('username')}
              />
            </div>
              <div className="invalid-feedback">{errors.username?.message}</div>
            <div className="input_field">
              <i className="fas fa-lock"></i>
              <input 
                type="password" 
                placeholder="Password"  
                className={`Name ${errors.password ? 'is-invalid' : ''}`} 
                {...register('password')}
              />
            </div>
              <div className="invalid-feedback">{errors.password?.message}</div>
            
            {/* OTP Section */}
            {/* <div className="otp_section">
              <h2>Enter OTP</h2>
              <div className="otp_inputs">
                {[0, 1, 2, 3].map((index) => (
                  <input 
                    key={index} 
                    type="text" 
                    maxLength="1" 
                    className={`otp_input ${errors.otp ? 'is-invalid' : ''}`} 
                    {...register('otp')}
                  />
                ))}
              </div>
            </div>
              <div className="invalid-feedback">{errors.otp?.message}</div> */}
            
            <input type="submit" value="Login" className="btn solid" />
            <p className="social-text">Or Signin with</p>
            <div className="social-media">
              <span className="logos--facebook"></span>
              <span className="devicon--google"></span>
              <span className="logos--twitter"></span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
