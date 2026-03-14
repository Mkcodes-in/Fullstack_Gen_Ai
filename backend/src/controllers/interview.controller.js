import mongoose from "mongoose";
import { createRequire } from "module";
import { generateInterviewReport, generatePdf, generatePdfFromHtml } from "../services/ai.service.js";
import { interviewModel } from "../models/interview.model.js";
import { resumeModel } from "../models/resume.model.js";
const require = createRequire(import.meta.url);
const pdf = require("pdf-parse");

/**
 * @description Controller for generate interview report
 * @route POST /api/interview/
 */
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

/**
 * @description Controller for fetch report by id
 * @route GET /api/interview/report/id
 */

export async function interviewReportById(req, res) {
    try {

        const { id } = req.params;

        // ObjectId validation
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                message: "Invalid interview id"
            });
        }

        const interviewReport = await interviewModel.findOne({
            _id: id,
            user: req.user._id
        });

        if (!interviewReport) {
            return res.status(404).json({
                message: "Interview report not found"
            });
        }

        res.status(200).json({
            message: "Interview report fetched successfully",
            interviewReport
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal server error"
        });
    }
}

/**
 * @description Controller for fetch all reports
 * @route GET /api/interview/
 */
export async function getAllInterviewReport(req, res) {
    try {
        const interviewReports = await interviewModel.find({ user: req.user._id }).sort({ createdAt: -1 }).select('-jobDescription -resume -selfDescription -technicalQuestions -behaviourQuestions -skillGaps -preparationPlan -__v -user');

        res.status(200).json({
            message: "Interview report fetched successfully",
            interviewReports
        });

    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            error: error.message
        })
    }
}

/**
 * @description Controller for generate PDF report
 * @route POST /api/interview/resume/pdf/:id
 */
export async function generateResumePdf(req, res) {
    try {
        const { interviewId } = req.params;

        const interviewReport = await interviewModel.findOne({ _id: interviewId });

        if (!interviewReport) {
            return res.status(404).json({
                message: "Interview report not found!"
            })
        }

        // check resume already created or not
        const isAlreadyGenerated = await resumeModel.findOne({ interviewReportId: interviewId });

        if (isAlreadyGenerated) {
            return res.status(400).json({
                message: "Resume already exists"
            })
        }

        const { resume, selfDescription, jobDescription } = interviewReport;

        const interviewReportHTML = await generatePdf({ resume, selfDescription, jobDescription });

        const aiGeneratedResume = await generatePdfFromHtml(interviewReportHTML);

        await resumeModel.create({
            userId: req.user._id,
            interviewReportId: interviewId,
            resumeHTML: interviewReportHTML
        })

        res.set({
            "Content-Type": "application/pdf",
            "Content-Disposition": `attachment; filename=${interviewId}-resume.pdf`,
        });

        res.send(aiGeneratedResume);
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            error: error.message
        })
    }
}

/**
 * @description Controller for show PDF report
 * @route GET /api/interview/resume/pdf/:id
 */
export async function showResumePdf(req, res) {
    try {
        const { id } = req.params;

        const resumeData = await resumeModel.findOne({ interviewReportId: id, userId: req.user._id });

        if (!resumeData) {
            return res.status(404).json({
                message: "Resume not found!"
            })
        }

        res.set({
            "Content-Type": "application/pdf",
            "Content-Disposition": `attachment; filename=${id}-resume.pdf`,
        });

        const pdfBuffer = await generatePdfFromHtml(resumeData.resumeHTML);

        res.send(pdfBuffer);
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            error: error.message
        })
    }
}

/**
 * @description controller for get all ai generated PDFs
 * @route GET /api/interview/resume/pdf/
 */
export async function getAllGeneratedPdf(req, res) {
    try {
        const allResumes = await resumeModel.find({ userId: req.user._id }).populate({ path: "interviewReportId", select: "-jobDescription -resume -selfDescription -technicalQuestions -behaviourQuestions -skillGaps -preparationPlan -matchScore -atsScore -user" }).select("-__v -userId -_id -resumeHTML");

        if (allResumes.length === 0) {
            return res.status(404).json({
                message: "No resumes found!"
            })
        }

        res.status(200).json({
            message: "Resumes fetched successfully",
            allResumes
        });
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            error: error.message
        })
    }
}