import React from "react";
import ButtonSweep from "../component/ButtonSweep";

export default function Faq() {
  const faqs = [
    {
      q: "Planımı istediğim zaman değiştirebilir miyim?",
      a: "Evet. Pro / Pro Max arasında geçiş yapılabilir. (Ödeme entegrasyonu ile otomatikleşir.)",
    },
    {
      q: "Sınırsız fotoğraf ne demek?",
      a: "Normal kullanımda sınırsızdır. Aşırı otomatik kullanımda sistem koruması devreye girebilir.",
    },
    {
      q: "Ücretsiz planda neler kısıtlı?",
      a: "Deneme amaçlı: günde 1 fotoğraf ve günde 10 soru.",
    },
  ];

  return (
    <section className="mt-8 rounded-[40px] bg-white/60 p-6 sm:p-10">
      <div className="mx-auto max-w-5xl">
        <h3 className="text-xl font-bold text-black">Sık Sorulan Sorular</h3>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {faqs.map((f, i) => (
            <div
              key={i}
              className="rounded-3xl border border-black/10 bg-white/70 p-5 shadow-sm"
            >
              <div className="font-semibold text-black">{f.q}</div>
              <div className="mt-2 text-sm text-black/70">{f.a}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-3xl border border-black/10 bg-white p-6 sm:flex-row sm:items-center">
          <div>
            <div className="text-lg font-semibold text-black">Hazır mısın?</div>
            <div className="mt-1 text-sm text-black/70">
              Ücretsiz başlayıp Pro’ya geçebilirsin.
            </div>
          </div>

          <div className="flex gap-3">
            <a
              href="/"
              className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm font-semibold text-black hover:bg-black/5"
            >
              Ana sayfa
            </a>

            <ButtonSweep
              type="button"
              onClick={() => console.log("Start free from CTA")}
              className="bg-black text-white border-black"
            >
              Ücretsiz Başla
            </ButtonSweep>
          </div>
        </div>
      </div>
    </section>
  );
}
