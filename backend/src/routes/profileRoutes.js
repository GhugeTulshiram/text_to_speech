const express = require("express");
const router = express.Router();
const multer = require("multer");
const authMiddleware = require("../middlewares/authMiddleware");

const {
  getProfile,
  updateProfile,
  changePassword,
  getHistory,
} = require("../controllers/profileController");

/* =========================
   MULTER CONFIG
========================= */
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/profile");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

/* =========================
   ROUTES
========================= */

// Get profile
router.get("/", authMiddleware, getProfile);

// Update profile (text + photo)
router.put(
  "/",
  authMiddleware,
  upload.single("photo"),
  updateProfile
);

// Change password
router.put(
  "/change-password",
  authMiddleware,
  changePassword
);

// History (future feature)
router.get("/history", authMiddleware, getHistory);

module.exports = router;
