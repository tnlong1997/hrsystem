var Team = require('../models/teamModel');

exports.team_create = function(req, res, next) {
	var newTeam = new Team(req.body);
	newTeam.save(function(err) {
		if (err) {
			return res.send({
				code: 600,
				err: err.message,
			});
		}
		res.send({
			code: 200,
			message: "Successful request",
			teamId: newTeam._id,
		});
	});
};

exports.team_get_info = function(req, res, next) {
	Team
		.findOne({_id: req.params.teamId})
		.populate("leader", "name")
		.populate("members", "name")
		.exec((err, team) => {
			if (err) {
				return res.send({
					code: 600,
					err: err.message,
				});
			}
			if (!team) {
				res.send({
					code: 600,
					err: "No team found",
				});
			} else {
				res.send({
					code: 200,
					message: "Successful request",
					team: team,
				});
			}
		});
}

exports.team_update_info = function(req, res, next) {

}
