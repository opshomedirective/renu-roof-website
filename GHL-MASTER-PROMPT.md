# Master Prompt for the GoHighLevel AI Builder

Copy everything inside the box below and paste it into the GoHighLevel AI builder.

---

```text
You are rebuilding a finished, approved website inside GoHighLevel.
Do NOT redesign it. CLONE it, page by page and section by section.

⚠️ CRITICAL — EVERYTHING MUST BE HOSTED IN GHL:
The GitHub repository below is TEMPORARY and WILL BE DELETED after this
build. The finished GHL site must not depend on it in any way.
  • Download EVERY image, logo, favicon and graphic used on the site
    and upload it to the GHL Media Library. Use only GHL Media Library URLs.
  • NEVER hotlink or reference github.com, raw.githubusercontent.com,
    images.unsplash.com or any other external file URL.
  • Rebuild every SVG illustration and animation (NanoShield, Star Seal,
    flag stripe, radar map, etc.) as inline code inside GHL custom
    code/HTML elements. Copy the SVG markup into the page; do not link to
    a file in the repo.
  • Google Fonts (Big Shoulders Display, DM Sans) may load from Google.
  • Before you finish, check that no URL on any page contains "github"
    or "unsplash".

SOURCE REPOSITORY (public):
https://github.com/opshomedirective/renu-roof-website
Domain: renuroofwesttx.com

══════════════════════════════════════════════════════════════════
1. STUDY THE PROJECT FIRST
══════════════════════════════════════════════════════════════════
Read the whole repository before building anything:
  1) README.md
  2) GHL-IMAGE-GUIDE.md   ← which image goes in every section
  3) src/index.css        ← the full design system
  4) src/data/site.ts     ← business info, offers, GoNano benefits,
                            promises, process, West Texas threats,
                            candidate-check questions, service areas, FAQ
  5) src/data/services.ts ← every word of the 2 service pages
  6) src/pages/*.tsx      ← every page, section by section, in order
  7) src/components/*.tsx ← header, footer, cards, NanoShield, slider,
                            comparison, threat tabs, form, map

Use the text WORD FOR WORD. Do not rewrite, shorten or add copy.

WHAT RENU ROOF SELLS:
ROOF PROTECTION & REJUVENATION for aging asphalt shingles, featuring
GoNano technology, plus a FREE ROOF INSPECTION. Core message:
"Don't replace your roof. ReNu it." ReNu Roof West Texas is a Certified
GoNano Contractor. Keep every product claim hedged exactly as written ("designed to",
"may help", "may extend"). Do NOT add roof replacement, repairs,
insurance-claim help or any other service.

══════════════════════════════════════════════════════════════════
2. PAGES (same URLs)
══════════════════════════════════════════════════════════════════
/                                   Home
/services                           Services hub
/services/roof-rejuvenation         Roof Protection & Rejuvenation (flagship)
/services/free-roof-inspection      Free Roof Inspection
/west-texas-roofs                   West Texas roof guide (sun, hail, wind, swings)
/offers                             $500 off + free inspection + financing
/about
/service-area                       Service area hub (radar map + all towns)
/service-area/<town>                ONE SEO PAGE PER TOWN (17 pages, see below)
/contact
404 page

SERVICE-AREA TOWN PAGES (essential for local SEO; build ALL of them):
/service-area/midland                Midland, TX (Midland County)
/service-area/greenwood              Greenwood, TX (Midland County)
/service-area/odessa                 Odessa, TX (Ector County)
/service-area/gardendale             Gardendale, TX (Ector County)
/service-area/west-odessa            West Odessa, TX (Ector County)
/service-area/goldsmith              Goldsmith, TX (Ector County)
/service-area/penwell                Penwell, TX (Ector County)
/service-area/stanton                Stanton, TX (Martin County)
/service-area/tarzan                 Tarzan, TX (Martin County)
/service-area/andrews                Andrews, TX (Andrews County)
/service-area/ackerly                Ackerly, TX (Dawson County)
/service-area/lamesa                 Lamesa, TX (Dawson County)
/service-area/big-spring             Big Spring, TX (Howard County)
/service-area/forsan                 Forsan, TX (Howard County)
/service-area/knott                  Knott, TX (Howard County)
/service-area/garden-city            Garden City, TX (Glasscock County)
/service-area/crane                  Crane, TX (Crane County)

Every town page uses ONE template (src/pages/AreaDetail.tsx) and the data
in src/data/site.ts → AREAS (name, county, coordinates, local note):
  • Its own <title>: "Roof Rejuvenation in {Town}, TX | ReNu Roof West Texas"
  • Its own meta description (see useSEO in AreaDetail.tsx)
  • H1: "Roof rejuvenation in {Town}, TX."
  • Hero (photo by region, see GHL-IMAGE-GUIDE.md) + eyebrow "Service
    area · {County}" + the town's unique note + 2 buttons
  • Local intro with the town name, distance and direction from Midland
    (e.g. "about 20 miles southwest of Midland"), the GoNano badge, and a
    "Quick facts" card (County, distance, hours, offers) with links to
    the 4 NEAREST towns' pages
  • Services cards → West Texas threat tabs → Offers → radar map with
    THIS town highlighted → localized FAQ (4 questions using the town
    name) → lead form → CTA "Don't replace your {Town} roof. ReNu it."
  Use these exact values on each page (distance from Midland, the 4
  nearest towns to link, and the unique note):
  Midland (Midland County) — Home base. Nearby: Greenwood, Gardendale, Stanton, Odessa.
    Note: Our home base — the Tall City and the heart of the Permian Basin.
  Greenwood (Midland County) — about 11 miles southeast of Midland. Nearby: Midland, Stanton, Garden City, Odessa.
    Note: A rural community just east of Midland, with many homes on acreage.
  Odessa (Ector County) — about 20 miles southwest of Midland. Nearby: West Odessa, Gardendale, Penwell, Goldsmith.
    Note: The Ector County seat and Midland's neighbor to the west — and our next area of expansion.
  Gardendale (Ector County) — about 17 miles west of Midland. Nearby: Odessa, West Odessa, Goldsmith, Midland.
    Note: An unincorporated community north of Odessa with many homes on larger lots.
  West Odessa (Ector County) — about 27 miles southwest of Midland. Nearby: Odessa, Penwell, Goldsmith, Gardendale.
    Note: The unincorporated area west of Odessa, with many homes on larger lots.
  Goldsmith (Ector County) — about 32 miles west of Midland. Nearby: West Odessa, Gardendale, Odessa, Penwell.
    Note: A small Ector County town northwest of Odessa.
  Penwell (Ector County) — about 35 miles southwest of Midland. Nearby: West Odessa, Odessa, Goldsmith, Gardendale.
    Note: A small community west of Odessa along I-20.
  Stanton (Martin County) — about 19 miles northeast of Midland. Nearby: Tarzan, Greenwood, Midland, Big Spring.
    Note: The Martin County seat, just east of Midland along I-20.
  Tarzan (Martin County) — about 23 miles north of Midland. Nearby: Stanton, Knott, Ackerly, Midland.
    Note: A rural Martin County community north of Midland.
  Andrews (Andrews County) — about 35 miles northwest of Midland. Nearby: Gardendale, Goldsmith, West Odessa, Tarzan.
    Note: The Andrews County seat, northwest of Midland.
  Ackerly (Dawson County) — about 42 miles northeast of Midland. Nearby: Knott, Lamesa, Tarzan, Big Spring.
    Note: A small town on the Dawson–Martin county line.
  Lamesa (Dawson County) — about 52 miles north of Midland. Nearby: Ackerly, Knott, Tarzan, Stanton.
    Note: The Dawson County seat, north of Midland on US-87.
  Big Spring (Howard County) — about 39 miles northeast of Midland. Nearby: Forsan, Knott, Stanton, Ackerly.
    Note: The Howard County seat, east of Midland along I-20.
  Forsan (Howard County) — about 42 miles east of Midland. Nearby: Big Spring, Garden City, Stanton, Knott.
    Note: A small Howard County town south of Big Spring.
  Knott (Howard County) — about 39 miles northeast of Midland. Nearby: Ackerly, Big Spring, Tarzan, Stanton.
    Note: A rural Howard County community northwest of Big Spring.
  Garden City (Glasscock County) — about 36 miles east of Midland. Nearby: Forsan, Stanton, Greenwood, Big Spring.
    Note: The Glasscock County seat, southeast of Midland.
  Crane (Crane County) — about 44 miles south of Midland. Nearby: Penwell, Odessa, West Odessa, Greenwood.
    Note: The Crane County seat, south of Odessa.

INTERNAL LINKS TO THE TOWN PAGES (all clickable):
  • /service-area → every town card links to its page
  • Radar map → every town dot is a link to its page (Midland = center)
  • Footer "Serving" → every town name links to its page
  • Town marquee → every town name links to its page

Home sections, in order:
Hero slideshow ("DON'T REPLACE YOUR ROOF. ReNu it." + rotating $500 OFF
Star Seal + Certified GoNano badge) → 4 trust cards → Services (2 cards + navy "$500 OFF" card) →
GoNano tech section (navy) with the NanoShield animation + 4 benefit
cards → "What is roof rejuvenation?" + Before/After slider → "Renew vs.
replace" (comparison table / candidate-check tabs) → West Texas threat
tabs → Offers (3 cards) → "Local, honest — and owner-inspected" (navy)
→ 4-step process → 60-second candidate check → pumpjack band + town
marquee → service-area radar map (navy) → FAQ → lead form section.

Both service pages share ONE template (src/pages/ServiceDetail.tsx):
Hero (photo, title, tagline, 2 buttons, 3 badges, flag-stripe divider) →
Intro (headline, 2 paragraphs, 2 overlapping photos) → [rejuvenation
page only: NanoShield section] → "Know the signs" grid of 6 cards →
"What's included" checklist + 4-step timeline + sticky multi-step form →
town marquee → FAQ → next-step card → CTA card.

══════════════════════════════════════════════════════════════════
3. DESIGN SYSTEM "LONE STAR" (src/index.css) — keep it identical
══════════════════════════════════════════════════════════════════
Palette: the Texas flag, sampled from the logo. NAVY dominant, WHITE,
and TEXAS RED as the ONLY accent. Do NOT use orange, gold or other colors.
  Navy (brand, dominant)        #0B1C2F
  Navy deep (hero, footer)      #06111E
  Navy card                     #12263D   (lines #22384F)
  Texas red (brand accent)      #B31B23
  Bright red (on dark only)     #E0343E
  Flag white (page background)  #F6F4F0
  Light borders                 #EBE7E0 / #D6D0C6
  Muted text on light           #56606E
  Muted text on dark            #9AA9BB

Fonts (Google Fonts):
  "Big Shoulders Display" 800–900, UPPERCASE, upright (not italic) →
      every heading. It is heavy American-signage type. Exception: keep
      the brand word "ReNu" in its own mixed case ("ReNu it.").
  "DM Sans" 400–700 → body text, buttons, and the small wide-tracked
      eyebrow labels (uppercase, letter-spacing .32em).

Signature elements:
  • FLAG STRIPE divider at the bottom of every hero
    (src/components/Horizon.tsx): a small navy block with a white ★ on
    the left, then a full-width WHITE band stacked over a RED band.
  • Home hero: a thin vertical white/red band on the left edge.
  • Eyebrow labels start with a small navy square holding a white ★,
    with a red right edge (red square + white edge on dark sections).
  • STAR SEAL (src/components/StarSeal.tsx): a rotating navy medallion
    with ring text "FREE INSPECTION ★ FINANCING AVAILABLE ★ FEATURING
    GONANO ★". Its red center reads "★ $500 OFF ROOF REJUVENATION".
  • CERTIFIED GONANO CONTRACTOR badge (src/components/GoNanoBadge.tsx):
    the official GoNano logo + a divider + check icon + "CERTIFIED /
    GONANO CONTRACTOR". Use gonano-logo-white.png on navy and
    gonano-logo.png on light. It appears in the Home hero, the GoNano
    tech section, the Roof Rejuvenation page, About and the footer.
  • A subtle repeating lone-star pattern over navy sections, and a fine
    grid texture on light sections.
  • Buttons have square-ish corners (6px). Primary is solid Texas red
    with an inset shadow; there are also navy, outline and white-outline
    "glass" variants. Cards are white with a 10px radius.
  • Accent words in headings are Texas red (bright red on navy).
  • The header is ALWAYS WHITE because the logo has navy/red lettering.
    In the footer the logo sits inside a light rounded box.

Interactive pieces — rebuild each with custom code/HTML in GHL if needed,
do NOT drop them:
  • HOME HERO: 4 background photos crossfading every 6.5s with a slow
    zoom, under a deep navy overlay. The headline is three huge lines
    "DON'T REPLACE / YOUR ROOF. / ReNu it." revealed line by line, with
    a red line drawing out after "ReNu it.". The Star Seal sits on the
    right, and the GoNano badge and three mini benefits sit under the
    buttons.
  • NANOSHIELD (NanoShield.tsx): an animated SVG cross-section of a
    shingle with the toggle "Untreated shingle / With ReNu + GoNano".
    Untreated: water soaks in, granules blow off, UV hits, cracks appear.
    Treated: a red/white nano layer, water beads and rolls off, granules
    stay, UV bounces. Keep the "Illustration — not to scale" note.
  • BEFORE/AFTER SLIDER (BeforeAfter.tsx): drag handle. Left is a photo,
    right is an SVG illustration. Keep the caption.
  • RENEW VS. REPLACE (RenewVsReplace.tsx): a toggle between a
    comparison table and a candidate check with two photo cards.
  • WEST TEXAS THREAT TABS (ThreatTabs.tsx): Sun / Hail / Wind / Swings.
  • CANDIDATE CHECK (HealthCheck.tsx): 4 questions → green/amber/red.
  • 4-STEP PROCESS with a navy/white/red line behind the circles.
  • SERVICE AREA RADAR MAP (AreaMap.tsx): a red dashed 50-mile circle
    around ZIP 79705, a rotating sweep, a pulsing star on Midland,
    N/S/E/W labels, and town dots from real coordinates (site.ts → AREAS).
  • Infinite town marquee with ★ separators; sections fade up on scroll.

══════════════════════════════════════════════════════════════════
4. HEADER, FOOTER, MOBILE (on every page)
══════════════════════════════════════════════════════════════════
Offer bar (solid Texas red): "$500 OFF roof rejuvenation · Free
inspections · Financing available" | right side: "Mon–Sat · 9AM – 6PM"
and "(432) 349-4299". Mobile shows the short version.

Header (solid white with a bottom border; gets a shadow and shrinks on scroll):
  • Logo renu-roof-logo.png on the left
  • Nav: Roof Rejuvenation · West Texas Roofs · Offers · About ·
    Service Area · Contact (active link: red text + red underline)
  • Red "Free Inspection" button

Mobile: a hamburger opens a full-screen light menu (pages + navy
"$500 OFF" card + call button), plus a sticky bottom bar that is always
visible with "Call now" (tel:+14323494299) and "Free inspection".

Footer (navy with star pattern): star rule, logo in a light box, short
description, Certified GoNano Contractor badge, "Book a free inspection" button, Services, Serving (towns), Company
links, Contact (phone, sales email, hours, service area), and a giant
faint "ReNu ROOF" wordmark.

══════════════════════════════════════════════════════════════════
5. IMAGES
══════════════════════════════════════════════════════════════════
Every image is already uploaded to the GHL Media Library with the EXACT
same filename as in /public/images in the repo. Follow
GHL-IMAGE-GUIDE.md; it lists the file for every page and section. Find
each file by name in the Media Library and use its GHL URL. Do not use
GHL stock photos, AI-generated images or placeholders.

GoNano: the official GoNano logo is in the Media Library as
gonano-logo.png (dark text, for light backgrounds) and
gonano-logo-white.png (for navy backgrounds). Use them ONLY inside the
"Certified GoNano Contractor" badge exactly where GHL-IMAGE-GUIDE.md
says. Do not recolor or distort the GoNano logo.

══════════════════════════════════════════════════════════════════
6. FORMS, CALENDAR & CRM
══════════════════════════════════════════════════════════════════
src/components/LeadForm.tsx is a design reference. Replace it with a
NATIVE GHL multi-step Form/Survey with the same questions in the same
order, styled to match (white card, solid red progress bar, option
tiles):
  Step 1 "What's going on with your roof?"
         Roof looks old or sun-faded / Granules in the gutters /
         Just had hail / Was told I need a new roof /
         Want to see if I can renew it / Just want an inspection
  Step 2 "Tell us about the property."
         Home I live in / Rental property / Home I'm buying or selling / Other
  Step 3 "How would you like to start?"
         Free on-site inspection / Phone appointment first
  Step 4 "When do you want it handled?"
         As soon as possible / Within 2 weeks / Within a month /
         Just planning ahead
  Step 5 "Where can we reach you?"  Full name, Phone, Email, Property
         address, Best time to call (Morning 9AM–12PM / Midday 12–3PM /
         Afternoon 3–6PM), checkbox "I'd like to hear about financing
         options", note "★ Your $500 off is applied to your
         rejuvenation quote."
  Button: "Request my free inspection"

Map every answer to custom contact fields so Kenneth sees them on the
contact record and on the appointment. Phone appointments are supported:
"Phone appointment first" should book a phone-call appointment type.
Tag leads that check the financing box. Every "Free inspection / Book /
Claim" button opens that form or the calendar. Every phone link uses
tel:+14323494299. Timezone: US/Central.

══════════════════════════════════════════════════════════════════
7. BUSINESS DATA (use exactly; do not add anything)
══════════════════════════════════════════════════════════════════
Business name: ReNu Roof West Texas
Owner / inspector: Kenneth Thompson
Phone: (432) 349-4299
Email (public): Sales@renuroofwesttx.com
Hours: Monday – Saturday, 9AM – 6PM (Central). Closed Sunday.
Service area: Midland, TX + a 50-mile radius around ZIP 79705
  (expanding into Odessa)
Technology: Certified GoNano Contractor (featuring GoNano technology)
Offers: $500 OFF roof rejuvenation · Free roof inspections ·
  Financing available

DO NOT publish anywhere: any street address, the EIN, or the owner's
personal email. Use ONLY the sales email above.
DO NOT add: warranties or warranty lengths, "adds X years" lifespan
claims, prices, a named financing provider, insurance-claim assistance,
reviews or star ratings, license numbers, years in business, or any claim
that is not already in the repository.

══════════════════════════════════════════════════════════════════
8. SEO
══════════════════════════════════════════════════════════════════
Use the page title and meta description from each page's useSEO({...})
call. Use one H1 per page, keep the H2/H3 hierarchy, give every image the
alt text from the code, and set the favicon to renu-roof-favicon.png.

══════════════════════════════════════════════════════════════════
9. QUALITY CHECK BEFORE YOU FINISH
══════════════════════════════════════════════════════════════════
□ Every page above exists, with the same section order, on desktop and mobile.
□ All 17 /service-area/<town> pages exist, each with its own title, meta
  description and H1, and every town link (hub cards, map dots, footer,
  marquee) opens the right page.
□ Every image and asset is served from the GHL Media Library. No URL
  contains "github" or "unsplash".
□ The header is white and the logo is readable on every page.
□ Only navy, white and Texas red are used. No orange or gold anywhere.
□ The Star Seal and the Certified GoNano Contractor badge are visible.
□ The Home hero slideshow works and the rotating $500 Star Seal shows.
□ NanoShield, Before/After, Renew vs. Replace, threat tabs, candidate
  check and radar map all work.
□ No street address, EIN or personal email anywhere.
□ No invented warranties, lifespans, prices, reviews or services.
□ All CTAs open the GHL form/calendar, and all phone links work on mobile.
□ At 375px wide: no horizontal scroll, the sticky bottom bar shows, and
  the menu works.
```
