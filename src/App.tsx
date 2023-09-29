import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import { CategoryPage, RegisterPage } from "./pages";
import { CommunityPage } from "./pages/Community/communityPage";
import { LoginPage } from "./pages/Login/loginPage";
import { MainPage } from "./pages/Main/mainPage";

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/category" element={<CategoryPage />} />
      <Route path="/community/:comm" element={<CommunityPage />} />
    </Routes>
  );
};

export default App;
