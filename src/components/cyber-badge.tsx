import React from "react";

interface CyberBadgeProps {
  children: React.ReactNode;
  variant?: "pink" | "cyan" | "gold" | "purple";
  className?: string;
}

export function CyberBadge({
  children,
  variant = "pink",
  className = "",
}: CyberBadgeProps) {
  const variants = {
    pink: "bg-(--color-pink) text-(--color-bg)",
    cyan: "bg-(--color-cyan) text-(--color-bg)",
    gold: "bg-(--color-gold) text-(--color-bg)",
    purple: "bg-(--color-accent) text-white",
  };

  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 text-[10px] font-black uppercase tracking-widest ${variants[variant]} ${className}`}
      style={{
        clipPath: "polygon(5px 0, 100% 0, 100% calc(100% - 5px), calc(100% - 5px) 100%, 0 100%, 0 5px)",
      }}
    >
      {children}
    </span>
  );
}
