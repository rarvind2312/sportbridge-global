"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

export function HomeHero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate bg-[#F7F5F0]">
      {/* Image layer only — clipped here so type/layout above is never cropped */}
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden>
        <Image
          src="/images/hero/sportbridge-hero.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_center] opacity-[0.7] sm:object-[58%_46%] sm:opacity-[0.75] lg:object-[62%_48%]"
        />
        {/* Soft left wash for type — image stays visible on the right */}
        <div className="absolute inset-0 bg-[#F7F5F0]/20" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(247,245,240,0.82) 0%, rgba(247,245,240,0.58) 26%, rgba(247,245,240,0.28) 48%, rgba(247,245,240,0.1) 68%, rgba(247,245,240,0.06) 100%)",
          }}
        />
      </div>

      <div className="container-wide relative z-10 flex min-h-[640px] items-center py-16 md:min-h-[720px] md:py-20 lg:min-h-[min(70vw,860px)] lg:py-24">
        <div className="max-w-xl lg:max-w-[34rem] xl:max-w-[36rem]">
          <motion.p
            className="eyebrow"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            Connecting possibilities. Building futures.
          </motion.p>

          <motion.h1
            className="mt-5 font-display text-[clamp(1.65rem,3.6vw,2.85rem)] font-bold tracking-[-0.022em] text-primary"
            style={{ lineHeight: 1.35, paddingBottom: "0.2em" }}
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.55 }}
          >
            <span className="block whitespace-nowrap py-1">CONNECTING TALENT.</span>
            <span className="block whitespace-nowrap py-1">TECHNOLOGY.</span>
            <span className="block whitespace-nowrap py-1 text-[#8F6F2E]">OPPORTUNITY.</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-[58ch] pb-1 text-[1.05rem] leading-[1.75] text-[#252825] md:text-[1.12rem]"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            SportBridge Global connects sporting organisations, academies, coaches, technology
            providers and strategic partners to build meaningful opportunities across Melbourne,
            Hyderabad and Chennai.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.45, delay: 0.14 }}
          >
            <Link href="/services" className="btn-primary">
              Explore Our Services
              <span aria-hidden>→</span>
            </Link>
            <Link href="/network" className="btn-secondary btn-secondary-gold">
              View Our Network
              <span aria-hidden>→</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
