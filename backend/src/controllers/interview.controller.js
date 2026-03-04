import { createRequire } from "module";
import { generateInterviewReport } from "../services/ai.service.js";
import { interviewModel } from "../models/interview.model.js";
const require = createRequire(import.meta.url);
const pdf = require("pdf-parse");

export async function interviewController(req, res) {
    try {
        if (!req.file) {
            return res.status(400).json({
                message: "No file uploaded"
            });
        }
        const data = await pdf(req.file.buffer);
        const { selfDescription, jobDescription } = req.body;

        const analysisContext = await generateInterviewReport({
            resume: data.text,
            selfDescription,
            jobDescription
        })
        console.log(analysisContext)

        const interviewReport = await interviewModel.create({
            user: req.user._id,
            resume: data.text,
            selfDescription,
            jobDescription,
            ...analysisContext
        })

        res.json({
            message: "Interview report generated successfully.",
            interviewReport
        });

    } catch (error) {
        console.error("REAL ERROR:", error);
        res.status(500).json({
            message: "Internal server error"
        });
    }
}