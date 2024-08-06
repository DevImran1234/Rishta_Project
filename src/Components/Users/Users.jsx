import React from 'react';
import logo from '../../images/logo-blk.png';
import '../Users/users.css';
import group from '../../images/Group.png';
import { useNavigate } from 'react-router-dom';

const Users = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="users_container">
        <div className="left_side_container">
          <div className="circle_background"></div>
          <img src={logo} alt="logo" className="image_style lg:text-sm" />
          <img src={group} alt="group" className="group_image" />
        </div>
        <div className="right_side_container">
          <div className="user_form_container">
            <h1 className="user_heading_text">User</h1>
            <div className="users_form">
              <div className="input_box_container">
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="input_field"
                />
              </div>
              <br />
              <div className="input_box_container">
                <input
                  type="password"
                  placeholder="Password"
                  className="input_field"
                />
              </div>
              <br />
              <div className="input_box_container">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="input_field"
                />
              </div>
              <div className="button_container">
                <button type="button" className="signin_button">
                  Signin
                </button>
                <p className="desc">
                  Already a member?
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

export default Users;
