var express = require('express');
var router = express.Router();
const userController = require("../controllers/userController");
const attendanceController = require("../controllers/attendanceController");
const leaveController = require("../controllers/leaveController");
const teamController = require("../controllers/teamController");
var jwt = require('jsonwebtoken');
var secret = require('../config/secret');

// jsonwebtoken
router.use(function(req, res, next) {
  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  // decode token
  if (token) {
    // verifies secret and checks exp
    jwt.verify(token, secret, function(err, decoded) {
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });}
        else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;
        next();
      }
    });
  } else {
    // if there is no token
    // return an error
    return res.status(403).send({
        success: false,
        message: 'No token provided.'
    });
  }
});



router.post('/signup', userController.user_sign_up);
// router.post('/signin', userController.user_sign_in);
router.get('/info/:id', userController.user_get_info);
router.put('/info/:id', userController.user_update_info);
router.get('/', userController.user_get_all_users);

// Attendance
router.post('/:id/attendances', attendanceController.attendance_create);
router.get('/:id/attendances/all', attendanceController.attendance_get_all);
router.put('/attendances/:attendanceId/info', attendanceController.attendance_edit);
router.get('/:id/attendances/info', attendanceController.attendance_get_byId);

// leave
router.post('/:id/leave', leaveController.leave_create);
router.get('/:id/leaves/:leaveId/info', leaveController.leave_get_info);
router.put('/:id/leaves/:leaveId/info', leaveController.leave_edit);
router.get('/:id/leaves/all', leaveController.leave_get_all);

// team
router.get('/:id/team', teamController.team_get_info);

module.exports = router;
