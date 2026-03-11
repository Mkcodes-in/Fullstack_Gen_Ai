import { useAuth } from "@/hooks/Auth.hook";
import { Navigate, Outlet } from "react-router-dom";
import Loader from "./Loader";

export default function ProtectedRoute() {

    const { auth, loading } = useAuth();
    
    if (loading) return <Loader />;

    return auth ? <Outlet /> : <Navigate to="/login" replace />;
}