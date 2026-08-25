const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const textToGifRoutes = require("./routes/textToGifRoutes");
const signToTextRoutes = require("./routes/signToTextRoutes");
const profileRoutes = require("./routes/profileRoutes");


const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/text-to-gif", textToGifRoutes);
app.use("/api/sign-to-text", signToTextRoutes);
app.use("/api/profile", profileRoutes);
app.use("/uploads", express.static("uploads"));


module.exports = app;
