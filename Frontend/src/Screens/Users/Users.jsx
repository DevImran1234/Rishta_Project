import React, { useState } from "react";
import logo from "../../images/logo-blk.png";
import "./users.css";
import group from "../../images/Group.png";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { handleuserSignup } from "../../API/userLogin/userLogin";
import CircularProgress from '@mui/material/CircularProgress';

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Enter a valid email").required("Email is required"),
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
  const [loading, setLoading] = useState(false); 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setLoading(true); 
    try {
      console.log("Form Data:", data);
      const response = await handleuserSignup({
        name: data.name,
        email: data.email, 
        password: data.password,
        role: "user",
      });

      console.log("Signup successful:", response);
      navigate("/login");

    } catch (error) {
      console.error("Error during signup:", error);
      setLoading(false); 
    }
  };

  return (
    <div className="users_container">
      <div className="left_side_container">
        <div className="circle_background"></div>
        <img src={"https://res.cloudinary.com/dh32zavox/image/upload/v1735122163/rishta%20images/pytw2xvekyn9l0mb0dfx.png"} alt="logo" className="image_style lg:text-sm" />
        <img src={"https://res.cloudinary.com/dh32zavox/image/upload/v1735119584/rishta%20images/yly4teavmw2j3na250za.png"} alt="group" className="group_image" />
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
              {errors.name && <p className="error_message">{errors.name.message}</p>}
            </div>
            <br />
            <div className="input_box_container">
              <input
                type="email"
                placeholder="Enter your email"
                className="input_fields"
                {...register("email")}
              />
              {errors.email && <p className="error_message">{errors.email.message}</p>}
            </div>
            <br />
            <div className="input_box_container">
              <input
                type="password"
                placeholder="Password"
                className="input_fields"
                {...register("password")}
              />
              {errors.password && <p className="error_message">{errors.password.message}</p>}
            </div>
            <br />
            <div className="input_box_container">
              <input
                type="password"
                placeholder="Confirm Password"
                className="input_fields"
                {...register("confirmPassword")}
              />
              {errors.confirmPassword && <p className="error_message">{errors.confirmPassword.message}</p>}
            </div>

            <div className="button_container">
              {loading ? (
                <CircularProgress size={24} />
              ) : (
                <button type="submit" className="signin_button" disabled={loading}>
                  Sign Up
                </button>
              )}
              <p className="desc">
                Already a member?{" "}
                <a
                  href="#"
                  className="a_signin"
                  onClick={() => navigate("/Signup")}
                >
                  Sign In
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Users;
