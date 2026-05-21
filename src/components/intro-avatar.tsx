"use client";

import dynamic from "next/dynamic";

import { useTranslation } from "../lib/i18n/context";

function AvatarLoadingPlaceholder() {
  const t = useTranslation();

  return (
    <div className="flex h-full min-h-[320px] items-center justify-center border border-(--color-border-cyan)/40 bg-[rgba(7,2,12,0.72)] text-[11px] uppercase tracking-[0.28em] text-(--color-cyan)">
      {t.whoAmI.syncingLabel}
    </div>
  );
}

const IntroAvatarCanvas = dynamic(
  () => import("./intro-avatar-canvas").then((module) => module.IntroAvatarCanvas),
  {
    ssr: false,
    loading: AvatarLoadingPlaceholder,
  },
);

export function IntroAvatar() {
  const t = useTranslation();

  return (
    <div className="relative overflow-hidden border border-(--color-border-cyan)/50 bg-[linear-gradient(180deg,rgba(128,0,128,0.12),rgba(4,2,8,0.86))]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(246,216,255,0.12),transparent_30%),linear-gradient(135deg,rgba(223,2,74,0.08),transparent_48%,rgba(13,205,205,0.08))]" />
      <div className="pointer-events-none absolute inset-x-6 top-5 flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-(--color-heading)/70">
        <span>{t.whoAmI.avatarLabel}</span>
        <span className="text-(--color-cyan)">{t.whoAmI.dragLabel}</span>
      </div>
      <div className="pointer-events-none absolute left-6 top-11 h-px w-28 bg-gradient-to-r from-(--color-pink) via-(--color-cyan) to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[rgba(1,1,4,0.94)] via-[rgba(1,1,4,0.45)] to-transparent" />

      <div className="relative h-[320px] md:h-[420px]">
        <IntroAvatarCanvas />
      </div>
    </div>
  );
}
