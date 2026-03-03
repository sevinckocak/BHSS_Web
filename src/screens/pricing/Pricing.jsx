import React from "react";

import heroBgImg from "../../assets/hero-bg.jpeg";
import logoImg from "../../assets/bhss-logo.png";

import GlassHero from "../../sections/GlassHero";
import PricingGrid from "../../sections/PricingGrid";
import Faq from "../../sections/Faq";

import Reveal from "../../component/Reveal";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-[#e9e6df]">
      <div className="mx-auto w-full max-w-[1760px] px-3 py-5 sm:px-4 md:px-6 lg:px-8">
        <GlassHero heroBg={heroBgImg} logo={logoImg} />
        <Reveal delay={0}>
          <PricingGrid />
        </Reveal>

        <Reveal delay={140}>
          <Faq />
        </Reveal>
      </div>
    </div>
  );
}
