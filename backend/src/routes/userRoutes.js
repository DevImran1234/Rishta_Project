import express from "express";

import {
  registerUser,
  verifyEmail,
  loginUser,
  verifyOtp
} from "../controllers/userController.js";


const router = express.Router();

router.post("/register", registerUser);
// router.post("/verify", verifyEmail);
router.post("/verify", verifyOtp);
router.post("/login", loginUser);

export default router;
