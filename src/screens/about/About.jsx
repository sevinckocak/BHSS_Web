import React from "react";

import heroBgImg from "../../assets/hero-bg.jpeg";
import logoImg from "../../assets/bhss-logo.png";

import AboutHero from "../../sections/AboutHero";
import AboutProblem from "../../sections/AboutProblem";
import AboutPrinciples from "../../sections/AboutPrinciples";
import AboutTrust from "../../sections/AboutTrust";
import AboutCTA from "../../sections/AboutCTA";

import Reveal from "../../component/Reveal";

export default function About() {
  return (
    <div className="min-h-screen bg-[#e9e6df]">
      <div className="mx-auto w-full max-w-[1760px] px-3 py-5 sm:px-4 md:px-6 lg:px-8">
        <AboutHero heroBg={heroBgImg} logo={logoImg} />

        <Reveal delay={0}>
          <AboutProblem />
        </Reveal>

        <Reveal delay={120}>
          <AboutPrinciples />
        </Reveal>

        <Reveal delay={240}>
          <AboutTrust />
        </Reveal>

        <Reveal delay={360}>
          <AboutCTA />
        </Reveal>
      </div>
    </div>
  );
}
