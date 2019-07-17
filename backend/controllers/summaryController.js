var Summary = require('../models/summaryModel');

exports.summary_create = function(req,res) {
  var newSummary = new Summary(req.body);
  newSummary.save(function(err) {
    if (err) {
      return res.send ({
        code: 600,
        err: err.message,
      });
    }
    res.send({
      code: 200,
      message: "Successful request",
      summaryId: newSummary._id,
    });
  });
};

// find summary by employee id
exports.summary_all = function (req,res) {
  Summary
    .find({empID: req.params.id})
    .exec((err, summaries) => {
      if (err) {
        return res.send ({
          code: 600,
          err: err.message,
        });
      }
      if (!summaries) {
        res.send ({
          code: 600,
          err: "No summary found",
        });
      } else {
        res.send({
          code: 200,
          message: "Successful request",
          summary: summaries,
        });
      }
    });
}
