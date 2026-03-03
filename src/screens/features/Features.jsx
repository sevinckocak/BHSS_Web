import React from "react";

import heroBgImg from "../../assets/hero-bg.jpeg";
import logoImg from "../../assets/bhss-logo.png";

import FeaturesHero from "../../sections/FeaturesHero";
import FeaturesGrid from "../../sections/FeaturesGrid";
import TrustBand from "../../sections/TrustBand";
import FeaturesCTA from "../../sections/FeaturesCTA";

import Reveal from "../../component/Reveal";

export default function Features() {
  return (
    <div className="min-h-screen bg-[#e9e6df]">
      <div className="mx-auto w-full max-w-[1760px] px-3 py-5 sm:px-4 md:px-6 lg:px-8">
        <FeaturesHero heroBg={heroBgImg} logo={logoImg} />
        <Reveal delay={0}>
          <FeaturesGrid />
        </Reveal>

        <Reveal delay={120}>
          <TrustBand />
        </Reveal>

        <Reveal delay={240}>
          <FeaturesCTA />
        </Reveal>
      </div>
    </div>
  );
}
