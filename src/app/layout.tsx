import type { Metadata } from "next";
import { DM_Sans, Figtree } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { contacts, siteConfig } from "@/lib/data";
import { PRODUCTION_ORIGIN } from "@/lib/seo";
import "./globals.css";

/* Figtree/DM Sans chosen over Syne/Manrope — Syne’s short geometric descenders
   read as clipped “g/y/p” across the site. */
const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
  adjustFontFallback: false,
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  adjustFontFallback: false,
});

const ogImage = {
  url: "/brand/sportbridge-og.png",
  width: 1200,
  height: 630,
  alt: "SportBridge Global — Connecting Talent. Technology. Opportunity.",
};

export const metadata: Metadata = {
  metadataBase: new URL(PRODUCTION_ORIGIN),
  title: {
    default: "SportBridge Global | Sports Partnerships, Pathways & Technology",
    template: "%s | SportBridge Global",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "SportBridge Global",
    "sports partnerships",
    "athlete pathways",
    "sports technology",
    "high performance",
    "sports business advisory",
    "global sports network",
    "Melbourne",
    "Hyderabad",
    "Chennai",
  ],
  authors: [
    { name: "Arvind Ravi" },
    { name: "Sriram V" },
    { name: siteConfig.name },
  ],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: PRODUCTION_ORIGIN,
    siteName: siteConfig.name,
    title: "SportBridge Global | Sports Partnerships, Pathways & Technology",
    description: siteConfig.description,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "SportBridge Global | Sports Partnerships, Pathways & Technology",
    description: siteConfig.description,
    images: [ogImage.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/brand/sportbridge-favicon.png", type: "image/png" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: [{ url: "/brand/sportbridge-apple-touch.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: PRODUCTION_ORIGIN,
    description: siteConfig.description,
    logo: `${PRODUCTION_ORIGIN}/brand/sportbridge-header.png`,
    areaServed: [
      { "@type": "City", name: "Melbourne" },
      { "@type": "City", name: "Hyderabad" },
      { "@type": "City", name: "Chennai" },
    ],
    contactPoint: contacts.map((person) => ({
      "@type": "ContactPoint",
      contactType: person.role,
      name: person.name,
      email: person.email,
      telephone: person.phone,
      areaServed: person.location,
    })),
  };

  return (
    <html lang="en-AU">
      <body className={`${figtree.variable} ${dmSans.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <div className="site-shell flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
