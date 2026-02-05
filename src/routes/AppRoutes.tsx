import { BrowserRouter, Routes, Route } from "react-router";
import Landing from "../pages/Landing/Landing";
import AccountSettings from "../pages/AccountSettings/AccountSettings";
import Login from "../pages/Auth/Login/Login";
import Signup from "../pages/Auth/Signup/Signup";
import AppLayout from "../components/layout/AppLayout";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                <Route path="/" element={<Landing />} />
                <Route path="/settings" element={<AccountSettings />} />
                <Route path="/auth/login" element={<Login />} />
                <Route path="/auth/signup" element={<Signup />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}