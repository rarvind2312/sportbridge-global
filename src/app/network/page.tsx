import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { PartnerCard } from "@/components/ui/PartnerCard";
import { partners } from "@/lib/data";

export const metadata: Metadata = {
  title: "Network",
  description:
    "SportBridge Global’s current network includes Topline NextGen, F16 and CFC Excellence Cricket Academy, with additional collaborations in discussion across Melbourne, Hyderabad and Chennai.",
  alternates: { canonical: "/network" },
};

export default function NetworkPage() {
  return (
    <>
      <PageHero
        eyebrow="Network"
        title="Building connections across sport."
        lead="Current relationships with academies and sporting organisations—alongside additional collaborations being explored across performance, technology and commercial partnerships."
      />

      <section className="section-light section-pad !pt-10">
        <div className="container-page">
          <Reveal className="pb-1">
            <p className="eyebrow">Current Network</p>
            <h2 className="heading-lg mt-4 max-w-2xl text-ink">
              Organisations we currently work with.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {partners.map((partner, i) => (
              <Reveal key={partner.name} delay={0.06 * i}>
                <PartnerCard {...partner} />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12">
            <div className="rounded-2xl border border-line bg-bg px-6 py-8 text-center md:px-10">
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-gold">
                Exploring further collaborations
              </p>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-ink-muted md:text-base">
                We are currently exploring additional collaborations across academies,
                high-performance programs, technology, sporting organisations and commercial
                partnerships. These discussions are distinct from our current network relationships.
              </p>
            </div>
          </Reveal>

          <Reveal className="mt-16">
            <div className="divider-gold mb-12" />
            <h2 className="heading-lg max-w-2xl text-ink">Join the network</h2>
            <p className="lead mt-5">
              Academies, technology providers and commercial partners seeking collaboration can
              connect with our team.
            </p>
            <Link href="/contact" className="btn-primary mt-8 inline-flex">
              Become a partner
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
