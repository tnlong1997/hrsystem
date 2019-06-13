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

exports.attendance_get_all = function (req,res) {
  Attendance
    .find()
    // .populate("date", "date")
    // .populate("timein", "time in")
    // .populate("timeout", "time out")
    // .populate("status", "status")
    .exec((err, attendances) => {
      if (err) {
        return res.send ({
          code: 600,
          err: err.message,
        });
      }
      if (!attendances) {
        return res.send ({
          code: 600,
          err: err.message,
        });
      } else {
        return res.send ({
          code: 200,
          message: "Successful request",
          attendances: attendances,
        });
      }
    });
}
