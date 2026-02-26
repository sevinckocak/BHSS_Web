import React from "react";

export default function AddAnimalCard() {
  return (
    <div
      className="relative w-full max-w-[320px] rounded-[22px] p-[14px]
        bg-gradient-to-b from-[#0B1220] to-[#111827]
        shadow-[0_22px_55px_rgba(0,0,0,0.55),0_0_36px_rgba(84,255,210,0.12)]
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
            Hayvan Ekle
          </div>

          {/* status dot */}
          <span className="relative inline-flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#54FFD2] opacity-55 blur-[1px] [animation:onlinePulse_1.8s_ease-in-out_infinite]" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#54FFD2] shadow-[0_0_8px_rgba(84,255,210,0.55)]" />
          </span>

          <div className="text-[11px] text-white/65">Form</div>
        </div>

        {/* Badge */}
        <div className="rounded-full bg-[#1F2937]/90 px-2 py-0.5 text-[11px] text-white/90 shadow-[0_10px_22px_rgba(0,0,0,0.28)]">
          +1
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-3 will-change-transform [animation:loopReset_12s_linear_infinite]">
        {/* Row: Tag No */}
        <div
          className="rounded-[16px] bg-white/5 ring-1 ring-white/8 px-3 py-2
                     shadow-[0_7px_16px_rgba(0,0,0,0.28)]
                     opacity-0 translate-y-2
                     [animation:row1_12s_linear_infinite]"
        >
          <div className="flex items-center justify-between">
            <div className="text-[11px] text-white/55">Tag No</div>
            <div className="text-[11px] text-white/40">Zorunlu</div>
          </div>

          <div className="mt-1 flex items-center gap-2">
            <div className="h-[10px] w-[10px] rounded-full bg-[#54FFD2]/70 shadow-[0_0_10px_rgba(84,255,210,0.25)]" />
            <div className="relative text-[12px] font-semibold text-white/90">
              <span className="inline-block [animation:type1_12s_linear_infinite] overflow-hidden whitespace-nowrap align-bottom">
                TR070902015
              </span>
              <span className="ml-1 inline-block h-3 w-[2px] bg-white/55 align-middle [animation:caret_1s_steps(1)_infinite]" />
            </div>
          </div>
        </div>

        {/* Row: Ad */}
        <div
          className="rounded-[16px] bg-white/5 ring-1 ring-white/8 px-3 py-2
                     shadow-[0_7px_16px_rgba(0,0,0,0.28)]
                     opacity-0 translate-y-2
                     [animation:row2_12s_linear_infinite]"
        >
          <div className="text-[11px] text-white/55">Ad</div>
          <div className="mt-1 text-[12px] font-semibold text-white/90">
            <span className="inline-block [animation:type2_12s_linear_infinite] overflow-hidden whitespace-nowrap align-bottom">
              kiraz
            </span>
            <span className="ml-1 inline-block h-3 w-[2px] bg-white/55 align-middle [animation:caret_1s_steps(1)_infinite]" />
          </div>
        </div>

        {/* Row: Irk + Yaş */}
        <div
          className="grid grid-cols-2 gap-2 opacity-0 translate-y-2
                     [animation:row3_12s_linear_infinite]"
        >
          <div className="rounded-[16px] bg-white/5 ring-1 ring-white/8 px-3 py-2 shadow-[0_7px_16px_rgba(0,0,0,0.28)]">
            <div className="text-[11px] text-white/55">Irk</div>
            <div className="mt-1 text-[12px] font-semibold text-white/90">
              Charolais
            </div>
          </div>

          <div className="rounded-[16px] bg-white/5 ring-1 ring-white/8 px-3 py-2 shadow-[0_7px_16px_rgba(0,0,0,0.28)]">
            <div className="text-[11px] text-white/55">Yaş</div>
            <div className="mt-1 text-[12px] font-semibold text-white/90">
              16 ay
            </div>
          </div>
        </div>

        {/* Footer action */}
        <div
          className="mt-1 flex items-center justify-between opacity-0 translate-y-2
                     [animation:row4_12s_linear_infinite]"
        >
          <div className="text-[11px] text-white/55">Kayıt hazırlığı tamam</div>

          <div className="relative">
            <div className="pointer-events-none absolute -inset-2 rounded-full bg-[#54FFD2]/15 blur-xl opacity-0 [animation:glow_12s_linear_infinite]" />
            <button
              type="button"
              className="relative rounded-full px-3 py-1.5 text-[11px] font-semibold
                         bg-[#54FFD2]/90 text-[#07131a]
                         shadow-[0_10px_22px_rgba(0,0,0,0.35)]
                         ring-1 ring-[#54FFD2]/30"
            >
              Kaydet
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes onlinePulse { 0%,100% { opacity:.6 } 50% { opacity:.25 } }
        @keyframes caret { 0%,50%{opacity:1} 51%,100%{opacity:0} }

        /* satırların giriş animasyonu */
        @keyframes row1 { 0%,6%{opacity:0;transform:translateY(8px)} 10%,74%{opacity:1;transform:translateY(0)} 78%,100%{opacity:0} }
        @keyframes row2 { 0%,16%{opacity:0;transform:translateY(8px)} 20%,74%{opacity:1;transform:translateY(0)} 78%,100%{opacity:0} }
        @keyframes row3 { 0%,28%{opacity:0;transform:translateY(8px)} 32%,74%{opacity:1;transform:translateY(0)} 78%,100%{opacity:0} }
        @keyframes row4 { 0%,44%{opacity:0;transform:translateY(8px)} 48%,74%{opacity:1;transform:translateY(0)} 78%,100%{opacity:0} }

        /* yazı “yazılıyormuş” hissi */
        @keyframes type1 {
          0%,8% { width:0ch; }
          18%,100% { width:11ch; }
        }
        @keyframes type2 {
          0%,18% { width:0ch; }
          28%,100% { width:5ch; }
        }

        /* kaydet butonu glow */
        @keyframes glow {
          0%,45% { opacity:0; }
          55%,70% { opacity:1; }
          75%,100% { opacity:0; }
        }

        /* komple kart reset */
        @keyframes loopReset {
          0%,74% { opacity:1; transform:translateY(0); filter:none; }
          84%    { opacity:.35; transform:translateY(-8px); filter:blur(1.2px); }
          92%    { opacity:0; transform:translateY(-14px); filter:blur(2.8px); }
          100%   { opacity:0; transform:translateY(0); filter:none; }
        }
      `}</style>
    </div>
  );
}
