import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { PartnerCard } from "@/components/ui/PartnerCard";
import { partners } from "@/lib/data";

export const metadata: Metadata = {
  title: "Network",
  description:
    "SportBridge Global collaborates with academies, coaches and sporting organisations including Topline Cricket, F16 Sports and CFC Cricket Academy.",
  alternates: { canonical: "/network" },
};

export default function NetworkPage() {
  return (
    <>
      <PageHero
        eyebrow="Network"
        title="Connected across the sporting ecosystem."
        lead="We work with academies, coaches, sporting organisations and technology providers to explore meaningful programs, partnerships and development opportunities."
      />

      <section className="section-light section-pad !pt-10">
        <div className="container-page">
          <div className="grid gap-5 lg:grid-cols-3">
            {partners.map((partner, i) => (
              <Reveal key={partner.name} delay={0.06 * i}>
                <PartnerCard {...partner} />
              </Reveal>
            ))}
          </div>

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
