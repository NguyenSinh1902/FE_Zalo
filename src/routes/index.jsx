import React from "react";
import { Routes, Route } from "react-router-dom";
import LogsPage from "../pages/logs/logs";
import HomePage from "../pages/homePage/homePage";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LogsPage />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
};

export default MyRoutes;
