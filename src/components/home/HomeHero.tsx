"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { SafeImage } from "@/components/ui/SafeImage";
import { partners } from "@/lib/data";

export function HomeHero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(165deg,#F7F5F0_0%,#FFFFFF_48%,#EEE9DF_100%)]">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(rgba(185,147,82,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(185,147,82,0.08) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 70% 60% at 70% 40%, black, transparent)",
        }}
      />
      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-gold-soft/25 blur-[100px]" aria-hidden />
      <div className="pointer-events-none absolute bottom-0 left-0 h-56 w-56 rounded-full bg-primary/5 blur-[80px]" aria-hidden />

      <div className="container-wide relative grid items-center gap-8 py-10 md:gap-10 md:py-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:py-14 lg:min-h-0 lg:max-h-[720px]">
        <div className="max-w-xl">
          <motion.h1
            className="font-display text-[clamp(2.15rem,4.6vw,3.45rem)] font-bold leading-[1.04] tracking-[-0.035em] text-primary"
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="block whitespace-nowrap">CONNECTING TALENT.</span>
            <span className="block">TECHNOLOGY.</span>
            <span className="block text-gold">OPPORTUNITY.</span>
          </motion.h1>

          <motion.p
            className="mt-6 text-[1.05rem] leading-relaxed text-ink-muted md:text-[1.1rem]"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            SportBridge Global connects sporting organisations, academies, coaches, technology
            providers and strategic partners to build meaningful opportunities across Melbourne,
            Hyderabad and Chennai.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.16 }}
          >
            <Link href="/services" className="btn-primary">
              Explore Our Services
            </Link>
            <Link href="/network" className="btn-secondary">
              View Our Network
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-lg lg:max-w-none"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
        >
          <div className="relative overflow-hidden rounded-2xl border border-line bg-white p-7 shadow-[0_16px_48px_rgba(37,40,37,0.06)] md:p-9">
            <svg
              viewBox="0 0 320 180"
              className="absolute inset-0 h-full w-full opacity-40"
              aria-hidden
            >
              <path
                d="M40 140 C110 40, 210 40, 280 140"
                fill="none"
                stroke="#B99352"
                strokeWidth="1.25"
                className={reduce ? undefined : "route-line"}
              />
              <circle cx="40" cy="140" r="4" fill="#12352F" />
              <circle cx="160" cy="55" r="4" fill="#B99352" />
              <circle cx="280" cy="140" r="4" fill="#12352F" />
            </svg>

            <p className="relative text-[0.68rem] font-bold uppercase tracking-[0.2em] text-gold">
              Partner network
            </p>
            <div className="relative mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-4">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="flex min-h-[88px] items-center justify-center rounded-xl border border-line bg-bg px-4 py-5"
                >
                  {partner.logoSrc ? (
                    <SafeImage
                      src={partner.logoSrc}
                      alt={`${partner.name} logo`}
                      width={160}
                      height={64}
                      className="h-11 w-auto max-w-[130px] object-contain"
                      priority
                    />
                  ) : (
                    <span className="text-center text-sm font-semibold text-primary">
                      {partner.name}
                    </span>
                  )}
                </div>
              ))}
            </div>
            <p className="relative mt-7 text-center text-sm font-medium text-ink-muted">
              Topline · F16 · CFC
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
