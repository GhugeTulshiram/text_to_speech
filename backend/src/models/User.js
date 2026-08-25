const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },

    gender: String,
    country: String,
    language: String,
    timezone: String,
    photo: String, // image URL or filename
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
