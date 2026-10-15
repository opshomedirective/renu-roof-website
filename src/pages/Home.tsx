import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, ArrowUpRight, BadgeDollarSign, Clock, MapPin, PhoneCall, ScanSearch, ShieldCheck, Phone, Sparkles, UserRound, Wallet } from "lucide-react";
import Reveal from "../components/Reveal";
import Horizon from "../components/Horizon";
import StarSeal from "../components/StarSeal";
import GoNanoBadge from "../components/GoNanoBadge";
import Marquee from "../components/Marquee";
import ServiceCard from "../components/ServiceCard";
import BeforeAfter from "../components/BeforeAfter";
import NanoShield from "../components/NanoShield";
import RenewVsReplace from "../components/RenewVsReplace";
import ThreatTabs from "../components/ThreatTabs";
import OffersGrid from "../components/OffersGrid";
import HealthCheck from "../components/HealthCheck";
import AreaMap from "../components/AreaMap";
import FAQ from "../components/FAQ";
import LeadForm from "../components/LeadForm";
import { BUSINESS, HOME_FAQ, PROCESS, PROMISES, REGIONS, TECH_BENEFITS } from "../data/site";
import { SERVICES } from "../data/services";
import { IMG } from "../data/images";
import { useSEO } from "../seo";

const SLIDES = [
  { src: IMG.ranchHip, alt: "Brick ranch home with an asphalt shingle roof" },
  { src: IMG.pumpjackSunset, alt: "Pumpjack silhouetted against a West Texas sunset" },
  { src: IMG.stoneRanch, alt: "Brick and stone ranch home with a shingle roof" },
  { src: IMG.ranchLandscaped, alt: "Brick home with a hip shingle roof" },
];

export default function Home() {
  useSEO({
    title: "ReNu Roof West Texas | Roof Rejuvenation in Midland, TX",
    description:
      "Roof protection and rejuvenation for aging asphalt shingles in Midland, Odessa and West Texas, featuring GoNano technology. Free inspections, $500 off and financing available. Call (432) 349-4299.",
  });

  return (
    <>
      <Hero />
      <TrustRow />
      <ServicesSection />
      <TechSection />
      <RenewSection />
      <CompareSection />
      <ThreatsSection />
      <OffersSection />
      <OwnerSection />
      <ProcessSection />
      <HealthSection />
      <LocalBand />
      <AreaSection />
      <FaqSection />
      <LeadSection />
    </>
  );
}

/* ───────────────────────────── HERO */
function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 180]);
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((s) => (s + 1) % SLIDES.length), 6500);
    return () => clearInterval(t);
  }, []);

  const lines = ["Don't replace", "your roof."];

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-navy-deep pt-44 pb-36 text-white">
      <motion.div style={{ y }} className="absolute inset-0">
        <AnimatePresence>
          <motion.img
            key={i}
            src={SLIDES[i].src}
            alt={SLIDES[i].alt}
            initial={{ opacity: 0, scale: 1.12 }}
            animate={{ opacity: 1, scale: 1.02 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 1.5 }, scale: { duration: 8, ease: "easeOut" } }}
            className="absolute inset-0 h-full w-full object-cover"
            fetchPriority="high"
          />
        </AnimatePresence>
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/80 to-navy-deep/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-transparent to-navy-deep/50" />
      <div className="dunes-dark absolute inset-0" />

      {/* Flag canton accent on the left edge */}
      <div aria-hidden className="absolute top-0 bottom-0 left-0 hidden w-2 flex-col lg:flex">
        <div className="flex-1 bg-white/90" />
        <div className="flex-1 bg-red" />
      </div>

      <div className="wrap relative grid items-center gap-12 lg:grid-cols-[1.45fr_1fr]">
        <div>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="eyebrow on-dark">
            Midland · Odessa · West Texas
          </motion.p>
          <h1 className="mt-6 text-[3.5rem] leading-[0.86] sm:text-8xl lg:text-[6.6rem] lg:whitespace-nowrap xl:text-[7.4rem]">
            {lines.map((w, k) => (
              <motion.span
                key={w}
                className="block"
                initial={{ opacity: 0, y: 50, clipPath: "inset(0 0 100% 0)" }}
                animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
                transition={{ delay: 0.2 + k * 0.14, duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
              >
                {w}
              </motion.span>
            ))}
            <motion.span
              className="mt-1 flex items-center gap-4 text-red-bright normal-case"
              initial={{ opacity: 0, y: 50, clipPath: "inset(0 0 100% 0)" }}
              animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
              transition={{ delay: 0.5, duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
            >
              ReNu it.
              <motion.span
                aria-hidden
                className="hidden h-[0.12em] flex-1 bg-gradient-to-r from-red-bright to-transparent sm:block"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                style={{ transformOrigin: "left" }}
                transition={{ delay: 1.1, duration: 1 }}
              />
            </motion.span>
          </h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85 }} className="mt-8 max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl">
            Roof protection and rejuvenation featuring {BUSINESS.tech} technology — designed to help aging shingles stand up to the West Texas sun, wind and hail, for
            far less than a new roof.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link to="/contact" className="btn btn-red">
              Book my free inspection <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={`tel:${BUSINESS.phoneTel}`} className="btn btn-glass">
              <Phone className="h-4 w-4" /> {BUSINESS.phoneDisplay}
            </a>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.15 }} className="mt-10">
            <GoNanoBadge dark />
          </motion.div>
          <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-white/80">
            {[
              { I: ScanSearch, t: "Free inspection" },
              { I: Wallet, t: "Financing available" },
              { I: Sparkles, t: "$500 off rejuvenation" },
            ].map(({ I, t }) => (
              <li key={t} className="flex items-center gap-2">
                <I className="h-4 w-4 text-red-bright" /> {t}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.8, rotate: -20 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ delay: 0.9, duration: 1.1, ease: [0.2, 0.8, 0.2, 1] }} className="hidden justify-self-end lg:block">
          <Link to="/offers" aria-label="See the $500 off offer" className="block transition hover:scale-[1.03]">
            <StarSeal className="w-[360px] drop-shadow-[0_40px_60px_rgba(0,0,0,.55)] xl:w-[400px]" />
          </Link>
        </motion.div>
      </div>

      <div className="absolute right-6 bottom-14 z-10 hidden gap-2 md:flex lg:right-10">
        {SLIDES.map((s, k) => (
          <button key={s.src} onClick={() => setI(k)} aria-label={`Show slide ${k + 1}`} className="h-1.5 w-10 overflow-hidden bg-white/25">
            {k === i && <motion.span layoutId="hero-dot" className="block h-full w-full bg-red-bright" />}
          </button>
        ))}
      </div>
      <Horizon />
    </section>
  );
}

/* ───────────────────────────── TRUST ROW */
function TrustRow() {
  const items = [
    { icon: BadgeDollarSign, k: "$500 off", v: "Roof rejuvenation" },
    { icon: ScanSearch, k: "Free inspections", v: "By the owner, no obligation" },
    { icon: Wallet, k: "Financing", v: "Available — just ask" },
    { icon: MapPin, k: "Midland + 50 mi", v: "Odessa & the Permian Basin" },
  ];
  return (
    <section className="relative bg-cream pt-4 pb-10">
      <div className="wrap grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: I, k, v }, n) => (
          <Reveal key={k} delay={n * 0.06} className="card flex items-center gap-4 p-5">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-red text-white">
              <I className="h-6 w-6" strokeWidth={1.75} />
            </span>
            <div>
              <p className="font-display text-lg font-extrabold text-navy">{k}</p>
              <p className="text-sm text-stone">{v}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ───────────────────────────── SERVICES */
function ServicesSection() {
  return (
    <section className="dunes relative bg-cream py-20 lg:py-28">
      <div className="wrap">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">What we do</p>
          <h2 className="mt-4 text-4xl text-navy sm:text-5xl">
            Protect the roof you have. <span className="sun">Keep your thousands.</span>
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.08}>
              <ServiceCard s={s} index={i} />
            </Reveal>
          ))}
          <Reveal delay={0.16}>
            <Link to="/offers" className="group flex h-full min-h-[320px] flex-col justify-between overflow-hidden rounded-2xl bg-navy p-7 text-white">
              <BadgeDollarSign className="h-10 w-10 text-amber" strokeWidth={1.5} />
              <div>
                <p className="font-display text-5xl font-black">
                  <span className="sun">$500 OFF</span>
                </p>
                <p className="mt-2 text-white/85">Roof rejuvenation — with financing available and a free inspection to start.</p>
                <span className="mt-5 inline-flex items-center gap-1.5 font-bold text-amber">
                  See the offer <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" />
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── TECH (GoNano) */
function TechSection() {
  return (
    <section className="dunes-dark relative overflow-hidden bg-navy py-24 text-white lg:py-32">
      <div aria-hidden className="absolute -top-40 right-0 h-[480px] w-[720px] rounded-full bg-red/15 blur-[140px]" />
      <div className="wrap relative">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-end">
          <Reveal>
            <p className="eyebrow on-dark">Featuring {BUSINESS.tech} technology</p>
            <h2 className="mt-4 text-4xl sm:text-5xl">
              Nano-scale protection. <span className="sun">Big-sky results.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <GoNanoBadge dark size="lg" className="mb-6" />
            <p className="text-lg leading-relaxed text-white/75">
              As a certified GoNano contractor, we apply a treatment that works at a microscopic level inside the shingle. It's designed to help hold the protective granules in place, repel water and resist the
              UV that bakes West Texas roofs — so an aging roof may keep doing its job for longer.
            </p>
          </Reveal>
        </div>
        <Reveal className="mt-14">
          <NanoShield />
        </Reveal>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TECH_BENEFITS.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.07} className="rounded-xl border border-white/10 bg-white/[0.04] p-6">
              <span className="font-display text-sm font-black text-amber">{String(i + 1).padStart(2, "0")}</span>
              <p className="font-display mt-2 text-xl font-extrabold">{b.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{b.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── RENEW SLIDER */
function RenewSection() {
  return (
    <section className="relative bg-cream py-20 lg:py-28">
      <div className="wrap grid items-center gap-12 lg:grid-cols-[1fr_1.25fr]">
        <Reveal>
          <p className="eyebrow">What is roof rejuvenation?</p>
          <h2 className="mt-4 text-4xl text-navy sm:text-5xl">
            Give sun-baked shingles <span className="sun">a second life.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-stone">
            Heat, UV, wind and hail slowly dry out the asphalt in your shingles and strip their granules. Rejuvenation is a spray-applied treatment designed to soak in and
            help restore what the West Texas weather took out — so a roof that's aging but still intact may keep protecting your home for longer.
          </p>
          <ul className="mt-8 space-y-3">
            {["May extend the life of your current roof", "Far less than a full replacement — plus $500 off", "No tear-off, no dumpster, no landfill waste", "Owner-led candidate check before anything else"].map((t) => (
              <li key={t} className="flex items-center gap-3 font-semibold text-navy">
                <ShieldCheck className="h-5 w-5 text-red" /> {t}
              </li>
            ))}
          </ul>
          <Link to="/services/roof-rejuvenation" className="btn btn-red mt-9">
            How rejuvenation works <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
        <Reveal delay={0.1}>
          <BeforeAfter />
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────────────── RENEW VS REPLACE */
function CompareSection() {
  return (
    <section className="dunes relative bg-sand py-20 lg:py-28">
      <div className="wrap">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow justify-center">Renew vs. replace</p>
          <h2 className="mt-4 text-4xl text-navy sm:text-5xl">
            Before spending thousands on a new roof, <span className="sun">find out if yours can be renewed.</span>
          </h2>
          <p className="mt-5 text-lg text-stone">Rejuvenation isn't for every roof — but when yours is a candidate, the difference is big.</p>
        </Reveal>
        <Reveal className="mt-12">
          <RenewVsReplace />
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────────────── THREATS */
function ThreatsSection() {
  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="wrap">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Built for West Texas</p>
          <h2 className="mt-4 text-4xl text-navy sm:text-5xl">What West Texas does to your roof.</h2>
          <p className="mt-5 text-lg text-stone">Sun, hail, wind and wild temperature swings — Permian Basin roofs take a beating every season.</p>
        </Reveal>
        <Reveal className="mt-12">
          <ThreatTabs />
        </Reveal>
        <Reveal className="mt-10">
          <Link to="/west-texas-roofs" className="btn btn-outline text-navy">
            West Texas roof guide <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────────────── OFFERS */
function OffersSection() {
  return (
    <section className="relative overflow-hidden bg-cream pb-20 lg:pb-28">
      <div className="wrap">
        <div className="horizon mb-16 text-lg">★</div>
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Offers & financing</p>
          <h2 className="mt-4 text-4xl text-navy sm:text-5xl">
            $500 off. <span className="sun">Free inspection. Financing.</span>
          </h2>
        </Reveal>
        <div className="mt-12">
          <OffersGrid />
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── OWNER + PROMISES */
function OwnerSection() {
  return (
    <section className="dunes-dark relative overflow-hidden bg-navy py-24 text-white lg:py-32">
      <div className="wrap relative grid items-center gap-14 lg:grid-cols-2">
        <Reveal className="relative">
          <div className="relative overflow-hidden rounded-2xl">
            <img src={IMG.inspectors} alt="Roof inspection in progress" className="aspect-[4/5] w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />
          </div>
          <div className="glass absolute right-4 -bottom-6 max-w-[260px] rounded-xl p-5 sm:-right-6">
            <p className="text-xs font-bold tracking-widest text-amber uppercase">Your inspector</p>
            <p className="font-display mt-1 text-2xl font-extrabold">{BUSINESS.owner}</p>
            <p className="text-sm text-mist">Owner, ReNu Roof West Texas</p>
          </div>
        </Reveal>
        <div>
          <Reveal>
            <p className="eyebrow on-dark">Why ReNu Roof</p>
            <h2 className="mt-4 text-4xl sm:text-5xl">
              Local, honest — <span className="sun">and owner-inspected.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/75">
              When you call ReNu Roof, the person who inspects your roof is the owner. No pushy sales pitch — just a straight answer about whether your roof can be
              renewed.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {PROMISES.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 0.06} className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
                <p className="font-display text-lg font-extrabold">{p.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-white/65">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── PROCESS */
function ProcessSection() {
  return (
    <section className="relative bg-cream py-20 lg:py-28">
      <div className="wrap">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow justify-center">How it works</p>
          <h2 className="mt-4 text-4xl text-navy sm:text-5xl">Four simple steps to a renewed roof.</h2>
        </Reveal>
        <div className="relative mt-16">
          <div aria-hidden className="absolute top-8 right-[12%] left-[12%] hidden h-[3px] rounded-full bg-[linear-gradient(90deg,#0b1c2f_0_33%,#d6d0c6_33%_66%,#b31b23_66%)] lg:block" />
          <ol className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.12} className="text-center">
                <span className="font-display mx-auto grid h-16 w-16 place-items-center rounded-full bg-navy text-xl font-black text-white ring-8 ring-cream">{p.step}</span>
                <h3 className="mt-6 text-xl text-navy">{p.title}</h3>
                <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-stone">{p.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── HEALTH CHECK */
function HealthSection() {
  return (
    <section className="dunes relative bg-sand py-20 lg:py-28">
      <div className="wrap grid items-center gap-12 lg:grid-cols-[1fr_1.3fr]">
        <Reveal>
          <p className="eyebrow">60-second candidate check</p>
          <h2 className="mt-4 text-4xl text-navy sm:text-5xl">
            Can your roof <span className="sun">be renewed?</span>
          </h2>
          <p className="mt-5 text-lg text-stone">Answer four quick questions to see if your roof sounds like a rejuvenation candidate. Then let us confirm it with a free inspection.</p>
          <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-navy">
            <PhoneCall className="h-5 w-5 text-red" /> Prefer to talk? Phone appointments are available.
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <HealthCheck />
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────────────── LOCAL BAND */
function LocalBand() {
  return (
    <section className="relative">
      <div className="relative h-[420px] overflow-hidden sm:h-[520px]">
        <img src={IMG.pumpjackField} alt="Pumpjack in a golden field in the Permian Basin" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
        <div className="wrap relative flex h-full flex-col justify-end pb-12 text-white">
          <Reveal>
            <p className="eyebrow on-dark">Local to the Permian Basin</p>
            <h2 className="mt-4 max-w-3xl text-4xl sm:text-6xl">Proudly renewing roofs across Midland & West Texas.</h2>
          </Reveal>
        </div>
      </div>
      <Marquee />
    </section>
  );
}

/* ───────────────────────────── AREA */
function AreaSection() {
  return (
    <section className="dunes-dark relative overflow-hidden bg-navy py-20 text-white lg:py-28">
      <div className="wrap grid items-center gap-14 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <Reveal>
            <p className="eyebrow on-dark">Service area</p>
            <h2 className="mt-4 text-4xl sm:text-5xl">50 miles around Midland.</h2>
            <p className="mt-5 text-lg text-white/75">From Midland to Odessa, Andrews, Big Spring, Lamesa and Crane — if you're in the Permian Basin, give us a call.</p>
          </Reveal>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {REGIONS.map((r, i) => (
              <Reveal key={r.name} delay={i * 0.06} className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
                <p className="font-display text-lg font-extrabold">{r.name}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-white/60">{r.body}</p>
              </Reveal>
            ))}
          </div>
          <Link to="/service-area" className="btn btn-red mt-10">
            See the full service area <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <Reveal delay={0.1}>
          <AreaMap />
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────────────── FAQ */
function FaqSection() {
  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.6fr]">
        <Reveal>
          <p className="eyebrow">FAQs</p>
          <h2 className="mt-4 text-4xl text-navy sm:text-5xl">Questions homeowners ask us.</h2>
          <p className="mt-5 text-stone">Still wondering if your roof can be renewed? Call — you'll talk to the owner.</p>
          <a href={`tel:${BUSINESS.phoneTel}`} className="font-display mt-6 inline-block text-3xl font-extrabold text-red">
            {BUSINESS.phoneDisplay}
          </a>
        </Reveal>
        <Reveal delay={0.1}>
          <FAQ items={HOME_FAQ} />
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────────────── LEAD */
function LeadSection() {
  return (
    <section id="book" className="relative overflow-hidden bg-navy py-20 text-white lg:py-28">
      <img src={IMG.sunsetSky} alt="" className="absolute inset-0 h-full w-full object-cover opacity-45" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/85 to-red/40" />
      <div className="wrap relative grid items-center gap-12 lg:grid-cols-[1fr_1.15fr]">
        <Reveal>
          <p className="eyebrow on-dark">Free inspection · $500 off</p>
          <h2 className="mt-5 text-5xl leading-[1] sm:text-6xl">
            Let's take a look at <span className="sun">your roof.</span>
          </h2>
          <p className="mt-6 max-w-lg text-lg text-white/80">Answer a few quick questions and Kenneth will reach out to schedule your free inspection — or a phone appointment if you'd rather start there.</p>
          <div className="mt-10 space-y-3 text-white/85">
            <p className="flex items-center gap-3">
              <UserRound className="h-5 w-5 text-amber" /> Owner-led inspection with photos
            </p>
            <p className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-amber" /> {BUSINESS.hours}
            </p>
            <p className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-amber" /> Midland + 50 miles
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <LeadForm />
        </Reveal>
      </div>
    </section>
  );
}
