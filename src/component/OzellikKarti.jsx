import React, { useRef } from "react";
import Reveal from "./Reveal";

export default function OzellikKarti({ ikonSrc, baslik, aciklama, delay = 0 }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = (y / rect.height - 0.5) * 10;
    const rotateY = (x / rect.width - 0.5) * -10;

    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const resetTilt = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <Reveal delay={delay}>
      <div className="group relative overflow-visible">
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={resetTilt}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] px-6 py-5 backdrop-blur transition-transform duration-200"
        >
          <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="h-full w-full bg-gradient-to-br from-white/10 to-transparent" />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#46f7c6]/18 via-transparent to-[#7aa6ff]/14 blur-xl" />
          </div>

          <div className="pointer-events-none absolute -left-[60%] top-0 h-full w-1/2 skew-x-[-20deg] bg-white/10 opacity-0 transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100" />

          <div className="relative flex flex-col items-start gap-3">
            <div className="flex h-20 w-20 items-center justify-center rounded-xl border border-white/12 bg-white/5">
              <img
                src={ikonSrc}
                alt={baslik}
                className="h-18 w-16 object-contain transition-transform duration-300 group-hover:scale-110"
                draggable={false}
              />
            </div>

            <div className="text-sm font-semibold text-white/90">{baslik}</div>
          </div>
        </div>

        <div className="pointer-events-none absolute left-0 right-0 top-full z-40 mt-3 opacity-0 translate-y-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0">
          <div className="mx-auto h-2 w-2 -translate-y-1 rotate-45 border border-white/10 bg-[#08161d]" />
          <div className="mx-auto max-w-[260px] rounded-2xl border border-white/10 bg-[#08161d]/95 px-4 py-3 text-center shadow-[0_18px_50px_rgba(0,0,0,0.55)] backdrop-blur">
            <div className="text-[12px] font-semibold text-white/90">
              {baslik}
            </div>
            <div className="mt-1 text-[11px] leading-relaxed text-white/60">
              {aciklama}
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
