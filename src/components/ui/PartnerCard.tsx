"use client";

import Link from "next/link";
import { SafeImage } from "@/components/ui/SafeImage";

export type PartnerCardProps = {
  name: string;
  description: string;
  logoSrc?: string | null;
  href?: string | null;
};

export function PartnerCard({ name, description, logoSrc, href }: PartnerCardProps) {
  const external = Boolean(href && href.startsWith("http"));

  return (
    <article className="group card-premium flex h-full flex-col overflow-hidden p-7">
      <div className="flex min-h-[120px] items-center justify-center rounded-xl border border-line bg-bg px-6 py-8">
        {logoSrc ? (
          <SafeImage
            src={logoSrc}
            alt={`${name} logo`}
            width={200}
            height={80}
            priority
            className="h-14 w-auto max-h-14 max-w-[180px] object-contain opacity-90 transition-opacity duration-300 group-hover:opacity-100"
          />
        ) : (
          <span className="font-display text-lg font-bold text-primary">{name}</span>
        )}
      </div>
      <h3 className="mt-6 font-display text-lg font-bold text-primary">{name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{description}</p>
      {href ? (
        <Link
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          aria-label={external ? `${name} website (opens in a new tab)` : `View ${name}`}
          className="btn-secondary mt-6 !px-4 !py-2.5 !text-sm"
        >
          Visit website
        </Link>
      ) : null}
    </article>
  );
}
