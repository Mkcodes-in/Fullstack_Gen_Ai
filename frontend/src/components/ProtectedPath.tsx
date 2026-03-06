import { useAuth } from "@/hooks/Auth.hook"
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedPath() {
    const { auth, loading } = useAuth();

    if (loading) return <p>Loading...</p>;

    return auth ? <Navigate to="/" replace /> : <Outlet />;
}
