var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var bcrypt = require('bcrypt-nodejs');

var Schema = mongoose.Schema;

var leaveSchema = new Schema(
  {
    leave_type: {
      type: String,
      required: [true, 'leave type is required'],
    },
    employee: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required:[true, 'employee is required'],
    },
    leader: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, "manager is required"],
    },
    start_date: {
      type: String,
      required: [true, 'start date is required'],
    },
    start_time: {
      type: String,
      default: "N/A",
    },
    end_date: {
      type: String,
      required: [true, "end date is required"],
    },
    end_time: {
      type: String,
      default: "N/A",
    },
    reason: {
      type: String,
      required: [true, "reason is required"],
    },
    status: {
      type: String,
      default: "Pending",
    }
  }
);

leaveSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Leave', leaveSchema);
