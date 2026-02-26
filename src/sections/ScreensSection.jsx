import React from "react";
import Reveal from "../component/Reveal";

export default function ScreensSection({
  p1,
  p2,
  p3,
  p4,
  ChatCard,
  AddAnimalCard,
}) {
  return (
    <section className="mt-6 overflow-hidden rounded-[34px] bg-[#f1efe8] shadow-[0_20px_60px_rgba(0,0,0,0.22)] md:mt-8">
      <div className="relative px-5 py-7 md:px-8 md:py-8">
        <div className="pointer-events-none absolute inset-0 opacity-80 [background:radial-gradient(circle_at_50%_38%,rgba(0,0,0,0.10),transparent_60%),radial-gradient(circle_at_22%_62%,rgba(0,0,0,0.05),transparent_55%),radial-gradient(circle_at_78%_62%,rgba(0,0,0,0.05),transparent_55%)]" />

        <div className="relative grid grid-cols-1 items-center gap-7 md:grid-cols-[320px_minmax(0,1fr)_320px] md:gap-8">
          {/* LEFT CARD */}
          <Reveal>
            <div className="relative">
              <div className="pointer-events-none absolute -inset-5 rounded-[34px] bg-white/35 blur-2xl" />

              <div className="group relative overflow-hidden rounded-[26px] border border-white/45 bg-white/22 p-5 backdrop-blur-xl shadow-[0_22px_55px_rgba(0,0,0,0.16)]">
                {/* sweep highlight */}
                <span className="pointer-events-none absolute left-0 top-0 h-full w-0 bg-white/12 transition-all duration-700 group-hover:w-full" />
                <span className="pointer-events-none absolute -left-[60%] top-0 h-full w-1/2 skew-x-[-20deg] bg-white/18 opacity-0 transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100" />

                <div className="relative">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/35 px-3 py-2 text-[11px] font-semibold text-black/60 shadow-[0_10px_22px_rgba(0,0,0,0.10)]">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-black/[0.05] ring-1 ring-black/10">
                      <span className="text-[11px] font-bold text-black/55">
                        01
                      </span>
                    </span>
                    Özellik
                  </div>

                  <div className="mt-4">
                    <div className="text-[18px] font-extrabold tracking-tight text-black/75">
                      Hayvanlarını Ekle
                    </div>
                    <div className="mt-1 text-[12px] leading-relaxed text-black/45">
                      Uygulamaya gir ve sürünü oluştur.
                    </div>
                  </div>

                  <div className="relative mt-5 flex justify-center">
                    <div className="pointer-events-none absolute -inset-5 rounded-[28px] bg-gradient-to-br from-black/10 via-transparent to-black/10 blur-2xl" />
                    <div className="relative w-full max-w-[300px] origin-top scale-[0.82] transition-transform duration-300 group-hover:scale-[0.86]">
                      <AddAnimalCard />
                    </div>
                  </div>

                  <div className="mt-5 text-center text-[11px] text-black/35">
                    Hayvan ekle • Detayları kaydet • Takip et
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* CENTER PHONES */}
          <div className="min-w-0">
            <div className="mx-auto grid max-w-[520px] grid-cols-2 place-items-center gap-x-8 gap-y-8">
              {[p1, p2, p3, p4].map((img, i) => (
                <Reveal key={i} delay={120 + i * 70}>
                  <img
                    src={img}
                    alt={`ekran ${i + 1}`}
                    className={[
                      "w-[130px] md:w-[140px] drop-shadow-[0_26px_60px_rgba(0,0,0,0.20)] transition-transform duration-300",
                      "hover:-translate-y-1 hover:scale-[1.02]",
                      i < 2 ? "-translate-y-0.5" : "translate-y-0.5",
                    ].join(" ")}
                  />
                </Reveal>
              ))}
            </div>
          </div>

          {/* RIGHT CARD */}
          <Reveal delay={120}>
            <div className="relative">
              <div className="pointer-events-none absolute -inset-5 rounded-[34px] bg-white/35 blur-2xl" />

              <div className="group relative overflow-hidden rounded-[26px] border border-white/45 bg-white/22 p-5 backdrop-blur-xl shadow-[0_22px_55px_rgba(0,0,0,0.16)]">
                {/* sweep highlight */}
                <span className="pointer-events-none absolute left-0 top-0 h-full w-0 bg-white/12 transition-all duration-700 group-hover:w-full" />
                <span className="pointer-events-none absolute -left-[60%] top-0 h-full w-1/2 skew-x-[-20deg] bg-white/18 opacity-0 transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100" />

                <div className="relative">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/35 px-3 py-2 text-[11px] font-semibold text-black/60 shadow-[0_10px_22px_rgba(0,0,0,0.10)]">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-black/[0.05] ring-1 ring-black/10">
                      <span className="text-[11px] font-bold text-black/55">
                        02
                      </span>
                    </span>
                    Özellik
                  </div>

                  <div className="mt-4">
                    <div className="text-[18px] font-extrabold tracking-tight text-black/75">
                      Veterinerle İletişime Geç
                    </div>
                    <div className="mt-1 text-[12px] leading-relaxed text-black/45">
                      Sorunu yaz, hızlı yanıt al ve kayıt altına al.
                    </div>
                  </div>

                  <div className="relative mt-5 flex justify-center">
                    <div className="pointer-events-none absolute -inset-5 rounded-[28px] bg-gradient-to-br from-black/10 via-transparent to-black/10 blur-2xl" />
                    <div className="relative w-full max-w-[300px] origin-top scale-[0.82] transition-transform duration-300 group-hover:scale-[0.86]">
                      <ChatCard />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
