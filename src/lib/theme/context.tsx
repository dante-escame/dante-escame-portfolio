"use client";

import { createContext, useCallback, useContext, useLayoutEffect, useRef, useState, type ReactNode } from "react";

import { ThemeTransitionScreen } from "../../components/theme-transition-screen";
import { defaultTheme, isValidTheme, themes, type ThemeId, type ThemeTokens } from "./themes";

type ThemeContextValue = {
  theme: ThemeId;
  setTheme: (theme: ThemeId) => void;
  tokens: ThemeTokens;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function applyTheme(themeId: ThemeId) {
  const t = themes[themeId];
  const root = document.documentElement;
  root.style.setProperty("--color-bg", t.bg);
  root.style.setProperty("--color-bg-elevated", t.bgElevated);
  root.style.setProperty("--color-panel", t.panel);
  root.style.setProperty("--color-heading", t.heading);
  root.style.setProperty("--color-text", t.text);
  root.style.setProperty("--color-accent", t.accent);
  root.style.setProperty("--color-pink", t.pink);
  root.style.setProperty("--color-cyan", t.cyan);
  root.style.setProperty("--color-gold", t.gold);
  root.style.setProperty("--color-border", t.border);
  root.style.setProperty("--color-border-cyan", t.borderCyan);
  root.style.setProperty("--shadow-glow-soft", t.shadowGlowSoft);
  root.style.setProperty("--body-bg", t.bodyBg);
  root.style.setProperty("--body-grid-color", t.bodyGridColor);
  root.style.setProperty("--falling-char-color", t.fallingCharColor);
  root.style.setProperty("--falling-char-shadow-color", t.fallingCharShadowColor);
}

export function ThemeProvider({
  children,
  initialTheme,
}: {
  children: ReactNode;
  initialTheme: ThemeId;
}) {
  const [theme, setThemeState] = useState<ThemeId>(initialTheme);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [pendingLabel, setPendingLabel] = useState("");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useLayoutEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const setTheme = useCallback((next: ThemeId) => {
    if (timerRef.current) clearTimeout(timerRef.current);

    setThemeState(next);
    document.cookie = `preferred-theme=${next}; path=/; max-age=31536000; SameSite=Lax`;

    setPendingLabel(next);
    setIsTransitioning(true);

    // Hold long enough for: 150ms fade-in + ~850ms visible; then exit animation (350ms) plays automatically
    timerRef.current = setTimeout(() => setIsTransitioning(false), 1000);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, tokens: themes[theme] }}>
      {children}
      <ThemeTransitionScreen isVisible={isTransitioning} themeName={pendingLabel} />
    </ThemeContext.Provider>
  );
}

function useThemeContext() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme / useThemeTokens must be used within ThemeProvider");
  return ctx;
}

export function useTheme(): ThemeId {
  return useThemeContext().theme;
}

export function useSetTheme(): (theme: ThemeId) => void {
  return useThemeContext().setTheme;
}

export function useThemeTokens(): ThemeTokens {
  return useThemeContext().tokens;
}

export { defaultTheme, isValidTheme, themes };
