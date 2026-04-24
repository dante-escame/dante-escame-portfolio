"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

type AnimatedRevealTextProps = {
  as?: "p" | "div";
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function AnimatedRevealText({
  as: Component = "p",
  children,
  className,
  delay = 0,
}: AnimatedRevealTextProps) {
  const elementRef = useRef<HTMLParagraphElement | HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
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

        // Uses the external portfolio's softer text entrance: fade in while lifting into place.
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 30 },
          { autoAlpha: 1, delay, duration: 1, ease: "power2.out", y: 0 }
        );

        observer.disconnect();
      },
      { threshold: 0.35 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [delay]);

  return (
    <Component ref={elementRef} className={className}>
      {children}
    </Component>
  );
}
