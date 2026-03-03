import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "../screens/landing/Landing";
import Pricing from "../screens/pricing/Pricing";
import Features from "../screens/features/Features";
import HowItWorks from "../screens/howItWorks/HowItWorks";
import About from "../screens/about/About";
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="*" element={<Landing />} />
      <Route path="/features" element={<Features />} />
      <Route path="/howItWorks" element={<HowItWorks />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
