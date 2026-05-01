"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

type AnimatedSignalTitleProps = {
  title: string;
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  delay?: number;
};

export function AnimatedSignalTitle({
  title,
  as = "p",
  className = "",
  delay = 0,
}: AnimatedSignalTitleProps) {
  const titleRef = useRef<HTMLElement>(null);
  const TitleTag = as;

  useEffect(() => {
    const element = titleRef.current;

    if (!element) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (prefersReducedMotion.matches) {
      gsap.set(element, { autoAlpha: 1, clearProps: "transform" });
      return;
    }

    let hasAnimated = false;
    const context = gsap.context(() => {
      gsap.set(element, { autoAlpha: 0, y: 18 });
    }, element);

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (!entry?.isIntersecting || hasAnimated) {
          return;
        }

        hasAnimated = true;

        // Reveals the title only when it enters view to avoid spending the effect offscreen.
        gsap.to(element, {
          autoAlpha: 1,
          delay,
          duration: 0.8,
          ease: "power3.out",
          y: 0,
        });

        observer.disconnect();
      },
      { threshold: 0.35 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      context.revert();
    };
  }, [delay]);

  return (
    <TitleTag
      ref={(node) => {
        titleRef.current = node;
      }}
      className={`animated-signal-title text-xl font-semibold uppercase tracking-[0.14em] text-(--color-heading) ${className}`}
      data-text={title}
    >
      {title}
    </TitleTag>
  );
}
