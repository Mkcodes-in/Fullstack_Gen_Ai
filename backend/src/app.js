import express from 'express';
import cors from 'cors';
import cookieParser from "cookie-parser";
import { authRoute } from './routes/user.route.js';
import { interviewRoute } from './routes/interview.route.js';

export const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}))

/**
 * CREATING API
 * - AUTH USER
 */
app.use("/api/auth", authRoute);

/**
 *  INTERVIEW API
 */

app.use("/api/interview", interviewRoute)