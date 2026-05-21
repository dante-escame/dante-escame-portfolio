import type { Metadata } from "next";
import { cookies } from "next/headers";

import { LocaleProvider } from "../src/lib/i18n/context";
import type { Locale } from "../src/lib/i18n/messages";

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
  const raw = cookieStore.get("preferred-locale")?.value;
  const locale: Locale = raw === "pt-br" ? "pt-br" : "en";

  return (
    <html lang={locale === "pt-br" ? "pt-BR" : "en"}>
      <body>
        <LocaleProvider initialLocale={locale}>
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}
