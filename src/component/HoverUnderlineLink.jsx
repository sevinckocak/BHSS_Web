import React from "react";

export default function HoverUnderlineLink({ href, children, className = "" }) {
  return (
    <a
      href={href}
      className={[
        "relative group inline-block text-white/70 hover:text-white transition",
        className,
      ].join(" ")}
    >
      {children}
      <span
        className="absolute left-0 -bottom-1 h-[3px] w-0 bg-[#77ffe0]/90 transition-all duration-500 group-hover:w-full"
        aria-hidden="true"
      />
    </a>
  );
}
