export interface Question {
    question: string;
    intention: string;
    answer: string;
}

export interface SkillGap {
    skill: string;
    serverity: string;
}

export interface PreparationDay {
    day: number;
    focus: string;
    tasks: string;
}

export interface InterviewData {
    jobDescription: string;
    resume: string;
    selfDescription: string;
    matchScore: number;
    atsScore: number;
    technicalQuestions: Question[];
    behaviourQuestions: Question[];
    skillGaps: SkillGap[];
    preparationPlan: PreparationDay[];
    title: string;
}

export interface Reports {
    _id: string;
    matchScore: number;
    title: string;
    createdAt: string;
}

export type Resume = {
    createdAt: string;
    updatedAt: string;
    interviewReportId: {
        _id: string;
        createdAt: string;
        updatedAt: string;
        __v: number;
        title: string;
    };
};