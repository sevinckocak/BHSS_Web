import React from "react";

export default function FeatureCard({ icon, title, desc, bullets, badge }) {
  return (
    <div className="relative rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur">
      {badge ? (
        <div className="absolute -top-3 right-5 rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#061b19] shadow">
          {badge}
        </div>
      ) : null}

      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 border border-white/10">
          {icon}
        </div>

        <div>
          <div className="text-white text-lg font-semibold">{title}</div>
          <div className="mt-1 text-white/65 text-sm">{desc}</div>
        </div>
      </div>

      {bullets?.length ? (
        <ul className="mt-5 space-y-3">
          {bullets.map((t, i) => (
            <li key={i} className="flex gap-3 text-sm text-white/80">
              <span className="mt-[6px] inline-block h-2 w-2 rounded-full bg-white/70" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
