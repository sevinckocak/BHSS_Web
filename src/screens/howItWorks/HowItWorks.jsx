import React from "react";
import { Link } from "react-router-dom";
import StepSection from "../../sections/StepSection";
import heroBgImg from "../../assets/hero-bg.jpeg";
import Reveal from "../../component/Reveal";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Hesap oluştur ve sürünü tanımla",
      desc: "Güvenli şekilde kayıt ol. İşletmeni oluştur ve hayvanlarını sisteme ekleyerek dijital takibe başla.",
    },
    {
      number: "02",
      title: "Aşı ve kontrol takvimini planla",
      desc: "Her hayvan için aşı, bakım ve kontrol tarihlerini belirle. Sistem yaklaşan işlemleri otomatik takip eder.",
    },
    {
      number: "03",
      title: "Zamanı geldiğinde bildirim al",
      desc: "Aşı veya kontrol zamanı yaklaşınca mobil bildirim al. Tek dokunuşla tamamlandı olarak işaretle.",
    },
    {
      number: "04",
      title: "Veterinerle iletişim kur",
      desc: "Yakındaki veterinerleri görüntüle veya seçtiğin veterinerle mesajlaş. Gerekirse fotoğraf paylaş.",
    },
    {
      number: "05",
      title: "Chatbot ile hızlı bilgi al",
      desc: "Semptom soruları sor, bakım önerileri al. Bilgilendirme amaçlı akıllı destek sistemi her zaman yanında.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#e9e6df]">
      <div className="mx-auto w-full max-w-[1200px] px-6 py-10">
        {/* HERO */}
        <section className="relative overflow-hidden rounded-[40px] border border-white/10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${heroBgImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#061b19]/95 via-[#061b19]/75 to-[#061b19]/35" />

          <div className="relative px-6 py-10 sm:px-10 sm:py-14">
            {/* top row */}
            <div className="flex items-center justify-between gap-4">
              <div className="text-white/80 text-sm font-semibold tracking-wide">
                BHSS
              </div>

              <Link
                to="/"
                className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/85 backdrop-blur hover:bg-white/10"
              >
                Ana Sayfa
              </Link>
            </div>

            {/* hero content */}
            <div className="mt-10 max-w-3xl">
              <h1 className="text-4xl font-extrabold text-white sm:text-6xl">
                Sistem Nasıl Çalışır?
              </h1>
              <p className="mt-6 text-white/70 text-base">
                BHSS, sürü yönetimini otomatikleştirir. Takvim, bildirim,
                veteriner iletişimi ve akıllı destek tek bir akışta birleşir.
              </p>
            </div>
          </div>
        </section>

        {/* STEPS */}
        <div className="mt-16 space-y-32">
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 120}>
              <StepSection {...step} reverse={index % 2 !== 0} />
            </Reveal>
          ))}
        </div>

        {/* FOOT NOTE */}
        <div className="mt-20 text-center text-[11px] text-black/50">
          * Chatbot bilgilendirme amaçlıdır ve tıbbi teşhis yerine geçmez.
        </div>
      </div>
    </div>
  );
}
