import React from "react";

export default function HowItWorks() {
  const steps = [
    {
      n: "1",
      title: "Hesap oluştur",
      desc: "Kayıt olarak sürü yönetimine güvenli şekilde başla.",
      highlight: true,
    },
    {
      n: "2",
      title: "Hayvanı ekle",
      desc: "Küpe no, isim ve temel bilgileri kaydet.",
    },
    {
      n: "3",
      title: "Takvimi oluştur",
      desc: "Aşı ve kontrol tarihlerini gir, düzenli takip et.",
    },
    {
      n: "4",
      title: "Bildirim al & iletişim kur",
      desc: "Aşı yaklaşınca uyarı al, gerekirse veterinerle mesajlaş.",
    },
  ];

  return (
    <section className="mt-8 overflow-hidden rounded-[40px] border border-white/10 bg-[#061b19]">
      <div className="relative px-6 py-10 sm:px-10 sm:py-14">
        <div className="max-w-2xl">
          <h3 className="text-2xl font-bold text-white sm:text-3xl">
            Nasıl çalışır?
          </h3>
          <p className="mt-2 text-sm text-white/70">
            4 adımda dijital sürü yönetimine geç.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div
              key={s.n}
              className={[
                "relative rounded-3xl p-6 backdrop-blur border transition duration-300",
                s.highlight
                  ? "border-white/30 bg-white/15 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.9)]"
                  : "border-white/15 bg-white/10 hover:bg-white/15",
              ].join(" ")}
            >
              <div className="flex items-center gap-3">
                <div
                  className={[
                    "flex h-10 w-10 items-center justify-center rounded-2xl font-extrabold",
                    s.highlight
                      ? "bg-white text-[#061b19]"
                      : "bg-white/20 text-white",
                  ].join(" ")}
                >
                  {s.n}
                </div>

                <div className="font-semibold text-white">{s.title}</div>
              </div>

              <div className="mt-3 text-sm text-white/70">{s.desc}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-[11px] text-white/55">
          * Bildirimler cihaz izinlerine bağlıdır. Chatbot bilgilendirme
          amaçlıdır.
        </div>
      </div>
    </section>
  );
}
