import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import './Login.css';

// Assuming these images are in the correct path
// import logo from '../../images/logo-blk.png';
import couple from '../../images/couple.png';

// Validation Schema
const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required').min(6, 'Username must be at least 6 characters'),
  password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
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

  return (
    <div className="Logincontainer_1">
      <div className="lefts-side">
        <div className="circles_zaheer"></div>
        <img src={"https://res.cloudinary.com/dh32zavox/image/upload/v1735122163/rishta%20images/pytw2xvekyn9l0mb0dfx.png"} alt="logo" className="image_style" />
        <div className="firsts-image_login">
          <img src={"https://res.cloudinary.com/dh32zavox/image/upload/v1735122507/rishta%20images/ovuleu13a1pvpukkhbr5.png"} alt="marriage" />
        </div>
      </div>
      <div className="rights-side">
        <div className="login">
          <h1 className="login_headings">Login</h1>
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
            
            <input type="submit" value="Login" className="btn solid" />
            <p className="social-text">Or Sign in with</p>
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

