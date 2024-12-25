import React, { useState } from 'react';
import '../MarriageForm/MarriageForm.css';
import { useNavigate } from 'react-router-dom';
import { Building, LocateFixedIcon, Lock, Mail, Phone, User } from 'lucide-react';
import { registerConsaltant } from '../../API/MarriageApi/MarriageApi';
import { CircularProgress } from '@mui/material';

const MarriageForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyName: '',
    password: '',
    companyAddress: '',
    confirmPassword: '',
    contactNo: '',
    marriageConsultant: true, 
  });
  const [loading, setLoading] = useState(false); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await registerConsaltant(formData);
      // alert('Registration successful!');
      console.log(response);
      navigate('/Login');
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <>
      <div className='container_1'>
        <div className="left-side">
          <div className="circle_zaheer"></div>
          <img src={"https://res.cloudinary.com/dh32zavox/image/upload/v1735122163/rishta%20images/pytw2xvekyn9l0mb0dfx.png"} alt="logo" className='image_style lg:text-sm' />
          <div className="first_angle"></div>
          <div className="second_angle"></div>
          <div className="first_image">
            <img src={"https://res.cloudinary.com/dh32zavox/image/upload/v1735122968/rishta%20images/lvhgs2hapxxrzvbh6wnh.png"} alt="marriage" style={{ width: '100%', height: '100%' }} />
          </div>
          <div className="second_image">
            <img src={"https://res.cloudinary.com/dh32zavox/image/upload/v1735119592/rishta%20images/vmitpghum7nceyjrro84.png"} alt="flowers" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>

        <div className="right-side">
          <div className="marriage_consultant">
            <h1 className='marriage_heading'>Marriage Consultant</h1>
            <form onSubmit={handleSubmit}>
              <div className="contact_form">
                <div className="input_box">
                  <div className="icon">
                    <User className='icon_upper' />
                  </div>
                  <input 
                    type="text" 
                    className='Name' 
                    placeholder='Your Name' 
                    name="name" 
                    value={formData.name} 
                    onChange={handleInputChange} 
                  />
                </div>

                <div className="input_box">
                  <div className="icon">
                    <Mail className='icon_upper' />
                  </div>
                  <input 
                    type="email" 
                    className='Name' 
                    placeholder='Email' 
                    name="email" 
                    value={formData.email} 
                    onChange={handleInputChange} 
                  />
                </div>

                <div className="input_box">
                  <div className="icon">
                    <Building className='icon_upper' />
                  </div>
                  <input 
                    type="text" 
                    className='Name' 
                    placeholder='Company Name' 
                    name="companyName" 
                    value={formData.companyName} 
                    onChange={handleInputChange} 
                  />
                </div>

                <div className="input_box">
                  <div className="icon">
                    <Lock className='icon_upper' />
                  </div>
                  <input 
                    type="password" 
                    className='Name' 
                    placeholder='Password' 
                    name="password" 
                    value={formData.password} 
                    onChange={handleInputChange} 
                  />
                </div>

                <div className="input_box">
                  <div className="icon">
                    <LocateFixedIcon className='icon_upper' />
                  </div>
                  <input 
                    type="text" 
                    className='Name' 
                    placeholder='Company Address' 
                    name="companyAddress" 
                    value={formData.companyAddress} 
                    onChange={handleInputChange} 
                  />
                </div>

                <div className="input_box">
                  <div className="icon">
                    <Lock className='icon_upper' />
                  </div>
                  <input 
                    type="password" 
                    className='Name' 
                    placeholder='Confirm Password' 
                    name="confirmPassword" 
                    value={formData.confirmPassword} 
                    onChange={handleInputChange} 
                  />
                </div>

                <div className="input_box">
                  <div className="icon">
                    <Phone className='icon_upper' />
                  </div>
                  <input 
                    type="text" 
                    className='Name' 
                    placeholder='Contact No' 
                    name="contactNo" 
                    value={formData.contactNo} 
                    onChange={handleInputChange} 
                  />
                </div>
              </div>

              <div className="my-buttons">
                <button type='submit' className='btn' disabled={loading}>
                  {loading ? <CircularProgress size={24} color="inherit" /> : 'Signup'}
                </button>
                <p className='desc'>
                  Already a member? 
                  <a href="#" className='a_signin' onClick={() => navigate('/Login')}>Signin</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarriageForm;
