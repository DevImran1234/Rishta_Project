import React from 'react'
import logo from '../../images/logo-blk.png';
import '../Users/users.css';
import group from '../../images/Group.png';
import { useNavigate } from 'react-router-dom';
const users = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="users_container">
        <div className="left_side">
          <div className="circle_zaheer"></div>
          <img src={logo} alt="logo" className="image_style  lg:text-sm " />
          <img src={group} alt="grop" className="group" />
        </div>
        <div className="right_side">
          <div className="users">
            <h1 className="user_heading">User</h1>
            <div className="users_form">
              <div className="input-box">
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="input"
                />
              </div>
              <br />
              <div className="input-box">
                <input
                  type="password"
                  placeholder="Password"
                  className="input"
                />
              </div>
              <br />
              <div className="input-box">
                <input
                  type="password"
                  placeholder="confirm Password"
                  className="input"
                />
              </div>
              <div className="my-buttons">
                <button type="button" className="btn">
                  Signin
                </button>
                <p className="desc">
                  Already member?
                  <a
                    href="#"
                    className="a_signin"
                    onClick={() => navigate("/Signup")}
                  >
                    Signup
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default users
