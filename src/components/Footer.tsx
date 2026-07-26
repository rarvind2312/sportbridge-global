import Link from "next/link";
import { LogoHorizontal } from "@/components/brand/Logo";
import { contacts, navLinks, siteConfig } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-bg-dark text-ink-on-dark">
      <div className="container-wide section-pad !py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1.2fr]">
          <div>
            <LogoHorizontal className="h-12 w-auto md:h-14" variant="light" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-muted-on-dark">
              {siteConfig.tagline}
            </p>
            <p className="mt-6 text-sm font-medium text-gold-soft">{siteConfig.location}</p>
          </div>

          <div>
            <p className="mb-4 text-[0.72rem] font-bold uppercase tracking-[0.2em] text-gold-soft">
              Navigate
            </p>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-ink-muted-on-dark transition-colors hover:text-gold-soft"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-[0.72rem] font-bold uppercase tracking-[0.2em] text-gold-soft">
              Connect
            </p>
            <ul className="space-y-5 text-sm">
              {contacts.map((person) => (
                <li key={person.email} className="space-y-1">
                  <p className="font-semibold text-ink-on-dark">{person.name}</p>
                  <p className="text-xs uppercase tracking-[0.12em] text-gold-soft/80">
                    {person.role}
                  </p>
                  <a
                    href={`mailto:${person.email}`}
                    className="block text-ink-muted-on-dark hover:text-gold-soft"
                  >
                    {person.email}
                  </a>
                  <a
                    href={`tel:${person.phoneHref}`}
                    className="block text-ink-muted-on-dark hover:text-gold-soft"
                  >
                    {person.phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line-on-dark pt-8 text-sm text-ink-muted-on-dark sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} SportBridge Global. All rights reserved.</p>
          <p className="text-gold-soft/90">Talent · Technology · Opportunity</p>
        </div>
      </div>
    </footer>
  );
}
