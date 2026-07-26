import { Reveal } from "@/components/Reveal";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  lead: string;
};

export function PageHero({ eyebrow, title, lead }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#F7F5F0_0%,#FFFFFF_70%,#EEE9DF_100%)] pt-10 md:pt-14">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-12 top-8 h-48 w-48 rounded-full bg-gold-soft/20 blur-[90px]" />
        <div className="absolute right-0 top-16 h-40 w-40 rounded-full bg-primary/5 blur-[70px]" />
      </div>
      <div className="container-page relative pb-12 md:pb-16">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="heading-xl mt-4 max-w-4xl text-balance">{title}</h1>
          <p className="lead mt-6">{lead}</p>
        </Reveal>
      </div>
      <div className="divider-gold" />
    </section>
  );
}
