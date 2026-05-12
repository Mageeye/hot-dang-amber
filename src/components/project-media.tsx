import Image from "next/image";
import type { CSSProperties } from "react";
import type { ProjectMedia } from "@/data/projects";

type MediaFrameStyle = CSSProperties & {
  "--media-position": string;
  "--media-position-mobile": string;
};

type ProjectMediaFrameProps = {
  media: ProjectMedia;
  className?: string;
  controls?: boolean;
  priority?: boolean;
  sizes?: string;
};

export function ProjectMediaFrame({
  media,
  className = "",
  controls = false,
  priority = false,
  sizes = "100vw",
}: ProjectMediaFrameProps) {
  const objectPosition = media.objectPosition ?? "50% 50%";
  const frameStyle: MediaFrameStyle = {
    "--media-position": objectPosition,
    "--media-position-mobile": media.mobileObjectPosition ?? objectPosition,
  };

  return (
    <div className={`media-frame ${className}`} style={frameStyle}>
      {media.type === "video" ? (
        <video
          controls={controls}
          autoPlay={!controls}
          muted={!controls}
          loop={!controls}
          playsInline
          preload="metadata"
        >
          <source src={media.src} type="video/mp4" />
        </video>
      ) : (
        <Image
          src={media.src}
          alt={media.alt ?? ""}
          fill
          priority={priority}
          quality={100}
          sizes={sizes}
          unoptimized
        />
      )}
    </div>
  );
}
