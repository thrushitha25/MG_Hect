const express = require("express");
const router = express.Router();
const cors = require("cors");
router.use(cors());

const sigUpRouter = require("./mainroute");

router.use("/main", sigUpRouter);

module.exports=router;
