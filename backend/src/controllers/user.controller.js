import { userModel } from '../models/user.model.js';

export async function registerUser(req, res) {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({
                message: "username, email or password is required"
            })
        }

        const isUserExists = await userModel.findOne({ email });

        if (isUserExists) {
            return res.status(422).json({
                message: "Email already used"
            })
        }

        const user = await userModel.create({
            username,
            email,
            password
        })

        res.status(201).json({
            message: "User create successfully",
            user
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal server error"
        })
    }
}