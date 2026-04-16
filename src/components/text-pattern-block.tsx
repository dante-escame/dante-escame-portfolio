import { StylePanel, StylePanelHeader } from "./style-kit";
import React from "react";

interface TextPatternBlockProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  variant?: "default" | "cyan";
  className?: string;
}

export function TextPatternBlock({
  title,
  subtitle,
  children,
  variant = "default",
  className
}: TextPatternBlockProps) {
  return (
    <StylePanel className={className} tone={variant === "cyan" ? "cyan" : "purple"}>
      <StylePanelHeader
        eyebrow={subtitle || "Pattern Block"}
        title={title}
        titleAs="h3"
        tone={variant === "cyan" ? "cyan" : "purple"}
      />
      <div className="space-y-4 text-sm leading-relaxed text-(--color-text)/90 md:text-base md:leading-8">
        {children}
      </div>
    </StylePanel>
  );
}
