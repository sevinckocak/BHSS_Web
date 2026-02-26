import React from "react";

export default function ButtonSweep({
  onClick,
  children,
  className = "",
  type = "button",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={[
        "relative group inline-flex items-center justify-center",
        "rounded-full px-6 py-3 text-sm font-bold",
        "border overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.25)]",
        "transition active:scale-[.99]",
        className,
      ].join(" ")}
    >
      <span className="absolute left-0 bottom-0 h-full w-0 bg-[#77ffe0]/90 transition-all duration-500 group-hover:w-full z-0" />
      <span className="relative z-10 transition-colors duration-500 group-hover:text-[#07131a]">
        {children}
      </span>
    </button>
  );
}
