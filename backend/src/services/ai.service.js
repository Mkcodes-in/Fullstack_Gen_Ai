import { GoogleGenAI } from "@google/genai";
import { z } from "zod";

const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_GENAI_API_KEY
});

const interviewReportSchema = z.object({
    title: z.string().min(1),
    matchScore: z.number().min(0).max(100),
    atsScore: z.number().min(0).max(100),
    technicalQuestions: z.array(
        z.object({
            question: z.string().min(1),
            intention: z.string().min(1),
            answer: z.string().min(1)
        })
    ).min(1),
    behaviourQuestions: z.array(
        z.object({
            question: z.string().min(1),
            intention: z.string().min(1),
            answer: z.string().min(1)
        })
    ).min(1),
    skillGaps: z.array(
        z.object({
            skill: z.string().min(1),
            serverity: z.enum(["low", "medium", "high"])
        })
    ),
    preparationPlan: z.array(
        z.object({
            day: z.number().int().min(1),
            focus: z.string().min(1),
            tasks: z.string().min(1)
        })
    ).min(1)
}).strict();

const interviewReportResponseSchema = {
    type: "OBJECT",
    required: [
        "title",
        "matchScore",
        "atsScore",
        "technicalQuestions",
        "behaviourQuestions",
        "skillGaps",
        "preparationPlan"
    ],
    properties: {
        title: {
            type: "STRING",
            description: "Title of the role the report is generated for"
        },
        matchScore: {
            type: "NUMBER",
            description: "A number from 0 to 100 for profile fit"
        },
        atsScore: {
            type: "NUMBER",
            description: "A number from 0 to 100 for resume ATS compatibility"
        },
        technicalQuestions: {
            type: "ARRAY",
            items: {
                type: "OBJECT",
                required: ["question", "intention", "answer"],
                properties: {
                    question: { type: "STRING" },
                    intention: { type: "STRING" },
                    answer: { type: "STRING" }
                }
            }
        },
        behaviourQuestions: {
            type: "ARRAY",
            items: {
                type: "OBJECT",
                required: ["question", "intention", "answer"],
                properties: {
                    question: { type: "STRING" },
                    intention: { type: "STRING" },
                    answer: { type: "STRING" }
                }
            }
        },
        skillGaps: {
            type: "ARRAY",
            items: {
                type: "OBJECT",
                required: ["skill", "serverity"],
                properties: {
                    skill: { type: "STRING" },
                    serverity: {
                        type: "STRING",
                        enum: ["low", "medium", "high"]
                    }
                }
            }
        },
        preparationPlan: {
            type: "ARRAY",
            items: {
                type: "OBJECT",
                required: ["day", "focus", "tasks"],
                properties: {
                    day: { type: "NUMBER" },
                    focus: { type: "STRING" },
                    tasks: { type: "STRING" }
                }
            }
        }
    }
};

function extractJsonText(rawText) {
    if (!rawText) return "";

    const trimmed = rawText.trim();
    const fencedMatch = trimmed.match(/```(?:json)?\s*([\s\S]*?)\s*```/i);

    if (fencedMatch?.[1]) return fencedMatch[1].trim();
    return trimmed;
}

export async function generateInterviewReport({ resume, selfDescription, jobDescription }) {
    const prompt = `Generate an interview report JSON only. Do not add markdown or explanations.

Include:
- matchScore: overall profile fit score from 0 to 100
- atsScore: resume ATS compatibility score from 0 to 100 based on keyword alignment, clarity, and relevance

Resume:
${resume}

Self Description:
${selfDescription}

Job Description:
${jobDescription}`;

    const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseSchema: interviewReportResponseSchema,
            temperature: 0.2
        }
    });

    const jsonText = extractJsonText(response.text);

    let parsed;
    try {
        parsed = JSON.parse(jsonText);
    } catch {
        throw new Error("AI returned invalid JSON for interview report");
    }

    const validated = interviewReportSchema.safeParse(parsed);
    if (!validated.success) {
        throw new Error(`AI response failed schema validation: ${validated.error.message}`);
    }

    return validated.data;
}
