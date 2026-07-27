"use client";

import Link from "next/link";
import { PartnerMarquee } from "@/components/home/PartnerMarquee";
import { Reveal } from "@/components/Reveal";

export function NetworkCollaborations() {
  return (
    <section className="section-soft">
      <div className="container-wide py-12 md:py-14">
        <Reveal>
          <p className="eyebrow">Our Growing Network</p>
          <p className="mt-3 max-w-xl text-[1.05rem] leading-relaxed text-ink-muted md:text-[1.1rem]">
            Relationships across sport, performance and technology.
          </p>
        </Reveal>

        <div className="mt-10 md:mt-12">
          <PartnerMarquee />
        </div>

        <Reveal className="mt-7 text-center md:mt-8">
          <p className="text-sm text-ink-muted">More collaborations currently in discussion.</p>
          <Link
            href="/network"
            className="mt-4 inline-flex text-sm font-semibold text-primary transition-colors hover:text-gold"
          >
            View Our Network →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
