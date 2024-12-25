import React, { useState } from 'react';
import logo from '../../images/logo-blk.png';
import './Signup.css';
import couple from '../../images/mask.png';
import { Eye, EyeOff } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { handleSignup } from '../../API/SignupApi/SignupAPi';
import CircularProgress from '@mui/material/CircularProgress';

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false); 
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required('Username is required')
      .min(3, 'Username must be at least 3 characters'),
    email: Yup.string()
      .required('Email is required')
      .email('Email is invalid'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters'),
    confirmPassword: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password')], 'Passwords must match'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await handleSignup(data);
      navigate('/Login');
    } catch (error) {
      console.error('Signup failed:', error);
    } finally {
      setLoading(false); 
    }
  };

  const handleNextClick = () => {
    const selectedValue = document.querySelector('input[name="users"]:checked')?.value;
    if (selectedValue === 'User') {
      navigate('/users');
    } else if (selectedValue === 'Marriage Consultant') {
      navigate('/marriage');
    }
  };

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
        <Link to="/">
          <img src={"https://res.cloudinary.com/dh32zavox/image/upload/v1735122163/rishta%20images/pytw2xvekyn9l0mb0dfx.png"} alt="logo" className="image_style lg:text-sm" />
        </Link>
        <div className="options">
  <div className="option-item">
    <input type="radio" id="user" name="users" value="User" />
    <label htmlFor="user">User</label>
  </div>
  <div className="option-item">
    <input type="radio" id="marriage" name="users" value="Marriage Consultant" />
    <label htmlFor="marriage">Marriage Consultant</label>
  </div>
  <button className="nxt" onClick={handleNextClick}>Next</button>
</div>


        <div className="firsts-image-signup">
          <img src={"https://res.cloudinary.com/dh32zavox/image/upload/v1735119599/rishta%20images/sduuxj4s00qm1kphy1tl.png"} alt="marriage" />
        </div>
      </div>
      <div className="signup-right">
        <div className="Signup">
          <h1 className="login_heading">Signup</h1>
          <form className="Signup_form" onSubmit={handleSubmit(onSubmit)}>
            <div className="input_field">
              <input
                type="text"
                placeholder="Username"
                {...register('username')}
                className={`Name ${errors.username ? 'is-invalid' : ''}`}
              />
            </div>
            {errors.username && <p className="error-message">{errors.username.message}</p>}
            <div className="input_field">
              <input
                type="email"
                placeholder="Email"
                {...register('email')}
                className={`Name ${errors.email ? 'is-invalid' : ''}`}
              />
            </div>
            {errors.email && <p className="error-message">{errors.email.message}</p>}
            <div className="input_field">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                {...register('password')}
                className={`Name ${errors.password ? 'is-invalid' : ''}`}
              />
              <button
                type="button"
                className="toggle-password"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.password && <p className="error-message">{errors.password.message}</p>}
            <div className="input_field">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Confirm Password"
                {...register('confirmPassword')}
                className={`Name ${errors.confirmPassword ? 'is-invalid' : ''}`}
              />
              <button
                type="button"
                className="toggle-password"
                onClick={toggleConfirmPasswordVisibility}
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="error-message">{errors.confirmPassword.message}</p>
            )}
            {loading ? (
              <div className="loader-container">
                <CircularProgress />
              </div>
            ) : (
              <input type="submit" value="Signup" className="btn solid" />
            )}
            <div className="social-media">
              <p>
                Already have an account?{' '}
                <a href="" style={{ color: 'deeppink' }} onClick={() => navigate('/Login')}>
                  Signin
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
