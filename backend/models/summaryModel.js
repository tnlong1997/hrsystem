var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var summarySchema = new Schema(
  {
    empID: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, "empId is required"],
    },
    month: {
      type: String,
      required: [true, "month is required"],
    },
    year: {
      type: String,
      required: [true, "year is required"],
    },
    total_days: {
      type: String,
      required: [true, "total days are required"],
    },
    leave_pay: {
      type: String,
      required: [true, "leave pay is required"],
    },
    leave_withoutpay: {
      type: String,
      required: [true, "leave without pay is required"],
    },
    kpi_done: {
      type: String,
      required: [true, "kpi is required"],
    },
    overtime: {
      type: String,
      required: [true, "overtime is required"],
    },
    fixed_salary: {
      type: String,
      required: [true, "fixed salary is required"],
    },
    salary: {
      type: String,
      default: "N/A",
    }
  }
);
module.exports = mongoose.model('Summary', summarySchema);
