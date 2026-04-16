"use client";

import React, { useState } from "react";

interface PillOption {
  label: string;
  value: string;
}

interface PillSelectorProps {
  options: PillOption[];
  defaultValue?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export function PillSelector({
  options,
  defaultValue,
  value,
  onChange,
  className = ""
}: PillSelectorProps) {
  const [internalSelected, setInternalSelected] = useState(
    defaultValue || options[0]?.value
  );
  const selected = value ?? internalSelected;

  const selectValue = (nextValue: string) => {
    if (value === undefined) {
      setInternalSelected(nextValue);
    }
    onChange?.(nextValue);
  };

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => selectValue(option.value)}
          className={`px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-200 cursor-pointer outline-none focus:ring-1 focus:ring-(--color-cyan) ${
            selected === option.value
              ? "bg-(--color-cyan) text-(--color-bg) shadow-[0_0_15px_rgba(13,205,205,0.4)]"
              : "border border-(--color-border) text-(--color-accent) hover:border-(--color-cyan) hover:text-(--color-cyan)"
          }`}
          style={{
            borderRadius: "9999px"
          }}
          type="button"
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
