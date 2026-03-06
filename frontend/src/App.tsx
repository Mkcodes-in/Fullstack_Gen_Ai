import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import ProtectedPath from "./components/ProtectedPath";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<ProtectedRoute />} >
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<ProtectedPath />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
  )
}
