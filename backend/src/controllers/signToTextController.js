const axios = require("axios");

exports.signToText = async (req, res) => {
  try {
    const { landmarks } = req.body;

    if (!landmarks || landmarks.length !== 63) {
      return res.json({ text: "Invalid Data" });
    }

    const response = await axios.post(
      "http://localhost:8000/predict",
      { landmarks }
    );

    res.json({ text: response.data.text });
  } catch (error) {
    console.error("Prediction error:", error.message);
    res.status(500).json({ text: "Prediction Failed" });
  }
};
