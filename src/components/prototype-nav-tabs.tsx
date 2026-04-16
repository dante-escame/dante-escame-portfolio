import Link from "next/link";

type TabDefinition = {
  id: string;
  label: string;
  hint: string;
  href: string;
};

type PrototypeNavTabsProps = {
  activeTab: string;
  description?: React.ReactNode;
  tabs: TabDefinition[];
  panels: Record<string, React.ReactNode>;
};

export function PrototypeNavTabs({
  activeTab,
  description = "The tab interaction is handled via routing, fetching server-rendered tabs.",
  tabs,
  panels
}: PrototypeNavTabsProps) {
  const activePanel = panels[activeTab] ?? panels[tabs[0]?.id];

  return (
    <section className="panel-cut space-y-5">
      <div className="space-y-4">
        <div className="space-y-2">
          <p className="max-w-2xl text-sm leading-7 text-(--color-text) md:text-base">
            {description}
          </p>
        </div>

        <div
          aria-label="Prototype sections"
          className="flex w-full flex-wrap items-stretch gap-2 border border-(--color-accent)/35 bg-[rgba(10,3,14,0.85)] p-2"
          role="tablist"
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <Link
                key={tab.id}
                aria-controls={`${tab.id}-panel`}
                aria-selected={isActive}
                className={[
                  "flex-1 border px-4 py-3 text-left transition-colors",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-cyan) focus-visible:ring-offset-2 focus-visible:ring-offset-(--color-bg)",
                  isActive
                    ? "border-(--color-cyan) bg-[rgba(13,205,205,0.1)] text-(--color-heading) shadow-[0_0_22px_rgba(13,205,205,0.16)]"
                    : "border-(--color-accent)/45 bg-[rgba(128,0,128,0.08)] text-(--color-text) hover:border-(--color-cyan)/55 hover:text-(--color-heading)"
                ].join(" ")}
                href={tab.href}
                id={`${tab.id}-tab`}
                role="tab"
              >
                <span className="block text-xs uppercase tracking-[0.32em] text-(--color-cyan)">
                  {tab.label}
                </span>
                <span className="mt-2 block text-[11px] uppercase tracking-[0.18em] text-current/80">
                  {tab.hint}
                </span>
              </Link>
            );
          })}
        </div>
      </div>

        <div
          aria-labelledby={`${activeTab}-tab`}
          id={`${activeTab}-panel`}
          role="tabpanel"
        >
          {activePanel}
        </div>
    </section>
  );
}
