import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: [true, "User name alrady taken"]
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Account already exists with this email address"]
    },
    password: {
        type: String,
        required: true
    }
})

// Hook for bcrypt password into hash
userSchema.pre("save", async function () {
    if (!this.isModified("password")) return;

    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
});

// Hook for indentify previous hash passowrd is valid or not
userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

export const userModel = mongoose.model("user", userSchema);