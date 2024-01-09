import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";

import {
  CategoryPage,
  RegisterPage,
  MainPage,
  LoginPage,
  CommunityPage,
  NotFoundPage,
  ProfilePage,
} from "./pages";
import { DefaultLayout } from "./components/layouts";

export const App: React.FC = () => {
  return (
    <Routes>
      <Route
        element={
          <DefaultLayout>
            <Outlet />
          </DefaultLayout>
        }
      >
        <Route path="/" element={<MainPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/community/:comm" element={<CommunityPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
