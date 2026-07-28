"use client";

import Link from "next/link";
import { SafeImage } from "@/components/ui/SafeImage";
import { partners } from "@/lib/data";

type MarqueePartner = {
  name: string;
  src: string;
  href?: string;
  alt: string;
  ariaLabel?: string;
  wide?: boolean;
};

const marqueePartners: MarqueePartner[] = partners
  .filter((p) => Boolean(p.logoSrc))
  .map((p) => ({
    name: p.name,
    src: p.logoSrc as string,
    href: p.href,
    alt: p.name === "Topline NextGen"
      ? "Topline NextGen Cricket Centre"
      : p.name === "F16"
        ? "F16 Sports"
        : p.name === "CFC Excellence Cricket Academy"
          ? "CFC Excellence Cricket Academy"
          : `${p.name} logo`,
    ariaLabel: p.ariaLabel,
    wide: p.short === "Topline",
  }));

function PartnerLogo({ partner }: { partner: MarqueePartner }) {
  const frame = (
    <span
      className={`partner-marquee-logo group inline-flex h-[54px] items-center justify-center sm:h-[70px] md:h-[88px] ${
        partner.wide
          ? "w-[150px] sm:w-[200px] md:w-[240px]"
          : "w-[110px] sm:w-[140px] md:w-[170px]"
      }`}
    >
      <SafeImage
        src={partner.src}
        alt={partner.alt}
        width={partner.wide ? 280 : 200}
        height={120}
        className="h-full w-full max-h-full max-w-full object-contain transition-[transform,opacity] duration-300 group-hover:scale-[1.03] group-hover:opacity-90"
      />
    </span>
  );

  if (partner.href) {
    return (
      <Link
        href={partner.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={
          partner.ariaLabel || `Visit ${partner.name} (opens in a new tab)`
        }
        className="inline-flex shrink-0 items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
      >
        {frame}
      </Link>
    );
  }

  return <span className="inline-flex shrink-0 items-center">{frame}</span>;
}

function MarqueeGroup({ suffix }: { suffix: string }) {
  return (
    <div className="partner-marquee-group flex shrink-0 items-center" aria-hidden={suffix === "b"}>
      {marqueePartners.map((partner, i) => (
        <div key={`${suffix}-${partner.name}`} className="flex shrink-0 items-center">
          {i > 0 ? (
            <span
              className="mx-5 h-10 w-px shrink-0 bg-gradient-to-b from-transparent via-gold/45 to-transparent sm:mx-8 md:mx-10 md:h-12"
              aria-hidden
            />
          ) : (
            <span className="w-5 shrink-0 sm:w-8 md:w-10" aria-hidden />
          )}
          <PartnerLogo partner={partner} />
          {i === marqueePartners.length - 1 ? (
            <span className="w-5 shrink-0 sm:w-8 md:w-10" aria-hidden />
          ) : null}
        </div>
      ))}
    </div>
  );
}

export function PartnerMarquee() {
  return (
    <div className="partner-marquee">
      {/* Animated track — decorative container may clip its own overflow */}
      <div className="partner-marquee-viewport relative overflow-hidden py-2">
        <div className="partner-marquee-fade partner-marquee-fade-left" aria-hidden />
        <div className="partner-marquee-fade partner-marquee-fade-right" aria-hidden />

        <div className="partner-marquee-track flex w-max items-center">
          <MarqueeGroup suffix="a" />
          <MarqueeGroup suffix="b" />
        </div>
      </div>

      {/* Reduced-motion / SEO-friendly static row (hidden when animation runs) */}
      <ul className="partner-marquee-static mx-auto flex max-w-3xl list-none flex-wrap items-center justify-center gap-x-10 gap-y-6 p-0">
        {marqueePartners.map((partner) => (
          <li key={`static-${partner.name}`} className="m-0">
            <PartnerLogo partner={partner} />
          </li>
        ))}
      </ul>
    </div>
  );
}
