"use client";

import { createContext, useCallback, useContext, useState, type ReactNode } from "react";

import { messages, type Locale, type Messages } from "./messages";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Messages;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({
  children,
  initialLocale,
}: {
  children: ReactNode;
  initialLocale: Locale;
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    document.cookie = `preferred-locale=${next}; path=/; max-age=31536000; SameSite=Lax`;
  }, []);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t: messages[locale] }}>
      {children}
    </LocaleContext.Provider>
  );
}

function useLocaleContext() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useTranslation / useLocale must be used within LocaleProvider");
  return ctx;
}

export function useTranslation(): Messages {
  return useLocaleContext().t;
}

export function useLocale(): Locale {
  return useLocaleContext().locale;
}

export function useSetLocale(): (locale: Locale) => void {
  return useLocaleContext().setLocale;
}
