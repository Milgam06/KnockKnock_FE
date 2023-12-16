import React from "react";
import { Routes, Route } from "react-router-dom";

import {
  CategoryPage,
  RegisterPage,
  MainPage,
  LoginPage,
  CommunityPage,
  NotFoundPage,
  ProfilePage,
} from "./pages";

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/category" element={<CategoryPage />} />
      <Route path="/community/:comm" element={<CommunityPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
