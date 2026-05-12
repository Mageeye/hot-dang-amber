"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { projects, type Project } from "@/data/projects";

const servicesLeft = [
  "Brand Films",
  "Commercials & Ad Spots",
  "Event Cinematography",
  "Editorial & Fashion Films",
  "Wedding Films",
];

const servicesRight = [
  "Product Films",
  "Music Videos",
  "Documentary Shorts",
  "Social Media Visuals",
  "Creative Direction",
];

const logos = [
  "/logos/logo-eye.svg",
  "/logos/logo-chain.svg",
  "/logos/logo-n.svg",
  "/logos/logo-word.svg",
  "/logos/logo-orbit.svg",
  "/logos/logo-loop.svg",
  "/logos/logo-wave.svg",
];

function RollingLink({
  children,
  href,
  className = "",
  onClick,
}: {
  children: string;
  href: string;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Link className={`rolling-link ${className}`} href={href} onClick={onClick}>
      <span aria-hidden="true">
        <span>{children}</span>
        <span>{children}</span>
      </span>
      <span className="sr-only">{children}</span>
    </Link>
  );
}

function Clock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const format = () =>
      setTime(
        new Intl.DateTimeFormat(undefined, {
          hour: "numeric",
          minute: "2-digit",
          second: "2-digit",
        }).format(new Date()),
      );

    format();
    const timer = window.setInterval(format, 1000);
    return () => window.clearInterval(timer);
  }, []);

  return <span>{time}</span>;
}

function TickerLines() {
  return (
    <div className="ticker-lines" aria-hidden="true">
      <div />
      <div />
    </div>
  );
}

function LogoMarquee() {
  const repeated = useMemo(() => [...logos, ...logos, ...logos], []);

  return (
    <div className="logo-marquee" aria-hidden="true">
      <div className="logo-track">
        {repeated.map((logo, index) => (
          <Image
            src={logo}
            alt=""
            width={176}
            height={48}
            key={`${logo}-${index}`}
          />
        ))}
      </div>
    </div>
  );
}

function ProjectPanel({ project, index }: { project: Project; index: number }) {
  return (
    <section className="project-step" style={{ zIndex: index + 1 }}>
      <Link className="project-frame" href={`/projects/${project.slug}`}>
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          style={{ objectPosition: project.objectPosition }}
        >
          <source src={project.media} type="video/mp4" />
        </video>
        <div className="project-vignette" />
        <div className="project-copy">
          <h2>{project.title}</h2>
          <p>
            <span>{project.year}</span>
            <span>{project.category}</span>
          </p>
        </div>
      </Link>
    </section>
  );
}

export function HomeExperience() {
  const [menuOpen, setMenuOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    let raf = 0;

    const update = () => {
      const y = window.scrollY;
      const vh = window.innerHeight || 1;
      const heroProgress = Math.min(1, y / vh);
      root.style.setProperty("--hero-progress", heroProgress.toFixed(4));
      root.style.setProperty("--scroll-y", `${y.toFixed(1)}px`);
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

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  return (
    <main>
      <header className="site-header">
        <nav aria-label="Primary">
          <RollingLink href="/" className="brand">
            HOT DANG
          </RollingLink>
          <div className="desktop-nav">
            <RollingLink href="/projects">Projects</RollingLink>
            <RollingLink href="/about">About</RollingLink>
            <RollingLink href="/contact">Let&apos;s Talk</RollingLink>
          </div>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </nav>
      </header>

      <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`}>
        <div className="mobile-menu-inner">
          <nav aria-label="Mobile">
            <RollingLink href="/projects" onClick={() => setMenuOpen(false)}>
              Projects
            </RollingLink>
            <RollingLink href="/about" onClick={() => setMenuOpen(false)}>
              About
            </RollingLink>
            <RollingLink href="/contact" onClick={() => setMenuOpen(false)}>
              Let&apos;s Talk
            </RollingLink>
          </nav>
          <div className="mobile-contact">
            <RollingLink href="mailto:hello@hotdang.studio">
              hello@hotdang.studio
            </RollingLink>
            <RollingLink href="tel:+11234567890">+1 (123) 456-7890</RollingLink>
          </div>
          <div className="mobile-socials">
            <RollingLink href="https://x.com">Twitter/X</RollingLink>
            <RollingLink href="https://instagram.com">Instagram</RollingLink>
            <RollingLink href="https://vimeo.com">Vimeo</RollingLink>
          </div>
          <p>&copy; Hot Dang 2025</p>
        </div>
      </div>

      <section className="hero" ref={heroRef}>
        <div className="hero-media">
          <video autoPlay muted loop playsInline preload="auto">
            <source src="/media/hero.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="hero-tint" />
        <h1>Hot Dang</h1>
        <div className="hero-meta">
          <span>Creative Production Studio</span>
          <span>Los Angeles, California</span>
          <Clock />
          <span>&copy; Hot Dang 2025</span>
        </div>
      </section>

      <section className="project-intro" id="projects">
        <TickerLines />
        <LogoMarquee />
        <TickerLines />
      </section>

      <section className="project-stack" aria-label="Featured projects">
        {projects.map((project, index) => (
          <ProjectPanel project={project} index={index} key={project.slug} />
        ))}
      </section>

      <section className="about-section" id="about">
        <div className="about-statement">
          <h2>
            We&apos;re a creative production studio driven by a love for
            cinematic storytelling and intentional filmmaking. From brand films
            and commercials to cultural moments and editorial pieces, we bring a
            crafted, artful approach to every frame.
          </h2>
        </div>
        <div className="services">
          <h3>Services</h3>
          <div className="service-columns">
            <ul>
              {servicesLeft.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
            <ul>
              {servicesRight.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <footer className="footer">
        <TickerLines />
        <RollingLink href="/contact" className="story-link">
          Start Your Story
        </RollingLink>
        <TickerLines />
        <div className="footer-row">
          <p>
            Designed for <strong>Hot Dang</strong>
          </p>
          <div>
            <RollingLink href="https://x.com">Twitter/X</RollingLink>
            <RollingLink href="https://instagram.com">Instagram</RollingLink>
            <RollingLink href="https://vimeo.com">Vimeo</RollingLink>
          </div>
          <p>&copy; 2025 All rights reserved</p>
        </div>
      </footer>
    </main>
  );
}
