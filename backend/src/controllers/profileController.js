const User = require("../models/User");
const bcrypt = require("bcryptjs");

/* =========================
   GET PROFILE
========================= */
exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    console.error("Get Profile Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

/* =========================
   UPDATE PROFILE (ALL FIELDS)
========================= */
exports.updateProfile = async (req, res) => {
  try {
    const {
      name,
      gender,
      country,
      language,
      timezone,
    } = req.body;

    const updates = {
      name,
      gender,
      country,
      language,
      timezone,
    };

    // Remove undefined values
    Object.keys(updates).forEach(
      key => updates[key] === undefined && delete updates[key]
    );

    if (req.file) {
      updates.photo = `/uploads/profile/${req.file.filename}`;
    }

    const user = await User.findByIdAndUpdate(
      req.user.id,
      updates,
      { new: true }
    ).select("-password");

    res.json(user);
  } catch (error) {
    console.error("Update Profile Error:", error);
    res.status(500).json({ message: "Profile update failed" });
  }
};

/* =========================
   CHANGE PASSWORD
========================= */
exports.changePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;

    if (!oldPassword || !newPassword) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findById(req.user.id);

    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Old password incorrect" });
    }

    user.password = await bcrypt.hash(newPassword, 10);
    await user.save();

    res.json({ message: "Password updated successfully" });
  } catch (error) {
    console.error("Change Password Error:", error);
    res.status(500).json({ message: "Password update failed" });
  }
};

/* =========================
   USER HISTORY (PLACEHOLDER)
========================= */
exports.getHistory = async (req, res) => {
  res.json([]); // later connect sign-to-text history
};
