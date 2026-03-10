import type { PreparationDay } from "@/types/dashboard.type"
import { Clock1, SignalMedium } from "lucide-react";

type props = {
    data: PreparationDay[];
}

export default function PreparationPlan({ data }: props) {
    return (
        <div className="space-y-3">
            {/* Route Cards */}
            {data.map((day, i) => (
                <div
                    key={day.day}
                    className={`relative border-slate-200 rounded-2xl p-4 border transition-all`}
                >
                    {/* Route Connector Line */}
                    {i < data.length - 1 && (
                        <div className="absolute left-7 top-12 bottom-0 w-0.5 bg-indigo-500" />
                    )}

                    <div className="flex gap-3">
                        {/* Status Dot */}
                        <div className="relative">
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold bg-indigo-400 text-white`}>
                                {day.day}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                            <div className="flex items-start justify-between mb-1">
                                <div>
                                    <h4 className="font-semibold text-sm text-slate-800">Day {day.day}</h4>
                                    <p className="text-xs font-medium text-indigo-600">{day.focus}</p>
                                </div>
                            </div>

                            {/* Tasks as Chips */}
                            <div className="flex flex-wrap gap-1 mt-2">
                                {day.tasks.split(',').map((task, idx) => (
                                    <span key={idx} className="text-[10px] px-2 py-1 bg-slate-100 rounded-full text-slate-600">
                                        {task.trim()}
                                    </span>
                                ))}
                            </div>

                            {/* Meta Info */}
                            <div className="flex items-center gap-3 mt-2 text-[10px] text-slate-400">
                                <span><Clock1 className='w-4 h-4' /> {'2h'}</span>
                                <span><SignalMedium className='w-4 h-4' /> {'Medium'}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
