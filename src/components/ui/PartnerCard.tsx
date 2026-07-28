"use client";

import Link from "next/link";
import { SafeImage } from "@/components/ui/SafeImage";

export type PartnerCardProps = {
  name: string;
  description: string;
  logoSrc?: string | null;
  href?: string | null;
  ariaLabel?: string;
};

function ExternalArrow({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="none" aria-hidden>
      <path
        d="M4.5 11.5 L11.5 4.5 M6.5 4.5 H11.5 V9.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PartnerCard({
  name,
  description,
  logoSrc,
  href,
  ariaLabel,
}: PartnerCardProps) {
  const external = Boolean(href && href.startsWith("http"));
  const label = ariaLabel || (external ? `Visit ${name} (opens in a new tab)` : `View ${name}`);

  const body = (
    <>
      <div className="flex min-h-[120px] w-full items-center justify-center px-3 py-5">
        {logoSrc ? (
          <SafeImage
            src={logoSrc}
            alt={
              name === "Topline NextGen"
                ? "Topline NextGen Cricket Centre"
                : name === "F16"
                  ? "F16 Sports"
                  : name === "CFC Excellence Cricket Academy"
                    ? "CFC Excellence Cricket Academy"
                    : `${name} logo`
            }
            width={280}
            height={120}
            priority
            className="!h-auto max-h-[96px] w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <span className="font-display text-lg font-bold leading-[1.45] text-primary">{name}</span>
        )}
      </div>
      <div className="mt-2 flex items-start justify-between gap-3 border-t border-line pt-5">
        <h3 className="font-display text-lg font-bold leading-[1.45] text-primary">{name}</h3>
        {href ? (
          <span className="mt-1 text-gold transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            <ExternalArrow />
          </span>
        ) : null}
      </div>
      <p className="mt-2 flex-1 text-sm leading-[1.65] text-ink-muted">{description}</p>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        aria-label={label}
        className="group card-premium flex h-full flex-col p-6 transition-transform duration-300 hover:-translate-y-1 hover:border-gold-soft md:p-7"
      >
        {body}
      </Link>
    );
  }

  return (
    <article className="group card-premium flex h-full flex-col p-6 md:p-7">{body}</article>
  );
}
