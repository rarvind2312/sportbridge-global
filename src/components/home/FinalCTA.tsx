import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export function FinalCTA() {
  return (
    <section className="section-muted section-pad !pt-0">
      <div className="container-wide">
        <Reveal>
          <div className="section-dark overflow-hidden rounded-[1.5rem] px-8 py-12 md:px-14 md:py-16">
            <h2 className="heading-lg max-w-3xl !text-ink-on-dark">
              Let’s build the next sporting opportunity.
            </h2>
            <p className="mt-4 max-w-xl text-ink-muted-on-dark">
              Start a conversation about pathways, partnerships, technology or commercial
              strategy.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="btn-primary !bg-gold !text-primary !shadow-none hover:!bg-gold-soft"
              >
                Start a Conversation
              </Link>
              <Link href="/network" className="btn-secondary">
                View Our Network
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
