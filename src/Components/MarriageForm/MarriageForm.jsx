import React from 'react';
import './MarriageForm.css';
import logo from '../../images/logo-blk.png';;
import marriage from '../../images/marriage.png';
import flowers from '../../images/flowers.png';
import { useNavigate } from 'react-router-dom';
import { Building, LocateFixedIcon, Lock, Mail, Phone, User } from 'lucide-react';



const MarriageForm = () => {
  const navigate = useNavigate();
  
  return (
    <>
      <div className='container_1 '>
        <div className="left-side">
          <div className="circle_zaheer">
          </div>
          <img src={logo} alt="logo" className='image_style  lg:text-sm ' />
          <div className="first_angle"></div>
          <div className="second_angle"></div>
          <div className="first_image">
          <img src={marriage} alt="marriage" style={{width:'100%',height:'100%'}}/>
          </div>
          <div className="second_image">
            <img src={flowers} alt="flowers" style={{width:'100%',height:'100%'}}/>
          </div>
        </div>
       
        <div className="right-side">
        <div className="marriage_consultant">
         <h1 className='marriage_heading' >Marraige Consultant</h1>
      <div className="contact_form">  
          <div className="input_box">
            <div className="icon">
               <User className='icon_upper'/>
             </div>
             <input type="text" className='Name' placeholder='Your Name'/>
          </div>
          <div className="input_box ">
            <div className="icon">
               <Mail className='icon_upper'/>
            </div>
             <input type="email" className='Name' placeholder='Email'/>
          </div>
          <div className="input_box ">
            <div className="icon">
                <Building className='icon_upper'/>
            </div>
             <input type="text" className='Name' placeholder='Company name'/>
          </div>
          <div className="input_box ">
            <div className="icon">
              <Lock className='icon_upper'/>
              </div>
             <input type="password" className='Name' placeholder='Password'/>
          </div>
          <div className="input_box ">
            <div className="icon">
            <LocateFixedIcon className='icon_upper'/>
            </div>
             <input type="text" className='Name' placeholder='Company Adress'/>
          </div>
          <div className="input_box ">
               <div className="icon">
                  <Lock className='icon_upper'/>
               </div>
             <input type="password" className='Name' placeholder='Confirm Password'/>
          </div>
          <div className="input_box ">
            <div className="icon">
               <Phone className='icon_upper'/>
             </div>
             <input type="text" className='Name' placeholder='Contact No'/>
          </div>
      </div>
      <div className="my-buttons">

          <button type='button' className='btn'>Signup</button>
          <p className='desc'>Already member?<a href="#" className='a_signin' onClick={() => navigate('/Login')}>Signin</a></p>
      </div>
      </div>
        </div>
           </div>
    </>
  );
}

export default MarriageForm;
