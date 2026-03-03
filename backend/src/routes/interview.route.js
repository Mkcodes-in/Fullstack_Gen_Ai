import express from 'express';
import { authMiddleware } from '../middleware/auth.middleware.js';
import { interviewController } from '../controllers/interview.controller.js';
import { upload } from '../middleware/file.middleware.js';

export const interviewRoute = express.Router();

/**
 * @route POST /api/interview/
 * @description generate new interview report on the basis of user self description, resume pdf and job description
 * @access private
 */
interviewRoute.post("/", authMiddleware, upload.single("resume"), interviewController); 