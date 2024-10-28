import express from "express";

import {
  registerUser,
  verifyEmail,
  loginUser,
} from "../controllers/userController.js";


const router = express.Router();

router.post("/register", registerUser);
router.post("/verify", verifyEmail);
router.post("/login", loginUser);

export default router;
