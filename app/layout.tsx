import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dante Escame Portfolio",
  description: "Professional portfolio foundation built with Next.js, React, and the approved style-testing visual system."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
