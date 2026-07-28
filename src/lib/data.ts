export const siteConfig = {
  name: "SportBridge Global",
  tagline: "Connecting Talent. Technology. Opportunity.",
  description:
    "SportBridge Global connects sporting organisations, academies, coaches, athletes, technology providers and strategic partners across Australia and India to create pathways, partnerships and opportunities in sport.",
  url: "https://sportbridgeglobal.com.au", // keep in sync with src/lib/seo.ts PRODUCTION_ORIGIN
  location: "Melbourne · Hyderabad · Chennai · US · Dubai · Sri Lanka",
  locations: [
    "Melbourne, Australia",
    "Hyderabad, India",
    "Chennai, India",
    "United States",
    "Dubai",
    "Sri Lanka",
  ] as const,
};

export const contacts = [
  {
    name: "Arvind Ravi",
    role: "Founder",
    location: "Melbourne, Australia",
    email: "arvindr@sportbridgeglobal.com.au",
    phone: "+61 470 271 637",
    phoneHref: "+61470271637",
  },
  {
    name: "Sriram V",
    role: "Strategic Partnerships",
    location: "Chennai, India",
    email: "sriramv@sportbridgeglobal.com.au",
    phone: "+91 97901 13417",
    phoneHref: "+919790113417",
  },
] as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/network", label: "Network" },
  { href: "/opportunities", label: "Opportunities" },
  { href: "/contact", label: "Contact" },
] as const;

export const ecosystemNodes = [
  {
    id: "athletes",
    label: "Athletes",
    short: "Athletes",
    angle: -90,
    detail:
      "Emerging and elite talent seeking structured international pathways and professional opportunity.",
  },
  {
    id: "coaches",
    label: "Coaches",
    short: "Coaches",
    angle: -45,
    detail:
      "Specialist coaches and performance staff expanding influence across markets and programmes.",
  },
  {
    id: "academies",
    label: "Academies",
    short: "Academies",
    angle: 0,
    detail:
      "Development environments looking to elevate standards, exposure and commercial capability.",
  },
  {
    id: "clubs",
    label: "Clubs",
    short: "Clubs",
    angle: 45,
    detail:
      "Clubs and franchises building pipelines, partnerships and high-performance infrastructure.",
  },
  {
    id: "technology",
    label: "Technology",
    short: "Tech",
    angle: 90,
    detail:
      "Sports technology partners validating products through platform PoCs and real-world deployment.",
  },
  {
    id: "brands",
    label: "Brands",
    short: "Brands",
    angle: 135,
    detail:
      "Commercial brands seeking credible sponsorship, activation and athlete alignment opportunities.",
  },
  {
    id: "investors",
    label: "Investors",
    short: "Investors",
    angle: 180,
    detail:
      "Investors and operators evaluating tournaments, teams and sports-business opportunities.",
  },
  {
    id: "hp",
    label: "High Performance",
    short: "HP",
    angle: 225,
    detail:
      "Labs, analysts and HP systems delivering measurable athletic and coaching outcomes.",
  },
] as const;

export const servicePillars = [
  {
    slug: "global-pathway-programs",
    title: "Global Pathway Programs",
    summary:
      "Cross-border athlete and coach pathways spanning development, exposure and professional progression.",
    detail:
      "We design structured international journeys connecting academies, clubs and high-performance environments across key sports markets.",
    icon: "pathways" as const,
    points: [
      {
        title: "International Exposure",
        text: "Competitive and training placements that build match craft across conditions, formats and cultures.",
      },
      {
        title: "Coach Exchanges",
        text: "Residency and exchange models that transfer methods between coaching systems and markets.",
      },
      {
        title: "Cross-Country Training",
        text: "Multi-location blocks coordinated across partner venues, climates and competition calendars.",
      },
      {
        title: "Academy Partnerships",
        text: "Structured collaborations between development environments across markets.",
      },
      {
        title: "Athlete Pathways",
        text: "End-to-end progression frameworks from identification through development to professional readiness.",
      },
    ],
  },
  {
    slug: "high-performance-programs",
    title: "High Performance Programs",
    summary:
      "Specialist camps, bowling labs and performance environments built for measurable progress.",
    detail:
      "Pace and spin bowling labs, video analysis and coach education combine into cohesive high-performance delivery.",
    icon: "performance" as const,
    points: [
      {
        title: "High Performance Camps",
        text: "Focused training blocks designed around measurable technical and physical outcomes.",
      },
      {
        title: "Batting Masterclass",
        text: "Intent, shot selection and match craft developed with specialist batting coaches in high-intensity environments.",
      },
      {
        title: "Pace Bowling Labs",
        text: "Velocity, biomechanics, seam presentation and workload management in specialist pace environments.",
      },
      {
        title: "Spin Bowling Labs",
        text: "Control, variation, deception and match craft under dedicated spin coaching structures.",
      },
      {
        title: "Video Analysis",
        text: "Coded footage and technical breakdowns that connect technique to training priorities.",
      },
      {
        title: "Technical Reviews",
        text: "Structured technical assessments used to prioritise coaching interventions.",
      },
      {
        title: "Coach Development",
        text: "Structured learning for coaches working inside labs, academies and pathway programmes.",
      },
    ],
  },
  {
    slug: "sports-technology-innovation",
    title: "Sports Technology & Innovation",
    summary:
      "Platform proofs-of-concept, analytics partnerships and innovation programmes for sport.",
    detail:
      "We help technology providers and sporting organisations validate, pilot and scale tools that create real competitive advantage.",
    icon: "technology" as const,
    points: [
      {
        title: "Platform PoCs",
        text: "Rapid validation of sports platforms inside real academy, club and pathway environments.",
      },
      {
        title: "Performance Analytics",
        text: "Performance and commercial data systems that support clearer coaching and business decisions.",
      },
      {
        title: "Technology Partnerships",
        text: "Structured introductions between providers and organisations ready to pilot and deploy.",
      },
      {
        title: "Innovation Programs",
        text: "Programmes that test emerging tools without requiring full-scale organisational commitment.",
      },
      {
        title: "Digital Transformation",
        text: "Practical roadmaps for organisations adopting digital performance and operations tools.",
      },
    ],
  },
  {
    slug: "sports-business-advisory",
    title: "Strategic Partnerships",
    summary:
      "Strategic introductions, sponsorship systems and organisational collaboration frameworks.",
    detail:
      "We help organisations build commercial partnerships and collaboration models with clarity and credible facilitation.",
    icon: "advisory" as const,
    points: [
      {
        title: "Strategic Introductions",
        text: "Curated connections across brands, operators, academies and sporting organisations.",
      },
      {
        title: "Sponsorship CRM",
        text: "Operating systems for rights inventory, renewals, activation and relationship intelligence.",
      },
      {
        title: "Commercial Partnerships",
        text: "Frameworks for sponsorship, activation and long-term commercial collaboration.",
      },
      {
        title: "Organisational Collaboration",
        text: "Multi-party programmes that align academies, clubs and partners around shared outcomes.",
      },
    ],
  },
  {
    slug: "market-intelligence",
    title: "Market Intelligence",
    summary:
      "Market analysis, commercial insights and valuation frameworks for sporting organisations.",
    detail:
      "Decision support for organisations evaluating markets, tournaments, teams and commercial opportunity.",
    icon: "intelligence" as const,
    tier: "secondary" as const,
    points: [
      {
        title: "Market Analysis",
        text: "B2B and B2C landscape insight for market entry, expansion and partnership positioning.",
      },
      {
        title: "Commercial Insights",
        text: "Partnership intelligence for brands, operators and sporting organisations.",
      },
      {
        title: "Tournament Valuations",
        text: "Rights, media and sponsorship frameworks for event portfolios.",
      },
      {
        title: "Team Valuations",
        text: "Enterprise assessments integrating brand, performance and commercial assets.",
      },
    ],
  },
  {
    slug: "athlete-development",
    title: "Athlete Development",
    summary:
      "Profile building, development programmes and international exposure pathways.",
    detail:
      "Support for athletes progressing from development environments into higher-performance opportunity.",
    icon: "athlete" as const,
    tier: "secondary" as const,
    points: [
      {
        title: "Profile Building",
        text: "Professional profiles that present capability, trajectory and readiness.",
      },
      {
        title: "Development Programs",
        text: "Structured technical, physical and professional progression plans.",
      },
      {
        title: "International Exposure",
        text: "Training and competitive opportunities across operating markets.",
      },
      {
        title: "Performance Pathways",
        text: "Clear next-step pathways connecting academies, camps and HP environments.",
      },
    ],
  },
  {
    slug: "network-collaborations",
    title: "Network Collaborations",
    summary:
      "Connections across academies, coaches, sporting organisations and technology providers.",
    detail:
      "Facilitated collaboration that expands capability without forcing every organisation to build alone.",
    icon: "network" as const,
    tier: "secondary" as const,
    points: [
      {
        title: "Academy Connections",
        text: "Partnerships between development environments across Melbourne, Hyderabad and Chennai.",
      },
      {
        title: "Coach Networks",
        text: "Exchanges and residencies that transfer methods between coaching systems.",
      },
      {
        title: "Sporting Organisations",
        text: "Collaboration models for clubs, franchises and sporting bodies.",
      },
      {
        title: "Technology Providers",
        text: "Introductions that place tools inside real sporting environments.",
      },
    ],
  },
] as const;

export const pathwaySteps = [
  { title: "Athlete", text: "Identify talent with clear trajectory and commitment." },
  { title: "Development", text: "Technical, physical and professional foundations." },
  { title: "International Exposure", text: "Compete and train across markets and conditions." },
  { title: "High Performance", text: "Specialist labs, analysis and elite environments." },
  { title: "Professional Opportunities", text: "Contracts, placements and commercial pathways." },
] as const;

export const funnelStages = [
  {
    title: "Discovery",
    text: "Identify athletes, organisations and partners with aligned ambition.",
  },
  {
    title: "Assessment",
    text: "Evaluate readiness across performance, commercial and operational criteria.",
  },
  {
    title: "Programme Design",
    text: "Build pathway, technology or advisory briefs with clear milestones.",
  },
  {
    title: "Activation",
    text: "Deliver placements, pilots, labs or commercial introductions.",
  },
  {
    title: "Progression",
    text: "Review outcomes and advance to the next opportunity layer.",
  },
] as const;

export const hpModules = [
  {
    title: "Pace Bowling Labs",
    text: "Velocity, biomechanics and durability in specialist pace environments.",
  },
  {
    title: "Spin Bowling Labs",
    text: "Control, variation and match craft under specialist spin coaching.",
  },
  {
    title: "Video Analysis",
    text: "Coded footage and technical breakdowns that drive training focus.",
  },
  {
    title: "Coach Education",
    text: "Education frameworks for coaches operating inside HP systems.",
  },
] as const;

export const techHighlights = [
  { title: "Platform PoCs", text: "Validate sports technology before full-scale investment." },
  { title: "Analytics", text: "Connect performance and commercial data into decision systems." },
  { title: "Technology Partnerships", text: "Match providers with clubs, academies and operators." },
  { title: "Innovation Initiatives", text: "Pilot emerging tools inside real sporting environments." },
] as const;

export const marketModules = [
  {
    title: "Market Analysis",
    text: "B2B and B2C landscape insight for market entry and expansion.",
  },
  {
    title: "Team Valuations",
    text: "Enterprise assessments integrating brand, performance and commercial assets.",
  },
  {
    title: "Tournament Valuations",
    text: "Rights, media and sponsorship frameworks for event portfolios.",
  },
  {
    title: "Commercial Insights",
    text: "Partnership intelligence for brands, operators and investors.",
  },
] as const;

export const partners: Array<{
  name: string;
  short: string;
  logoSrc?: string;
  href?: string;
  ariaLabel?: string;
  description: string;
}> = [
  {
    name: "Topline NextGen",
    short: "Topline",
    logoSrc: "/partners/topline.png",
    href: "https://toplinecricket.com.au/",
    ariaLabel: "Visit Topline NextGen Cricket Centre website",
    description:
      "NextGen cricket centre supporting academy pathways, indoor training and high-performance development.",
  },
  {
    name: "F16",
    short: "F16",
    logoSrc: "/partners/f16.png",
    href: "https://www.f16sports.com/",
    ariaLabel: "Visit F16 Sports website",
    description:
      "Sports organisation collaborating across development programs and commercial network activity.",
  },
  {
    name: "CFC Excellence Cricket Academy",
    short: "CFC",
    logoSrc: "/partners/cfc.png",
    href: "https://www.instagram.com/cfcexcellencecricketacademy/reels/",
    ariaLabel: "Visit CFC Excellence Cricket Academy on Instagram",
    description:
      "Academy partner focused on talent development and high-performance cricket pathways.",
  },
];

export const homeWhatWeDo = [
  {
    title: "Global Pathways",
    text: "Connecting talent across borders.",
    href: "/services#global-pathway-programs",
    icon: "pathways" as const,
  },
  {
    title: "High Performance",
    text: "Developing athletes and coaches.",
    href: "/services#high-performance-programs",
    icon: "performance" as const,
  },
  {
    title: "Sports Technology",
    text: "Leveraging data and innovation.",
    href: "/services#sports-technology-innovation",
    icon: "technology" as const,
  },
  {
    title: "Strategic Partnerships",
    text: "Building long-term collaborations.",
    href: "/services#sports-business-advisory",
    icon: "advisory" as const,
  },
] as const;

export const whyPillars = [
  {
    title: "Global Perspective",
    text: "Connecting sporting ecosystems across Australia and India.",
  },
  {
    title: "Independent Facilitation",
    text: "Bringing together organisations, specialists and opportunities.",
  },
  {
    title: "Technology-Led Thinking",
    text: "Using innovation and performance intelligence to create better sporting outcomes.",
  },
] as const;

export const focusAreas = [
  {
    title: "Coaching Programs",
    text: "Residencies and exchanges that transfer methods between coaching systems.",
    href: "/services#high-performance-programs",
  },
  {
    title: "International Pathways",
    text: "Structured overseas exposure and placement programmes for athletes and coaches.",
    href: "/services#global-pathway-programs",
  },
  {
    title: "Technology Collaborations",
    text: "Platform PoCs and innovation partnerships with sports technology providers.",
    href: "/services#sports-technology-innovation",
  },
  {
    title: "High Performance Programs",
    text: "Specialist camps, labs and performance environments built for measurable progress.",
    href: "/services#high-performance-programs",
  },
  {
    title: "Strategic Partnerships",
    text: "Introductions and collaboration frameworks across organisations and markets.",
    href: "/services#sports-business-advisory",
  },
  {
    title: "Academy Collaborations",
    text: "Development partnerships connecting academies across Melbourne, Hyderabad and Chennai.",
    href: "/network",
  },
] as const;

export const opportunities = [
  {
    title: "Overseas Academy Placements",
    type: "Athlete Pathway",
    location: "Australia · India",
    summary:
      "Seasonal placements for emerging and elite athletes seeking competitive exposure across our operating markets.",
  },
  {
    title: "High Performance Residencies",
    type: "Coach Pathway",
    location: "Melbourne · Hyderabad · Chennai",
    summary:
      "Immersive residencies for coaches working inside specialist labs and HP environments.",
  },
  {
    title: "Technology Collaborations",
    type: "Innovation",
    location: "Melbourne · Hyderabad · Chennai",
    summary:
      "Platform PoCs and partnership programmes for sports technology providers and operators.",
  },
  {
    title: "Strategic Partnership Briefings",
    type: "Partnerships",
    location: "By invitation",
    summary:
      "Conversations for organisations exploring commercial collaboration, sponsorship systems and network introductions.",
  },
] as const;

export const counters = [
  { label: "Markets Connected", value: 5, suffix: "+" },
  { label: "Ecosystem Partners", value: 3, suffix: "+" },
  { label: "Service Pillars", value: 5, suffix: "" },
  { label: "Focus Areas", value: 6, suffix: "" },
] as const;
