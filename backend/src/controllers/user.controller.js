import { userModel } from '../models/user.model.js';
import jwt from 'jsonwebtoken';
import { blacklistModel } from '../models/blacklist.model.js';

/**
 * @name registerUser
 * @description Controller for Auth API
 * @access public
 */
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

/**
* @name loginUser
* @description Controller for Auth API
* @access public 
*/
export async function loginUser(req, res) {
    try {
        const { email, password } = req.body;

        if (!email, !password) {
            return res.status(400).json({
                message: "Email or password is required for login"
            })
        }

        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: "User not found!"
            })
        }

        const hashPass = await user.comparePassword(password);

        if (!hashPass) {
            return res.status(400).json({
                message: "Invalid email or password"
            })
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: '3d',
        });

        res.cookie("token", token);

        res.status(200).json({
            message: "Login success",
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Internal server error"
        })
    }
}

/**
* @name logoutUser
* @description Controller for Auth API
* @access public
*/
export async function logoutUser(req, res) {
    try {
        const token = req.cookies.token;

        if (token) {
            await blacklistModel.create({ token });
        }

        res.clearCookie('token');

        res.status(200).json({
            message: "User logged out successfully"
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Internal server error"
        })
    }
}

/**
 * @name getUserDetails
 * @description Controller for Auth API
 * @access private
 */
export async function getUserDetails(req, res) {
    try {
        res.status(200).json({
            message: "fetched user details successfully",
            user: {
                id: req.user._id,
                username: req.user.username,
                email: req.user.email
            }
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal server error"
        })
    }
}