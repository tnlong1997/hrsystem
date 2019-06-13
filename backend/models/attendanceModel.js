var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var bcrypt = require('bcrypt-nodejs');

var Schema = mongoose.Schema;

var attendanceSchema = new Schema(
  {
    date: {
      type: String,
      required:[true, 'Date is required'],
    },
    timein: {
      type: String,
      required: [true, 'Timein is required'], 
    },
    timeout: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      default: "",
    },
  }
);

// attendanceSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Attendance', attendanceSchema);
