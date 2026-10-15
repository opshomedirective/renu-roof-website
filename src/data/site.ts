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

export type Area = {
  name: string;
  slug: string;
  county: string;
  lat: number;
  lng: number;
  region: string;
  /** One unique, factual line about the town (used on its SEO page). */
  note: string;
};

const slugify = (n: string) => n.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const A = (name: string, county: string, lat: number, lng: number, region: string, note: string): Area => ({ name, slug: slugify(name), county, lat, lng, region, note });

export const AREAS: Area[] = [
  A("Midland", "Midland County", 31.9973, -102.0779, "Midland County", "Our home base — the Tall City and the heart of the Permian Basin."),
  A("Greenwood", "Midland County", 31.9013, -101.9238, "Midland County", "A rural community just east of Midland, with many homes on acreage."),
  A("Odessa", "Ector County", 31.8457, -102.3676, "Odessa & Ector County", "The Ector County seat and Midland's neighbor to the west — and our next area of expansion."),
  A("Gardendale", "Ector County", 32.0204, -102.3626, "Odessa & Ector County", "An unincorporated community north of Odessa with many homes on larger lots."),
  A("West Odessa", "Ector County", 31.8421, -102.4988, "Odessa & Ector County", "The unincorporated area west of Odessa, with many homes on larger lots."),
  A("Goldsmith", "Ector County", 31.9821, -102.6168, "Odessa & Ector County", "A small Ector County town northwest of Odessa."),
  A("Penwell", "Ector County", 31.7299, -102.588, "Odessa & Ector County", "A small community west of Odessa along I-20."),
  A("Stanton", "Martin County", 32.1293, -101.7882, "Martin, Andrews & Dawson", "The Martin County seat, just east of Midland along I-20."),
  A("Tarzan", "Martin County", 32.3087, -101.9629, "Martin, Andrews & Dawson", "A rural Martin County community north of Midland."),
  A("Andrews", "Andrews County", 32.3187, -102.5457, "Martin, Andrews & Dawson", "The Andrews County seat, northwest of Midland."),
  A("Ackerly", "Dawson County", 32.5276, -101.7165, "Martin, Andrews & Dawson", "A small town on the Dawson–Martin county line."),
  A("Lamesa", "Dawson County", 32.7376, -101.9507, "Martin, Andrews & Dawson", "The Dawson County seat, north of Midland on US-87."),
  A("Big Spring", "Howard County", 32.2504, -101.4787, "Big Spring & South", "The Howard County seat, east of Midland along I-20."),
  A("Forsan", "Howard County", 32.1101, -101.3654, "Big Spring & South", "A small Howard County town south of Big Spring."),
  A("Knott", "Howard County", 32.4157, -101.6348, "Big Spring & South", "A rural Howard County community northwest of Big Spring."),
  A("Garden City", "Glasscock County", 31.864, -101.481, "Big Spring & South", "The Glasscock County seat, southeast of Midland."),
  A("Crane", "Crane County", 31.3974, -102.3501, "Big Spring & South", "The Crane County seat, south of Odessa."),
];

export const getArea = (slug: string) => AREAS.find((a) => a.slug === slug);
export const areaPath = (a: Pick<Area, "slug">) => `/service-area/${a.slug}`;

const toRad = (d: number) => (d * Math.PI) / 180;
/** Straight-line miles between two points. */
export function milesBetween(a: { lat: number; lng: number }, b: { lat: number; lng: number }) {
  const R = 3958.8;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}
/** Compass direction from a to b (e.g. "northwest"). */
export function directionFrom(a: { lat: number; lng: number }, b: { lat: number; lng: number }) {
  const y = b.lat - a.lat;
  const x = (b.lng - a.lng) * Math.cos(toRad(a.lat));
  const deg = (Math.atan2(x, y) * 180) / Math.PI;
  const dirs = ["north", "northeast", "east", "southeast", "south", "southwest", "west", "northwest"];
  return dirs[Math.round(((deg + 360) % 360) / 45) % 8];
}
export const nearestAreas = (a: Area, n = 4) =>
  AREAS.filter((x) => x.slug !== a.slug)
    .map((x) => ({ x, d: milesBetween(a, x) }))
    .sort((p, q) => p.d - q.d)
    .slice(0, n)
    .map((p) => p.x);

export const REGIONS = [
  { name: "Midland County", body: "Home base. Midland and Greenwood — usually the fastest inspections." },
  { name: "Odessa & Ector County", body: "Odessa, Gardendale, West Odessa, Goldsmith and Penwell. We're actively expanding into Odessa." },
  { name: "Martin, Andrews & Dawson", body: "Stanton, Tarzan, Andrews, Ackerly and Lamesa." },
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
