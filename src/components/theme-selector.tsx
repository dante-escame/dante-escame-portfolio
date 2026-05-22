"use client";

import { useTheme, useSetTheme } from "../lib/theme/context";
import type { ThemeId } from "../lib/theme/themes";

const CyberpunkIcon = () => (
  <svg aria-hidden="true" fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
    <rect fill="currentColor" height="3" opacity="0.9" rx="0.5" width="3" x="1" y="1" />
    <rect fill="currentColor" height="3" opacity="0.9" rx="0.5" width="3" x="6.5" y="1" />
    <rect fill="currentColor" height="3" opacity="0.9" rx="0.5" width="3" x="12" y="1" />
    <rect fill="currentColor" height="3" opacity="0.5" rx="0.5" width="3" x="1" y="6.5" />
    <rect fill="currentColor" height="3" opacity="0.9" rx="0.5" width="3" x="6.5" y="6.5" />
    <rect fill="currentColor" height="3" opacity="0.5" rx="0.5" width="3" x="12" y="6.5" />
    <rect fill="currentColor" height="3" opacity="0.9" rx="0.5" width="3" x="1" y="12" />
    <rect fill="currentColor" height="3" opacity="0.5" rx="0.5" width="3" x="6.5" y="12" />
    <rect fill="currentColor" height="3" opacity="0.9" rx="0.5" width="3" x="12" y="12" />
  </svg>
);

const RusticIcon = () => (
  <svg aria-hidden="true" fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 2L14 10H2L8 2Z" fill="currentColor" opacity="0.9" />
    <path d="M11.5 7L15 13H8L11.5 7Z" fill="currentColor" opacity="0.55" />
    <rect fill="currentColor" height="3" opacity="0.8" width="2.5" x="6.75" y="13" />
  </svg>
);

const NaturalIcon = () => (
  <svg aria-hidden="true" fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8 2C5 2 2 5 2 9C2 11.5 3.5 13.5 5.5 14.5C5.5 14.5 5 12 6 10C7 8 9 7 11 7C13 7 14 8 14 8C14 5 11 2 8 2Z"
      fill="currentColor"
      opacity="0.9"
    />
    <path d="M6 10C6 10 7 13 8 14" opacity="0.6" stroke="currentColor" strokeLinecap="round" strokeWidth="1.2" />
  </svg>
);

const themeOptions: Array<{ id: ThemeId; label: string; icon: React.ReactNode }> = [
  { id: "cyberpunk", label: "Cyberpunk", icon: <CyberpunkIcon /> },
  { id: "rustic", label: "Rustic", icon: <RusticIcon /> },
  { id: "natural", label: "Natural", icon: <NaturalIcon /> },
];

export function ThemeSelector() {
  const theme = useTheme();
  const setTheme = useSetTheme();

  return (
    <div aria-label="Theme selector" className="flex items-center gap-1" role="group">
      {themeOptions.map(({ id, label, icon }) => {
        const isActive = theme === id;

        return (
          <button
            key={id}
            aria-pressed={isActive}
            className={[
              "inline-flex items-center justify-center border p-1.5 transition-all duration-200",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-cyan) focus-visible:ring-offset-1 focus-visible:ring-offset-(--color-bg)",
              isActive
                ? "border-(--color-cyan)/60 bg-(--color-cyan)/10 text-(--color-heading) shadow-[0_0_14px_rgba(13,205,205,0.2)]"
                : "border-transparent text-(--color-text)/55 hover:border-(--color-cyan)/30 hover:text-(--color-text)/80",
            ].join(" ")}
            onClick={() => setTheme(id)}
            title={label}
            type="button"
          >
            {icon}
          </button>
        );
      })}
    </div>
  );
}
