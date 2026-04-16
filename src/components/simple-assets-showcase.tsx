import { StyleCardGrid, StyleChipList, StylePanel, StylePanelHeader } from "./style-kit";

type PaletteItem = {
  name: string;
  value: string;
  gradient: string;
  usage: string;
};

type TokenGroup = {
  title: string;
  items: string[];
};

type SimpleAssetsShowcaseProps = {
  palette?: PaletteItem[];
  tokenGroups?: TokenGroup[];
  paletteEyebrow?: string;
  paletteTitle?: string;
  paletteDescription?: React.ReactNode;
  tokenEyebrow?: string;
  tokenTitle?: string;
  className?: string;
};

const defaultPalette = [
  {
    name: "Core Purple",
    value: "#800080",
    gradient: "linear-gradient(135deg, #2a062f 0%, #800080 52%, #cf3ad8 100%)",
    usage: "Structure, glow, borders"
  },
  {
    name: "Punk Red",
    value: "#df024a",
    gradient: "linear-gradient(135deg, #3a0817 0%, #df024a 50%, #ff5b93 100%)",
    usage: "Body emphasis, active text"
  },
  {
    name: "Signal Cyan",
    value: "#0dcdcd",
    gradient: "linear-gradient(135deg, #062a31 0%, #0dcdcd 50%, #8cf7f7 100%)",
    usage: "Selective highlights, markers"
  },
  {
    name: "Title Lavender",
    value: "#f6d8ff",
    gradient: "linear-gradient(135deg, #6b4b73 0%, #f6d8ff 48%, #ffffff 100%)",
    usage: "Headings, bright focal text"
  },
  {
    name: "Neuromancer Gold",
    value: "#f9f338",
    gradient: "linear-gradient(135deg, #3f3902 0%, #f9f338 52%, #fff7a0 100%)",
    usage: "High-tier states, premium accents"
  }
];

const defaultTokenGroups = [
  {
    title: "Shadows",
    items: ["soft glow", "cyan focus ring", "panel elevation"]
  },
  {
    title: "Spacing",
    items: ["section gap 2.5rem", "panel padding 1.5rem", "chip gap 0.5rem"]
  },
  {
    title: "Radius",
    items: ["minimal rounding", "clipped panel corners", "sharp tactical edges"]
  },
  {
    title: "Type Scale",
    items: ["11px labels", "12px core body", "24px panel titles", "hero 48px+"]
  }
];

export function SimpleAssetsShowcase({
  palette = defaultPalette,
  tokenGroups = defaultTokenGroups,
  paletteEyebrow = "Simple Assets",
  paletteTitle = "Color palette",
  paletteDescription = "Stage 1 turns the approved visual direction into reusable tokens for the real portfolio routes and components.",
  tokenEyebrow = "Token matrix",
  tokenTitle = "Design tokens",
  className
}: SimpleAssetsShowcaseProps) {
  return (
    <div className={`grid gap-6 xl:grid-cols-[1.15fr_0.85fr] ${className ?? ""}`}>
      <StylePanel tone="cyan">
        <StylePanelHeader
          description={paletteDescription}
          eyebrow={paletteEyebrow}
          title={paletteTitle}
        />
        <StyleCardGrid
          items={palette.map((color) => ({
            id: color.value,
            title: color.name,
            value: color.value,
            description: color.usage,
            meta: (
              <span
                aria-label={`${color.name} base color`}
                className="inline-block h-3 w-3 shrink-0 rounded-full border border-white/20"
                style={{ backgroundColor: color.value }}
              />
            ),
            preview: (
              <div
                aria-hidden="true"
                className="h-full w-full"
                style={{ backgroundImage: color.gradient }}
              />
            )
          }))}
        />
      </StylePanel>

      <StylePanel>
        <StylePanelHeader eyebrow={tokenEyebrow} title={tokenTitle} />

        <div className="space-y-4">
          {tokenGroups.map((group) => (
            <section
              key={group.title}
              className="border border-(--color-accent)/30 bg-[rgba(20,7,26,0.64)] p-4"
            >
              <h4 className="text-xs uppercase tracking-[0.28em] text-(--color-cyan)">
                {group.title}
              </h4>
              <StyleChipList items={group.items} />
            </section>
          ))}
        </div>
      </StylePanel>
    </div>
  );
}
