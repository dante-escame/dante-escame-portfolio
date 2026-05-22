import type { Metadata } from "next";
import { cookies } from "next/headers";

import { LocaleProvider } from "../src/lib/i18n/context";
import type { Locale } from "../src/lib/i18n/messages";
import { ThemeProvider } from "../src/lib/theme/context";
import { defaultTheme, isValidTheme, themes } from "../src/lib/theme/themes";
import type { ThemeId } from "../src/lib/theme/themes";

import "./globals.css";

export const metadata: Metadata = {
  title: "Dante Escame Portfolio",
  description: "Professional portfolio foundation built with Next.js, React, and the approved style-testing visual system."
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();

  const rawLocale = cookieStore.get("preferred-locale")?.value;
  const locale: Locale = rawLocale === "pt-br" ? "pt-br" : "en";

  const rawTheme = cookieStore.get("preferred-theme")?.value;
  const themeId: ThemeId = isValidTheme(rawTheme) ? rawTheme : defaultTheme;
  const t = themes[themeId];

  const htmlStyle = {
    "--color-bg": t.bg,
    "--color-bg-elevated": t.bgElevated,
    "--color-panel": t.panel,
    "--color-heading": t.heading,
    "--color-text": t.text,
    "--color-accent": t.accent,
    "--color-pink": t.pink,
    "--color-cyan": t.cyan,
    "--color-gold": t.gold,
    "--color-border": t.border,
    "--color-border-cyan": t.borderCyan,
    "--shadow-glow-soft": t.shadowGlowSoft,
    "--body-bg": t.bodyBg,
    "--body-grid-color": t.bodyGridColor,
    "--falling-char-color": t.fallingCharColor,
    "--falling-char-shadow-color": t.fallingCharShadowColor,
  } as React.CSSProperties;

  return (
    <html lang={locale === "pt-br" ? "pt-BR" : "en"} style={htmlStyle}>
      <body>
        <ThemeProvider initialTheme={themeId}>
          <LocaleProvider initialLocale={locale}>
            {children}
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
