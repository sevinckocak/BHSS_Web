import React from "react";
import Reveal from "../component/Reveal";
import ButtonSweep from "../component/ButtonSweep";
import HoverUnderlineLink from "../component/HoverUnderlineLink";
import OzellikKarti from "../component/OzellikKarti";

export default function HeroSection({ heroBg, logo, phoneHero, features }) {
  return (
    <section className="relative overflow-hidden rounded-[34px] bg-[#07131a] shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
      <div
        className="absolute inset-0 opacity-35"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#081a20]/40 via-[#06131a]/70 to-[#06131a]" />
      <div className="absolute inset-0">
        <div className="h-full w-full opacity-60 [background:radial-gradient(circle_at_20%_30%,rgba(84,255,210,0.20),transparent_40%),radial-gradient(circle_at_80%_40%,rgba(120,180,255,0.16),transparent_45%),radial-gradient(circle_at_55%_75%,rgba(255,255,255,0.10),transparent_45%)]" />
      </div>

      <div className="relative px-6 py-7 md:px-10 md:py-10">
        <Reveal>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-white">
              <div className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <img
                  src={logo}
                  alt="BHSS Logo"
                  className="h-full w-full object-contain p-2"
                />
              </div>

              <div className="flex flex-col leading-tight">
                <span className="text-sm font-bold tracking-wide">BHSS</span>
                <span className="text-[11px] text-white/55">
                  Büyükbaş Hayvan Sağlık Sistemi
                </span>
              </div>
            </div>

            <div className="hidden items-center gap-8 text-sm md:flex">
              <HoverUnderlineLink href="#features">
                Özellikler
              </HoverUnderlineLink>
              <HoverUnderlineLink href="#howItWorks">
                Nasıl Çalışır
              </HoverUnderlineLink>
              <HoverUnderlineLink to="/pricing">
                Fiyatlandırma
              </HoverUnderlineLink>
              <HoverUnderlineLink href="#aboutUs">
                Hakkımızda
              </HoverUnderlineLink>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 items-center gap-10 md:mt-10 md:grid-cols-2">
          <div>
            <Reveal delay={80}>
              <h1 className="text-[42px] font-extrabold leading-[1.05] tracking-tight text-white md:text-[46px]">
                Sürünüz İçin
                <br />
                <span className="text-white/90">Dijital Sağlık Yönetimi</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-5 max-w-xl text-[13px] leading-relaxed text-white/58">
                Hayvan takibi, aşı kayıtları, yapay zekâ destekli akıllı asistan
                ve veteriner ile anlık iletişim sayesinde sürünüzü tek yerden
                yönetin.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-7 flex items-center gap-3">
                <ButtonSweep className="border-[#77ffe0]/55 text-white">
                  Uygulamayı İndir
                </ButtonSweep>
                <ButtonSweep className="border-white/18 text-white/85">
                  Daha Fazla Bilgi
                </ButtonSweep>
              </div>
            </Reveal>

            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
              {features.map((o, idx) => (
                <OzellikKarti
                  key={o.baslik}
                  baslik={o.baslik}
                  ikonSrc={o.ikonSrc}
                  aciklama={o.aciklama}
                  delay={280 + idx * 90}
                />
              ))}
            </div>
          </div>

          <Reveal
            delay={160}
            className="relative flex justify-center md:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-6 rounded-[40px] bg-gradient-to-br from-[#46f7c6]/15 via-transparent to-[#7aa6ff]/10 blur-2xl" />
              <img
                src={phoneHero}
                alt="BHSS Uygulama Önizleme"
                className="relative w-[180px] sm:w-[200px] md:w-[240px] lg:w-[270px] xl:w-[300px] max-w-full hover:scale-[1.02] transition-transform drop-shadow-[0_20px_50px_rgba(0,0,0,0.45)]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
