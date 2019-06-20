var Leave = require('../models/leaveModel');

exports.leave_create = function(req,res,next) {
  var newLeave = new Leave(req.body);
  newLeave.save(function(err) {
    if (err) {
      return res.send({
        code: 600,
        err: err.message,
      });
    }
    res.send({
      code: 200,
      message: "Successful request",
      leaveId: newLeave._id,
    });
  });
};

exports.leave_get_info = function(req,res,next) {
  Leave
    .findOne({_id: req.params.leaveId})
    .populate("employee_name", "name")
    .populate("manager", "name")
    .exec((err, leave) => {
      if (err) {
        return res.send({
          code: 600,
          err: err.message,
        });
      }
      if (!leave) {
        res.send({
          code: 600,
          err: "No leave found",
        });
      } else {
        res.send({
          code: 200,
          message: "Successful request",
          leave: leave,
        });
      }
    });
}
