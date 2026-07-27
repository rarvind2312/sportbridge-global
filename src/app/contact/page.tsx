import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { LogoHorizontal } from "@/components/brand/Logo";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { contacts, siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact SportBridge Global — Arvind Ravi (Founder) and Sriram V (Strategic Partnerships) across Melbourne, Hyderabad and Chennai.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start a conversation."
        lead="Share a brief on your organisation, athletes or opportunity. We respond to serious enquiries with clarity and pace."
      />

      <section className="section-light section-pad !pt-10">
        <div className="container-page">
          <Reveal>
            <LogoHorizontal
              className="h-12 w-auto max-w-[280px] object-contain object-left md:h-14"
              variant="dark"
            />
            <p className="mt-4 text-sm text-ink-muted">{siteConfig.location}</p>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {contacts.map((person, i) => (
              <Reveal key={person.email} delay={0.05 * i}>
                <article className="card-premium h-full p-7 md:p-8">
                  <p className="eyebrow">{person.role}</p>
                  <h2 className="heading-md mt-3 text-ink">{person.name}</h2>
                  <p className="mt-2 text-sm text-ink-muted">{person.location}</p>
                  <div className="mt-6 space-y-2 text-sm">
                    <a
                      href={`mailto:${person.email}`}
                      className="block font-semibold text-ink transition-colors hover:text-primary"
                    >
                      {person.email}
                    </a>
                    <a
                      href={`tel:${person.phoneHref}`}
                      className="block font-semibold text-ink transition-colors hover:text-primary"
                    >
                      {person.phone}
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <Reveal>
              <div className="card-premium p-6 md:p-8">
                <h2 className="heading-md text-ink">How to reach us</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  For partnership, pathway or technology enquiries, include timelines and relevant
                  organisational context so we can route you to the right specialist.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="card-premium p-6 md:p-9">
                <h2 className="heading-md text-ink">Send a message</h2>
                <p className="mt-2 text-sm text-ink-muted">
                  All fields help us respond with the appropriate team.
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
