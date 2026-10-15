# Master Prompt for the GoHighLevel AI Builder

Copy everything inside the box below and paste it into the GoHighLevel AI builder.

---

```text
You are rebuilding a finished, approved website inside GoHighLevel.
Do NOT redesign it. CLONE it, page by page and section by section.

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
/service-area
/contact
404 page

Home sections, in order:
Hero slideshow ("Don't replace your roof. ReNu it." + floating $500 OFF
card) → 4 trust cards → Services (2 cards + navy "$500 OFF" card) →
GoNano tech section (navy) with the NanoShield animation + 4 benefit
cards → "What is roof rejuvenation?" + Before/After slider → "Renew vs.
replace" (comparison table / candidate-check tabs) → West Texas threat
tabs → Offers (3 cards) → "Local, honest — and owner-inspected" (navy)
→ 4-step process → 60-second candidate check → pumpjack band + town
marquee → service-area radar map (navy) → FAQ → lead form section.

Both service pages share ONE template (src/pages/ServiceDetail.tsx):
Hero (photo, title, tagline, 2 buttons, 3 badges, horizon divider) →
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

Mobile: a hamburger opens a full-screen cream menu (pages + navy
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
□ The header is white and the logo is readable on every page.
□ Only navy, white and Texas red are used. No orange or gold anywhere.
□ The Star Seal and the Certified GoNano Contractor badge are visible.
□ The Home hero slideshow works and the $500 card shows.
□ NanoShield, Before/After, Renew vs. Replace, threat tabs, candidate
  check and radar map all work.
□ No street address, EIN or personal email anywhere.
□ No invented warranties, lifespans, prices, reviews or services.
□ All CTAs open the GHL form/calendar, and all phone links work on mobile.
□ At 375px wide: no horizontal scroll, the sticky bottom bar shows, and
  the menu works.
```
