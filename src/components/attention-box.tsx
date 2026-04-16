import React from "react";

interface AttentionBoxProps {
  title?: string;
  children: React.ReactNode;
  variant?: "default" | "gold";
  className?: string;
}

export function AttentionBox({
  title,
  children,
  variant = "default",
  className = "",
}: AttentionBoxProps) {
  const isGold = variant === "gold";

  const borderColor = isGold ? "border-(--color-gold)" : "border-(--color-pink)";
  const textColor = isGold ? "text-(--color-gold)" : "text-(--color-pink)";
  const bgColor = isGold
    ? "bg-(--color-gold)/10"
    : "bg-gradient-to-br from-(--color-accent)/10 via-(--color-pink)/10 to-(--color-cyan)/10";
  const glowShadow = isGold
    ? "shadow-[0_0_15px_rgba(249,243,56,0.3)]"
    : "shadow-[0_0_15px_rgba(223,2,74,0.2),0_0_10px_rgba(13,205,205,0.1)]";

  return (
    <div
      className={`relative border-l-4 p-4 ${borderColor} ${bgColor} ${glowShadow} ${className}`}
      role="alert"
    >
      {!isGold && (
        <div className="absolute top-0 right-0 h-1 w-1/4 bg-(--color-cyan)/40" />
      )}
      <div className={`absolute -top-px -right-px h-3 w-3 border-t border-r ${borderColor}`} />
      <div className={`absolute -bottom-px -left-px h-3 w-3 border-b border-l ${borderColor}`} />

      {title && (
        <h4
          className={`mb-2 text-xs font-black uppercase tracking-[0.2em] ${textColor}`}
        >
          {title}
        </h4>
      )}
      <div className="text-sm leading-relaxed text-(--color-text)">
        {children}
      </div>

      {/* Decorative corner accent */}
      <div
        className={`absolute top-0 right-0 h-4 w-4 overflow-hidden pointer-events-none`}
      >
        <div
          className={`absolute -top-2 -right-2 h-4 w-4 rotate-45 ${isGold ? "bg-(--color-gold)" : "bg-(--color-pink)"}`}
        />
      </div>
    </div>
  );
}
