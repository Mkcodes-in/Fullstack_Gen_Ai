import type { SkillGap } from "@/types/dashboard.type";
import { AlertTriangle } from "lucide-react";

type props = {
    data: SkillGap[];
    getSeverityColor: (severity: string) => {
        bg: string;
        light: string;
        text: string;
        border: string;
    };
}
export default function SkillGaps({ data, getSeverityColor }: props) {
    return (
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
            <div className="p-4 border-b border-slate-100">
                <h3 className="font-medium text-slate-800">Skill Gaps</h3>
            </div>
            <div className="divide-y divide-slate-100">
                {data.map((gap, index) => {
                    const colors = getSeverityColor(gap.serverity);
                    return (
                        <div key={`${gap.skill}-${index}`} className="p-4 hover:bg-slate-50">
                            <div className="flex items-start gap-3">
                                <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${colors.light}`}>
                                    <AlertTriangle className={`w-3.5 h-3.5 ${colors.text}`} />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between gap-3">
                                        <p className="text-sm font-medium text-slate-800">{gap.skill}</p>
                                        <span className={`text-[10px] px-2 py-1 rounded-full uppercase ${colors.light} ${colors.text}`}>
                                            {gap.serverity}
                                        </span>
                                    </div>
                                    <p className="text-xs text-slate-500 mt-2">
                                        Focus on this area during preparation to reduce risk in interview rounds.
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
