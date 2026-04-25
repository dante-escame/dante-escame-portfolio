"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

type TechnologyItem = {
  icon: React.ReactNode;
  label: string;
};

type PortfolioTechnologiesGridProps = {
  eyebrow?: string;
  title?: string;
  items?: TechnologyItem[];
  className?: string;
};

function DotNetIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 64 64" fill="none">
      <rect x="10" y="14" width="44" height="36" rx="8" stroke="currentColor" strokeWidth="4" />
      <path d="M18 38V26h7c4 0 6 2.4 6 6s-2 6-6 6h-7Z" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M36 26v12m0-12h10m-10 6h8m-8 6h10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CSharpIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 64 64" fill="none">
      <path d="M24 18 14 24v16l10 6 10-6" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />

      <path d="M42 24v16M50 24v16M38 30h16M38 36h16" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

function ReactIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 64 64" fill="none">
      <circle cx="32" cy="32" r="4" fill="currentColor" />
      <ellipse cx="32" cy="32" rx="22" ry="9" stroke="currentColor" strokeWidth="4" />
      <ellipse cx="32" cy="32" rx="22" ry="9" stroke="currentColor" strokeWidth="4" transform="rotate(60 32 32)" />
      <ellipse cx="32" cy="32" rx="22" ry="9" stroke="currentColor" strokeWidth="4" transform="rotate(120 32 32)" />
    </svg>
  );
}

function NodeIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 64 64" fill="none">
      <path d="m32 10 18 10v24L32 54 14 44V20l18-10Z" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
      <path d="M25 25v14m0-14 7-4 7 4v14l-7 4-7-4" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function NextIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 64 64" fill="none">
      <circle cx="32" cy="32" r="22" stroke="currentColor" strokeWidth="4" />
      <path d="M24 42V22l16 20V22" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m37 37 8 9" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

function AwsIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 64 64" fill="none">
      <path d="M14 38c9 6 27 7 38 0" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="m44 42 8-4-3 9" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 30h8l6-12 6 12h8" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function KubernetesIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 64 64" fill="none">
      <circle cx="32" cy="32" r="8" stroke="currentColor" strokeWidth="4" />
      <path d="m32 12 4 10m16 10-10 0m-6 20-4-10M12 32l10 0m3-13 7 5m7 16-7-5m13-3-5 7M24 25l-5 7" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <circle cx="32" cy="32" r="20" stroke="currentColor" strokeWidth="4" strokeDasharray="4 6" opacity="0.7" />
    </svg>
  );
}

function DockerIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 64 64" fill="none">
      <rect x="16" y="24" width="8" height="8" stroke="currentColor" strokeWidth="4" />
      <rect x="26" y="24" width="8" height="8" stroke="currentColor" strokeWidth="4" />
      <rect x="36" y="24" width="8" height="8" stroke="currentColor" strokeWidth="4" />
      <rect x="26" y="14" width="8" height="8" stroke="currentColor" strokeWidth="4" />
      <path d="M14 38h22c8 0 12-3 14-10 3 0 6 1 8 4-2 6-8 16-22 16H20c-4 0-6-3-6-10Z" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const defaultItems: TechnologyItem[] = [
  { icon: <DotNetIcon />, label: ".NET" },
  { icon: <CSharpIcon />, label: "C#" },
  { icon: <ReactIcon />, label: "REACT" },
  { icon: <NodeIcon />, label: "NODE" },
  { icon: <NextIcon />, label: "NEXT.JS" },
  { icon: <AwsIcon />, label: "AWS" },
  { icon: <KubernetesIcon />, label: "KUBERNETES" },
  { icon: <DockerIcon />, label: "DOCKER" },
];

export function PortfolioTechnologiesGrid({
  eyebrow = "Core stack signal",
  title = "What I Tend To Build Around",
  items = defaultItems,
  className,
}: PortfolioTechnologiesGridProps) {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;

    if (!root) {
      return;
    }

    const techItems = Array.from(root.querySelectorAll<HTMLElement>("[data-tech-item]"));

    if (techItems.length === 0) {
      return;
    }

    let hasAnimated = false;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (!entry?.isIntersecting || hasAnimated) {
          return;
        }

        hasAnimated = true;

        gsap.fromTo(
          techItems,
          { autoAlpha: 0, scale: 0.2, rotate: -180, y: 24 },
          {
            autoAlpha: 1,
            duration: 0.6,
            ease: "back.out(1.7)",
            rotate: 0,
            scale: 1,
            stagger: 0.1,
            y: 0,
          }
        );

        observer.disconnect();
      },
      { threshold: 0.25 }
    );

    observer.observe(root);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={rootRef} className={className}>
      <div className="portfolio-tech-shell panel-cut">
        <div className="portfolio-tech-header">
          <p className="portfolio-tech-eyebrow">{eyebrow}</p>
          <h2 className="portfolio-tech-title">{title}</h2>
        </div>

        <div className="portfolio-tech-grid">
          {items.map((item) => (
            <article key={item.label} className="portfolio-tech-item" data-tech-item>
              <div className="portfolio-tech-icon">{item.icon}</div>
              <span>{item.label}</span>
            </article>
          ))}
        </div>

        <p className="portfolio-tech-note">
          This is my usual stack, but not the boundary of what I can build with. I'm a fast learner that often ramp into new technologies when the product calls for it.
        </p>
      </div>
    </section>
  );
}
