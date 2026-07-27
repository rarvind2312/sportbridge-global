"use client";

import { Reveal } from "@/components/Reveal";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { whyPillars } from "@/lib/data";

const whyIcons = ["pathways", "advisory", "technology"] as const;

export function WhySportBridge() {
  return (
    <section className="section-muted section-pad">
      <div className="container-wide">
        <Reveal className="pb-1">
          <p className="eyebrow">Why SportBridge</p>
          <h2 className="heading-lg mt-4 max-w-2xl">
            Built for serious sports collaboration.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {whyPillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={0.05 * i}>
              <article className="card-premium h-full p-7">
                <ServiceIcon name={whyIcons[i]} className="h-11 w-11" />
                <h3 className="heading-md mt-5 uppercase tracking-[-0.02em] text-primary">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-[1.65] text-ink-muted">{pillar.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
