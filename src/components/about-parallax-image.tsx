"use client";

import Image from "next/image";
import { useEffect, useRef, type CSSProperties } from "react";

export function AboutParallaxImage() {
  const frameRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (prefersReducedMotion.matches) {
      frame.style.setProperty("--about-hero-progress", "0.5");
      return;
    }

    let raf = 0;

    const update = () => {
      const rect = frame.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const rawProgress =
        (viewportHeight - rect.top) / (viewportHeight + rect.height);
      const progress = Math.max(0, Math.min(1, rawProgress));

      frame.style.setProperty("--about-hero-progress", progress.toFixed(4));
      raf = 0;
    };

    const onScroll = () => {
      if (!raf) raf = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      className="about-hero-image"
      aria-label="Studio scene"
      ref={frameRef}
      style={{ "--about-hero-progress": 0.5 } as CSSProperties}
    >
      <Image
        src="/media/about/studio-hands.jpg"
        alt=""
        width={1920}
        height={1280}
        priority
      />
    </section>
  );
}
