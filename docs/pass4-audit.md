## Pass 4 — Route & Asset Audit Report

### Routes confirmed
| Route | Status |
|---|---|
| `/` | OK |
| `/about` | OK |
| `/services` | OK |
| `/network` | OK |
| `/opportunities` | OK |
| `/contact` | OK |
| `/api/contact` | OK (logged-only delivery fallback) |

### Link repairs
| Source | Label / context | Old href | New href | Status |
|---|---|---|---|---|
| `NetworkCollaborations` / `PartnerCard` | CFC Cricket Academy | `/network` (self/dead click feel) | _(no link)_ | Fixed — card no longer pretends to navigate |
| `data.ts` partners | Topline logo | `/partners/images/topline.svg` (JPEG mislabeled as SVG) | `/logos/partners/topline.jpg` | Fixed |
| `data.ts` partners | F16 logo | `/partners/images/F16.svg` (JPEG mislabeled as SVG) | `/logos/partners/f16.jpg` | Fixed |
| `data.ts` partners | CFC logo | `/partners/images/cfc.svg` (JPEG mislabeled as SVG) | `/logos/partners/cfc.jpg` | Fixed |
| `HomeHero` | Hero visual | `/partners/images/topline-academy.jpg` | `/images/hero/network-collage.jpg` | Fixed |
| `Logo` / layout icon | Brand assets | `/brand/...` | `/logos/sportbridge/...` | Migrated |
| Nav / CTAs | Home, About, Services, Network, Opportunities, Contact | Valid routes | unchanged | OK |

### Verified working CTAs
- Hero → `/services`, `/contact`
- What We Do → `/services#...` (ids exist on Services page)
- Featured Pathways → `/services#...`, `/opportunities`
- Network section → `/network` + partner external URLs
- Final CTA → `/contact`, `/network`
- About → `/services`, `/contact`
- Opportunities Enquire → `/contact`
- Services briefing → `/contact`
- Header / Footer nav → all required routes

### External links
| Organisation | URL | Action |
|---|---|---|
| Topline Cricket | `https://toplinecricket.com.au/` | Kept (`target=_blank`, `rel=noopener noreferrer`) |
| F16 Sports | `https://www.f16sports.com/` | Kept |
| CFC Cricket Academy | unknown / unverified | No outbound link |

### Root cause of image failures
Partner “SVG” files supplied under `public/partners/images/*.svg` were actually JPEG binaries. Browsers / `next/image` failed to render them. Renamed and relocated as `.jpg` under `/logos/partners/`.

### New asset layout
```
public/logos/sportbridge/
public/logos/partners/
public/images/hero/
public/images/partners/
public/images/services/
public/images/placeholder-logo.svg
```
