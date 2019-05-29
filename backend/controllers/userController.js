var User = require('../models/userModel');
var bcrypt = require('bcrypt-nodejs');
var secret = require('../config/secret');
var jwt = require('jsonwebtoken');

exports.user_sign_up = function(req, res, next) {
	req.body.password = bcrypt.hashSync(req.body.password);
	var newUser = new User(
		req.body
	);

	// Check if user username and password is valid
	newUser.validate(function(err) {

		if (err) {
			res.send({
				success: false,
				code: 400,
				err: err.message,
			});
			return false;
		} else {

			// Save User to database
			newUser.save(function(err) {
				if (err) {
					res.send({
						success: false,
						code: 600,
						err: err,
					});
					return next(err);
				}
				res.send({
					success: true,
					code: 200,
					user_id: newUser._id,
				});
			});

		}

	});
};

// User login
exports.user_sign_in = function(req, res) {

	if (!req.body.email) {
		return res.send({
			success: false,
			code: 400,
			err: "No email in input"
		});
	}

	if (!req.body.password) {
		return res.send({
			success: false,
			code: 400,
			err: "No password in input"
		});
	}

	User.findOne({email: req.body.email})
		.exec(function(err, user) {
			if (err) {
				return res.send({
					success: false,
					code: 600,
					err: err
				});
			}

			if (!user) {
				return res.send({
					success: false,
					code: 601,
					err: "Authenticate failed. User not found"
				});
			}

			user.comparePassword(req.body.password, function(err, isMatch) {
				if (isMatch && !err) {
				// Create token if the password matched and no error was thrown
					var token = jwt.sign({email: user.email, _id: user._id}, secret, {
						expiresIn: 1000000000000000 // in seconds
					});

					res.json({
						success: true,
						code: 200,
						token: token,
					});
				} else if (!isMatch) {
					res.send({
						success: false,
						code: 610,
						err: 'Authentication failed. Passwords did not match.'
					});
				} else {
					res.send({
						success: false,
						code: 600,
						err: 'Database Error',
					});
				}
			});
		});
};

exports.user_get_info = function(req, res, next) {
	if (!req.params.id) {
		return res.send({
			success: false,
			code: 400,
			err: "No id in req",
		});
	}

	User.findById(req.params.id, function(err, user) {
		if (err) {
			return res.send({
				success: false,
				code: 600,
				err: "Error retrieving user's profile",
			});
		}

		if (!user) {
			return res.send({
				success: false,
				code: 601,
				err: "Can't find user with given ID",
			});
		}

		return res.send({
			success: true,
			code: 200,
			profile: user
		});
	});
}
