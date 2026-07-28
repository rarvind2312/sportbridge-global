"use client";

import { SafeImage } from "@/components/ui/SafeImage";

type LogoProps = {
  className?: string;
  priority?: boolean;
  /** dark = for light backgrounds; light = for dark backgrounds (footer/CTA) */
  variant?: "dark" | "light";
};

export function LogoHorizontal({
  className = "h-12 w-auto",
  priority,
  variant = "dark",
}: LogoProps) {
  const src =
    variant === "light"
      ? "/brand/sportbridge-footer.png"
      : "/brand/sportbridge-header.webp";

  return (
    <SafeImage
      src={src}
      alt="SportBridge Global logo"
      width={1021}
      height={247}
      className={className}
      priority={priority}
    />
  );
}

export function LogoMonogram({ className = "h-11 w-11", priority }: LogoProps) {
  return (
    <SafeImage
      src="/brand/sportbridge-monogram.png"
      alt="SportBridge Global logo"
      width={361}
      height={361}
      className={className}
      priority={priority}
    />
  );
}

export function LogoSeal({ className = "h-56 w-56" }: LogoProps) {
  return (
    <SafeImage
      src="/brand/sportbridge-monogram.png"
      alt="SportBridge Global logo"
      width={361}
      height={361}
      className={className}
    />
  );
}
