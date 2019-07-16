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
