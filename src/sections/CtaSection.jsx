import React from "react";
import Reveal from "../component/Reveal";
import ButtonSweep from "../component/ButtonSweep";

export default function CtaSection() {
  return (
    <section className="mt-6 overflow-hidden rounded-[34px] bg-[#07131a] shadow-[0_20px_60px_rgba(0,0,0,0.35)] md:mt-8">
      <div className="relative px-6 py-14 text-center md:px-10 md:py-16">
        <div className="absolute inset-0 opacity-70 [background:radial-gradient(circle_at_20%_30%,rgba(84,255,210,0.14),transparent_40%),radial-gradient(circle_at_80%_55%,rgba(120,180,255,0.12),transparent_45%)]" />

        <Reveal>
          <h2 className="relative text-2xl font-extrabold text-white">
            Sürünü Akıllı Şekilde Yönetmeye Başla
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative mt-6 flex justify-center gap-3">
            <ButtonSweep className="border-[#77ffe0]/55 text-white">
              Uygulamayı İndir
            </ButtonSweep>
            <ButtonSweep className="border-white/18 text-white/85">
              İletişime Geç
            </ButtonSweep>
          </div>
        </Reveal>

        <Reveal delay={180}>
          <div className="relative mt-12 flex flex-wrap items-center justify-center gap-8 text-xs text-white/45">
            <p>
              © 2026 BHSS | Büyükbaş Hayvan Sağlık Sistemi Tüm hakları saklıdır
            </p>

            <a href="#kaynaklar" className="hover:text-white/70 transition">
              Kaynaklar
            </a>
            <a href="#destek" className="hover:text-white/70 transition">
              Destek
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
