import type { Metadata } from "next";
import { ConnectedMarkets } from "@/components/home/ConnectedMarkets";
import { FinalCTA } from "@/components/home/FinalCTA";
import { HomeHero } from "@/components/home/HomeHero";
import { NetworkCollaborations } from "@/components/home/NetworkCollaborations";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { WhySportBridge } from "@/components/home/WhySportBridge";
import { siteConfig } from "@/lib/data";

const title = "SportBridge Global | Sports Partnerships, Pathways & Technology";
const description = siteConfig.description;

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    images: [
      {
        url: "/brand/sportbridge-og.png",
        width: 1200,
        height: 630,
        alt: "SportBridge Global — Connecting Talent. Technology. Opportunity.",
      },
    ],
  },
  twitter: {
    title,
    description,
  },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <WhatWeDo />
      <NetworkCollaborations />
      <ConnectedMarkets />
      <WhySportBridge />
      <FinalCTA />
    </>
  );
}
