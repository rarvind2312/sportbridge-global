"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { SafeImage } from "@/components/ui/SafeImage";
import { partners } from "@/lib/data";

export function NetworkCollaborations() {
  return (
    <section className="section-light section-pad">
      <div className="container-wide">
        <Reveal>
          <p className="eyebrow">Network & Collaborations</p>
          <h2 className="heading-lg mt-4 max-w-3xl">
            Connected across the sporting ecosystem.
          </h2>
          <p className="lead mt-5">
            We work with academies, coaches, sporting organisations and technology providers to
            explore meaningful programs, partnerships and development opportunities.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {partners.map((partner, i) => (
            <Reveal key={partner.name} delay={0.05 * i}>
              <motion.div
                whileHover={{ y: -3 }}
                className="group card-premium flex min-h-[168px] items-center justify-center px-8 py-10"
              >
                {partner.logoSrc ? (
                  <SafeImage
                    src={partner.logoSrc}
                    alt={`${partner.name} logo`}
                    width={200}
                    height={80}
                    className="h-14 w-auto max-h-14 max-w-[190px] object-contain opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                  />
                ) : (
                  <span className="font-display text-lg font-bold text-primary">{partner.name}</span>
                )}
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8">
          <Link href="/network" className="text-sm font-semibold text-primary hover:text-gold">
            View our network →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
