import type { Metadata } from "next";
import { ConnectedMarkets } from "@/components/home/ConnectedMarkets";
import { FinalCTA } from "@/components/home/FinalCTA";
import { HomeHero } from "@/components/home/HomeHero";
import { NetworkCollaborations } from "@/components/home/NetworkCollaborations";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { WhySportBridge } from "@/components/home/WhySportBridge";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: {
    absolute: `${siteConfig.name} | ${siteConfig.tagline}`,
  },
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <WhatWeDo />
      <ConnectedMarkets />
      <NetworkCollaborations />
      <WhySportBridge />
      <FinalCTA />
    </>
  );
}
