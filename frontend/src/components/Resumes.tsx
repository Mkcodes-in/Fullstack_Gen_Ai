import { getInterviewPdfById } from "@/api/interview.api";
import type { Resume } from "@/types/dashboard.type"
import dayjs from "dayjs";
import { useState } from "react";
import toast from "react-hot-toast";

type props = {
    resumes: Resume[];
}

export default function Resumes({ resumes }: props) {
    const [loading, setLoading] = useState<string | null>(null);

    async function handleDownloadPdf(id: string) {
        try {
            setLoading(id);
            const blob = await getInterviewPdfById(id);
            const file = new Blob([blob], { type: "application/pdf" });
            const url = URL.createObjectURL(file);
            window.open(url, "_blank");

        } catch (error) {
            if (error instanceof Error) {
                toast.error(error.message);
            }
            toast.error("Failed to Generate PDF");
        } finally {
            setLoading(null);
        }
    }

    return (
        <div className="mt-6">
            <h2 className="text-lg font-semibold mb-4">Recent Resume's</h2>
            {resumes.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-10 text-center border border-slate-200 bg-white rounded-lg">
                    <h2 className="text-lg font-semibold text-slate-500">
                        No Interview Reports Yet
                    </h2>
                </div>
            ) : (
                // resume List
                resumes.map((resume) => {
                    const createdDate = resume.createdAt;
                    const time = dayjs(createdDate).fromNow();

                    return (
                        <div key={resume.interviewReportId._id} className="mt-2">
                            <div className="flex items-center justify-between p-5 bg-white rounded-xl border border-slate-200 shadow-sm">

                                <div className="flex flex-col gap-1">
                                    <p className="font-semibold text-slate-800 text-base">
                                        {resume.interviewReportId.title}
                                    </p>

                                    <div className="flex items-center gap-3 text-sm text-slate-500">
                                        <span className="text-gray-400">
                                            {time}
                                        </span>
                                    </div>
                                </div>

                                <button
                                    onClick={() => handleDownloadPdf(resume.interviewReportId._id)}
                                    className="px-4 py-2 text-sm font-medium text-indigo-600 border border-indigo-200 rounded-lg hover:bg-indigo-50 transition cursor-pointer"
                                >
                                    {loading === resume.interviewReportId._id ? "Generating pdf..." : "Download & View PDF"}
                                </button>
                            </div>
                        </div>
                    );
                })
            )}
        </div>
    )
}
