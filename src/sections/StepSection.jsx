import React from "react";
import AddAnimalCard from "../component/AddAnimalCard";
import ChatCard from "../component/ChatCard";
import VaccinationCalendarCard from "../component/VaccinationCalendarCard";
import NotificationCard from "../component/NotificationCard";
import ChatbotCard from "../component/ChatbotCard";
import Reveal from "../component/Reveal";

export default function StepSection({ number, title, desc, reverse }) {
  const renderCard = () => {
    switch (number) {
      case "01":
        return <AddAnimalCard />;
      case "02":
        return <VaccinationCalendarCard />;
      case "03":
        return <NotificationCard />;
      case "04":
        return <ChatCard />;
      case "05":
        return <ChatbotCard />;
      default:
        return null;
    }
  };

  const stageOffset =
    number === "02" || number === "04"
      ? "lg:translate-y-6"
      : "lg:-translate-y-2";

  return (
    <section
      className={[
        "grid items-center gap-10",
        "lg:grid-cols-[1.1fr_.9fr] lg:gap-16",
        reverse ? "lg:[&>*:first-child]:order-2" : "",
      ].join(" ")}
    >
      {/* TEXT SIDE (reveal) */}
      <Reveal delay={0}>
        <div>
          <div className="text-sm font-semibold tracking-widest text-black/40">
            ADIM {number}
          </div>

          <h2 className="mt-3 text-3xl font-bold text-black sm:text-4xl">
            {title}
          </h2>

          <p className="mt-6 text-black/70 text-base leading-relaxed max-w-lg">
            {desc}
          </p>
        </div>
      </Reveal>

      {/* PRODUCT SHOWCASE SIDE (reveal) */}
      <Reveal delay={160}>
        <div className="relative flex justify-center">
          <div className={["relative p-6 sm:p-8", stageOffset].join(" ")}>
            <div className="absolute -inset-10 -z-10 rounded-[56px] bg-gradient-to-br from-black/12 to-transparent blur-3xl opacity-80" />
            {renderCard()}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
