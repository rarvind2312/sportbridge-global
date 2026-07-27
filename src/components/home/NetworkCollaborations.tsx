"use client";

import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SafeImage } from "@/components/ui/SafeImage";
import { partners } from "@/lib/data";

export function NetworkCollaborations() {
  return (
    <section className="section-soft section-pad">
      <div className="container-wide">
        <Reveal>
          <p className="eyebrow">Our Growing Network</p>
          <h2 className="heading-lg mt-5 max-w-3xl">
            Building relationships across sport, performance and technology.
          </h2>
        </Reveal>

        <div className="mt-16 flex flex-col items-stretch justify-center gap-8 md:flex-row md:items-center md:gap-0">
          {partners.map((partner, i) => {
            const content = (
              <div className="group flex h-[110px] w-full max-w-[210px] items-center justify-center px-2 md:h-[120px] md:w-[190px] lg:w-[210px]">
                {partner.logoSrc ? (
                  <SafeImage
                    src={partner.logoSrc}
                    alt={`${partner.name} logo`}
                    width={240}
                    height={120}
                    className="max-h-[88px] w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.03] md:max-h-[100px]"
                  />
                ) : (
                  <span className="font-display text-lg font-bold text-primary">{partner.name}</span>
                )}
              </div>
            );

            return (
              <Reveal key={partner.name} delay={0.05 * i} className="flex items-center justify-center">
                {i > 0 ? (
                  <div
                    className="mx-4 hidden h-16 w-px bg-gradient-to-b from-transparent via-gold/60 to-transparent md:block"
                    aria-hidden
                  />
                ) : null}
                {partner.href ? (
                  <Link
                    href={partner.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={
                      partner.ariaLabel || `Visit ${partner.name} (opens in a new tab)`
                    }
                    className="inline-flex justify-center"
                  >
                    {content}
                  </Link>
                ) : (
                  content
                )}
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-12">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-gold">
              A growing sporting ecosystem
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted md:text-base">
              Additional collaborations and partnerships are currently in discussion.
            </p>
            <Link
              href="/network"
              className="mt-6 inline-flex text-sm font-semibold text-primary hover:text-gold"
            >
              View Our Network →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
