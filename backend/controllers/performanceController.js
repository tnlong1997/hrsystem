var Performance = require('../models/performanceModel');

exports.performance_create = function(req,res) {
    var newPerformance = new Performance(req.body);
    newPerformance.save(function(err) {
        if (err) {
            return res.send ({
                code: 600,
                err: err.message,
            });
        }
        res.send({
            code: 200,
            message: "Successful request",
            performanceId: newPerformance._id,
        });
    });
};

exports.performance_get_info = function(req,res) {
    Performance
        .findOne({_id: req.params.performanceId})
        .exec((err, performance) => {
            if (err) {
                return res.send({
                    code: 600,
                    err: err.message,
                });
            }
            if (!performance) {
                res.send({
                    code: 600,
                    err: "No performance found",
                });
            } else {
                res.send({
                    code: 200,
                    message: "Successful request",
                    performance: performance,
                });
            }
        });
}

exports.performance_edit = function(req, res) {
    if (!req.params.performanceId) {
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
            err: "No performance changes",
        });
    }

    Performance.findByIdAndUpdate(req.params.performanceId, {$set: req.body}, function (err, performance) {
        if (err) {
            return res.send ({
                success: false,
                code: 600,
                err: "Error updating performance",
            });
        }
        if (!performance) {
            return res.send({
                success: false,
                code: 601,
                err: "Can't find performance with given ID",
            });
        }

        res.send({
            success: true,
            code: 200,
            message: "Success updating performance",
            performance: performance,
        })
    });
};