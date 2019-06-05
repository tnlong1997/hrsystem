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
		type: Schema.Types.ObjectId,
		ref: 'User',
		required: [true, "The leader is needed"],
	},
	members: [{
		type: Schema.Types.ObjectId,
		ref: 'User',
	}],
});

teamSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Team', teamSchema);
