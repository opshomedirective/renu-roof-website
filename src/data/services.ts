import type { ImgKey } from "./images";

export type Service = {
  slug: string;
  title: string;
  icon: string;
  short: string;
  tagline: string;
  hero: ImgKey;
  images: [ImgKey, ImgKey];
  badges: [string, string, string];
  headline: string;
  intro: string[];
  signsTitle: string;
  signs: string[];
  includesTitle: string;
  includes: string[];
  faqs: { q: string; a: string }[];
  related: string[];
};

// ReNu Roof West Texas offers roof PROTECTION & REJUVENATION (GoNano) plus a
// free candidate inspection. Do NOT add replacement, repair, storm-claim or
// other services unless the client confirms he offers them.
export const SERVICES: Service[] = [
  {
    slug: "roof-rejuvenation",
    title: "Roof Protection & Rejuvenation",
    icon: "Sparkles",
    short: "A spray-applied GoNano treatment designed to help restore aging shingles, hold granules in place and repel water — for far less than a new roof.",
    tagline: "Roof protection and rejuvenation for aging asphalt shingle roofs in Midland, Odessa and West Texas — featuring GoNano technology. $500 off for a limited time.",
    hero: "ranchHip",
    images: ["shinglePlane", "waterBeading"],
    badges: ["Certified GoNano Contractor", "$500 Off + Financing", "Free Candidate Inspection"],
    headline: "Before you replace your roof, see if you can renew it.",
    intro: [
      "Out here, roofs don't get to age gracefully. High-desert sun, long hot summers, blowing dust and spring hail dry asphalt shingles out and strip away the granules that protect them. They fade, turn brittle and start shedding — and that's usually when someone says you need a whole new roof.",
      "ReNu roof protection and rejuvenation features GoNano technology: a nano-scale, spray-applied treatment designed to soak into aging shingles to help restore flexibility, lock down granules and repel water. When your roof is a good candidate, it may extend its life and save you thousands compared to a full replacement — with no tear-off and no dumpster in the driveway.",
    ],
    signsTitle: "Signs your roof may be a good candidate",
    signs: [
      "Asphalt shingles that look faded, dull or sun-bleached",
      "Granules collecting in the gutters and downspouts",
      "Shingles that feel stiff or brittle but are still in place",
      "Your roof is aging and someone mentioned replacement",
      "No active leaks or missing shingles",
      "You want more years out of your roof before replacing it",
    ],
    includesTitle: "What your treatment includes",
    includes: [
      "Free owner-led inspection",
      "Candidate check with photos",
      "Clear price with $500 off applied",
      "Financing options available",
      "Protection for landscaping, siding & gutters",
      "Roof surface cleared of loose debris",
      "Spray-applied GoNano treatment",
      "Final walkthrough with you",
    ],
    faqs: [
      { q: "How does the treatment work?", a: "It's sprayed across your shingles and is designed to penetrate at a nano scale — helping restore flexibility the asphalt has lost, holding granules in place and making water bead up and roll off." },
      { q: "Is it right for every roof?", a: "No. It's for asphalt shingle roofs that are aging but still intact. Roofs with active leaks, missing shingles, soft decking or severe hail damage aren't candidates — and we'll tell you that honestly." },
      { q: "Will my roof look different afterward?", a: "Many homeowners notice their shingles look richer and more even afterward, but the real goal is protecting the roof." },
      { q: "How long does it last?", a: "It depends on your roof's age and condition. We'll explain what you can realistically expect for your roof during the inspection." },
      { q: "How much does it cost?", a: "Every roof is different, so we price it after your free inspection — with $500 off for a limited time and financing available." },
    ],
    related: ["free-roof-inspection"],
  },
  {
    slug: "free-roof-inspection",
    title: "Free Roof Inspection",
    icon: "ScanSearch",
    short: "An owner-led inspection with photos to find out if your roof can be renewed — free, with no pressure and no obligation.",
    tagline: "Free roof inspections in Midland, Odessa and West Texas — find out if your roof can be renewed before you replace it.",
    hero: "inspectors",
    images: ["darkDormer", "hailSize"],
    badges: ["100% Free", "Done by the Owner", "In-Person or by Phone"],
    headline: "Find out where your roof really stands.",
    intro: [
      "Before you spend thousands on a new roof, get a straight answer about the one you have. A free inspection tells you whether your shingles are a good candidate for rejuvenation — or whether they're past the point where it can help.",
      "Kenneth Thompson, the owner, inspects every roof himself. He checks the shingles for sun damage, granule loss, cracking and hail hits, looks for leaks and soft spots, photographs what he finds and walks you through it in plain English. Prefer to start with a call? Phone appointments are available too.",
    ],
    signsTitle: "Good times to get an inspection",
    signs: [
      "Right after a hail storm",
      "Someone told you it's time to replace your roof",
      "Your shingles look faded or sun-bleached",
      "You're finding granules in the gutters",
      "Before buying or selling a home",
      "Your roof is 10+ years old",
    ],
    includesTitle: "What we check",
    includes: [
      "Overall shingle condition",
      "Sun damage, fading and brittleness",
      "Granule loss",
      "Hail impacts",
      "Cracking, curling or missing shingles",
      "Signs of leaks or soft decking",
      "Photos you can keep",
      "A clear answer: candidate or not",
    ],
    faqs: [
      { q: "Is the inspection really free?", a: "Yes — free and with no obligation." },
      { q: "What if my roof isn't a candidate?", a: "Then we'll tell you, show you the photos and explain why. We won't sell you a treatment that won't help your roof." },
      { q: "Can we do it over the phone?", a: "Phone appointments are available to talk through what you're seeing. To confirm your roof is a candidate, we'll still need to see it in person." },
      { q: "How long does it take?", a: "Most inspections take under an hour, depending on the size and pitch of the roof." },
    ],
    related: ["roof-rejuvenation"],
  },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);
