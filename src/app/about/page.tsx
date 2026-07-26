import type { Metadata } from "next";
import Link from "next/link";
import { LogoSeal } from "@/components/brand/Logo";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "SportBridge Global exists to bridge talent, technology and opportunity across sport—connecting athletes, organisations and partners across Melbourne, Hyderabad and Chennai.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A platform for sports partnerships and progress."
        lead="SportBridge Global is not an academy. We are a sports partnerships, pathways, performance and innovation platform connecting talent systems, technology and commercial opportunity."
      />

      <section className="section-light section-pad !pt-12">
        <div className="container-page grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <div className="mx-auto flex justify-center rounded-3xl bg-bg-soft p-8 lg:justify-start">
              <LogoSeal className="h-56 w-56 md:h-64 md:w-64" />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="eyebrow">Purpose</p>
            <h2 className="heading-lg mt-4 text-ink">
              SportBridge exists to bridge talent, technology and opportunity across sport.
            </h2>
            <p className="mt-6 text-[1.05rem] leading-relaxed text-ink-muted">
              Careers, commercial value and innovation no longer sit inside a single geography.
              Athletes need structured international pathways. Organisations need technology that
              works in the real world. Brands and investors need clarity.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-soft section-pad">
        <div className="container-page space-y-16">
          {[
            {
              title: "What we are",
              text: "A premium partnerships, pathways, performance and innovation platform. We operate at the intersection of athlete development, high-performance systems, sports technology and commercial strategy.",
            },
            {
              title: "How we work",
              text: "We connect athletes, coaches, academies, clubs, technology providers, brands and investors through structured programmes, advisory frameworks and long-term partnerships.",
            },
            {
              title: "Where we operate",
              text: "Our presence spans Melbourne, Hyderabad and Chennai—connecting development environments with exposure, performance infrastructure and commercial opportunity.",
            },
          ].map((block, i) => (
            <Reveal key={block.title} delay={0.05 * i}>
              <div className="grid gap-6 border-t border-line pt-10 lg:grid-cols-[0.35fr_1fr]">
                <h3 className="heading-md text-primary">{block.title}</h3>
                <p className="text-lg leading-relaxed text-ink-muted">{block.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-light border-t border-line">
        <div className="container-page section-pad">
          <Reveal>
            <h2 className="heading-lg max-w-2xl text-ink">
              Built for organisations that value connection.
            </h2>
            <p className="lead mt-5">
              Explore our services or start a conversation about pathways, technology or
              commercial strategy.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/services" className="btn-primary">
                Explore services
              </Link>
              <Link href="/contact" className="btn-secondary !text-ink">
                Contact us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
