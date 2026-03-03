import React from "react";

export default function AboutTrust() {
  return (
    <section className="mt-8 rounded-[40px] bg-white/60 p-6 sm:p-10">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-xl font-bold text-black">Güven & Sorumluluk</h2>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-black/10 bg-white/70 p-5 shadow-sm">
            <div className="font-semibold text-black">Bildirimler</div>
            <div className="mt-2 text-sm text-black/70">
              Bildirimlerin çalışması cihaz izinlerine ve sistem ayarlarına
              bağlıdır. Takvim üzerinden de kontrol edebilmen için tasarlandı.
            </div>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white/70 p-5 shadow-sm">
            <div className="font-semibold text-black">Akıllı Asistan</div>
            <div className="mt-2 text-sm text-black/70">
              Chatbot bilgilendirme amaçlıdır. Şüpheli veya acil durumlarda
              veteriner görüşü esastır.
            </div>
          </div>
        </div>

        <div className="mt-6 text-[11px] text-black/55">
          * Bu sayfa bilgilendirme amaçlıdır. Özellikler planlara göre
          değişebilir.
        </div>
      </div>
    </section>
  );
}
