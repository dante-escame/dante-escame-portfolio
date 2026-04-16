import type { Story, StoryDefault } from "@ladle/react";

import { TextPatternBlock } from "./text-pattern-block";

export default {
  title: "Components/TextPatternBlock"
} satisfies StoryDefault;

const frameClassName = "mx-auto max-w-3xl p-8";

export const Default: Story = () => (
  <div className={frameClassName}>
    <TextPatternBlock subtitle="Test Pattern 01" title="Typography Hierarchy">
      <p>
        This is a standard paragraph within a cyberpunk content block. It tests
        the base font size, line height, and color contrast against the dark
        background.
      </p>
      <h4 className="text-lg font-bold uppercase tracking-tight text-(--color-heading)/90">
        Secondary Heading
      </h4>
      <p>
        Another paragraph follows the heading to test the spacing between
        different block-level elements.
      </p>
    </TextPatternBlock>
  </div>
);

export const CyanVariant: Story = () => (
  <div className={frameClassName}>
    <TextPatternBlock subtitle="Test Pattern 02" title="Cyan Highlight Pattern" variant="cyan">
      <p>
        This variant uses the <span className="text-(--color-cyan)">cyan</span> accent
        color for the border and subtitle, creating a secondary visual rhythm
        that breaks up the dominant purple and pink palette.
      </p>
      <ul className="space-y-2 text-sm uppercase tracking-wide text-(--color-cyan)">
        <li>• System Diagnostic: [OK]</li>
        <li>• Link Integrity: 100%</li>
      </ul>
    </TextPatternBlock>
  </div>
);
