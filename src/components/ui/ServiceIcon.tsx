import Image from "next/image";

export type IconName =
  | "pathways"
  | "performance"
  | "technology"
  | "advisory"
  | "intelligence"
  | "athlete"
  | "network";

const iconSrc: Record<IconName, string> = {
  pathways: "/icons/services/global-pathways.svg",
  performance: "/icons/services/high-performance.svg",
  technology: "/icons/services/sports-technology.svg",
  advisory: "/icons/services/strategic-partnerships.svg",
  intelligence: "/icons/services/market-intelligence.svg",
  athlete: "/icons/services/athlete-development.svg",
  network: "/icons/services/network-collaborations.svg",
};

export function ServiceIcon({
  name,
  className = "h-10 w-10",
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <Image
      src={iconSrc[name]}
      alt=""
      width={48}
      height={48}
      className={className}
      aria-hidden
    />
  );
}
