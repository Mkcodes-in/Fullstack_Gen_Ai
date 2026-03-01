import express from 'express'; 
import { registerUser } from '../controllers/user.controller.js';

export const authRoute = express.Router();

authRoute.post('/register', registerUser); 