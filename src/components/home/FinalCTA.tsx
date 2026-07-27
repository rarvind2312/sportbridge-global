import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export function FinalCTA() {
  return (
    <section className="section-muted section-pad !pt-0">
      <div className="container-wide">
        <Reveal>
          <div className="section-dark rounded-[1.5rem] px-8 py-12 md:px-14 md:py-16">
            <h2 className="heading-lg max-w-3xl !text-ink-on-dark text-balance">
              Let’s build the next sporting opportunity.
            </h2>
            <p className="mt-4 max-w-xl text-ink-muted-on-dark">
              Let’s connect to explore opportunities, partnerships and pathways.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="btn-primary !bg-gold !text-primary !shadow-none hover:!bg-gold-soft"
              >
                Start a Conversation
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
