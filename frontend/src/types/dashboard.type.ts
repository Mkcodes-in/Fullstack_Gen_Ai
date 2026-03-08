export interface Question {
    question: string;
    intention: string;
    answer: string;
}

export interface SkillGap {
    skill: string;
    serverity: 'low' | 'medium' | 'high';
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
    technicalQuestions: Question[];
    behaviourQuestions: Question[];
    skillGaps: SkillGap[];
    preparationPlan: PreparationDay[];
    title: string;
}