var Promotion = require("../models/promotionModel");

exports.promotion_get_all = function(req, res, next) {
	Promotion
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
