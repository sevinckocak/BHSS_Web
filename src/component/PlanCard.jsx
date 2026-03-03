import React from "react";
import ButtonSweep from "./ButtonSweep";

export default function PlanCard({
  title,
  price,
  period,
  badge,
  highlight,
  subtitle,
  items,
  buttonText,
  onButtonClick,
}) {
  return (
    <div
      className={[
        "relative rounded-3xl p-6 sm:p-7",
        "border backdrop-blur",
        highlight
          ? "border-white/30 bg-white/15 shadow-[0_20px_80px_-35px_rgba(0,0,0,0.9)]"
          : "border-white/15 bg-white/10",
      ].join(" ")}
    >
      {badge ? (
        <div className="absolute -top-3 right-5 rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#061b19] shadow">
          {badge}
        </div>
      ) : null}

      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-white text-lg font-semibold">{title}</div>
          {subtitle ? (
            <div className="mt-1 text-white/65 text-sm">{subtitle}</div>
          ) : null}
        </div>

        <div className="text-right">
          <div className="text-white text-3xl font-extrabold leading-none">
            {price}
          </div>
          {period ? (
            <div className="mt-1 text-white/60 text-xs">{period}</div>
          ) : null}
        </div>
      </div>

      <div className="mt-5 h-px w-full bg-white/10" />

      <ul className="mt-5 space-y-3">
        {items.map((t, i) => (
          <li key={i} className="flex gap-3 text-sm text-white/80">
            <span className="mt-[6px] inline-block h-2 w-2 rounded-full bg-white/70" />
            <span>{t}</span>
          </li>
        ))}
      </ul>

      <ButtonSweep
        type="button"
        onClick={onButtonClick}
        className={[
          "mt-6 w-full",
          highlight
            ? "bg-white text-[#061b19] border-white hover:border-[#77ffe0]"
            : "bg-white/10 text-white border-white/20 hover:text-[#07131a]",
        ].join(" ")}
      >
        {buttonText}
      </ButtonSweep>

      <div className="mt-3 text-[11px] text-white/55">
        * Sistem stabilitesi için aşırı otomatik kullanımlarda koruma
        uygulanabilir.
      </div>
    </div>
  );
}
