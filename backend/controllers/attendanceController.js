var Attendance = require('../models/attendanceModel');

exports.attendance_create = function(req,res,next) {
  var newAttendance = new Attendance(req.body);
  newAttendance.save(function(err) {
    if (err) {
      return res.send ({
        code: 600,
        err: err.message,
      });
    }
    res.send({
      code: 200,
      message: "Successful request",
      attendanceId: newAttendance._id,
    });
  });
};
