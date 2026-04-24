"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";

const introLines = [
  "Hi, i'm Dante.",
  "and this is my",
  "Immersive Cyberpunk Portfolio",
];

const fallingChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const loadingDurationSeconds = 1.5;

export function PortfolioIntroLoader() {
  const router = useRouter();
  const rootRef = useRef<HTMLElement>(null);
  const columnsRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const playButtonRef = useRef<HTMLButtonElement>(null);
  const lineRefs = useRef<Array<HTMLParagraphElement | null>>([]);
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const columnsHost = columnsRef.current;

    if (!columnsHost) {
      return;
    }

    const columnCount = window.innerWidth < 768 ? 14 : 24;
    const columns: HTMLDivElement[] = [];

    // Builds the ambient "digital rain" backdrop behind the loader copy.
    for (let index = 0; index < columnCount; index += 1) {
      const column = document.createElement("div");
      column.className = "intro-falling-column";
      column.style.left = `${(100 / columnCount) * index}%`;
      column.style.animationDelay = `${Math.random() * 3}s`;
      column.style.animationDuration = `${7 + Math.random() * 6}s`;

      const charCount = 14 + Math.floor(Math.random() * 16);

      for (let charIndex = 0; charIndex < charCount; charIndex += 1) {
        const char = document.createElement("div");
        const opacity = (Math.random() * 0.45 + 0.12).toFixed(2);

        char.className = "intro-falling-char";
        char.textContent = fallingChars[Math.floor(Math.random() * fallingChars.length)];
        char.style.opacity = opacity;
        char.style.textShadow = `0 0 ${4 + Number(opacity) * 8}px rgba(223, 2, 74, 0.7)`;
        column.appendChild(char);
      }

      columnsHost.appendChild(column);
      columns.push(column);
    }

    return () => {
      columns.forEach((column) => column.remove());
    };
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    const progressBar = progressBarRef.current;
    const activeLines = lineRefs.current.filter(Boolean);

    if (!root || !progressBar || activeLines.length === 0) {
      return;
    }

    const progressState = { value: 0 };
    const fadeDelay = loadingDurationSeconds - 0.6;

    const context = gsap.context(() => {
      // Prepares the text stack and progress bar offscreen before the intro begins.
      gsap.set(progressBar, { scaleX: 0, transformOrigin: "left center" });
      gsap.set(activeLines, { autoAlpha: 0, y: 24 });

      // Reveals the main three-line message in sequence at the center of the screen.
      gsap.to(activeLines, {
        autoAlpha: 1,
        duration: 0.82,
        ease: "power3.out",
        stagger: 0.28,
        y: 0,
      });

      // Brings in the small system-status line above the headline.
      gsap.fromTo(
        ".intro-loading-kicker",
        { autoAlpha: 0, y: 18 },
        { autoAlpha: 1, delay: 0.1, duration: 0.7, ease: "power2.out", y: 0 }
      );

      // Advances the numeric percentage so the screen reads like a boot sequence.
      gsap.to(progressState, {
        value: 100,
        duration: loadingDurationSeconds,
        ease: "none",
        onUpdate: () => {
          setProgress(Math.round(progressState.value));
        },
        onComplete: () => {
          setProgress(100);
          setIsReady(true);
        },
      });

      // Fills the visible loading bar in sync with the percentage readout.
      gsap.to(progressBar, {
        scaleX: 1,
        duration: loadingDurationSeconds,
        ease: "none",
      });
    }, root);

    return () => {
      context.revert();
    };
  }, []);

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
      <div ref={columnsRef} className="intro-falling-numbers" aria-hidden="true" />
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
