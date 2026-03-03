import React from "react";
import FeatureCard from "../component/FeatureCard";

function IconBell(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M12 22a2 2 0 0 0 2-2H10a2 2 0 0 0 2 2Z"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.9"
      />
      <path
        d="M18 8a6 6 0 1 0-12 0c0 7-3 7-3 7h18s-3 0-3-7Z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconCow(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" {...props}>
      <path
        d="M6 10c0-2 2-4 6-4s6 2 6 4v7a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-7Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M7 10V8.5C7 7.12 5.88 6 4.5 6H4v5h1"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.9"
      />
      <path
        d="M17 10V8.5C17 7.12 18.12 6 19.5 6H20v5h-1"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.9"
      />
      <path
        d="M9 14h.01M15 14h.01"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M10 17c.8.7 3.2.7 4 0"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.9"
      />
    </svg>
  );
}

function IconMap(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" {...props}>
      <path
        d="M10 20 4 18V4l6 2 4-2 6 2v14l-6-2-4 2Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M10 6v14M14 4v14"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.9"
      />
    </svg>
  );
}

function IconChat(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" {...props}>
      <path
        d="M21 14a4 4 0 0 1-4 4H8l-5 3V6a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M8 9h8M8 13h6"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.9"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconCalendar(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" {...props}>
      <path
        d="M7 3v2M17 3v2M4 8h16M6 5h12a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M8 12h4M8 16h8"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.9"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconBot(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" {...props}>
      <path
        d="M12 3v3"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.9"
        strokeLinecap="round"
      />
      <path
        d="M7 10a5 5 0 0 1 10 0v7a3 3 0 0 1-3 3H10a3 3 0 0 1-3-3v-7Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M9 14h.01M15 14h.01"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M5 12H3M21 12h-2"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.9"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function FeaturesGrid() {
  const features = [
    {
      title: "Aşı Hatırlatıcı Bildirimler",
      desc: "Aşı tarihi yaklaşınca otomatik uyarı al.",
      bullets: [
        "Gün/hafta önceden hatırlatma",
        "Tek dokunuşla “yapıldı” işaretle",
      ],
      icon: <IconBell className="text-white" />,
      badge: "En Kritik",
    },
    {
      title: "Hayvan Takibi & Kayıtlar",
      desc: "Her hayvanın geçmişi ve notları tek ekranda.",
      bullets: ["Foto & semptom kayıtları", "Geçmiş işlemler ve notlar"],
      icon: <IconCow className="text-white" />,
    },
    {
      title: "Yakındaki Veterinerler",
      desc: "Konumuna göre veterinerleri hızlıca görüntüle.",
      bullets: ["Liste veya harita görünümü", "Tek tık arama / yönlendirme"],
      icon: <IconMap className="text-white" />,
    },
    {
      title: "Seçili Veterinerle Mesajlaşma",
      desc: "Kendi veterinerinle hızlı iletişim kur.",
      bullets: ["Fotoğraf gönder", "Konuşma geçmişi saklanır"],
      icon: <IconChat className="text-white" />,
    },
    {
      title: "Takvim",
      desc: "Aşı, kontrol, bakım planlarını takvimde topla.",
      bullets: ["Günlük/haftalık plan", "Hatırlatmalarla düzenli takip"],
      icon: <IconCalendar className="text-white" />,
    },
    {
      title: "Akıllı Chatbot",
      desc: "Hayvanlarınla ilgili sorularına anında yanıt al.",
      bullets: ["Semptom sor, öneri al", "Bakım ve önlem bilgileri"],
      icon: <IconBot className="text-white" />,
    },
  ];

  return (
    <section
      id="ozellikler"
      className="relative mt-8 overflow-hidden rounded-[40px] border border-white/10 bg-[#061b19]"
    >
      {/* subtle vibe */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="relative px-6 py-10 sm:px-10 sm:py-14">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Her şey tek ekranda
          </h2>
          <p className="mt-2 text-sm text-white/70">
            Bildirimler, kayıtlar, takvim, veteriner iletişimi ve chatbot — sürü
            yönetimi daha pratik.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <FeatureCard
              key={f.title}
              icon={f.icon}
              title={f.title}
              desc={f.desc}
              bullets={f.bullets}
              badge={f.badge}
            />
          ))}
        </div>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="text-white font-semibold">Kısa not</div>
          <div className="mt-2 text-sm text-white/70">
            “Sınırsız” kullanım planlara göre değişebilir; sistem stabilitesi
            için aşırı otomatik kullanımlarda koruma devreye girebilir.
          </div>
        </div>
      </div>
    </section>
  );
}
