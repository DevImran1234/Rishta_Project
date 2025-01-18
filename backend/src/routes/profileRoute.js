import express from "express";
import {
  createProfile,
  getAllProfiles,
  getProfileById,
  updateProfile,
  deleteProfile,
} from "../controllers/profileController.js";
import upload from "../services/multerConfig.js";

const router = express.Router();

router.post("/", upload.single("image"), createProfile);
router.get("/", getAllProfiles);
router.get("/:id", getProfileById);
router.put("/:id", upload.single("image"), updateProfile);
router.delete("/:id", deleteProfile);

export default router;
