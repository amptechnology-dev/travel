"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export default function PackageImageModal({ src, alt }) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;

    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const lightbox =
    mounted && isOpen
      ? createPortal(
          <div className="image-lightbox-overlay" onClick={() => setIsOpen(false)}>
            <button
              type="button"
              className="image-lightbox-close"
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
              }}
              aria-label="Close image preview"
            >
              &times;
            </button>
            <img
              className="image-lightbox-content"
              src={src}
              alt={alt}
              onClick={(e) => e.stopPropagation()}
            />
          </div>,
          document.body
        )
      : null;

  return (
    <>
      <button
        type="button"
        className="package-image-trigger"
        onClick={() => setIsOpen(true)}
        aria-label={`Open preview for ${alt}`}
      >
        <img className="package-image" src={src} alt={alt} />
      </button>

      {lightbox}
    </>
  );
}