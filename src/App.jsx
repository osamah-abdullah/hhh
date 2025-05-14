// App.jsx
import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./helpers/AppRoutes";
import { AuthProvider } from "./auth/context/auth-provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainLayout from "./layout/MainLayout";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ToastContainer />
        <AppRoutes />
        <MainLayout/>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
