import type { Metadata } from "next";
import Link from "next/link";
import { EcosystemDiagram } from "@/components/graphics/EcosystemDiagram";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "SportBridge Global exists to connect talent, technology and opportunity across sporting ecosystems in Melbourne, Hyderabad, Chennai, the US, Dubai and Sri Lanka.",
  alternates: { canonical: "/about" },
};

const pillars = [
  { title: "Global Pathways", icon: "pathways" as const },
  { title: "High Performance", icon: "performance" as const },
  { title: "Sports Technology", icon: "technology" as const },
  { title: "Strategic Partnerships", icon: "advisory" as const },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Building connections that advance sport."
        lead="SportBridge Global exists to connect talent, technology and opportunity across sporting ecosystems."
      />

      <section className="section-light section-pad !pt-12">
        <div className="container-page grid items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
          <Reveal className="order-2 lg:order-1">
            <EcosystemDiagram />
          </Reveal>

          <Reveal delay={0.08} className="order-1 lg:order-2">
            <p className="eyebrow">Who We Are</p>
            <h2 className="heading-lg mt-4 max-w-[22ch] text-ink">
              A sports partnerships, pathways, performance and innovation platform.
            </h2>
            <p className="mt-6 max-w-[62ch] text-[1.05rem] leading-[1.7] text-ink-muted">
              SportBridge Global connects sporting organisations, academies, coaches, technology
              providers and strategic partners to build meaningful programmes and long-term
              collaboration.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="flex items-center gap-3 rounded-xl border border-line bg-bg-elevated px-4 py-3"
                >
                  <ServiceIcon name={pillar.icon} className="h-8 w-8 shrink-0" />
                  <span className="font-display text-sm font-bold leading-[1.45] text-primary">
                    {pillar.title}
                  </span>
                </div>
              ))}
            </div>

            <p
              className="mt-8 text-[0.95rem] italic text-[#9AA39E]"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Connecting opportunity across sport.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-soft section-pad">
        <div className="container-page space-y-12">
          {[
            {
              title: "What We Connect",
              text: "Athletes, coaches, academies, clubs, technology providers, brands and high-performance systems—brought together through structured pathways, pilots and partnership frameworks.",
            },
            {
              title: "How We Work",
              text: "We facilitate introductions, design programmes and support delivery with clarity and pace. Every engagement is tailored to organisational context across Melbourne, Hyderabad, Chennai, the US, Dubai and Sri Lanka.",
            },
            {
              title: "Our Markets",
              text: `${siteConfig.locations.join(" · ")}. These are our current operating locations—where we coordinate partnerships, pathways and performance activity.`,
            },
          ].map((block, i) => (
            <Reveal key={block.title} delay={0.05 * i}>
              <div className="grid gap-5 border-t border-line pt-8 lg:grid-cols-[0.35fr_1fr] lg:gap-8">
                <h3 className="heading-md text-primary">{block.title}</h3>
                <p className="max-w-[65ch] text-lg leading-[1.7] text-ink-muted">{block.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-light border-t border-line">
        <div className="container-page section-pad">
          <Reveal>
            <h2 className="heading-lg max-w-2xl text-ink">
              Ready to explore a partnership or pathway?
            </h2>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/services" className="btn-primary">
                Explore services
              </Link>
              <Link href="/contact" className="btn-secondary">
                Contact us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
