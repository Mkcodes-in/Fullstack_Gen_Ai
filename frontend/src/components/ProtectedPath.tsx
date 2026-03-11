import { useAuth } from "@/hooks/Auth.hook"
import { Navigate, Outlet } from "react-router-dom";
import Loader from "./Loader";

export default function ProtectedPath() {
    const { auth, loading } = useAuth();

    if (loading) return <Loader />;

    return auth ? <Navigate to="/" replace /> : <Outlet />;
}
