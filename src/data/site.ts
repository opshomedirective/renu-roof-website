// Public business information only — from the client's onboarding form.
// Deliberately NOT published: EIN, street address, the owner's personal
// e-mail. The only e-mail shown is the business sales address.
//
// Claims policy: ReNu Roof sells roof PROTECTION & REJUVENATION featuring
// GoNano technology. Keep product claims hedged ("designed to", "may help").
// No lifespan numbers, warranties, prices or insurance-claim help unless the
// client provides them.
export const BUSINESS = {
  name: "ReNu Roof West Texas",
  short: "ReNu Roof",
  owner: "Kenneth Thompson",
  phoneDisplay: "(432) 349-4299",
  phoneTel: "+14323494299",
  email: "Sales@renuroofwesttx.com",
  region: "Midland & West Texas",
  hours: "Mon–Sat · 9AM – 6PM",
  hoursNote: "Central Time",
  tech: "GoNano",
  certification: "Certified GoNano Contractor",
  // Service area: 50-mile radius around ZIP 79705 (Midland, TX)
  serviceCenter: { lat: 32.03, lng: -102.09, radiusMiles: 50, zip: "79705" },
} as const;

export const OFFERS = [
  {
    tag: "Limited offer",
    value: "$500",
    unit: "OFF",
    title: "$500 off your roof rejuvenation",
    body: "Save $500 on a ReNu roof protection & rejuvenation treatment. Mention this offer when you book your free inspection.",
  },
  {
    tag: "Always",
    value: "FREE",
    unit: "",
    title: "Free roof inspection",
    body: "Kenneth inspects your roof personally and tells you straight whether it's a good candidate — no cost, no obligation.",
  },
  {
    tag: "Flexible",
    value: "$",
    unit: "PAY OVER TIME",
    title: "Financing available",
    body: "Protect your roof now and pay over time. Ask about financing options during your inspection.",
  },
] as const;

export const TECH_BENEFITS = [
  { title: "Helps lock in granules", body: "Granules are your shingles' sunscreen. The treatment is designed to help hold them in place against wind, hail and heat." },
  { title: "Repels water", body: "A hydrophobic, nano-scale treatment designed to make water bead up and roll off instead of soaking in." },
  { title: "Resists UV breakdown", body: "Designed to help shield asphalt from the intense West Texas sun that dries shingles out and turns them brittle." },
  { title: "Restores flexibility", body: "Designed to soak into aging shingles and help bring back the flexibility they lose over years of heat." },
] as const;

export const PROMISES = [
  { title: "Inspected by the owner", body: "Every inspection is done by Kenneth Thompson, the owner — so you get an honest answer from the person responsible for the work." },
  { title: "Renew before you replace", body: "If your shingles are aging but still intact, protecting and rejuvenating them may extend their life for far less than a new roof." },
  { title: "Honest candidate check", body: "Not every roof can be renewed. If yours can't, we'll tell you — with photos — instead of selling you something that won't help." },
  { title: "Built for West Texas", body: "Sun, wind, dust and hail age roofs fast out here. Our treatment and our advice are geared for Permian Basin conditions." },
  { title: "$500 off + financing", body: "Real savings on top of what you save by not replacing, with financing available to make it easy." },
  { title: "Local & easy to reach", body: "Midland-based and open Monday through Saturday, 9AM to 6PM. Call, text or book a phone appointment." },
] as const;

export const PROCESS = [
  { step: "01", title: "Book a free inspection", body: "Call or book online. Prefer to talk first? Phone appointments are available too." },
  { step: "02", title: "Candidate check", body: "Kenneth inspects your shingles, photographs what he finds, and tells you if your roof is a good candidate for rejuvenation." },
  { step: "03", title: "Clear quote", body: "A straightforward price with your $500 off applied — and financing options if you want them." },
  { step: "04", title: "Treatment & walkthrough", body: "The treatment is spray-applied across your shingles, then we walk the finished roof with you." },
] as const;

export const THREATS = [
  {
    key: "Sun",
    title: "Relentless sun & heat",
    body: "Long, hot summers and intense high-desert sun slowly bake the oils out of asphalt shingles. They fade, dry out and turn brittle years before their time.",
    tips: ["Faded or uneven shingle color", "Shingles that feel stiff or brittle", "Hot attic, high cooling bills"],
    img: "shinglesClose",
  },
  {
    key: "Hail",
    title: "Permian Basin hail",
    body: "Spring storms can drop hail across Midland and Odessa in minutes. Every hit knocks granules loose and leaves the asphalt underneath exposed to the sun.",
    tips: ["Granules in gutters after a storm", "Dark spots where granules are gone", "Get a free inspection after hail"],
    img: "hailGrass",
  },
  {
    key: "Wind",
    title: "Wind & blowing dust",
    body: "High winds and blowing dust sandblast your roof year-round, scouring the surface and loosening granules a little more with every storm.",
    tips: ["Granules collecting at downspouts", "Lifted or loose shingle edges", "Worn, smooth patches on the roof"],
    img: "dustStorm",
  },
  {
    key: "Swings",
    title: "Hot days, cool nights",
    body: "Desert temperatures swing hard between day and night. Shingles expand and contract over and over — and dry, brittle shingles are the first to crack.",
    tips: ["Small cracks in shingle surfaces", "Curling at the edges", "Brittle tabs that break when touched"],
    img: "farmlandSunset",
  },
] as const;

/** Higher score = roof in worse shape (less likely to be a candidate). */
export const HEALTH_CHECK = [
  { q: "How old is your roof?", options: [["Under 8 years", 0], ["8–15 years", 1], ["15–20 years", 2], ["20+ years / not sure", 3]] },
  { q: "Any leaks or ceiling stains?", options: [["None", 0], ["One small spot, once", 2], ["More than one", 4], ["Active leak right now", 5]] },
  { q: "What do the shingles look like?", options: [["Faded or dull", 0], ["Granules in the gutters", 1], ["Some curling or cracking", 2], ["Shingles missing", 4]] },
  { q: "Has it been through hail?", options: [["Not that I know of", 0], ["Small hail", 1], ["Big hail, no damage seen", 1], ["Visible hail damage", 3]] },
] as const;

export type Area = { name: string; lat: number; lng: number; region: string };

export const AREAS: Area[] = [
  { name: "Midland", lat: 31.9973, lng: -102.0779, region: "Midland County" },
  { name: "Greenwood", lat: 31.9013, lng: -101.9238, region: "Midland County" },
  { name: "Tarzan", lat: 32.3087, lng: -101.9629, region: "Midland County" },
  { name: "Odessa", lat: 31.8457, lng: -102.3676, region: "Odessa & Ector County" },
  { name: "Gardendale", lat: 32.0204, lng: -102.3626, region: "Odessa & Ector County" },
  { name: "West Odessa", lat: 31.8421, lng: -102.4988, region: "Odessa & Ector County" },
  { name: "Goldsmith", lat: 31.9821, lng: -102.6168, region: "Odessa & Ector County" },
  { name: "Penwell", lat: 31.7299, lng: -102.588, region: "Odessa & Ector County" },
  { name: "Stanton", lat: 32.1293, lng: -101.7882, region: "Martin, Andrews & Dawson" },
  { name: "Andrews", lat: 32.3187, lng: -102.5457, region: "Martin, Andrews & Dawson" },
  { name: "Ackerly", lat: 32.5276, lng: -101.7165, region: "Martin, Andrews & Dawson" },
  { name: "Lamesa", lat: 32.7376, lng: -101.9507, region: "Martin, Andrews & Dawson" },
  { name: "Big Spring", lat: 32.2504, lng: -101.4787, region: "Big Spring & South" },
  { name: "Forsan", lat: 32.1101, lng: -101.3654, region: "Big Spring & South" },
  { name: "Knott", lat: 32.4157, lng: -101.6348, region: "Big Spring & South" },
  { name: "Garden City", lat: 31.864, lng: -101.481, region: "Big Spring & South" },
  { name: "Crane", lat: 31.3974, lng: -102.3501, region: "Big Spring & South" },
];

export const REGIONS = [
  { name: "Midland County", body: "Home base. Midland, Greenwood and Tarzan — usually the fastest inspections." },
  { name: "Odessa & Ector County", body: "Odessa, Gardendale, West Odessa, Goldsmith and Penwell. We're actively expanding into Odessa." },
  { name: "Martin, Andrews & Dawson", body: "Stanton, Andrews, Ackerly and Lamesa." },
  { name: "Big Spring & South", body: "Big Spring, Forsan, Knott, Garden City and Crane." },
] as const;

export const HOME_FAQ = [
  { q: "What is roof rejuvenation?", a: "It's a spray-applied treatment for asphalt shingle roofs. West Texas sun, heat, wind and hail dry shingles out and strip their granules. Rejuvenation is designed to soak into the shingles to help restore flexibility, hold granules in place and repel water — so an aging roof may last longer." },
  { q: "What is GoNano?", a: "GoNano is the nanotechnology behind the treatment we use, and ReNu Roof West Texas is a certified GoNano contractor. It's designed to work at a microscopic level inside the shingle to help protect it from water, UV and granule loss." },
  { q: "Is my roof a candidate?", a: "The best candidates are asphalt shingle roofs that are aging but still intact — faded, dry or losing some granules, without active leaks or missing shingles. A free inspection tells you for sure." },
  { q: "Will it fix a leak or hail damage?", a: "No. Rejuvenation protects and renews aging shingles; it isn't a repair. If we find leaks, missing shingles or real hail damage, we'll show you and tell you honestly." },
  { q: "How much can I save?", a: "When your roof is a good candidate, rejuvenation costs far less than a full replacement — and right now you get $500 off. We'll give you a clear price after your free inspection." },
  { q: "Do you offer financing?", a: "Yes. Financing is available — ask about your options during the inspection." },
  { q: "Can I start with a phone call?", a: "Absolutely. Phone appointments are available. Tell us what you're seeing and we'll tell you whether an on-site inspection makes sense." },
  { q: "What areas do you serve?", a: "Midland and a 50-mile radius — including Odessa, Stanton, Andrews, Big Spring, Lamesa, Garden City and Crane. Open Monday through Saturday, 9AM to 6PM." },
] as const;

export const NAV = [
  { label: "Roof Rejuvenation", to: "/services/roof-rejuvenation" },
  { label: "West Texas Roofs", to: "/west-texas-roofs" },
  { label: "Offers", to: "/offers" },
  { label: "About", to: "/about" },
  { label: "Service Area", to: "/service-area" },
  { label: "Contact", to: "/contact" },
] as const;
