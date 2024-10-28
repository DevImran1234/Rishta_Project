import bcrypt from "bcryptjs";
import crypto from "crypto";
import User from "../models/userModel.js";
import generateToken from "../services/jwtService.js";
import { sendEmail } from "../services/emailService.js";

// Register User
export const registerUser = async (req, res) => {
  const {
    name,
    email,
    password,
    role,
    companyName,
    companyAddress,
    contactNumber,
  } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "Email already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const verificationToken = crypto.randomBytes(32).toString("hex");

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role,
      verificationToken,
      // Include consultant-specific fields if the role is consultant
      ...(role === "consultant" && {
        companyName,
        companyAddress,
        contactNumber,
      }),
    });

    await newUser.save();

    const verificationLink = `${process.env.BASE_URL}api/users/verify/${verificationToken}`;

    await sendEmail({
      to: newUser.email,
      subject: "Verify Your Email",
      html: `<p>Click <a href="${verificationLink}">here</a> to verify your email.</p>`,
    });

    res.status(200).json({
      message:
        "Registration successful. Check your email to verify your account.",
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Verify Email
export const verifyEmail = async (req, res) => {
  const { token } = req.query;
  console.log(token, "22222222222222222222");

  // Check if the token exists
  if (!token) {
    return res.status(400).json({ message: "Token is missing" });
  }

  try {
    const user = await User.findOne({ verificationToken: token });

    if (!user) {
      return res.status(400).json({ message: "Invalid or expired token" });
    }

    user.isVerified = true;
    user.verificationToken = undefined;
    await user.save();

    return res
      .status(200)
      .json({ message: "Email verified successfully. You can now log in." });
  } catch (error) {
    console.error("Error in verifyEmail:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

// Login User
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    if (!user.isVerified)
      return res
        .status(401)
        .json({ message: "Please verify your email first" });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = generateToken(user);

    res
      .status(200)
      .json({ message: "Login successful", token, role: user.role });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
