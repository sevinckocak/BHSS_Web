import React from "react";
import Reveal from "../component/Reveal";

export default function MetricsSection() {
  return (
    <section
      id="metrikler"
      className="mt-6 overflow-hidden rounded-[34px] bg-[#07131a] shadow-[0_20px_60px_rgba(0,0,0,0.35)] md:mt-8"
    >
      <div className="relative px-6 py-9 md:px-10 md:py-10">
        <div className="absolute inset-0 opacity-80 [background:radial-gradient(circle_at_18%_45%,rgba(84,255,210,0.16),transparent_42%),radial-gradient(circle_at_78%_40%,rgba(120,180,255,0.12),transparent_46%),radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.08),transparent_52%)]" />

        <div className="relative grid grid-cols-1 items-center gap-8 md:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <div className="flex flex-wrap items-center gap-10">
              <div>
                <div className="text-3xl font-extrabold tracking-tight text-white">
                  10.000+
                </div>
                <div className="mt-1 text-xs text-white/55">
                  Takip Edilen Hayvan
                </div>
              </div>

              <div>
                <div className="text-3xl font-extrabold tracking-tight text-white">
                  %95
                </div>
                <div className="mt-1 text-xs text-white/55">
                  Kullanıcı Memnuniyeti
                </div>
              </div>

              <div>
                <div className="text-3xl font-extrabold tracking-tight text-white">
                  %40
                </div>
                <div className="mt-1 text-xs text-white/55">
                  Daha Hızlı Kayıt Girişi
                </div>
              </div>

              <div>
                <div className="text-3xl font-extrabold tracking-tight text-white">
                  Gerçek Zamanlı
                </div>
                <div className="mt-1 text-xs text-white/55">Sağlık İzleme</div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="md:pl-10">
              <h3 className="text-2xl font-extrabold text-[#77ffe0]">
                Sürü İçin Akıllı İçgörüler
              </h3>
              <p className="mt-3 text-[13px] leading-relaxed text-white/58">
                Erken uyarı bildirimleri, olası hastalık tespiti ve veri odaklı
                sürü optimizasyonu.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
