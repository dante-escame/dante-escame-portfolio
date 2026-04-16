import type { Story, StoryDefault } from "@ladle/react";

import { PrototypeNavTabs } from "./prototype-nav-tabs";

export default {
  title: "Components/PrototypeNavTabs"
} satisfies StoryDefault;

const tabs = [
  { id: "home", label: "Home", hint: "Server-rendered overview", href: "/" },
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
];

const panelContent = (heading: string, body: string) => (
  <div className="space-y-3 rounded border border-(--color-accent)/60 bg-[rgba(10,3,14,0.85)] p-4 text-sm leading-6 text-(--color-text)">
    <h3 className="text-lg font-semibold text-(--color-heading)">{heading}</h3>
    <p>{body}</p>
  </div>
);

const panels = {
  home: panelContent(
    "Stage 1 Home Panel",
    "This server-rendered panel mirrors the portfolio home tab in the app and keeps the layout consistent while the tabs stay interactive."
  ),
  "simple-assets": panelContent(
    "Simple Assets",
    "Token previews, palettes, and design notes live in this panel."
  ),
  "text-patterns": panelContent(
    "Text Patterns",
    "Focused typography lab for testing headings, paragraphs, and readability."
  ),
  "ui-elements": panelContent(
    "UI Elements",
    "Interactive controls and indicators live in this panel."
  )
};

const frameClassName = "mx-auto max-w-5xl p-8";

export const HomeTab: Story = () => (
  <div className={frameClassName}>
    <PrototypeNavTabs activeTab="home" panels={panels} tabs={tabs} />
  </div>
);

export const SimpleAssetsTab: Story = () => (
  <div className={frameClassName}>
    <PrototypeNavTabs activeTab="simple-assets" panels={panels} tabs={tabs} />
  </div>
);

export const TextPatternsTab: Story = () => (
  <div className={frameClassName}>
    <PrototypeNavTabs activeTab="text-patterns" panels={panels} tabs={tabs} />
  </div>
);
