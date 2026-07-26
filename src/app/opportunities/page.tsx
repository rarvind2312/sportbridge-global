import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { focusAreas, opportunities } from "@/lib/data";

export const metadata: Metadata = {
  title: "Opportunities",
  description:
    "Explore SportBridge Global opportunities across athlete pathways, coaching residencies, technology partnerships and commercial briefings.",
  alternates: { canonical: "/opportunities" },
};

export default function OpportunitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Opportunities"
        title="Open pathways for athletes, organisations and partners."
        lead="Current focus areas and programme opportunities across international pathways, technology and commercial collaboration."
      />

      <section className="section-light section-pad !pt-10">
        <div className="container-page">
          <Reveal>
            <p className="eyebrow">Current Focus</p>
            <h2 className="heading-lg mt-4 text-ink">Strategic priorities</h2>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map((area, i) => (
              <Reveal key={area.title} delay={0.04 * i}>
                <Link href={area.href} className="block h-full">
                  <article className="card-premium min-h-[170px] p-6 transition-transform hover:-translate-y-1">
                    <p className="text-xs font-semibold tracking-[0.16em] text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-5 font-display text-xl font-bold text-ink">{area.title}</h3>
                    <p className="mt-3 text-sm text-ink-muted leading-relaxed">{area.text}</p>
                  </article>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-soft border-t border-line">
        <div className="container-page section-pad">
          <Reveal>
            <p className="eyebrow">Open Enquiries</p>
            <h2 className="heading-lg mt-4 text-ink">Programme opportunities</h2>
          </Reveal>

          <div className="mt-10 space-y-4">
            {opportunities.map((item, i) => (
              <Reveal key={item.title} delay={0.04 * i}>
                <article className="card-premium grid gap-4 p-6 md:grid-cols-[1fr_auto] md:items-center md:gap-8 md:p-8">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                        {item.type}
                      </span>
                      <span className="text-xs text-ink-dim">·</span>
                      <span className="text-xs font-medium text-ink-dim">{item.location}</span>
                    </div>
                    <h3 className="heading-md mt-3 text-ink">{item.title}</h3>
                    <p className="mt-3 max-w-2xl text-ink-muted leading-relaxed">{item.summary}</p>
                  </div>
                  <Link
                    href="/contact"
                    className="btn-secondary !text-ink justify-self-start md:justify-self-end"
                  >
                    Enquire
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
