var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var Schema = mongoose.Schema;

var attendanceSchema = new Schema(
  {
    date: {
      type: String,
      required:[true, 'Date is required'],
    },
    month: {
      type: String,
      required: [true, 'Month is required'],
    },
    year: {
      type: String,
      required: [true, 'Year is required'],
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
    userID: {
      type: String,
      require: [true, 'UserID is required'],
    }
  }
);

// attendanceSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Attendance', attendanceSchema);
