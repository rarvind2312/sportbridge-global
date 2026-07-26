"use client";

import { Reveal } from "@/components/Reveal";
import { whyPillars } from "@/lib/data";

function PillarIcon({ index }: { index: number }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg viewBox="0 0 40 40" className="h-10 w-10 text-primary" aria-hidden>
      {index === 0 && (
        <>
          <circle {...common} cx="20" cy="20" r="12" />
          <path {...common} d="M8 20 H32 M20 8 C24 14 24 26 20 32 C16 26 16 14 20 8" />
        </>
      )}
      {index === 1 && (
        <>
          <path {...common} d="M10 28 V16 M30 28 V16" />
          <path {...common} d="M10 18 C16 8 24 8 30 18" />
          <path {...common} d="M10 22 H30" />
        </>
      )}
      {index === 2 && (
        <>
          <circle {...common} cx="20" cy="20" r="4" />
          <circle {...common} cx="10" cy="12" r="2.5" />
          <circle {...common} cx="30" cy="12" r="2.5" />
          <circle {...common} cx="10" cy="28" r="2.5" />
          <circle {...common} cx="30" cy="28" r="2.5" />
          <path {...common} d="M12.5 13.5 L17 18 M23 18 L27.5 13.5 M12.5 26.5 L17 22 M23 22 L27.5 26.5" />
        </>
      )}
    </svg>
  );
}

export function WhySportBridge() {
  return (
    <section className="section-muted section-pad">
      <div className="container-wide">
        <Reveal>
          <p className="eyebrow">Why SportBridge</p>
          <h2 className="heading-lg mt-4 max-w-2xl">
            Built for serious sports collaboration.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {whyPillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={0.05 * i}>
              <article className="card-premium h-full p-7">
                <PillarIcon index={i} />
                <h3 className="heading-md mt-5 text-ink">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{pillar.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
