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

type StyleSectionProps = {
  title: string;
  eyebrow?: string;
  description?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

type StyleChipListProps = {
  items: string[];
  className?: string;
};

type StyleCardGridProps = {
  items: Array<{
    id?: string;
    title: string;
    value?: string;
    description?: string;
    preview?: React.ReactNode;
    meta?: React.ReactNode;
  }>;
  columnsClassName?: string;
  className?: string;
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

export function StyleSection({
  title,
  eyebrow,
  description,
  children,
  className
}: StyleSectionProps) {
  return (
    <section className={joinClasses("space-y-6", className)}>
      <StylePanelHeader
        eyebrow={eyebrow}
        title={title}
        description={description}
        titleAs="h3"
      />
      {children}
    </section>
  );
}

export function StyleChipList({ items, className }: StyleChipListProps) {
  return (
    <div className={joinClasses("mt-3 flex flex-wrap gap-2", className)}>
      {items.map((item) => (
        <span
          key={item}
          className="border border-(--color-border-cyan) bg-[rgba(13,205,205,0.08)] px-3 py-2 text-[11px] uppercase tracking-[0.18em] text-(--color-heading)"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export function StyleCardGrid({
  items,
  columnsClassName = "sm:grid-cols-2",
  className
}: StyleCardGridProps) {
  return (
    <div className={joinClasses("grid gap-4", columnsClassName, className)}>
      {items.map((item) => (
        <div
          key={item.id ?? item.title}
          className="border border-(--color-accent)/35 bg-[rgba(128,0,128,0.08)] p-4 shadow-[0_0_18px_rgba(128,0,128,0.14)]"
        >
          {item.preview ? (
            <div className="h-20 overflow-hidden border border-(--color-accent)/30 bg-[rgba(10,3,14,0.7)]">
              <div className="h-full w-full">{item.preview}</div>
            </div>
          ) : null}
          <div className={joinClasses(item.preview ? "mt-4" : undefined, "space-y-2")}>
            <div className="flex items-center gap-2">
              <p className="text-xs uppercase tracking-[0.24em] text-(--color-heading)">
                {item.title}
              </p>
              {item.meta}
            </div>
            {item.value ? (
              <p className="text-sm text-(--color-cyan)">{item.value}</p>
            ) : null}
            {item.description ? (
              <p className="text-[11px] uppercase tracking-[0.18em] text-(--color-text)/80">
                {item.description}
              </p>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}
