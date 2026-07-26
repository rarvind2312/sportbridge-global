export const siteConfig = {
  name: "SportBridge Global",
  tagline: "Connecting Talent. Technology. Opportunity.",
  description:
    "SportBridge Global is a sports partnerships, pathways, performance and innovation platform connecting athletes, coaches, clubs, academies, technology providers and sporting organisations across Melbourne, Hyderabad and Chennai.",
  url: "https://sportbridgeglobal.com.au",
  location: "Melbourne · Hyderabad · Chennai",
  locations: [
    "Melbourne, Australia",
    "Hyderabad, India",
    "Chennai, India",
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
        title: "Coach Education",
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
        title: "Analytics",
        text: "Performance and commercial data systems that support clearer coaching and business decisions.",
      },
      {
        title: "Technology Partnerships",
        text: "Structured introductions between providers and organisations ready to pilot and deploy.",
      },
      {
        title: "Innovation Initiatives",
        text: "Programmes that test emerging tools without requiring full-scale organisational commitment.",
      },
    ],
  },
  {
    slug: "sports-business-advisory",
    title: "Sports Business & Strategic Advisory",
    summary:
      "Commercial strategy, sponsorship systems, valuations and partnership frameworks.",
    detail:
      "From sponsorship CRM to tournament and team valuations, we bring investor-ready clarity to sports business decisions.",
    icon: "advisory" as const,
    points: [
      {
        title: "Sponsorship CRM",
        text: "Operating systems for rights inventory, renewals, activation and relationship intelligence.",
      },
      {
        title: "Market Analysis",
        text: "B2B and B2C landscape insight for market entry, expansion and partnership positioning.",
      },
      {
        title: "Team & Tournament Valuations",
        text: "Independent frameworks covering enterprise value, rights packages and commercial assets.",
      },
      {
        title: "Strategic Introductions",
        text: "Curated connections across brands, operators, academies and investors.",
      },
    ],
  },
  {
    slug: "performance-intelligence",
    title: "Performance Intelligence",
    summary:
      "Video analysis, athlete profiling and insight systems that inform coaching and selection.",
    detail:
      "Actionable intelligence connecting technique, workload and match outcomes for athletes, coaches and organisations.",
    icon: "intelligence" as const,
    points: [
      {
        title: "Athlete Profiling",
        text: "Professional profiles that present capability, trajectory and readiness for selection conversations.",
      },
      {
        title: "Insight Systems",
        text: "Feedback loops that turn footage and performance data into coaching action.",
      },
      {
        title: "Selection Support",
        text: "Clear visual and narrative assets used by coaches, academies and pathway decision-makers.",
      },
      {
        title: "Continuous Review",
        text: "Ongoing analysis cycles aligned to camps, tours and competition blocks.",
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
  description: string;
}> = [
  {
    name: "Topline Cricket",
    short: "Topline",
    logoSrc: "/logos/partners/topline.jpg",
    href: "https://toplinecricket.com.au/",
    description:
      "NextGen cricket centre supporting academy pathways, indoor training and high-performance development.",
  },
  {
    name: "F16 Sports",
    short: "F16",
    logoSrc: "/logos/partners/f16.jpg",
    href: "https://www.f16sports.com/",
    description:
      "Sports organisation collaborating across development programs and commercial network activity.",
  },
  {
    name: "CFC Cricket Academy",
    short: "CFC",
    logoSrc: "/logos/partners/cfc.jpg",
    description:
      "Academy partner focused on talent development and high-performance cricket pathways.",
  },
];

export const homeWhatWeDo = [
  {
    title: "Global Pathways",
    text: "Structured international exposure for athletes and coaches.",
    href: "/services#global-pathway-programs",
    icon: "pathways" as const,
  },
  {
    title: "High Performance",
    text: "Specialist labs, camps and coach education environments.",
    href: "/services#high-performance-programs",
    icon: "performance" as const,
  },
  {
    title: "Sports Technology",
    text: "Platform PoCs, analytics and innovation partnerships.",
    href: "/services#sports-technology-innovation",
    icon: "technology" as const,
  },
  {
    title: "Strategic Partnerships",
    text: "Sponsorship systems, valuations and strategic introductions.",
    href: "/services#sports-business-advisory",
    icon: "advisory" as const,
  },
] as const;

export const whyPillars = [
  {
    title: "Global Perspective",
    text: "Programs and partnerships shaped for multi-market sporting realities.",
  },
  {
    title: "Independent Facilitation",
    text: "Neutral bridge-building between talent, organisations and opportunity.",
  },
  {
    title: "Technology-Led Thinking",
    text: "Practical innovation that supports performance and commercial decisions.",
  },
] as const;

export const focusAreas = [
  {
    title: "Cricket Development",
    text: "Building sustainable talent systems across academies and clubs.",
    href: "/services#global-pathway-programs",
  },
  {
    title: "International Pathways",
    text: "Structured overseas exposure and placement programmes.",
    href: "/services#global-pathway-programs",
  },
  {
    title: "Sports Technology",
    text: "Innovation partnerships and platform validation.",
    href: "/services#sports-technology-innovation",
  },
  {
    title: "Athlete Development",
    text: "Holistic progression from development to professional readiness.",
    href: "/services#high-performance-programs",
  },
  {
    title: "Strategic Partnerships",
    text: "Long-term alliances across markets and organisations.",
    href: "/network",
  },
  {
    title: "Commercial Opportunities",
    text: "Sponsorship, valuations and investor-ready briefs.",
    href: "/services#sports-business-advisory",
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
    title: "Technology Partnerships",
    type: "Innovation",
    location: "Melbourne · Hyderabad · Chennai",
    summary:
      "Platform PoCs and partnership programmes for sports technology providers and operators.",
  },
  {
    title: "Commercial & Investment Briefings",
    type: "Business",
    location: "By invitation",
    summary:
      "Valuation-backed briefings for brands, operators and investors evaluating sports opportunities.",
  },
] as const;

export const counters = [
  { label: "Markets Connected", value: 5, suffix: "+" },
  { label: "Ecosystem Partners", value: 3, suffix: "+" },
  { label: "Service Pillars", value: 5, suffix: "" },
  { label: "Focus Areas", value: 6, suffix: "" },
] as const;
