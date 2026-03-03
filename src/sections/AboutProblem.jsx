import React from "react";

export default function AboutProblem() {
  const cards = [
    {
      title: "Aşı ve kontroller unutulmasın",
      desc: "Takvim yaklaşınca bildirim al. İş bitince tek dokunuşla tamamlandı işaretle.",
    },
    {
      title: "Veterinere ulaşmak kolay olsun",
      desc: "Yakındaki veterinerleri görüntüle veya seçtiğin veterinerle hızlıca mesajlaş.",
    },
    {
      title: "Kayıtlar kaybolmasın",
      desc: "Her hayvanın notları, foto kayıtları ve geçmiş işlemleri tek yerde dursun.",
    },
  ];

  return (
    <section className="mt-8 rounded-[40px] bg-white/60 p-6 sm:p-10">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-xl font-bold text-black">Neyi çözüyoruz?</h2>
        <p className="mt-2 text-sm text-black/70">
          Sahada en çok zaman alan ve en çok hata yaptıran kısımları
          basitleştiriyoruz.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {cards.map((c) => (
            <div
              key={c.title}
              className="rounded-3xl border border-black/10 bg-white/70 p-5 shadow-sm"
            >
              <div className="font-semibold text-black">{c.title}</div>
              <div className="mt-2 text-sm text-black/70">{c.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
