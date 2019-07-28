var Satisfaction = require("../models/satisfactionModel");

exports.satisfaction_get_all = function(req, res, next) {
	Satisfaction
		.find()
		.exec((err, data) => {
			if (err) {
				return res.send({
					code: 600,
					err: err.message,
				});
			}
			if (!data) {
				return res.send({
					code: 600,
					err: err.message,
				});
			} else {
				return res.send({
					code: 200,
					message: "Successful request",
					numberOfObjects: data.length,
					data: data,
				});
			}
		});
}
