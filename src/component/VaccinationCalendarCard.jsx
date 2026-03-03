import React from "react";

export default function VaccinationCalendarCard() {
  return (
    <div
      className="relative w-full max-w-[380px] rounded-[22px] p-[14px]
      bg-gradient-to-b from-[#0B1220] to-[#111827]
      shadow-[0_22px_55px_rgba(0,0,0,0.55),0_0_36px_rgba(132,204,255,0.12)]
      backdrop-blur-[16px]
      ring-1 ring-white/6
      overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-10 rounded-t-[22px] bg-gradient-to-b from-white/8 to-transparent opacity-60" />

      <div className="flex items-center justify-between mb-3">
        <div className="text-[12px] font-semibold text-white/90">
          Aşı Takvimi
        </div>
        <div className="rounded-full bg-white/5 ring-1 ring-white/10 px-2 py-0.5 text-[11px] text-white/70">
          Bu hafta
        </div>
      </div>

      <div className="space-y-3 [animation:fadeLoop_10s_linear_infinite]">
        <div className="rounded-[16px] bg-white/5 ring-1 ring-white/8 px-3 py-2 shadow-[0_7px_16px_rgba(0,0,0,0.28)]">
          <div className="flex items-center justify-between">
            <div className="text-[11px] text-white/55">Kiraz</div>
            <div className="text-[11px] text-[#FBBF24]">3 gün kaldı</div>
          </div>
          <div className="mt-1 text-[12px] font-semibold text-white/90">
            Şap Aşısı
          </div>
          <div className="mt-1 text-[11px] text-white/55">
            Sonraki hatırlatma: 1 gün önce
          </div>
        </div>

        <div className="rounded-[16px] bg-white/5 ring-1 ring-white/8 px-3 py-2 shadow-[0_7px_16px_rgba(0,0,0,0.28)]">
          <div className="flex items-center justify-between">
            <div className="text-[11px] text-white/55">Mavi</div>
            <div className="text-[11px] text-white/60">12 gün sonra</div>
          </div>
          <div className="mt-1 text-[12px] font-semibold text-white/90">
            Brucella Kontrol
          </div>
          <div className="mt-1 text-[11px] text-white/55">Takvime eklendi</div>
        </div>
      </div>

      <style>{`
        @keyframes fadeLoop {
          0%,80% { opacity:1; transform:translateY(0) }
          90% { opacity:0; transform:translateY(-10px) }
          100% { opacity:0; transform:translateY(0) }
        }
      `}</style>
    </div>
  );
}
