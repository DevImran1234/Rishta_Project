import React from 'react'
import ClientNavbar from '../ClientNavbar/ClientNavbar'
import ClientFooter from '../ClientFooter/ClientFooter';

const Delete = () => {
  return (
    <div>
        <ClientNavbar/>
        <div className="login_form">
                  <div className="input_field">
                     <i className="fas fa-user"></i>
                     <input type="text" placeholder="Username"  className='Name'/>
                  </div>
                  <div className="input_field">
                     <i className="fas fa-lock"></i>
                     <input type="password" placeholder="Password"  className='Name'/>
                  </div>
                  <input type="submit" value="Delete" className="btn solid" />
               </div>
               </div>
             
  )
}

export default Delete;
