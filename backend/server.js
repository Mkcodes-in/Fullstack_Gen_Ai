import 'dotenv/config';
import { app } from "./src/app.js";
import { connectDB } from './src/config/db.js';
import { resume, selfDescription, jobDescription } from './src/services/tamp.js';
import { generateInterviewReport } from './src/services/ai.service.js';

connectDB();
generateInterviewReport({ resume, selfDescription, jobDescription });

app.listen(process.env.PORT, () => {
    console.log(`server running on port ${process.env.PORT}`);
})