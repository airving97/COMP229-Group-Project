const mongoose = require("mongoose");
const appointmentSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        jobApplicationId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "JobApplication",
            required: true
        },
        appointmentDate: {
            type: Date,
            required: true
        },
        appointmentTime: {
            type: String,
            required: true
        },
        appointmentType: {
            type: String,
            enum: ["In-Person", "Virtual", "Phone"], 
            default: "Virtual"
        },
        meetingLink: {
            type: String,
            trim: true
        },
        status: {
            type: String,
            enum: ["Scheduled", "Completed", "Rescheduled", "Canceled"],
            default: "Scheduled"
        }
    },

    {
        timestamps: true
    }
);
appointmentSchema.index({ userId: 1 });
appointmentSchema.index({ jobApplicationId: 1 });
module.exports = mongoose.model("Appointment", appointmentSchema);

