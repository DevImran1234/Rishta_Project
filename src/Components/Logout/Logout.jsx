import React from 'react'
import ClientNavbar from '../ClientNavbar/ClientNavbar'

const Logout = () => {
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
                  <input type="submit" value="Logout" className="btn solid" />
               </div>
               </div>
  )
}

export default Logout
