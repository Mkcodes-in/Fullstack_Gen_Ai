import jwt from 'jsonwebtoken';
import { userModel } from '../models/user.model.js';
import { blacklistModel } from '../models/blacklist.model.js';

export async function authMiddleware(req, res, next) {
    try {

        const token = req.cookies.token;

        if (!token) {
            return res.status(403).json({
                message: "token missing"
            })
        }

        const isTokenBlacklisted = await blacklistModel.findOne({ token });

        if (isTokenBlacklisted) {
            res.status(400).json({
                message: "Invalid token"
            })
        }

        const decode = jwt.verify(token, process.env.JWT_SECRET);

        const user = await userModel.findOne({ _id: decode.id });

        req.user = user;

        next();

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal server error"
        })
    }
}