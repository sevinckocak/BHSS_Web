import React from "react";

export default function ChatbotCard() {
  return (
    <div
      className="relative w-full max-w-[380px] rounded-[22px] p-[14px]
        bg-gradient-to-b from-[#0B1220] to-[#111827]
        shadow-[0_22px_55px_rgba(0,0,0,0.55),0_0_36px_rgba(168,85,247,0.15)]
        backdrop-blur-[16px]
        ring-1 ring-white/6
        overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-10 rounded-t-[22px] bg-gradient-to-b from-white/8 to-transparent opacity-60" />

      <div className="relative mb-2.5 flex items-center justify-between">
        <div className="text-[12px] font-semibold text-white/90">
          Akıllı Asistan
        </div>

        <div className="rounded-full bg-[#1F2937]/90 px-2 py-0.5 text-[11px] text-white/90 shadow-[0_10px_22px_rgba(0,0,0,0.28)]">
          AI
        </div>
      </div>

      {/* wrapper sadece en sonda reset atacak */}
      <div className="flex flex-col gap-2.5 will-change-transform [animation:loopReset_12s_linear_infinite]">
        {/* User msg: çıkar, bot gelene kadar kalsın */}
        <div
          className="max-w-[82%] self-end rounded-[16px] bg-[#1F2937] px-3 py-2
            text-[12px] leading-[1.35] text-white/90
            shadow-[0_7px_16px_rgba(0,0,0,0.30)]
            opacity-0 translate-x-2
            [animation:msgUser_12s_linear_infinite]"
        >
          Buzağı öksürüyor, ne yapmalıyım?
        </div>

        {/* Typing: user’dan sonra gelsin, bot gelince kaybolsun */}
        <div className="text-[11px] text-white/60 opacity-0 [animation:typing_12s_linear_infinite]">
          yazıyor…
          <span className="ml-2 inline-flex items-center gap-1">
            <span className="h-1 w-1 rounded-full bg-white/55 [animation:dotPulse_1s_ease-in-out_infinite]" />
            <span className="h-1 w-1 rounded-full bg-white/55 [animation:dotPulse_1s_ease-in-out_infinite] [animation-delay:200ms]" />
            <span className="h-1 w-1 rounded-full bg-white/55 [animation:dotPulse_1s_ease-in-out_infinite] [animation-delay:400ms]" />
          </span>
        </div>

        {/* Bot msg: typing’den sonra gelsin, reset’e kadar kalsın */}
        <div
          className="max-w-[82%] self-start rounded-[16px] bg-[#162033] px-3 py-2
            text-[12px] leading-[1.35] text-white/90
            shadow-[0_7px_16px_rgba(0,0,0,0.30)]
            opacity-0 -translate-x-2
            [animation:msgBot_12s_linear_infinite]"
        >
          Öksürük kaç gündür? Ateş ve burun akıntısı var mı? Temiz su + iyi
          havalandırma sağlayın. Devam ederse veteriner muayenesi planlayın.
        </div>
      </div>

      <style>{`
        @keyframes dotPulse { 0%,100% { opacity:.30 } 50% { opacity:1 } }

        /* 1) Kullanıcı mesajı: 0-28% giriş, 28-84% sabit, 84-100% fade-out */
        @keyframes msgUser {
          0%      { opacity:0; transform:translateX(10px) }
          6%      { opacity:1; transform:translateX(0) }
          84%     { opacity:1; transform:translateX(0) }
          92%     { opacity:0; transform:translateX(0) }
          100%    { opacity:0; transform:translateX(0) }
        }

        /* 2) Typing: 28-42% görünür */
        @keyframes typing {
          0%,27%  { opacity:0 }
          30%,42% { opacity:1 }
          45%,100%{ opacity:0 }
        }

        /* 3) Bot mesajı: 42% sonrası gelsin, 84%’e kadar kalsın */
        @keyframes msgBot {
          0%,41%  { opacity:0; transform:translateX(-10px) }
          48%     { opacity:1; transform:translateX(0) }
          84%     { opacity:1; transform:translateX(0) }
          92%     { opacity:0; transform:translateX(0) }
          100%    { opacity:0; transform:translateX(0) }
        }

        /* 4) Reset SADECE en sonda: 84-100% arası uçur */
        @keyframes loopReset {
          0%,84% { opacity:1; transform:translateY(0); filter:none; }
          90%    { opacity:.35; transform:translateY(-10px); filter:blur(1.5px); }
          96%    { opacity:0; transform:translateY(-16px); filter:blur(3px); }
          100%   { opacity:0; transform:translateY(0); filter:none; }
        }
      `}</style>
    </div>
  );
}
