import { StylePanel } from "./style-kit";
import { TopicsInList } from "./topics-in-list";
import { TopicsInSquares } from "./topics-in-squares";

type HomeShowcaseProps = {
  stackTopics?: string[];
  visualTopics?: string[];
  stackTitle?: string;
  stackNote?: string;
  visualTitle?: string;
  paletteEyebrow?: string;
  paletteDescription?: React.ReactNode;
  className?: string;
};

const defaultStackTopics = [
  "Next.js 16 App Router",
  "Tailwind CSS v4",
  "Ladle component docs",
  "Docker standalone build",
  "Vercel deployment target",
  "Portfolio-ready UI primitives"
];

const defaultVisualTopics = [
  "Core purple structural framing",
  "Punk-red emphasis hierarchy",
  "Selective cyan highlight language",
  "Mono-forward portfolio typography"
];

const defaultPaletteDescription = (
  <p className="mt-4 text-sm leading-7 text-(--color-text) md:text-base">
    Stage 1 keeps the approved palette system from the source project:{" "}
    <span className="text-(--color-cyan)">#800080</span> for structural glow and
    borders, <span className="text-(--color-cyan)">#df024a</span> as the dominant
    punk text color, <span className="text-(--color-cyan)">#0dcdcd</span> for
    selective highlight words, and{" "}
    <span className="text-(--color-cyan)">#f9f338</span> for high-tier status
    accents inside the portfolio system.
  </p>
);

export function HomeShowcase({
  stackTopics = defaultStackTopics,
  visualTopics = defaultVisualTopics,
  stackTitle = "Project foundation",
  stackNote = "Bootstrap complete",
  visualTitle = "Visual pillars",
  paletteEyebrow = "Inherited palette",
  paletteDescription = defaultPaletteDescription,
  className
}: HomeShowcaseProps) {
  return (
    <div className={`space-y-6 ${className ?? ""}`}>
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <TopicsInSquares
          note={stackNote}
          title={stackTitle}
          topics={stackTopics}
        />
        <TopicsInList title={visualTitle} topics={visualTopics} />
      </div>

      <StylePanel className="max-w-4xl">
        <p className="text-xs uppercase tracking-[0.28em] text-(--color-accent)">
          {paletteEyebrow}
        </p>
        {paletteDescription}
      </StylePanel>
    </div>
  );
}
