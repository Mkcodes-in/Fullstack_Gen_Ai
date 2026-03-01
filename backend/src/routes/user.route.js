import express from 'express';
import { loginUser, registerUser, logoutUser, getUserDetails } from '../controllers/user.controller.js';
import { authMiddleware } from '../middleware/auth.middleware.js';

export const authRoute = express.Router();

authRoute.post('/register', registerUser);
authRoute.post('/login', loginUser);
authRoute.post('/logout', logoutUser);
authRoute.get('/get-me', authMiddleware, getUserDetails); 