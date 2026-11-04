const mongoose = require("mongoose");
const jobApplicationSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        companyName: {
            type: String,
            required: true,
            trim: true
        },
        jobTitle: {
            type: String,
            required: true,
            trim: true
        },
        applicationDate: {
            type: Date,
            default: Date.now
        },
        status: {
            type: String,
            enum: ["Applied", "Under Review", "Interview", "Rejected", "Offered", "Withdrawn"], 
            default: "Applied"
        },
        jobDescription: {
            type: String,
            trim: true
        }
    },
    {
        timestamps: true
    }
);
jobApplicationSchema.index({userId: 1});
module.exports = mongoose.model("JobApplication", jobApplicationSchema);
