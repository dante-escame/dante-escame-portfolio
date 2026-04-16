"use client";

import React, { useState } from "react";

interface CyberSliderProps {
  label: string;
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
  value?: number;
  onChange?: (value: number) => void;
  formatValue?: (value: number) => string;
  className?: string;
}

export function CyberSlider({
  label,
  min = 0,
  max = 100,
  step = 1,
  defaultValue = 50,
  value,
  onChange,
  formatValue = (currentValue) => currentValue.toString().padStart(3, "0"),
  className = ""
}: CyberSliderProps) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const currentValue = value ?? internalValue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    if (value === undefined) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  };

  return (
    <div className={`space-y-3 ${className}`}>
      <div className="flex justify-between items-end">
        <label className="text-[10px] uppercase tracking-[0.25em] text-(--color-accent) font-black">
          {label}
        </label>
        <span className="text-xs font-black text-(--color-cyan) border-b border-(--color-cyan)/30 px-2">
          {formatValue(currentValue)}
        </span>
      </div>
      <div className="relative h-6 flex items-center">
        {/* Track background */}
        <div className="absolute inset-x-0 h-1 bg-(--color-bg-elevated) border border-(--color-border)" />

        {/* Fill */}
        <div
          className="absolute left-0 h-1 bg-gradient-to-r from-(--color-accent) to-(--color-cyan) shadow-[0_0_10px_rgba(13,205,205,0.4)]"
          style={{ width: `${((currentValue - min) / (max - min)) * 100}%` }}
        />

        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={currentValue}
          onChange={handleChange}
          className="absolute inset-x-0 w-full h-6 appearance-none bg-transparent cursor-pointer z-10 
            [&::-webkit-slider-thumb]:appearance-none 
            [&::-webkit-slider-thumb]:w-3 
            [&::-webkit-slider-thumb]:h-6 
            [&::-webkit-slider-thumb]:bg-(--color-pink) 
            [&::-webkit-slider-thumb]:border-x-2 
            [&::-webkit-slider-thumb]:border-white 
            [&::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(223,2,74,0.6)]
            [&::-moz-range-thumb]:appearance-none 
            [&::-moz-range-thumb]:w-3 
            [&::-moz-range-thumb]:h-6 
            [&::-moz-range-thumb]:bg-(--color-pink) 
            [&::-moz-range-thumb]:border-x-2 
            [&::-moz-range-thumb]:border-white
            [&::-moz-range-thumb]:border-none
            focus:outline-none"
        />
      </div>
    </div>
  );
}
