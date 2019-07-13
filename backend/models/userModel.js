var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var bcrypt = require('bcrypt-nodejs');

var Schema = mongoose.Schema;

var userSchema = new Schema(
	{
		email: {
			type: String,
			required: [true, 'Username is required'],
			// maxlength: 100,
			// minlength: [8, 'Email should be longer than 8 characters'],
			unique: [true, 'This username has been used'],
		},
		password: {
			type: String,
			required: [true, 'Password is required'],
		},
		role: {
			type: String,
			required: [true, 'Role is required'],
		},
		name: {
			type: String,
			required: [true, 'Name is required'],
		},
		dob: {
			type: String,
			default: "",
		},
		address: {
			type: String,
			default: "",
		},
		phoneNumber: {
			type: String,
			default: "",
		},
		gender: {
			type: String,
			default: "",
		},
		status: {
			type: String,
			default: "",
		},
		imageLink: {
			type: String,
			default: "",
		},
		team: {
			type: String,
			default: "",
		},
	}
);

userSchema.methods.comparePassword = function(inputPassword, callback) {
	bcrypt.compare(inputPassword, this.password, function(err, isMatch) {
		if (err) {
			return callback(err);
		}
		callback(null, isMatch);
	});
};

userSchema.methods.toJSON = function() {
	var obj = this.toObject();
 	delete obj.password;
 	return obj;
}

userSchema.plugin(uniqueValidator);

//Export model
module.exports = mongoose.model('User', userSchema);
