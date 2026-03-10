import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import type { Question } from "@/types/dashboard.type";

type Props = {
    questionArr: Question[];
    selectedCategory: string;
    category: "technical" | "behavioral";
    title: string;
    answerLabel: string;
    accentColorClass: string;
    accentBgClass: string;
};

export default function RenderQuestions({ questionArr, selectedCategory, category, title, answerLabel, accentColorClass, accentBgClass }: Props) {
    const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

    const toggleExpand = (id: string) => {
        setExpandedItems((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    if (selectedCategory !== "all" && selectedCategory !== category) {
        return null;
    }

    return (
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
            <div className="p-4 border-b border-slate-100">
                <h3 className="font-medium text-slate-800">{title}</h3>
            </div>
            <div className="divide-y divide-slate-100">
                {questionArr.map((item, index) => (
                    <div key={`${item.question}-${index}`} className="p-4 hover:bg-slate-50">
                        <div className="flex items-start gap-3">
                            <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${accentBgClass}`}>
                                <span className={`text-xs font-medium ${accentColorClass}`}>{index + 1}</span>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-slate-800 mb-1">{item.question}</p>
                                <p className="text-xs text-slate-500 mb-2">{item.intention}</p>
                                <button
                                    onClick={() => toggleExpand(`${category}-${index}`)}
                                    className={`text-xs flex items-center gap-1 ${accentColorClass} cursor-pointer`}
                                    type="button"
                                >
                                    {expandedItems[`${category}-${index}`] ? "Hide" : "Show"} {answerLabel}
                                    {expandedItems[`${category}-${index}`] ? (
                                        <ChevronDown className="w-3 h-3" />
                                    ) : (
                                        <ChevronRight className="w-3 h-3" />
                                    )}
                                </button>
                                {expandedItems[`${category}-${index}`] && (
                                    <div className={`mt-3 p-3 rounded-lg ${accentBgClass}`}>
                                        <p className="text-xs text-slate-600">{item.answer}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
