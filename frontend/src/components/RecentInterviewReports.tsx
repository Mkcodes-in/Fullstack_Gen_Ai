import type { Reports } from '@/types/dashboard.type';
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useNavigate } from 'react-router-dom';

dayjs.extend(relativeTime);

type props = {
    interviewReports: Reports[];
}

export default function RecentInterviewReports({ interviewReports }: props) {
    const navigate = useNavigate();

    return (
        <div className="mt-6">
            <h2 className="text-lg font-semibold mb-4">Recent Interviews</h2>
            {interviewReports.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-10 text-center border border-slate-200 bg-white rounded-lg">
                    <h2 className="text-lg font-semibold text-slate-500">
                        No Interview Reports Yet
                    </h2>
                </div>
            ) : (
                // Reports List
                interviewReports.map((report) => {
                    const createdDate = report.createdAt;
                    const time = dayjs(createdDate).fromNow();

                    return (
                        <div key={report._id} className="mt-2">
                            <div className="flex items-center justify-between p-5 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">

                                <div className="flex flex-col gap-1">
                                    <p className="font-semibold text-slate-800 text-base">
                                        {report.title}
                                    </p>

                                    <div className="flex items-center gap-3 text-sm text-slate-500">
                                        <span className="bg-indigo-50 text-indigo-600 px-2 py-1 rounded-md font-medium">
                                            Score: {report.matchScore}%
                                        </span>

                                        <span className="text-gray-400">
                                            {time}
                                        </span>
                                    </div>
                                </div>

                                <button
                                    onClick={() => navigate(`/interview/${report._id}`)}
                                    className="px-4 py-2 text-sm font-medium text-indigo-600 border border-indigo-200 rounded-lg hover:bg-indigo-50 transition cursor-pointer">
                                    View Report
                                </button>
                            </div>
                        </div>
                    );
                })
            )}
        </div>
    )
}
