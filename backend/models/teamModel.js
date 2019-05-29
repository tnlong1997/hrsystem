var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var bcrypt = require('bcrypt-nodejs');

var Schema = mongoose.Schema;

var teamSchema = new Schema({
	teamName: {
		type: String,
		required: [true, "The team name is needed"],
	},
	leader: {
		type: String,
		required: [true, "The leader is needed"],
	},
	members: [String],
});

module.exports = mongoose.model('Team', teamSchema);
