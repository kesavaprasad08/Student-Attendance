const path = require("path");

const express = require("express");

const adminController = require("../controllers/admin");

const router = express.Router();

router.get("/:date", adminController.getAttendance);

router.post("/:date", adminController.PostAttendance);

router.get("/all/report", adminController.getReport);

module.exports = router;
