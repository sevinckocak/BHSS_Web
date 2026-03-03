import React from "react";

export default function GlassHero({ heroBg, logo }) {
  return (
    <section className="relative overflow-hidden rounded-[40px] border border-white/10">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#061b19]/95 via-[#061b19]/75 to-[#061b19]/35" />

      <div className="relative px-6 py-10 sm:px-10 sm:py-14">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 backdrop-blur border border-white/10">
              <img src={logo} alt="BHSS" className="h-7 w-7 object-contain" />
            </div>
            <div className="leading-tight">
              <div className="text-white font-semibold">BHSS</div>
              <div className="text-white/60 text-xs">
                Büyükbaş Hayvan Sağlık Sistemi
              </div>
            </div>
          </div>

          <a
            href="/"
            className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur hover:bg-white/10"
          >
            Ana Sayfa
          </a>
        </div>

        <div className="mt-10 max-w-3xl">
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Fiyatlandırma
          </h1>
          <p className="mt-4 text-sm text-white/70 sm:text-base">
            Ücretsiz başlayın. İhtiyacınıza göre Pro veya Pro Max’e geçin.
            Fotoğraf ve soru limitleri çiftçiler için dengeli şekilde ayarlandı.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-white/80 backdrop-blur">
              Akıllı Asistan
            </span>
            <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-white/80 backdrop-blur">
              Foto ile analiz
            </span>
            <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-white/80 backdrop-blur">
              Veteriner iletişimi
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
