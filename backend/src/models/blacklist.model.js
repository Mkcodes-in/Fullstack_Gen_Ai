import mongoose from "mongoose";

const blacklistSchema = new mongoose.Schema({
    token: {
        type: String,
        required: [true, "token is requried to be blacklist"]
    }
})

export const blacklistModel = mongoose.model('blacklist', blacklistSchema); 