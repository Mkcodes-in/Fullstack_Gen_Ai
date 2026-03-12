import { login, logout, register } from "@/api/auth.api";
import { AuthContext } from "@/context/auth.context"
import type { LoginUserType, registerUserType } from "@/types/auth.type";
import { useContext } from "react"

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) throw new Error("Auth can be create issue");

    const { auth, loading, setLoading, setAuth } = context;

    async function handleRegister(data: registerUserType) {
        try {
            setLoading(true);
            const res = await register(data);
            return res;
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    async function handleLogin(data: LoginUserType) {
        try {
            setLoading(true);
            const res = await login(data);
            setAuth(res.user);
            return res;
        } catch (error) {
            if(error instanceof Error){
                console.log(error.message);
            }
            throw error;
        } finally {
            setLoading(false);
        }
    }

    async function handleLogout() {
        try {
            setLoading(true);
            const res = await logout();
            setAuth(null);
            return res;
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    return { auth, loading, handleRegister, handleLogin, handleLogout };
}