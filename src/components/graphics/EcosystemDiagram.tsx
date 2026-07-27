import Image from "next/image";

type EcosystemDiagramProps = {
  className?: string;
};

/**
 * SportBridge ecosystem — athletes, coaches, academies, orgs, technology, partners.
 */
export function EcosystemDiagram({ className = "" }: EcosystemDiagramProps) {
  return (
    <div
      className={`overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-[#F7F5F0] to-[#EEE9DF] p-3 md:p-4 ${className}`}
      role="img"
      aria-label="SportBridge connects athletes, coaches, academies, sporting organisations, technology and strategic partners"
    >
      <Image
        src="/images/about/ecosystem.webp"
        alt="SportBridge Global ecosystem connecting athletes, coaches, academies, sporting organisations, technology and partners"
        width={1024}
        height={1024}
        className="h-auto w-full"
        sizes="(min-width: 1024px) 42vw, 92vw"
        priority
      />
    </div>
  );
}
