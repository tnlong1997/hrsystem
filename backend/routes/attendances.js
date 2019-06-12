var express = require('express');
var router = express.Router();
const attendanceController = require("../controllers/attendanceController");

router.post("/", attendanceControlle.attendance_create);
module.exports = router;
