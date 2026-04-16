"use client";

import React, { useState } from "react";

interface CyberToggleProps {
  label?: string;
  defaultChecked?: boolean;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}

export function CyberToggle({
  label,
  defaultChecked = false,
  checked,
  onChange,
  className = ""
}: CyberToggleProps) {
  const [internalChecked, setInternalChecked] = useState(defaultChecked);
  const isChecked = checked ?? internalChecked;

  const handleToggle = () => {
    const newChecked = !isChecked;
    if (checked === undefined) {
      setInternalChecked(newChecked);
    }
    onChange?.(newChecked);
  };

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {label && (
        <span className="text-[10px] uppercase font-black tracking-[0.2em] text-(--color-accent)">
          {label}
        </span>
      )}
      <button
        onClick={handleToggle}
        className={`relative w-12 h-6 border-2 transition-all duration-300 outline-none focus:ring-1 focus:ring-(--color-cyan) cursor-pointer ${
          isChecked
            ? "border-(--color-cyan) bg-(--color-cyan)/10 shadow-[0_0_15px_rgba(13,205,205,0.3)]"
            : "border-(--color-border) bg-(--color-bg-elevated)"
        }`}
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 75%, 85% 100%, 0 100%)",
        }}
        aria-pressed={isChecked}
        type="button"
      >
        <div
          className={`absolute top-1 left-1 w-4 h-3 transition-all duration-300 ${
            isChecked
              ? "translate-x-6 bg-(--color-cyan) shadow-[0_0_10px_rgba(13,205,205,0.8)]"
              : "bg-(--color-border) translate-x-0"
          }`}
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          }}
        />
        {/* Decorative pattern on toggle */}
        <div className="absolute inset-0 flex items-center justify-around px-1 opacity-20 pointer-events-none">
          <div className="w-px h-2 bg-white" />
          <div className="w-px h-2 bg-white" />
          <div className="w-px h-2 bg-white" />
        </div>
      </button>
    </div>
  );
}
