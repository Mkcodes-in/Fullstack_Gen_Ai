import { FileUser, Luggage } from "lucide-react";
import { useForm } from "react-hook-form"

export default function DashboardLayout() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    function onSubmit(data: any) {
        console.log(data)
    }

    return (
        <div className="bg-slate-50 flex items-center justify-center">
            <div className="w-full max-w-5xl bg-white border border-slate-200 rounded-xl shadow-sm p-8">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="grid md:grid-cols-2 gap-8"
                >
                    {/* LEFT SIDE */}
                    <div className="space-y-6">
                        <div>
                            <label className="flex items-center text-lg gap-2 font-medium text-slate-700 mb-2">
                               <Luggage /> Target Job Description
                            </label>

                            <textarea
                                {...register("jobDescription", {
                                    required: "Job Description is required",
                                })}
                                placeholder="Paste the job description here..."
                                className="w-full h-96 rounded-lg border border-slate-300 p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                            />
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="space-y-6">
                        {/* Resume Upload */}
                        <div>
                            <label className="flex items-center gap-2 text-lg font-medium text-slate-700 mb-2">
                                <FileUser /> Upload Resume
                            </label>

                            <input
                                {...register("resume", {
                                    required: "Resume is required",
                                })}
                                type="file"
                                className="hidden"
                            />
                        </div>

                        {/* Self Description */}
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                Quick Self Description
                            </label>

                            <textarea
                                {...register("selfDescription", {
                                    required: "Self Description is required",
                                })}
                                placeholder="Tell us about your experience, skills, and goals..."
                                className="w-full h-32 rounded-lg border border-slate-300 p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="md:col-span-2 flex justify-end">
                        <button
                            type="submit"
                            className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium px-6 py-3 rounded-lg transition"
                        >
                            Generate Interview Plan
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
