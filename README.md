# ReNu Roof West Texas: Website

This is the marketing website for **ReNu Roof West Texas**, which offers roof protection and rejuvenation as a **Certified GoNano Contractor** in Midland and the Permian Basin.

*Don't replace your roof. ReNu it.*

This repository is the **approved design source**, meant to be cloned into GoHighLevel (domain: renuroofwesttx.com).

- 👉 **Building in GoHighLevel?** Read [`GHL-MASTER-PROMPT.md`](./GHL-MASTER-PROMPT.md) and [`GHL-IMAGE-GUIDE.md`](./GHL-IMAGE-GUIDE.md).

## Stack

- React 19 + Vite + TypeScript
- Tailwind CSS v4 (design tokens live in `src/index.css`)
- `motion` for animations, `lucide-react` for icons, `react-router-dom` for routing

## Run locally

```bash
npm install
npm run dev
```

## Structure

```
public/images/        All 31 site images (licensed stock, ReNu logo, official GoNano logos)
src/
  index.css           "Lone Star" design system: navy + white + Texas red only,
                      Big Shoulders Display + DM Sans, flag-stripe divider, star pattern
  data/
    site.ts           Business info (public-safe only), offers, GoNano benefits, promises,
                      process, West Texas threats, candidate check, service areas, FAQ, nav
    services.ts       2 service pages: Roof Protection & Rejuvenation, Free Roof Inspection
    images.ts         Single source of truth: image key → filename
  components/         Navbar, Footer, Horizon (flag stripe), StarSeal, GoNanoBadge, PageHero, ServiceCard, LeadForm (multi-step),
                      NanoShield (animated SVG), BeforeAfter, RenewVsReplace, ThreatTabs,
                      HealthCheck, OffersGrid, AreaMap (radar), Marquee, FAQ, CTASection
  pages/              Home, Services, ServiceDetail, WestTexasRoofs, Offers, About,
                      ServiceArea, Contact, NotFound
```

## Pages

| Route | Page |
|---|---|
| `/` | Home |
| `/services` | Services hub |
| `/services/roof-rejuvenation` | Roof Protection & Rejuvenation |
| `/services/free-roof-inspection` | Free Roof Inspection |
| `/west-texas-roofs` | West Texas roof guide |
| `/offers` | $500 off, free inspection, financing |
| `/about` | About |
| `/service-area` | 50-mile radius around Midland, with a radar map |
| `/contact` | Contact and inspection form |

## Brand

| Token | Value |
|---|---|
| Navy | `#0B1C2F` |
| Navy deep | `#06111E` |
| Texas red | `#B31B23` (bright `#E0343E` on dark) |
| Flag white | `#F6F4F0` |
| Headings | Big Shoulders Display 800–900, uppercase |
| Body | DM Sans |

## Content rules

- The site shows only this public info: business name, owner name, phone, the sales email, hours and service area.
- Never show a street address, the EIN or the owner's personal email.
- Product claims stay hedged ("designed to", "may help"). Do not add warranties, lifespan numbers or prices unless the client provides them.
- ReNu Roof is shown as a **Certified GoNano Contractor** with the official GoNano logo. Remove the badge if the certification ever lapses.
- Hours: Monday – Saturday, 9AM – 6PM (Central).
