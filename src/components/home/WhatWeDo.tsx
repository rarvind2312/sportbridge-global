"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { homeWhatWeDo } from "@/lib/data";

export function WhatWeDo() {
  return (
    <section className="section-light section-pad">
      <div className="container-wide">
        <Reveal>
          <p className="eyebrow">What We Do</p>
          <h2 className="heading-lg mt-4 max-w-2xl">Four pillars. Clear outcomes.</h2>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {homeWhatWeDo.map((item, i) => (
            <Reveal key={item.title} delay={0.05 * i}>
              <Link href={item.href} className="block h-full">
                <motion.article
                  whileHover={{ y: -4 }}
                  className="card-premium group flex h-full flex-col p-6 md:p-7"
                >
                  <ServiceIcon name={item.icon} />
                  <h3 className="heading-md mt-5">{item.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">{item.text}</p>
                  <span className="mt-5 text-sm font-semibold text-primary transition-colors group-hover:text-gold">
                    View Service →
                  </span>
                </motion.article>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
