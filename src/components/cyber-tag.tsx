import React from "react";

interface CyberTagProps {
  children: React.ReactNode;
  className?: string;
  variant?: "pink" | "cyan" | "gold";
}

export function CyberTag({
  children,
  className = "",
  variant = "cyan",
}: CyberTagProps) {
  const variants = {
    pink: "border-(--color-pink) text-(--color-pink)",
    cyan: "border-(--color-cyan) text-(--color-cyan)",
    gold: "border-(--color-gold) text-(--color-gold)",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 border text-[10px] uppercase font-black tracking-[0.2em] bg-transparent ${variants[variant]} ${className}`}
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 70%, 85% 100%, 0 100%)",
      }}
    >
      <span className="mr-2 opacity-50">#</span>
      {children}
    </span>
  );
}
