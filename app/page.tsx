import { HomeShowcase } from "../src/components/home-showcase";
import { PrototypeNavTabs } from "../src/components/prototype-nav-tabs";
import { SimpleAssetsShowcase } from "../src/components/simple-assets-showcase";
import { TextPatternsShowcase } from "../src/components/text-patterns-showcase";
import { UIElementsShowcase } from "../src/components/ui-elements-showcase";

const prototypeTabs = [
  {
    id: "home",
    label: "Home",
    hint: "Server-rendered overview",
    href: "/"
  },
  {
    id: "simple-assets",
    label: "Simple Assets",
    hint: "Server-rendered token lab",
    href: "?tab=simple-assets"
  },
  {
    id: "text-patterns",
    label: "Text Patterns",
    hint: "Content typography test",
    href: "?tab=text-patterns"
  },
  {
    id: "ui-elements",
    label: "UI Elements",
    hint: "Interactive component library",
    href: "?tab=ui-elements"
  }
] as const;

export default async function Home({
  searchParams
}: {
  searchParams: Promise<{ tab?: string }>;
}) {
  const { tab } = await searchParams;
  const activeTab = (tab === "simple-assets"
    ? "simple-assets"
    : tab === "text-patterns"
      ? "text-patterns"
      : tab === "ui-elements"
        ? "ui-elements"
        : "home") as "home" | "simple-assets" | "text-patterns" | "ui-elements";

  return (
    <main className="min-h-screen text-(--color-text)">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center gap-10 px-6 py-20 md:px-10">
        <div className="space-y-4">
          <p className="inline-flex w-fit items-center gap-2 border border-(--color-accent)/60 bg-(--color-panel) px-3 py-1 text-xs uppercase tracking-[0.35em] text-(--color-accent) shadow-(--shadow-glow-soft)">
            Stage 1 Bootstrap
          </p>
          <h1 className="max-w-4xl text-5xl font-black uppercase tracking-[0.08em] text-(--color-heading) md:text-7xl">
            Dante Escame Portfolio
          </h1>
          <p className="max-w-3xl text-base leading-7 text-(--color-text) md:text-lg">
            The real portfolio codebase is now aligned around{" "}
            <span className="text-(--color-cyan)">Next.js 16</span>,{" "}
            <span className="text-(--color-cyan)">App Router</span>,{" "}
            <span className="text-(--color-cyan)">Tailwind CSS v4</span>,
            and the inherited design system from the approved style-testing
            baseline. Stage 1 establishes the reusable foundation for portfolio
            sections, case studies, and future content work.
          </p>

          <PrototypeNavTabs
            activeTab={activeTab}
            tabs={prototypeTabs.map((tab) => ({ ...tab }))}
            panels={{
              home: <HomeShowcase />,
              "simple-assets": <SimpleAssetsShowcase />,
              "text-patterns": <TextPatternsShowcase />,
              "ui-elements": <UIElementsShowcase />
            }}
          />
        </div>
      </section>
    </main>
  );
}
