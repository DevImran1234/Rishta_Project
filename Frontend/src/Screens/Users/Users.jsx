import React from "react";
import logo from "../../images/logo-blk.png";
import "./users.css";
import group from "../../images/Group.png";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters long"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const Users = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission here
    // Navigate to another page after successful form submission
    navigate("/UserCreate-profile");
  };

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
            <form className="users_form" onSubmit={handleSubmit(onSubmit)}>
              <div className="input_box_container">
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="input_fields"
                  {...register("name")}
                />
              </div>
              {errors.name && (
                <p className="error_message">{errors.name.message}</p>
              )}
              <br />
              <div className="input_box_container">
                <input
                  type="password"
                  placeholder="Password"
                  className="input_field"
                  {...register("password")}
                />
              </div>
              {errors.password && (
                <p className="error_message">{errors.password.message}</p>
              )}
              <br />
              <div className="input_box_container">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="input_field"
                  {...register("confirmPassword")}
                />
              </div>
              {errors.confirmPassword && (
                <p className="error_message">
                  {errors.confirmPassword.message}
                </p>
              )}
              <div className="button_container">
                <button type="submit" className="signin_button">
                  Signin
                </button>
                <p className="desc">
                  Already a member?{" "}
                  <a
                    href="#"
                    className="a_signin"
                    onClick={() => navigate("/Signup")}
                  >
                    Signup
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
