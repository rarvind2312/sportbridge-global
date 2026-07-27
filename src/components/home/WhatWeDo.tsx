"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { homeWhatWeDo } from "@/lib/data";

export function WhatWeDo() {
  return (
    <section className="border-b border-line bg-bg">
      <div className="container-wide py-8 md:py-10">
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4 xl:gap-8">
          {homeWhatWeDo.map((item, i) => (
            <Reveal key={item.title} delay={0.04 * i}>
              <Link href={item.href} className="group block h-full">
                <motion.article
                  whileHover={{ y: -2 }}
                  className="flex h-full flex-col items-start gap-3 px-1 py-2"
                >
                  <ServiceIcon name={item.icon} className="h-10 w-10" />
                  <h3 className="font-display text-[0.95rem] font-bold uppercase leading-[1.45] tracking-[0.02em] text-primary">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-[1.65] text-ink-muted">{item.text}</p>
                </motion.article>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
