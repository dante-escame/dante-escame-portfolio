import React from "react";
import { AttentionBox } from "./attention-box";
import { CyberButton } from "./cyber-button";
import { CyberSlider } from "./cyber-slider";
import { CyberBadge } from "./cyber-badge";
import { CyberTag } from "./cyber-tag";
import { PillSelector } from "./pill-selector";
import { CyberToggle } from "./cyber-toggle";
import { StyleSection } from "./style-kit";

type UIElementsShowcaseProps = {
  sections?: Array<{
    title: string;
    blocks: Array<{
      title: string;
      content: React.ReactNode;
    }>;
  }>;
  className?: string;
};

const defaultSections = [
  {
    title: "Attention Boxes",
    blocks: [
      {
        title: "Alerts",
        content: (
          <div className="grid gap-6 md:grid-cols-2">
            <AttentionBox title="System Alert" variant="default">
              Portfolio shell initialized. Reusable UI pieces are ready for
              section assembly and case-study framing.
            </AttentionBox>
            <AttentionBox title="Stage Review" variant="gold">
              Stage 1 locks the stack, token system, and component baseline
              before content architecture and final portfolio sections land.
            </AttentionBox>
          </div>
        )
      }
    ]
  },
  {
    title: "Interactive Components",
    blocks: [
      {
        title: "Buttons",
        content: (
          <div className="flex flex-wrap gap-4">
            <CyberButton variant="primary">View Work</CyberButton>
            <CyberButton variant="secondary">Contact</CyberButton>
            <CyberButton variant="gold">Featured Project</CyberButton>
            <CyberButton variant="primary" disabled>
              Coming Soon
            </CyberButton>
          </div>
        )
      },
      {
        title: "Switches & Sliders",
        content: (
            <div className="space-y-4">
              <div className="flex gap-8">
              <CyberToggle label="Available for work" defaultChecked />
              <CyberToggle label="Experimental mode" />
              </div>
            <CyberSlider label="Frontend focus" defaultValue={78} />
            <CyberSlider label="Product polish" defaultValue={86} />
          </div>
        )
      }
    ]
  },
  {
    title: "Selection & Indicators",
    blocks: [
      {
        title: "Pill Selectors",
        content: (
          <PillSelector
            options={[
              { label: "Frontend", value: "frontend" },
              { label: "Full Stack", value: "full-stack" },
              { label: "Design Systems", value: "design-systems" }
            ]}
            defaultValue="full-stack"
          />
        )
      },
      {
        title: "Badges & Tags",
        content: (
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-2">
              <CyberBadge variant="pink">React</CyberBadge>
              <CyberBadge variant="cyan">Next.js</CyberBadge>
              <CyberBadge variant="gold">Featured</CyberBadge>
              <CyberBadge variant="purple">Systems</CyberBadge>
            </div>
            <div className="flex flex-wrap gap-2">
              <CyberTag variant="cyan">Interfaces</CyberTag>
              <CyberTag variant="pink">Motion</CyberTag>
              <CyberTag variant="gold">Case Study</CyberTag>
            </div>
          </div>
        )
      }
    ]
  }
] satisfies UIElementsShowcaseProps["sections"];

export function UIElementsShowcase({
  sections = defaultSections,
  className
}: UIElementsShowcaseProps) {
  return (
    <div className={`space-y-12 ${className ?? ""}`}>
      {sections.map((section) => (
        <StyleSection key={section.title} title={section.title}>
          <div className={`grid gap-8 ${section.blocks.length > 1 ? "md:grid-cols-2" : ""}`}>
            {section.blocks.map((block) => (
              <div key={block.title} className="space-y-6">
                <h4 className="text-xs uppercase tracking-[0.2em] text-(--color-accent)">
                  {block.title}
                </h4>
                {block.content}
              </div>
            ))}
          </div>
        </StyleSection>
      ))}
    </div>
  );
}
