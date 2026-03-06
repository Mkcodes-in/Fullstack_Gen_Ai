import type { LoginUserType, registerUserType } from "@/types/auth.type";
import { api } from "./api";
import axios from "axios";

export async function register(data: registerUserType) {
    try {
        const { username, email, password } = data;
        const res = await api.post('/api/auth/register', {
            username,
            email,
            password
        });
        return res.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(
                error.response?.data?.message || "Registration failed"
            );
        }
        throw new Error("Something went wrong");
    }
}

export async function login(data: LoginUserType) {
    try {
        const { email, password } = data;
        const res = await api.post('/api/auth/login', {
            email,
            password
        });
        return res.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(
                error.response?.data?.message || "Login failed"
            );
        }
        throw new Error("Something went wrong");
    }
}

export async function profile() {
    try {
        const res = await api.get("/api/auth/get-me");
        return res.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(
                error.response?.data?.message || "Profile fetching failed"
            );
        }
        throw new Error("Something went wrong");
    }
}

export async function logout() {
    try {
        const res = await api.post('/api/auth/logout');
        return res.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(
                error.response?.data?.message || "logout failed"
            );
        }
        throw new Error("Something went wrong");
    }
}