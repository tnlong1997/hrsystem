var express = require('express');
var router = express.Router();
const userController = require("../controllers/userController");
const attendanceController = require("../controllers/attendanceController");
const leaveController = require("../controllers/leaveController");

router.post('/signup', userController.user_sign_up);
router.post('/signin', userController.user_sign_in);
router.get('/info/:id', userController.user_get_info);
router.put('/info/:id', userController.user_update_info);
router.get('/', userController.user_get_all_users);

// Attendance
router.post('/:id/attendances', attendanceController.attendance_create);
router.get('/:id/attendances/all', attendanceController.attendance_get_all);
router.put('/attendances/:attendanceId/info', attendanceController.attendance_edit);

// leave
router.post('/:id/leave', leaveController.leave_create);
router.get('/:id/:leaveId/info', leaveController.leave_get_info);


module.exports = router;
