import { Link } from "react-router-dom";
import { ArrowRight, CloudHail, Sun, Wind } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import ThreatTabs from "../components/ThreatTabs";
import RenewVsReplace from "../components/RenewVsReplace";
import HealthCheck from "../components/HealthCheck";
import CTASection from "../components/CTASection";
import { IMG } from "../data/images";
import { useSEO } from "../seo";

const CARDS = [
  {
    icon: Sun,
    k: "The sun never lets up",
    b: "High-desert UV and long triple-digit summers dry the oils out of asphalt shingles. Once they're dry, they turn brittle and start shedding granules.",
    img: IMG.ocotilloSunset,
  },
  {
    icon: CloudHail,
    k: "Hail season",
    b: "Spring storms across the Permian Basin can bring hail in minutes. Each impact knocks granules loose — and exposed asphalt ages even faster in the sun.",
    img: IMG.supercellPlains,
  },
  {
    icon: Wind,
    k: "Wind & blowing dust",
    b: "West Texas wind carries sand and dust that scour your roof year-round, wearing down the surface and loosening granules with every storm.",
    img: IMG.dustStorm,
  },
];

export default function WestTexasRoofs() {
  useSEO({
    title: "West Texas Roof Guide: Sun, Hail, Wind & When to Renew | ReNu Roof",
    description: "How the West Texas sun, hail, wind and temperature swings age asphalt shingles in Midland and Odessa — and how to tell if your roof can be renewed instead of replaced.",
  });

  return (
    <>
      <PageHero
        eyebrow="West Texas roof guide"
        title={
          <>
            West Texas is hard on roofs. <span className="sun">Here's why.</span>
          </>
        }
        sub="Sun, hail, wind and desert temperature swings slowly wear down your shingles. Here's what that means — and when a roof can be renewed instead of replaced."
        image={IMG.supercellSunset}
        imageAlt="Supercell storm at sunset over the plains"
        crumbs={[{ label: "West Texas Roofs" }]}
      />

      <section className="bg-cream py-16 lg:py-24">
        <div className="wrap">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">The big three</p>
            <h2 className="mt-4 text-4xl text-navy sm:text-5xl">What the Permian Basin throws at your shingles.</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {CARDS.map(({ icon: I, k, b, img }, i) => (
              <Reveal key={k} delay={i * 0.08} className="card overflow-hidden">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={img} alt={k} className="h-full w-full object-cover" loading="lazy" />
                  <span className="absolute top-4 left-4 grid h-11 w-11 place-items-center rounded-xl bg-white/90 text-red">
                    <I className="h-5 w-5" />
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl text-navy">{k}</h3>
                  <p className="mt-2 text-stone">{b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="dunes bg-sand py-16 lg:py-24">
        <div className="wrap">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">Season to season</p>
            <h2 className="mt-4 text-4xl text-navy sm:text-5xl">Four ways West Texas wears down a roof.</h2>
          </Reveal>
          <Reveal className="mt-12">
            <ThreatTabs />
          </Reveal>
        </div>
      </section>

      <section className="bg-cream py-16 lg:py-24">
        <div className="wrap">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">Renew vs. replace</p>
            <h2 className="mt-4 text-4xl text-navy sm:text-5xl">Aging roof? You may not need a full replacement.</h2>
          </Reveal>
          <Reveal className="mt-12">
            <RenewVsReplace />
          </Reveal>
        </div>
      </section>

      <section className="dunes bg-sand py-16 lg:py-24">
        <div className="wrap grid items-center gap-12 lg:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <p className="eyebrow">60-second candidate check</p>
            <h2 className="mt-4 text-4xl text-navy sm:text-5xl">Can your roof be renewed?</h2>
            <p className="mt-5 text-lg text-stone">Four quick questions. Then confirm it with a free, owner-led inspection.</p>
            <Link to="/services/free-roof-inspection" className="btn btn-outline mt-8 text-navy">
              About our inspections <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <HealthCheck />
          </Reveal>
        </div>
      </section>

      <CTASection title="Protect your roof before the next storm season." image={IMG.lightning} />
    </>
  );
}
