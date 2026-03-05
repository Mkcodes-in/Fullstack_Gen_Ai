import { useAuth } from "@/hooks/Auth.hook";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {

    const { auth, loading } = useAuth();

    if (loading) return null;

    return auth ? <Outlet /> : <Navigate to="/login" replace />;
}