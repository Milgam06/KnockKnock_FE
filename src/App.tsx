import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import { CategoryPage, RegisterPage } from "./pages";
import { LoginPage } from "./pages/Login/loginPage";
import { MainPage } from "./pages/Main/mainPage";

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/category" element={<CategoryPage />} />
    </Routes>
  );
};

export default App;
