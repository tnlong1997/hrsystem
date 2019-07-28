var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var Schema = mongoose.Schema;

var satisfactionSchema = new Schema({
	DistanceFromHome: {
		type: Number,
	},
    EnvironmentSatisfaction: {
		type: Number,
	},
    JobInvolvement: {
		type: Number,
	},
    JobSatisfaction: {
		type: Number,
	},
    PerformanceRating: {
		type: Number,
	},
    RelationshipSatisfaction: {
 		type: Number,
 	},
    WorkLifeBalance: {
 		type: Number,
 	},
    YearsAtCompany: {
 		type: Number,
 	},
    YearsSinceLastPromotion: {
 		type: Number,
 	},
    MonthlyIncome: {
		type: Number,
	},
    OverTime : {
		type: String,
	},
    Name: {
		type: String,
	}
});

module.exports = mongoose.model('Satisfaction', satisfactionSchema);
