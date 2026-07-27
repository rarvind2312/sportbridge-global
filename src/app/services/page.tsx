import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { HashScroll } from "@/components/ui/HashScroll";
import { ServiceIcon, type IconName } from "@/components/ui/ServiceIcon";
import { servicePillars } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "SportBridge Global services spanning global pathways, high performance, sports technology, strategic partnerships, market intelligence, athlete development and network collaborations.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  const primary = servicePillars.filter((s) => !("tier" in s && s.tier === "secondary"));
  const secondary = servicePillars.filter((s) => "tier" in s && s.tier === "secondary");

  return (
    <>
      <HashScroll />
      <PageHero
        eyebrow="Services"
        title="Capability built for sporting organisations."
        lead="Primary pillars spanning pathways, performance, technology and partnerships—supported by market intelligence, athlete development and network collaborations."
      />

      <section className="section-light section-pad !pt-12">
        <div className="container-page">
          <Reveal className="pb-1">
            <p className="eyebrow">Primary</p>
            <h2 className="heading-lg mt-3 text-ink">Core capability</h2>
          </Reveal>
          <div className="mt-10 space-y-8">
            {primary.map((service, i) => (
              <Reveal key={service.slug} delay={0.04 * i}>
                <article id={service.slug} className="card-premium scroll-mt-28 p-7 md:p-10">
                  <div className="grid gap-6 md:grid-cols-[auto_1fr] md:gap-10">
                    <ServiceIcon name={service.icon as IconName} />
                    <div>
                      <p className="text-xs font-semibold tracking-[0.18em] text-primary">
                        {String(i + 1).padStart(2, "0")}
                      </p>
                      <h2 className="heading-md mt-3 text-ink">{service.title}</h2>
                      <p className="mt-3 leading-[1.65] text-ink-muted">{service.summary}</p>
                    </div>
                  </div>
                  <div className="mt-8 grid gap-4 border-t border-line pt-8 sm:grid-cols-2">
                    {service.points.map((point) => (
                      <div key={point.title} className="rounded-xl bg-bg-soft/80 p-5">
                        <h3 className="font-display text-base font-bold text-ink">{point.title}</h3>
                        <p className="mt-2 text-sm leading-[1.65] text-ink-muted">{point.text}</p>
                      </div>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-soft section-pad">
        <div className="container-page">
          <Reveal className="pb-1">
            <p className="eyebrow">Secondary</p>
            <h2 className="heading-lg mt-3 text-ink">Extended capability</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {secondary.map((service, i) => (
              <Reveal key={service.slug} delay={0.04 * i}>
                <article
                  id={service.slug}
                  className="card-premium h-full scroll-mt-28 p-6 md:p-7"
                >
                  <ServiceIcon name={service.icon as IconName} />
                  <h2 className="heading-md mt-5 text-ink">{service.title}</h2>
                  <p className="mt-3 text-sm leading-[1.65] text-ink-muted">{service.summary}</p>
                  <ul className="mt-5 space-y-2 border-t border-line pt-5">
                    {service.points.map((point) => (
                      <li key={point.title} className="text-sm font-medium text-primary">
                        {point.title}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-light border-t border-line">
        <div className="container-page section-pad">
          <Reveal>
            <div className="card-premium p-8 md:p-10">
              <h2 className="heading-md text-ink">Need a tailored brief?</h2>
              <p className="mt-3 max-w-xl text-ink-muted">
                Tell us about your organisation—we will map the right combination of pathway,
                performance, technology and advisory support.
              </p>
              <Link href="/contact" className="btn-primary mt-8 inline-flex">
                Request a briefing
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
