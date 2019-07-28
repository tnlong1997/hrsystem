var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var Schema = mongoose.Schema;

var promotionSchema = new Schema({
	Education: {
		type: Number
	},
    JobInvolvement: {
 		type: Number
 	},
    MonthlyIncome: {
 		type: Number
 	},
    NumCompaniesWorked: {
 		type: Number
 	},
    PercentSalaryHike: {
 		type: Number
 	},
    PerformanceRating: {
 		type: Number
 	},
    TotalWorkingYears: {
 		type: Number
 	},
    YearsAtCompany: {
 		type: Number
 	},
    Name:  {
 		type: String
 	},
});

module.exports = mongoose.model('Promotion', promotionSchema);
