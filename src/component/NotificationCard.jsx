import React from "react";

export default function NotificationCard() {
  return (
    <div
      className="relative w-full max-w-[380px] rounded-[22px] p-[14px]
      bg-gradient-to-b from-[#0B1220] to-[#111827]
      shadow-[0_22px_55px_rgba(0,0,0,0.55),0_0_36px_rgba(250,204,21,0.15)]
      backdrop-blur-[16px]
      ring-1 ring-white/6
      overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-10 rounded-t-[22px] bg-gradient-to-b from-white/8 to-transparent opacity-60" />

      <div className="text-[12px] font-semibold text-white/90 mb-3">
        Bildirim
      </div>

      <div
        className="rounded-[16px] bg-[#1F2937] px-3 py-3
        text-[12px] text-white/90
        shadow-[0_7px_16px_rgba(0,0,0,0.30)]
        opacity-0 translate-y-3
        [animation:slideIn_6s_linear_infinite]"
      >
        🐄 Kiraz için <span className="font-semibold">Şap</span> aşı zamanı
        geldi.
        <div className="mt-3 flex justify-end">
          <div className="rounded-full bg-[#54FFD2]/90 text-[#07131a] px-3 py-1 text-[11px] font-semibold">
            Tamamlandı
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          0%,20% { opacity:0; transform:translateY(15px) }
          30%,80% { opacity:1; transform:translateY(0) }
          90%,100% { opacity:0; transform:translateY(-10px) }
        }
      `}</style>
    </div>
  );
}
