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

exports.team_get_all = function(req, res, next) {
	Team
		.find()
		.populate("leader", "name")
		.populate("members", "name")
		.exec((err, teams) => {
			if (err) {
				return res.send({
					code: 600,
					err: err.message,
				});
			}
			if (!teams) {
				return res.send({
					code: 600,
					err: err.message,
				});
			} else {
				return res.send({
					code: 200,
					message: "Successful request",
					teams: teams,
				});
			}
		});
}

exports.team_update_info = function(req, res, next) {
	if (!req.params.teamId) {
		return res.send({
			sucess: false,
			code: 400,
			err: "No id in req",
		});
	}

	if (!req.body) {
		return res.send({
			success: false,
			code: 400,
			err: "No team changes",
		});
	}

	Team.findByIdAndUpdate(req.params.teamId, {$set: req.body}, function(err,team) {
		console.log(req.params.teamId);
		if (err) {
			return res.send({
				success: false,
				code: 600,
				err: "Error updating team",
			});
		}

		if (!team) {
			return res.send({
				success: false,
				code: 601,
				err: "Can't find team with given ID",
			});
		}

		res.send({
			success: true,
			code: 200,
			check: "Success updating profile",
			team: team,
		})
	});
};
