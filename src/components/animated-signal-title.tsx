"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

type AnimatedSignalTitleProps = {
  title: string;
};

export function AnimatedSignalTitle({ title }: AnimatedSignalTitleProps) {
  const titleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const element = titleRef.current;

    if (!element) {
      return;
    }

    // Brings the profile signal title into view with the same cyberpunk-style reveal rhythm.
    const context = gsap.context(() => {
      gsap.fromTo(
        element,
        { autoAlpha: 0, y: 18 },
        { autoAlpha: 1, duration: 0.8, ease: "power3.out", y: 0 }
      );
    }, element);

    return () => {
      context.revert();
    };
  }, []);

  return (
    <p
      ref={titleRef}
      className="animated-signal-title text-lg font-semibold uppercase tracking-[0.14em] text-(--color-heading)"
      data-text={title}
    >
      {title}
    </p>
  );
}
