"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LogoHorizontal } from "@/components/brand/Logo";
import { navLinks } from "@/lib/data";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-line transition-[background,box-shadow] duration-300 ${
        scrolled || open
          ? "bg-white/97 shadow-[0_8px_28px_rgba(37,40,37,0.07)] backdrop-blur-xl"
          : "bg-white/95 backdrop-blur-md"
      }`}
    >
      <div className="container-wide flex h-[5rem] items-center justify-between gap-4 md:h-[6rem]">
        <Link href="/" aria-label="SportBridge Global home" className="shrink-0">
          <LogoHorizontal
            className="!h-auto !w-auto max-w-[190px] object-contain object-left sm:max-w-[220px] md:max-w-[240px] xl:max-w-[310px]"
            priority
            variant="dark"
          />
        </Link>

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link group relative px-3 text-[0.9rem] font-semibold tracking-[-0.01em] transition-colors ${
                  active ? "text-primary" : "text-[#12352F]/85 hover:text-primary"
                }`}
              >
                {link.label}
                <span
                  className={`absolute inset-x-3 bottom-1 h-[2px] rounded-full bg-gold transition-opacity ${
                    active ? "opacity-100" : "opacity-0 group-hover:opacity-70"
                  }`}
                  aria-hidden
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden xl:block">
          <Link
            href="/contact"
            className="btn-primary !min-h-[2.85rem] !px-4 !py-2.5 !text-sm !shadow-none"
          >
            Start a Conversation
            <span className="text-gold" aria-hidden>
              →
            </span>
          </Link>
        </div>

        <button
          type="button"
          className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white xl:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3.5 w-5">
            <span
              className={`absolute left-0 h-0.5 w-5 bg-primary transition-all duration-300 ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-0.5 w-5 bg-primary transition-opacity duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-0.5 w-5 bg-primary transition-all duration-300 ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute inset-x-0 top-full z-40 border-b border-line bg-white xl:hidden"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
          >
            <nav className="container-wide flex flex-col gap-1 py-6" aria-label="Mobile">
              {navLinks.map((link, i) => {
                const active = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.03 * i }}
                  >
                    <Link
                      href={link.href}
                      className={`font-display block border-b border-line py-3.5 text-2xl font-bold ${
                        active ? "text-primary" : "text-ink"
                      }`}
                    >
                      {link.label}
                      {active ? (
                        <span className="ml-3 inline-block h-1.5 w-1.5 rounded-full bg-gold align-middle" />
                      ) : null}
                    </Link>
                  </motion.div>
                );
              })}
              <Link href="/contact" className="btn-primary mt-5 w-full">
                Start a Conversation
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
