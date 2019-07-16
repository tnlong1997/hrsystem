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

exports.attendance_get_all = function (req,res, next) {
  Attendance
    .find({userID: req.params.id})
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

exports.attendance_edit = function(req,res,next) {
  if (!req.params.attendanceId) {
    return res.send({
      success: false,
      code: 400,
      err: "No id in req",
    });
  }

  if (!req.body) {
    return res.send({
      success: false,
      code: 400,
      err: "No attendance changes",
    });
  }

  Attendance.findByIdAndUpdate(req.params.attendanceId, {$set: req.body}, function(err, attend) {
    console.log(req.params.attendanceId);
    if (err) {
      return res.send({
        success: false,
        code: 600,
        err: "Error updating attendance",
      });
    }

    if (!attend) {
      return res.send ({
        success: false,
        code: 601,
        err: "Can't find attendance with given ID",
      });
    }

    res.send({
      success: true,
      code: 200,
      check: "Success finishing attendance",
      attendance: attend,
    })
  });
};
