import React from "react";

export default function AboutPrinciples() {
  const items = [
    {
      title: "Saha önce gelir",
      desc: "Zayıf internet, hızlı kullanım ve pratik ekranlar. Gösteriş değil iş.",
    },
    {
      title: "Netlik",
      desc: "Karmaşık menüler yerine tek ekranda anlaşılır akışlar.",
    },
    {
      title: "Güven",
      desc: "Kayıtların düzenli, erişim kontrollü. Takip edilebilir bir sistem.",
    },
    {
      title: "Geri bildirimle gelişir",
      desc: "Çiftçi ve veterinerden gelen ihtiyaçlara göre güncelleriz.",
    },
  ];

  return (
    <section className="relative mt-8 overflow-hidden rounded-[40px] border border-white/10 bg-[#061b19]">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="relative px-6 py-10 sm:px-10 sm:py-14">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Ürün yaklaşımımız
          </h2>
          <p className="mt-2 text-sm text-white/70">
            “Klişe vaatler” değil; sahada işe yarayan kararlar.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur"
            >
              <div className="text-white font-semibold">{it.title}</div>
              <div className="mt-2 text-sm text-white/70">{it.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
