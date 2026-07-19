const express = require("express");

const router = express.Router();

const { submitDemo } = require("../controllers/demoController");

router.post("/", submitDemo);

module.exports = router;