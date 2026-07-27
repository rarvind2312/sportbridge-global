"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/Reveal";

const markets = [
  {
    number: "01",
    city: "Melbourne",
    country: "Australia",
    detail: "Global coordination and partnerships",
  },
  {
    number: "02",
    city: "Hyderabad",
    country: "India",
    detail: "Coaching and high-performance network",
  },
  {
    number: "03",
    city: "Chennai",
    country: "India",
    detail: "Strategic partnerships and market connections",
  },
] as const;

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 text-gold" aria-hidden>
      <path
        fill="currentColor"
        d="M12 2C8.7 2 6 4.7 6 8c0 4.5 6 12 6 12s6-7.5 6-12c0-3.3-2.7-6-6-6zm0 8.5A2.5 2.5 0 1 1 12 5.5a2.5 2.5 0 0 1 0 5z"
      />
    </svg>
  );
}

export function ConnectedMarkets() {
  const reduce = useReducedMotion();

  return (
    <section className="section-soft section-pad">
      <div className="container-wide">
        <Reveal className="pb-1">
          <p className="eyebrow">Our Network</p>
          <h2 className="heading-lg mt-4 max-w-3xl uppercase tracking-[-0.03em]">
            Connected across key sporting markets
          </h2>
          <p className="lead mt-5">
            Our network currently connects Melbourne, Hyderabad and Chennai, bringing together
            sporting expertise, development pathways and strategic opportunities.
          </p>
        </Reveal>

        <div className="relative mt-14">
          <div
            className="pointer-events-none absolute left-[8%] right-[8%] top-[3.25rem] hidden h-px md:block"
            aria-hidden
          >
            <svg className="h-full w-full overflow-visible" preserveAspectRatio="none">
              <line
                x1="0"
                y1="1"
                x2="100%"
                y2="1"
                stroke="#B99352"
                strokeWidth="1.5"
                strokeDasharray="6 8"
                className={reduce ? undefined : "route-line"}
                opacity="0.7"
              />
            </svg>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {markets.map((market, i) => (
              <Reveal key={market.city} delay={0.06 * i}>
                <motion.article
                  whileHover={reduce ? undefined : { y: -3 }}
                  className="card-premium h-full p-7"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="font-display text-2xl font-bold text-gold">{market.number}</span>
                    <PinIcon />
                  </div>
                  <h3 className="mt-8 font-display text-2xl font-bold uppercase leading-[1.4] tracking-[-0.02em] text-primary">
                    {market.city}
                  </h3>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-[0.14em] text-ink-dim">
                    {market.country}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-ink-muted">{market.detail}</p>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
