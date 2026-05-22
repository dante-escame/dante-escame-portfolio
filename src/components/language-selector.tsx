"use client";

import { useLocale, useSetLocale } from "../lib/i18n/context";
import type { Locale } from "../lib/i18n/messages";

const locales: Array<{ code: Locale; label: string }> = [
  { code: "en", label: "EN" },
  { code: "pt-br", label: "PT" },
];

export function LanguageSelector() {
  const locale = useLocale();
  const setLocale = useSetLocale();

  return (
    <div
      aria-label="Language selector"
      className="flex items-center gap-1"
      role="group"
    >
      {locales.map(({ code, label }) => {
        const isActive = locale === code;

        return (
          <button
            key={code}
            aria-pressed={isActive}
            className={[
              "inline-flex items-center border px-2.5 py-1 text-[10px] uppercase tracking-[0.24em] transition-all duration-200",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-cyan) focus-visible:ring-offset-1 focus-visible:ring-offset-(--color-bg)",
              isActive
                ? "border-(--color-cyan)/60 bg-(--color-cyan)/10 text-(--color-heading) shadow-[0_0_14px_rgba(13,205,205,0.2)]"
                : "border-transparent text-(--color-text)/55 hover:border-(--color-cyan)/30 hover:text-(--color-text)/80",
            ].join(" ")}
            onClick={() => setLocale(code)}
            type="button"
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
