"use client";

import { useEffect, useRef } from "react";

const fallingChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

type DigitalRainBackgroundProps = {
  className?: string;
};

export function DigitalRainBackground({ className = "intro-falling-numbers" }: DigitalRainBackgroundProps) {
  const columnsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const columnsHost = columnsRef.current;

    if (!columnsHost) {
      return;
    }

    const columnCount = window.innerWidth < 768 ? 22 : 34;
    const columns: HTMLDivElement[] = [];

    for (let index = 0; index < columnCount; index += 1) {
      const column = document.createElement("div");
      column.className = "intro-falling-column";
      column.style.left = `${(100 / columnCount) * index}%`;
      column.style.animationDelay = `${Math.random() * 3}s`;
      column.style.animationDuration = `${7 + Math.random() * 6}s`;

      const charCount = 22 + Math.floor(Math.random() * 24);

      for (let charIndex = 0; charIndex < charCount; charIndex += 1) {
        const char = document.createElement("div");
        const opacity = (Math.random() * 0.45 + 0.12).toFixed(2);

        char.className = "intro-falling-char";
        char.textContent = fallingChars[Math.floor(Math.random() * fallingChars.length)];
        char.style.opacity = opacity;
        char.style.textShadow = `0 0 ${4 + Number(opacity) * 8}px rgba(223, 2, 74, 0.7)`;
        column.appendChild(char);
      }

      columnsHost.appendChild(column);
      columns.push(column);
    }

    return () => {
      columns.forEach((column) => column.remove());
    };
  }, []);

  return <div ref={columnsRef} aria-hidden="true" className={className} />;
}
