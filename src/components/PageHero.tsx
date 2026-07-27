import { Reveal } from "@/components/Reveal";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  lead: string;
};

export function PageHero({ eyebrow, title, lead }: PageHeroProps) {
  return (
    <section className="relative bg-[#F7F5F0] pt-10 md:pt-12">
      <div className="container-page relative z-10 pb-14 md:pb-16">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="heading-xl mt-4">{title}</h1>
          <p className="lead mt-6 pb-2">{lead}</p>
        </Reveal>
      </div>
      <div className="divider-gold relative z-10" />
    </section>
  );
}
