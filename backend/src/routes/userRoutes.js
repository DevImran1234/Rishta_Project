import express from "express";

import {
  registerUser,
  verifyEmail,
  loginUser,
  verifyOtp,
  resendOtp
} from "../controllers/userController.js";


const router = express.Router();

router.post("/register", registerUser);
// router.post("/verify", verifyEmail);
router.post("/verify", verifyOtp);
router.post("/login", loginUser);
router.post("/resend-otp", resendOtp);

export default router;
