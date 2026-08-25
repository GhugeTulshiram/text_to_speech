const router = require("express").Router();
const { textToGif } = require("../controllers/textToGifController");
const auth = require("../middlewares/authMiddleware");

router.post("/", auth, textToGif);

module.exports = router;
