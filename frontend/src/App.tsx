import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import ProtectedPath from "./components/ProtectedPath";
import InterviewResults from "./components/InterviewResult";
import { Toaster } from "react-hot-toast";
import ErrorPage from "./pages/ErrorPage";

export default function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route element={<ProtectedRoute />} >
          <Route path="/" element={<Dashboard />} />
          <Route path="/interview/:id" element={<InterviewResults />} />
        </Route>
        <Route element={<ProtectedPath />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  )
}
