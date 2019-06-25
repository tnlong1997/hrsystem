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

// Get specific info
exports.leave_get_info = function(req,res,next) {
  Leave
    .findOne({_id: req.params.leaveId})
    .populate("employee_name", "name")
    .populate("leader", "name")
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

// Edit leave
exports.leave_edit = function(req,res,next) {
  if (!req.params.leaveId) {
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
      err: "No changes",
    });
  }

  Leave.findByIdAndUpdate(req.params.leaveId, {$set: req.body}, function(err, leave) {
    console.log(req.params.leaveId);
    if (err) {
      return res.send({
        success: false,
        code: 600,
        err: "Error updating leave",
      });
    }

    if (!leave) {
      return res.send ({
        success: false,
        code: 601,
        err: "Can't find leave with given ID",
      });
    }

    res.send({
      success: true,
      code: 200,
      check: "Successfully process leave",
      leave: leave,
    })
  });
};

// Get all leaves of specific user
exports.leave_get_all = function(req,res,next) {
  Leave
    .find({employee: req.params.id})
    .populate("employee", "name")
    .populate("leader", "name")
    .exec((err, leaves) => {
      if (err) {
        return res.send ({
          code: 600,
          err: err.message,
        });
      }
      if (!leaves) {
        return res.send ({
          code: 600,
          err: err.message,
        });
      } else {
        return res.send ({
          code: 200,
          message: "Successful request",
          leaves: leaves,
        });
      }
    });
}

exports.leave_leader = function(req,res,next) {
  Leave
    .find({$or: [
    {employee: req.params.id}, {leader: req.params.id}
    ]
    })
    .populate("employee", "name")
    .populate("leader", "name")
    .exec((err, leaves) => {
      if (err) {
        return res.send ({
          code: 600,
          err: err.message,
        });
      }
      if (!leaves) {
        return res.send ({
          code: 600,
          err: err.message,
        });
      } else {
        return res.send ({
          code: 200,
          message: "Successful request",
          leaves: leaves,
        });
      }
    });
}
