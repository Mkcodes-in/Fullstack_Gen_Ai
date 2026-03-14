import axios from "axios";
import { api } from "./api";

/**
 * @description generate interview report
 * @route POST /api/interview
 */
export async function generateInterviewReport(data: FormData) {
    try {
        const res = await api.post('/api/interview', data);
        return res.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(
                error.response?.data?.message || "Generate Report failed"
            )
        }
        throw new Error("Something went wrong");
    }
}

/**
 * @description get interview report by id
 * @route GET /api/interview/report/:id
 */
export async function getInterviewReport(id: string) {
    try {
        const res = await api.get(`/api/interview/report/${id}`);
        return res.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(
                error.response?.data?.message || "Failed to fetch report"
            )
        }
        throw new Error("Something went wrong");
    }
}

/**
 * @description fetch all generated reports
 * @route GET /api/interview/
 */

export async function getAllInterviewReports() {
    try {
        const res = await api.get("/api/interview");
        return res.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(
                error.response?.data?.message || "Failed to fetch all reports"
            )
        }
        throw new Error("Something went wrong");
    }
}

/**
 * @description generate interview PDF
 * @route POST /api/interview/resume/pdf/:id
 */
export async function getInterviewPDF(id: string) {
    try {
        const res = await api.post(`/api/interview/resume/pdf/${id}`, {
            responseType: "blob"
        });
        return res.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(
                error.response?.data?.message || "Failed to generate PDF"
            )
        }
        throw new Error("Something went wrong");
    }
}

/**
 * @description get interview PDF by id
 * @route GET /api/interview/resume/pdf/:id
 */
export async function getInterviewPdfById(id: string) {
    try {
        const res = await api.get(`/api/interview/resume/pdf/${id}`, {
            responseType: "blob"
        });
        return res.data;
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(
                error.message || "Failed to fetch interview PDF"
            )
        }
        throw Error("Something went wrong");
    }
}

/**
 * @description get All interview PDF
 * @route GET /api/interview/resume/pdf
 */
export async function getAllInterviewPDF() {
    try {
        const res = await api.get("/api/interview/resume/pdf");
        return res.data;
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(
                error.message || "Failed to all fetch interview PDFs"
            )
        }
        throw new Error("Something went wrong");
    }
}