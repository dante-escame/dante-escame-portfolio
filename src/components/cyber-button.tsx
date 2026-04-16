"use client";

import React from "react";

interface CyberButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "gold";
  children: React.ReactNode;
}

export function CyberButton({
  variant = "primary",
  children,
  className = "",
  ...props
}: CyberButtonProps) {
  const baseClasses =
    "relative px-6 py-2 uppercase font-black tracking-[0.15em] text-xs transition-all duration-200 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-(--color-cyan) disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

  const variants = {
    primary:
      "bg-(--color-pink) text-(--color-bg) hover:bg-(--color-pink)/90 hover:shadow-[0_0_15px_rgba(223,2,74,0.5)] active:scale-95",
    secondary:
      "border border-(--color-cyan) text-(--color-cyan) bg-transparent hover:bg-(--color-cyan)/10 hover:shadow-[0_0_15px_rgba(13,205,205,0.4)] active:scale-95",
    gold:
      "bg-(--color-gold) text-(--color-bg) hover:bg-(--color-gold)/90 hover:shadow-[0_0_15px_rgba(249,243,56,0.5)] active:scale-95",
  };

  const clipPath =
    "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)";

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${className}`}
      style={{ clipPath }}
      {...props}
    >
      <span className="relative z-10">{children}</span>

      {/* Internal accent line for primary/gold */}
      {(variant === "primary" || variant === "gold") && (
        <div className="absolute top-0 right-0 w-4 h-4 overflow-hidden">
           <div className={`absolute top-0 right-0 w-2 h-2 border-t border-r ${variant === 'primary' ? 'border-white/40' : 'border-black/40'}`} />
        </div>
      )}
    </button>
  );
}
