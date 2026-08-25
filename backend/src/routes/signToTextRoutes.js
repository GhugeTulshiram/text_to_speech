const router = require("express").Router();
const { signToText } = require("../controllers/signToTextController");
const auth = require("../middlewares/authMiddleware");

router.post("/", auth, signToText);

module.exports = router;
