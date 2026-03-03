import React from "react";
import { Link } from "react-router-dom";

export default function HoverUnderlineLink({
  href,
  to,
  children,
  className = "",
}) {
  const baseClass = [
    "relative group inline-block text-white/70 hover:text-white transition",
    className,
  ].join(" ");

  // Eğer route navigation ise
  if (to) {
    return (
      <Link to={to} className={baseClass}>
        {children}
        <span
          className="absolute left-0 -bottom-1 h-[3px] w-0 bg-[#77ffe0]/90 transition-all duration-500 group-hover:w-full"
          aria-hidden="true"
        />
      </Link>
    );
  }

  // Normal anchor link ise
  return (
    <a href={href} className={baseClass}>
      {children}
      <span
        className="absolute left-0 -bottom-1 h-[3px] w-0 bg-[#77ffe0]/90 transition-all duration-500 group-hover:w-full"
        aria-hidden="true"
      />
    </a>
  );
}
