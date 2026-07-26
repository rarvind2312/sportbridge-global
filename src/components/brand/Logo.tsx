"use client";

import { SafeImage } from "@/components/ui/SafeImage";

type LogoProps = {
  className?: string;
  priority?: boolean;
  /** dark = dark text for light backgrounds; light = light text for dark backgrounds */
  variant?: "dark" | "light";
};

export function LogoHorizontal({
  className = "h-14 w-auto",
  priority,
  variant = "dark",
}: LogoProps) {
  const src =
    variant === "light"
      ? "/logos/sportbridge/logo-header-on-dark.svg"
      : "/logos/sportbridge/logo-header-on-light.svg";

  return (
    <SafeImage
      src={src}
      alt="SportBridge Global"
      width={520}
      height={86}
      className={className}
      priority={priority}
    />
  );
}

export function LogoMonogram({ className = "h-11 w-11", priority }: LogoProps) {
  return (
    <SafeImage
      src="/logos/sportbridge/logo-monogram.svg"
      alt="SportBridge Global"
      width={72}
      height={72}
      className={className}
      priority={priority}
    />
  );
}

export function LogoSeal({ className = "h-56 w-56" }: LogoProps) {
  return (
    <SafeImage
      src="/logos/sportbridge/logo-seal.svg"
      alt="SportBridge Global seal"
      width={280}
      height={280}
      className={className}
    />
  );
}
