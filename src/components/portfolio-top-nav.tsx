"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useTranslation } from "../lib/i18n/context";
import { LanguageSelector } from "./language-selector";
import { ThemeSelector } from "./theme-selector";

type NavHref = "/who-am-i" | "/my-background" | "/projects";

type PortfolioTopNavProps = {
  activeHref?: NavHref;
};

export function PortfolioTopNav({ activeHref }: PortfolioTopNavProps) {
  const pathname = usePathname();
  const currentHref = activeHref ?? pathname;
  const t = useTranslation();

  const navigationItems = [
    { href: "/who-am-i" as const, label: t.nav.whoAmI },
    { href: "/my-background" as const, label: t.nav.myBackground },
    { href: "/projects" as const, label: t.nav.projects },
  ];

  return (
    <nav
      aria-label="Portfolio sections"
      className="sticky top-0 z-50 border-b border-(--color-border) bg-[rgba(1,1,4,0.84)] backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-6 py-3 md:px-10">
        {navigationItems.map((item) => {
          const isActive = item.href === currentHref;

          return (
            <Link
              key={item.href}
              aria-current={isActive ? "page" : undefined}
              className={[
                "inline-flex items-center border border-transparent px-3 py-1.5 text-[11px] uppercase tracking-[0.24em] transition-all duration-200",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-cyan) focus-visible:ring-offset-2 focus-visible:ring-offset-(--color-bg)",
                isActive
                  ? "border-(--color-pink)/60 bg-(--color-pink)/10 text-(--color-heading) shadow-[0_0_18px_rgba(223,2,74,0.18)]"
                  : "text-(--color-text)/78 hover:border-(--color-cyan)/45 hover:text-(--color-heading)",
              ].join(" ")}
              href={item.href}
            >
              {item.label}
            </Link>
          );
        })}
        <div className="ml-auto flex items-center gap-2">
          <ThemeSelector />
          <LanguageSelector />
        </div>
      </div>
    </nav>
  );
}
