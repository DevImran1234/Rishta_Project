import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["guest", "user", "consultant"],
      default: "guest",
    },
    isVerified: { type: Boolean, default: false },
    otp: String, // OTP for verification
    otpExpiry: Date, // OTP expiration time
    companyName: {
      type: String,
      required: function () {
        return this.role === "consultant";
      },
    },
    companyAddress: {
      type: String,
      required: function () {
        return this.role === "consultant";
      },
    },
    contactNumber: {
      type: String,
      required: function () {
        return this.role === "consultant";
      },
    },
  },
  { timestamps: true }
);

const User = model("User", userSchema);

export default User;
