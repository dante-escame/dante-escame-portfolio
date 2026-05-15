"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";

import { DigitalRainBackground } from "./digital-rain-background";

const introLines = [
  "Hi, i'm Dante.",
  "and this is my",
  "Immersive Cyberpunk Portfolio",
];

// Minimum display time so the intro text animation always plays through.
const MIN_DISPLAY_MS = 1200;

async function preloadWithProgress(
  url: string,
  onProgress: (pct: number) => void
): Promise<void> {
  const response = await fetch(url);
  const contentLength = response.headers.get("content-length");

  if (!contentLength || !response.body) {
    await response.arrayBuffer();
    onProgress(100);
    return;
  }

  const total = parseInt(contentLength, 10);
  const reader = response.body.getReader();
  let received = 0;

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    received += value.length;
    onProgress(Math.min(99, Math.round((received / total) * 100)));
  }

  onProgress(100);
}

export function PortfolioIntroLoader() {
  const router = useRouter();
  const rootRef = useRef<HTMLElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const playButtonRef = useRef<HTMLButtonElement>(null);
  const lineRefs = useRef<Array<HTMLParagraphElement | null>>([]);
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const root = rootRef.current;
    const progressBar = progressBarRef.current;
    const activeLines = lineRefs.current.filter(Boolean);

    if (!root || !progressBar || activeLines.length === 0) {
      return;
    }

    // Prefetch the destination route while the intro plays.
    router.prefetch("/who-am-i");

    const context = gsap.context(() => {
      gsap.set(progressBar, { scaleX: 0, transformOrigin: "left center" });
      gsap.set(activeLines, { autoAlpha: 0, y: 24 });

      gsap.to(activeLines, {
        autoAlpha: 1,
        duration: 0.82,
        ease: "power3.out",
        stagger: 0.28,
        y: 0,
      });

      gsap.fromTo(
        ".intro-loading-kicker",
        { autoAlpha: 0, y: 18 },
        { autoAlpha: 1, delay: 0.1, duration: 0.7, ease: "power2.out", y: 0 }
      );
    }, root);

    // Smooth bar update driven by real fetch progress.
    const updateBar = gsap.quickTo(progressBar, "scaleX", {
      duration: 0.25,
      ease: "power1.out",
    });

    let cancelled = false;

    async function load() {
      const minWait = new Promise<void>((resolve) =>
        setTimeout(resolve, MIN_DISPLAY_MS)
      );

      await preloadWithProgress("/profile.jpg", (pct) => {
        if (cancelled) return;
        setProgress(pct);
        updateBar(pct / 100);
      });

      await minWait;

      if (cancelled) return;
      setProgress(100);
      updateBar(1);
      setIsReady(true);
    }

    load();

    return () => {
      cancelled = true;
      context.revert();
    };
  }, [router]);

  useEffect(() => {
    const playButton = playButtonRef.current;

    if (!playButton || !isReady) {
      return;
    }

    // Unlocks and reveals the CTA once the loading sequence is complete.
    gsap.fromTo(
      playButton,
      { autoAlpha: 0.4, y: 14 },
      { autoAlpha: 1, duration: 0.45, ease: "power2.out", y: 0 }
    );
  }, [isReady]);

  function handlePlay() {
    const root = rootRef.current;

    if (!isReady || isExiting || !root) {
      return;
    }

    setIsExiting(true);

    // Fades the loader out before handing off to the portfolio page.
    gsap.to(root, {
      autoAlpha: 0,
      duration: 0.55,
      ease: "power2.inOut",
      onComplete: () => {
        router.replace("/who-am-i");
      },
    });
  }

  return (
    <main ref={rootRef} className="intro-loading-screen">
      <div className="intro-loading-grid" aria-hidden="true" />
      <DigitalRainBackground />
      <div className="intro-loading-noise" aria-hidden="true" />

      <section className="intro-loading-content" aria-label="Portfolio intro loading screen">
        <p className="intro-loading-kicker">signal boot / dante-escame.portfolio</p>

        <div className="intro-loading-title-block">
          {introLines.map((line, index) => {
            const isAccentLine = index === introLines.length - 1;

            return (
              <p
                key={line}
                ref={(element) => {
                  lineRefs.current[index] = element;
                }}
                className={isAccentLine ? "intro-loading-title intro-loading-title-accent" : "intro-loading-title"}
                data-text={line}
              >
                {line}
              </p>
            );
          })}
        </div>

        <div className="intro-loading-progress">
          <div className="intro-loading-progress-track">
            <div ref={progressBarRef} className="intro-loading-progress-bar" />
          </div>
          <div className="intro-loading-progress-meta">
            <span>immersive mode loading</span>
            <span>{progress}%</span>
          </div>
        </div>

        <button
          ref={playButtonRef}
          className="intro-play-button"
          disabled={!isReady || isExiting}
          onClick={handlePlay}
          type="button"
        >
          {isReady ? "Play" : "Locked"}
        </button>
      </section>
    </main>
  );
}
