import express from "express";
import userRoutes from "./userRoutes.js";
import profileRoutes from "./profileRoute.js";

const router = express.Router();

router.use("/users", userRoutes);

router.use("/profile", profileRoutes);


export default router;
