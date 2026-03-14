import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema({
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
            required: true
        },
        interviewReportId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "interview",
            required: true
        },
        resumeHTML: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

export const resumeModel = mongoose.model("resume", resumeSchema);