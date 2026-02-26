import React from "react";

export default function ChatCard() {
  return (
    <div
      className="relative w-full max-w-[320px] rounded-[22px] p-[14px]
        bg-gradient-to-b from-[#0B1220] to-[#111827]
        shadow-[0_22px_55px_rgba(0,0,0,0.55),0_0_36px_rgba(34,211,238,0.12)]
        backdrop-blur-[16px]
        ring-1 ring-white/6
        overflow-hidden"
    >
      {/* light reflection */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-10 rounded-t-[22px] bg-gradient-to-b from-white/8 to-transparent opacity-60" />

      {/* Header */}
      <div className="relative mb-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="text-[12px] font-semibold text-white/90">
            Veteriner
          </div>

          {/* Online dot */}
          <span className="relative inline-flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-60 blur-[1px] [animation:onlinePulse_1.8s_ease-in-out_infinite]" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#22C55E] shadow-[0_0_8px_rgba(34,197,94,0.55)]" />
          </span>

          <div className="text-[11px] text-white/65">Online</div>
        </div>

        {/* Badge */}
        <div className="rounded-full bg-[#1F2937]/90 px-2 py-0.5 text-[11px] text-white/90 shadow-[0_10px_22px_rgba(0,0,0,0.28)]">
          2
        </div>
      </div>

      {/* Messages wrapper */}
      <div className="flex flex-col gap-2.5 will-change-transform [animation:loopReset_13s_linear_infinite]">
        {/* User msg 1 */}
        <div
          className="max-w-[78%] self-end rounded-[16px] bg-[#1F2937] px-3 py-2
            text-[12px] leading-[1.35] text-white/90
            shadow-[0_7px_16px_rgba(0,0,0,0.30)]
            opacity-0 translate-x-2
            [animation:msg1_13s_linear_infinite]"
        >
          Buzağı iştahsız, ne yapmalıyım?
        </div>

        {/* Typing 1 */}
        <div className="text-[11px] text-white/60 opacity-0 [animation:typing1_13s_linear_infinite]">
          yazıyor…
          <span className="ml-2 inline-flex items-center gap-1">
            <span className="h-1 w-1 rounded-full bg-white/55 [animation:dotPulse_1s_ease-in-out_infinite]" />
            <span className="h-1 w-1 rounded-full bg-white/55 [animation:dotPulse_1s_ease-in-out_infinite] [animation-delay:200ms]" />
            <span className="h-1 w-1 rounded-full bg-white/55 [animation:dotPulse_1s_ease-in-out_infinite] [animation-delay:400ms]" />
          </span>
        </div>

        {/* Vet reply 1 */}
        <div
          className="max-w-[78%] self-start rounded-[16px] bg-[#162033] px-3 py-2
            text-[12px] leading-[1.35] text-white/90
            shadow-[0_7px_16px_rgba(0,0,0,0.30)]
            opacity-0 -translate-x-2
            [animation:msg2_13s_linear_infinite]"
        >
          Merhaba Ateşi var mı? İshal ya da halsizlik var mı?
        </div>

        {/* User msg 2 */}
        <div
          className="max-w-[78%] self-end rounded-[16px] bg-[#1F2937] px-3 py-2
            text-[12px] leading-[1.35] text-white/90
            shadow-[0_7px_16px_rgba(0,0,0,0.30)]
            opacity-0 translate-x-2
            [animation:msg3_13s_linear_infinite]"
        >
          Ateşi yok ama biraz durgun.
        </div>

        {/* Vet final */}
        <div
          className="max-w-[78%] self-start rounded-[16px] bg-[#162033] px-3 py-2
            text-[12px] leading-[1.35] text-white/90
            shadow-[0_7px_16px_rgba(0,0,0,0.30)]
            opacity-0 -translate-x-2
            [animation:msg4_13s_linear_infinite]"
        >
          Vitamin desteği + su. Devam ederse muayene planlayalım.
        </div>
      </div>

      <style>{`
        @keyframes onlinePulse { 0%,100% { opacity:.65 } 50% { opacity:.30 } }
        @keyframes dotPulse { 0%,100% { opacity:.30 } 50% { opacity:1 } }

        @keyframes msg1 { 0%,4%{opacity:0;transform:translateX(8px)} 6%,72%{opacity:1;transform:translateX(0)} 76%,100%{opacity:0} }
        @keyframes msg2 { 0%,22%{opacity:0;transform:translateX(-8px)} 24%,72%{opacity:1;transform:translateX(0)} 76%,100%{opacity:0} }
        @keyframes msg3 { 0%,40%{opacity:0;transform:translateX(8px)} 42%,72%{opacity:1;transform:translateX(0)} 76%,100%{opacity:0} }
        @keyframes msg4 { 0%,56%{opacity:0;transform:translateX(-8px)} 58%,72%{opacity:1;transform:translateX(0)} 76%,100%{opacity:0} }

        @keyframes typing1 { 0%,10%{opacity:0} 12%,20%{opacity:1} 22%,100%{opacity:0} }

        /* komple konuşma bittiğinde hepsini uçur ve resetle */
        @keyframes loopReset {
          0%,72% { opacity:1; transform:translateY(0); filter:none; }
          82%    { opacity:.35; transform:translateY(-10px); filter:blur(1.5px); }
          90%    { opacity:0; transform:translateY(-16px); filter:blur(3px); }
          100%   { opacity:0; transform:translateY(0); filter:none; }
        }
      `}</style>
    </div>
  );
}
