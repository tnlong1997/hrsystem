var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

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
    start_month: {
      type: String,
      required: [true, "start time is required"],
    },
    end_date: {
      type: String,
      required: [true, "end date is required"],
    },
    end_month: {
      type: String,
      required: [true, "end time is required"],
    },
    duration: {
      type: String,
      required: [true, "duration is required"],
    },
    reason: {
      type: String,
      required: [true, "reason is required"],
    },
    status: {
      type: String,
      default: "Pending",
    },
    decline: {
      type: String,
      default: "",
    }
  }
);

leaveSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Leave', leaveSchema);
