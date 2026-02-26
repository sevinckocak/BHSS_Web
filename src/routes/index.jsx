import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "../screens/landing/Landing";
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="*" element={<Landing />} />
    </Routes>
  );
}
