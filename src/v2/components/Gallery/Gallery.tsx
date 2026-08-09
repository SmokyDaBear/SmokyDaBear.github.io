import "./Gallery.css";
import { useCallback, useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  CloseIcon,
  ExpandIcon,
} from "../../lib/icons";

/**
 * Image gallery viewer: main image with prev/next controls, a thumbnail
 * strip, and a fullscreen lightbox. Handles a single image gracefully.
 */
export function Gallery({ images, title }: { images: string[]; title: string }) {
  const [index, setIndex] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const count = images.length;
  const hasMany = count > 1;

  const step = useCallback(
    (delta: number) => setIndex((i) => (i + delta + count) % count),
    [count]
  );

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(false);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, step]);

  if (count === 0) return null;

  return (
    <div className="gallery">
      <div className="gallery-main">
        <button
          className="gallery-expand"
          onClick={() => setLightbox(true)}
          aria-label="View image fullscreen"
        >
          <img src={images[index]} alt={`${title} — screenshot ${index + 1}`} />
          <span className="gallery-expand-hint">
            <ExpandIcon size={16} />
          </span>
        </button>
        {hasMany && (
          <>
            <button
              className="gallery-arrow prev"
              onClick={() => step(-1)}
              aria-label="Previous image"
            >
              <ChevronLeft />
            </button>
            <button
              className="gallery-arrow next"
              onClick={() => step(1)}
              aria-label="Next image"
            >
              <ChevronRight />
            </button>
            <span className="gallery-count">
              {index + 1} / {count}
            </span>
          </>
        )}
      </div>

      {hasMany && (
        <div className="gallery-thumbs" role="tablist" aria-label="Gallery thumbnails">
          {images.map((src, i) => (
            <button
              key={src}
              role="tab"
              aria-selected={i === index}
              aria-label={`Show image ${i + 1}`}
              className={"gallery-thumb" + (i === index ? " active" : "")}
              onClick={() => setIndex(i)}
            >
              <img src={src} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      )}

      {lightbox && (
        <div
          className="lightbox"
          onClick={() => setLightbox(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`${title} gallery`}
        >
          <button
            className="lightbox-close"
            onClick={() => setLightbox(false)}
            aria-label="Close fullscreen view"
          >
            <CloseIcon size={24} />
          </button>
          <img
            src={images[index]}
            alt={`${title} — screenshot ${index + 1}`}
            onClick={(e) => e.stopPropagation()}
          />
          {hasMany && (
            <>
              <button
                className="gallery-arrow prev"
                onClick={(e) => {
                  e.stopPropagation();
                  step(-1);
                }}
                aria-label="Previous image"
              >
                <ChevronLeft size={26} />
              </button>
              <button
                className="gallery-arrow next"
                onClick={(e) => {
                  e.stopPropagation();
                  step(1);
                }}
                aria-label="Next image"
              >
                <ChevronRight size={26} />
              </button>
              <span className="gallery-count">
                {index + 1} / {count}
              </span>
            </>
          )}
        </div>
      )}
    </div>
  );
}
