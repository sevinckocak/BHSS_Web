import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "../screens/landing/Landing";
import Pricing from "../screens/pricing/Pricing";
import Features from "../screens/features/Features";
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="*" element={<Landing />} />
      <Route path="/features" element={<Features />} />
    </Routes>
  );
}
