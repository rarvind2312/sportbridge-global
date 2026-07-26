import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { HashScroll } from "@/components/ui/HashScroll";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { servicePillars } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "SportBridge Global services spanning global pathways, high performance, sports technology, strategic advisory and performance intelligence.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <HashScroll />
      <PageHero
        eyebrow="Services"
        title="Capability built for global sports organisations."
        lead="Five integrated pillars spanning pathways, performance, technology, commercial advisory and intelligence."
      />

      <section className="section-light section-pad !pt-12">
        <div className="container-page space-y-8">
          {servicePillars.map((service, i) => (
            <Reveal key={service.slug} delay={0.04 * i}>
              <article
                id={service.slug}
                className="card-premium scroll-mt-28 p-7 md:p-10"
              >
                <div className="grid gap-6 md:grid-cols-[auto_1fr] md:gap-10">
                  <ServiceIcon name={service.icon} />
                  <div>
                    <p className="text-xs font-semibold tracking-[0.18em] text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h2 className="heading-md mt-3 text-ink">{service.title}</h2>
                    <p className="mt-3 text-ink-muted leading-relaxed">{service.summary}</p>
                    <p className="mt-4 text-sm leading-relaxed text-ink-dim">{service.detail}</p>
                  </div>
                </div>

                <div className="mt-8 grid gap-4 border-t border-line pt-8 sm:grid-cols-2">
                  {service.points.map((point) => (
                    <div key={point.title} className="rounded-xl bg-bg-soft/80 p-5">
                      <h3 className="font-display text-base font-bold text-ink">{point.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-muted">{point.text}</p>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-soft">
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
