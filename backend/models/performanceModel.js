var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var performanceSchema = new Schema(
    {
        kpi: {
            type: String,
            required: [true, "KPI is required"],
        },
        description: {
            type: String,
            required: [true, "Description is required"],
        },
        startdate: {
            type: String,
            default: "N/A",
        },
        enddate: {
            type: String,
            default: "N/A",
        },
        outcomes: {
            type: String,
            default: "N/A",
        },
        review: {
            type: String,
            default: "N/A"
        },
        evaluation: {
            type: String,
            default: "N/A",
        },
        manager: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: [true, "Manager is required"],
        },
        team: {
            type: Schema.Types.ObjectId,
            ref: 'Team',
            required: [true, "Team is required"],
        },
        status: {
            type: String,
            default: "Inactive",
        }
    }
);
module.exports = mongoose.model('Performance', performanceSchema);
