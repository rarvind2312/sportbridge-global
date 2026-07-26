"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

type SafeImageProps = Omit<ImageProps, "src" | "alt" | "onError"> & {
  src?: string | null;
  alt: string;
  fallbackSrc?: string;
};

/**
 * next/image wrapper that never shows a broken-image icon.
 * Falls back to a branded placeholder when src is missing or fails to load.
 */
export function SafeImage({
  src,
  alt,
  fallbackSrc = "/images/placeholder-logo.svg",
  className,
  ...props
}: SafeImageProps) {
  const initial = src && src.trim().length > 0 ? src : fallbackSrc;
  const [current, setCurrent] = useState(initial);
  const [failed, setFailed] = useState(false);

  if (failed && current === fallbackSrc) {
    return (
      <span
        className={`inline-flex items-center justify-center bg-bg-soft text-xs font-semibold tracking-wide text-ink-dim ${className || ""}`}
        role="img"
        aria-label={alt}
      >
        SportBridge
      </span>
    );
  }

  return (
    <Image
      {...props}
      src={current}
      alt={alt}
      className={className}
      onError={() => {
        if (current !== fallbackSrc) {
          setCurrent(fallbackSrc);
        } else {
          setFailed(true);
        }
      }}
    />
  );
}
