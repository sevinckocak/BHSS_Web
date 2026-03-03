import React from "react";
import PlanCard from "../component/PlanCard";

export default function PricingGrid() {
  const free = [
    "Chatbot erişimi",
    "Günde 10 soru",
    "Günde 1 fotoğraf",
    "Temel öneriler ve kayıtlar",
  ];

  const pro = [
    "Sınırsız soru",
    "Günde 50 fotoğraf",
    "Çoklu fotoğraf analiz (3-5 foto)",
    "Öncelikli yanıt",
  ];

  const proMax = [
    "Sınırsız soru",
    "Sınırsız fotoğraf",
    "Gelişmiş çoklu fotoğraf (10’a kadar)",
    "En hızlı yanıt + öncelik",
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
            Planını seç
          </h2>
          <p className="mt-2 text-sm text-white/70">
            Ücretsiz başlayıp istediğin zaman yükseltebilirsin.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <PlanCard
            title="Ücretsiz"
            subtitle="Denemek için ideal"
            price="0 TL"
            period="/ay"
            items={free}
            buttonText="Ücretsiz Başla"
            onButtonClick={() => console.log("Free selected")}
          />

          <PlanCard
            title="Pro"
            subtitle="Günlük kullanım için en iyi"
            price="100 TL"
            period="/ay"
            badge="En Popüler"
            highlight
            items={pro}
            buttonText="Pro’ya Geç"
            onButtonClick={() => console.log("Pro selected")}
          />

          <PlanCard
            title="Pro Max"
            subtitle="Yoğun foto analiz yapanlar"
            price="200 TL"
            period="/ay"
            items={proMax}
            buttonText="Pro Max Al"
            onButtonClick={() => console.log("Pro Max selected")}
          />
        </div>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="text-white font-semibold">Notlar</div>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li>
              • “Sınırsız” planlar normal kullanımda sınırsızdır; sistem
              stabilitesi için aşırı otomatik kullanımlarda koruma devreye
              girebilir.
            </li>
            <li>• Fotoğraf limitleri günlük sıfırlanır.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
