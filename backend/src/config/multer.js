import multer from "multer";
import path from "path";

// Set storage engine
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Uploads directory
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

// Multer configuration without file filtering
const upload = multer({
  storage,
  limits: { fileSize: 50 * 1024 * 1024 }, // Increase file size limit if needed (e.g., 50MB)
});

export default upload;
