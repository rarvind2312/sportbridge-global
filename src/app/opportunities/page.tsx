import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ServiceIcon, type IconName } from "@/components/ui/ServiceIcon";
import { focusAreas, opportunities } from "@/lib/data";

const title = "Sports Opportunities & Partnerships | SportBridge Global";
const description =
  "Explore partnership, investment, technology, performance and international sporting opportunities facilitated through SportBridge Global.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/opportunities" },
  openGraph: { title, description, url: "/opportunities" },
  twitter: { title, description },
};

const areaIcons: IconName[] = [
  "performance",
  "pathways",
  "technology",
  "performance",
  "advisory",
  "network",
];

export default function OpportunitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Opportunities"
        title="Pathways for athletes, organisations and partners."
        lead="Explore opportunity categories across coaching, international pathways, technology collaborations, high performance and strategic partnerships."
      />

      <section className="section-light section-pad !pt-10">
        <div className="container-page">
          <Reveal className="pb-1">
            <p className="eyebrow">Categories</p>
            <h2 className="heading-lg mt-4 text-ink">Where we can collaborate</h2>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map((area, i) => (
              <Reveal key={area.title} delay={0.04 * i}>
                <Link href={area.href} className="block h-full">
                  <article className="card-premium flex h-full min-h-[170px] flex-col p-6 transition-transform hover:-translate-y-1">
                    <ServiceIcon name={areaIcons[i % areaIcons.length]} className="h-10 w-10" />
                    <p className="mt-5 text-xs font-semibold tracking-[0.16em] text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-3 font-display text-xl font-bold leading-[1.4] text-ink">
                      {area.title}
                    </h3>
                    <p className="mt-3 text-sm leading-[1.65] text-ink-muted">{area.text}</p>
                  </article>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-soft border-t border-line">
        <div className="container-page section-pad">
          <Reveal className="pb-1">
            <p className="eyebrow">Open Enquiries</p>
            <h2 className="heading-lg mt-4 text-ink">Programme opportunities</h2>
            <p className="lead mt-4">
              These are conversation starters—not guarantees. Share your context and we will advise
              whether a programme or introduction is a fit.
            </p>
          </Reveal>

          <div className="mt-12 space-y-4">
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
                    <p className="mt-3 max-w-2xl leading-[1.65] text-ink-muted">{item.summary}</p>
                  </div>
                  <Link
                    href="/contact"
                    className="btn-secondary justify-self-start md:justify-self-end"
                  >
                    Discuss an Opportunity
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
