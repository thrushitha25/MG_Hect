const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const cors = require("cors");
router.use(bodyParser.json());
router.use(cors());

const mainFileController = require("../controllers/mainfile");

router.post("/signUp",(req, res) => {
   mainFileController.signUp(req, res);
});

module.exports = router;
