"use client";

import Image from "next/image";
import type { CSSProperties, MouseEvent } from "react";
import { useCallback, useEffect, useMemo, useState } from "react";
import type { ProjectMedia } from "@/data/projects";
import { ProjectMediaFrame } from "@/components/project-media";

type MasonryItemStyle = CSSProperties & {
  "--media-ratio": string;
};

function getRatio(media: ProjectMedia) {
  if (media.width && media.height) {
    return `${media.width} / ${media.height}`;
  }

  return media.type === "video" ? "16 / 9" : "4 / 5";
}

function LightboxMedia({ media }: { media: ProjectMedia }) {
  if (media.type === "video") {
    return (
      <video controls autoPlay playsInline>
        <source src={media.src} type="video/mp4" />
      </video>
    );
  }

  return (
    <Image
      src={media.src}
      alt={media.alt ?? ""}
      width={media.width ?? 1600}
      height={media.height ?? 1000}
      quality={100}
      sizes="100vw"
      priority
      unoptimized
    />
  );
}

export function ProjectMasonryGallery({
  media,
  title,
}: {
  media: ProjectMedia[];
  title: string;
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeMedia = activeIndex === null ? null : media[activeIndex];
  const canNavigate = media.length > 1;

  const galleryLabel = useMemo(() => `${title} image gallery`, [title]);

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrevious = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? current : (current - 1 + media.length) % media.length,
    );
  }, [media.length]);
  const showNext = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? current : (current + 1) % media.length,
    );
  }, [media.length]);

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      }

      if (event.key === "ArrowLeft" && canNavigate) {
        showPrevious();
      }

      if (event.key === "ArrowRight" && canNavigate) {
        showNext();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, canNavigate, close, showNext, showPrevious]);

  const onBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      close();
    }
  };

  return (
    <>
      <section className="project-gallery" aria-label={galleryLabel}>
        <div className="masonry-grid">
          {media.map((item, index) => {
            const itemStyle: MasonryItemStyle = {
              "--media-ratio": getRatio(item),
            };

            return (
              <button
                aria-label={`Open ${item.alt ?? `${title} media ${index + 1}`}`}
                className="masonry-item"
                key={item.src}
                onClick={() => setActiveIndex(index)}
                style={itemStyle}
                type="button"
              >
                <ProjectMediaFrame
                  media={item}
                  sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 33vw"
                />
              </button>
            );
          })}
        </div>
      </section>

      {activeMedia ? (
        <div
          aria-label={`${title} preview`}
          aria-modal="true"
          className="lightbox-overlay"
          onClick={onBackdropClick}
          role="dialog"
        >
          <button
            aria-label="Close preview"
            className="lightbox-close"
            onClick={close}
            type="button"
          >
            X
          </button>

          {canNavigate ? (
            <>
              <button
                aria-label="Previous image"
                className="lightbox-nav lightbox-prev"
                onClick={showPrevious}
                type="button"
              >
                &lt;
              </button>
              <button
                aria-label="Next image"
                className="lightbox-nav lightbox-next"
                onClick={showNext}
                type="button"
              >
                &gt;
              </button>
            </>
          ) : null}

          <div className="lightbox-stage">
            <LightboxMedia media={activeMedia} />
          </div>
        </div>
      ) : null}
    </>
  );
}
