import React, { useState } from 'react';
import '../MarriageForm/MarriageForm.css';
import logo from '../../images/logo-blk.png';
import marriage from '../../images/marriage.png';
import flowers from '../../images/flowers.png';
import { useNavigate } from 'react-router-dom';
import { Building, LocateFixedIcon, Lock, Mail, Phone, User } from 'lucide-react';
import { registerConsaltant } from '../../API/MarriageApi/MarriageApi';

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await registerConsaltant(formData);
      alert('Registration successful!');
      navigate('/Login'); 
    } catch (error) {
      alert(error.message); 
    }
  };

  return (
    <>
      <div className='container_1'>
        <div className="left-side">
          <div className="circle_zaheer"></div>
          <img src={logo} alt="logo" className='image_style lg:text-sm' />
          <div className="first_angle"></div>
          <div className="second_angle"></div>
          <div className="first_image">
            <img src={marriage} alt="marriage" style={{ width: '100%', height: '100%' }} />
          </div>
          <div className="second_image">
            <img src={flowers} alt="flowers" style={{ width: '100%', height: '100%' }} />
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
                <button type='submit' className='btn'>Signup</button>
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
