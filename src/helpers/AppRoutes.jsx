import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MasterLayout from "../layout/MasterLayout";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import MainLayout from "../pages/MainLayout";

const AppRoutes = () => (
  <Routes>
    {/* Authentication Pages */}
    <Route path="/signin" element={<SignIn />} />
    <Route path="/signup" element={<SignUp />} />

    {/* Main Application */}
    <Route path="/dashboard" element={<MainLayout />} />
    <Route path="/" element={<MainLayout />} />

    {/* Redirect any other path to signin */}
    <Route path="*" element={<Navigate to="/signin" />} />
  </Routes>
);

export default AppRoutes;
