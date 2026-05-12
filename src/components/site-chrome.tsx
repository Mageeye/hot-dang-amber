"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function RollingLink({
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

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  return (
    <>
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
    </>
  );
}

export function TickerLines() {
  return (
    <div className="ticker-lines" aria-hidden="true">
      <div />
      <div />
    </div>
  );
}

export function SiteFooter() {
  return (
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
  );
}
