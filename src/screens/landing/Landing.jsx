import React, { useMemo } from "react";

import ChatCard from "../../component/ChatCard";
import AddAnimalCard from "../../component/AddAnimalCard";

import heroBg from "../../assets/hero-bg.jpeg";
import logo from "../../assets/bhss-logo.png";
import phoneHero from "../../assets/phone-1.png";
import p1 from "../../assets/phone-2.png";
import p2 from "../../assets/phone-3.png";
import p3 from "../../assets/phone-4.png";
import p4 from "../../assets/phone-5.png";

import iconTracking from "../../assets/hayvan-takibi.png";
import iconVaccine from "../../assets/asi-kayitlari.png";
import iconAssistant from "../../assets/akilli-asistan.png";
import iconVet from "../../assets/veteriner-iletisim.png";

import HeroSection from "../../sections/HeroSection";
import MetricsSection from "../../sections/MetricsSection";
import ScreensSection from "../../sections/ScreensSection";
import CtaSection from "../../sections/CtaSection";

import { makeFeatures } from "../../data/features";

export default function Landing() {
  const features = useMemo(
    () => makeFeatures({ iconTracking, iconVaccine, iconAssistant, iconVet }),
    [],
  );

  return (
    <div className="min-h-screen bg-[#e9e6df]">
      <div className="mx-auto w-full max-w-[1760px] px-3 py-5 sm:px-4 md:px-6 lg:px-8">
        <HeroSection
          heroBg={heroBg}
          logo={logo}
          phoneHero={phoneHero}
          features={features}
        />
        <MetricsSection />
        <ScreensSection
          p1={p1}
          p2={p2}
          p3={p3}
          p4={p4}
          ChatCard={ChatCard}
          AddAnimalCard={AddAnimalCard}
        />
        <CtaSection />
      </div>
    </div>
  );
}
