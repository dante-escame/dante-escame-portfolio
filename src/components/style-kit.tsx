import React from "react";

type AccentTone = "purple" | "cyan";

type StylePanelProps = {
  children: React.ReactNode;
  className?: string;
  tone?: AccentTone;
};

type StylePanelHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: React.ReactNode;
  aside?: React.ReactNode;
  className?: string;
  titleAs?: "h2" | "h3" | "h4";
  tone?: AccentTone;
};

function joinClasses(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function StylePanel({
  children,
  className,
  tone = "purple"
}: StylePanelProps) {
  return (
    <article
      className={joinClasses(
        "space-y-5 panel-cut",
        tone === "cyan" && "panel-cut-cyan",
        className
      )}
    >
      {children}
    </article>
  );
}

export function StylePanelHeader({
  eyebrow,
  title,
  description,
  aside,
  className,
  titleAs = "h3",
  tone = "purple"
}: StylePanelHeaderProps) {
  const TitleTag = titleAs;
  const accentClass =
    tone === "cyan" ? "text-(--color-cyan)" : "text-(--color-accent)";

  return (
    <div
      className={joinClasses(
        "flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between",
        className
      )}
    >
      <div className="space-y-2">
        {eyebrow ? (
          <p className={joinClasses("text-xs uppercase tracking-[0.28em]", accentClass)}>
            {eyebrow}
          </p>
        ) : null}
        <TitleTag className="text-2xl font-semibold uppercase tracking-[0.14em] text-(--color-heading)">
          {title}
        </TitleTag>
        {description ? (
          <div className="max-w-2xl text-sm leading-7 text-(--color-text) md:text-base">
            {description}
          </div>
        ) : null}
      </div>
      {aside ? <div className="shrink-0">{aside}</div> : null}
    </div>
  );
}
