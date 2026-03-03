import React from "react";

export default function TrustBand() {
  const items = [
    {
      title: "Düzenli takip",
      desc: "Aşı ve kontrol tarihlerini kaçırmamak için tek merkez.",
    },
    {
      title: "Hızlı iletişim",
      desc: "Veterinerle konuşmayı, fotoğraf atmayı pratikleştirir.",
    },
    {
      title: "Kayıtların yanında",
      desc: "Notlar ve geçmiş işlemler her zaman elinin altında.",
    },
  ];

  return (
    <section className="mt-8 overflow-hidden rounded-[40px] border border-white/10 bg-[#061b19]">
      <div className="relative px-6 py-10 sm:px-10 sm:py-14">
        <div className="max-w-2xl">
          <h3 className="text-2xl font-bold text-white sm:text-3xl">
            Saha odaklı tasarlandı
          </h3>
          <p className="mt-2 text-sm text-white/70">
            Çiftçinin günlük akışına uygun: hızlı, net, pratik.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
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

        <div className="mt-8 text-[11px] text-white/55">
          * Chatbot, bilgilendirme ve yönlendirme amaçlıdır; tıbbi teşhis yerine
          geçmez.
        </div>
      </div>
    </section>
  );
}
