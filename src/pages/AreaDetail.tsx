import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowRight, Check, Clock, MapPin, Navigation, Phone } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import ServiceCard from "../components/ServiceCard";
import ThreatTabs from "../components/ThreatTabs";
import OffersGrid from "../components/OffersGrid";
import AreaMap from "../components/AreaMap";
import FAQ from "../components/FAQ";
import LeadForm from "../components/LeadForm";
import GoNanoBadge from "../components/GoNanoBadge";
import CTASection from "../components/CTASection";
import { AREAS, BUSINESS, areaPath, directionFrom, getArea, milesBetween, nearestAreas } from "../data/site";
import { SERVICES } from "../data/services";
import { IMG, type ImgKey } from "../data/images";
import { useSEO } from "../seo";

const MIDLAND = AREAS.find((a) => a.slug === "midland")!;

// Hero photo per region so neighboring town pages don't all look identical.
const REGION_HERO: Record<string, ImgKey> = {
  "Midland County": "ranchHip",
  "Odessa & Ector County": "ranchTan",
  "Martin, Andrews & Dawson": "pumpjackField",
  "Big Spring & South": "ranchLandscaped",
};

/**
 * SEO landing page for one service-area town: /service-area/:slug
 * Unique H1, title, meta, local copy, distance from Midland, nearby
 * towns and a localized FAQ on every page.
 */
export default function AreaDetail() {
  const { slug = "" } = useParams();
  const area = getArea(slug);

  useSEO({
    title: area ? `Roof Rejuvenation in ${area.name}, TX | ReNu Roof West Texas` : "Service area not found | ReNu Roof West Texas",
    description: area
      ? `Roof protection & rejuvenation in ${area.name}, ${area.county}, TX — Certified GoNano Contractor. Free roof inspections, $500 off and financing. Call ${BUSINESS.phoneDisplay}.`
      : "",
  });

  if (!area) return <Navigate to="/service-area" replace />;

  const isHome = area.slug === "midland";
  const miles = Math.round(milesBetween(MIDLAND, area));
  const dir = directionFrom(MIDLAND, area);
  const where = isHome ? "right here in Midland" : `about ${miles} miles ${dir} of Midland`;
  const nearby = nearestAreas(area, 4);
  const odessaArea = area.region === "Odessa & Ector County";

  const faqs = [
    {
      q: `Do you offer roof rejuvenation in ${area.name}?`,
      a: `Yes. ${area.name} is ${isHome ? "our home base" : `${where}`}, well inside our 50-mile service area${odessaArea ? " — and we're actively expanding across Odessa and Ector County" : ""}. Call ${BUSINESS.phoneDisplay} to schedule your free inspection.`,
    },
    {
      q: `Is the roof inspection really free in ${area.name}?`,
      a: `Yes — free and with no obligation. Kenneth Thompson, the owner, inspects your ${area.name} roof himself and tells you honestly whether it's a good candidate for rejuvenation.`,
    },
    {
      q: `Does the $500 off apply to ${area.name} homes?`,
      a: `Yes. The $500 off applies to roof rejuvenation anywhere in our service area, including ${area.name}. Financing is available too.`,
    },
    {
      q: "Is rejuvenation right for every roof?",
      a: "No. It's for asphalt shingle roofs that are aging but still intact. Roofs with active leaks, missing shingles or severe hail damage aren't candidates — and we'll tell you that up front.",
    },
  ];

  return (
    <>
      <PageHero
        eyebrow={`Service area · ${area.county}`}
        title={
          <>
            Roof rejuvenation in <span className="sun">{area.name}, TX.</span>
          </>
        }
        sub={`${area.note} Certified GoNano Contractor serving ${area.name} homeowners — free inspections, $500 off and financing available.`}
        image={IMG[REGION_HERO[area.region] ?? "ranchHip"]}
        imageAlt={`Home in the ${area.name}, Texas area`}
        crumbs={[{ label: "Service Area", to: "/service-area" }, { label: area.name }]}
      >
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link to="/contact" className="btn btn-red">
            Free inspection in {area.name} <ArrowRight className="h-4 w-4" />
          </Link>
          <a href={`tel:${BUSINESS.phoneTel}`} className="btn btn-glass">
            <Phone className="h-4 w-4" /> {BUSINESS.phoneDisplay}
          </a>
        </div>
      </PageHero>

      {/* Local intro + quick facts */}
      <section className="bg-cream py-16 lg:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <p className="eyebrow">{area.name}, Texas</p>
            <h2 className="mt-4 text-4xl text-navy sm:text-5xl">
              Renew your {area.name} roof <span className="sun">before you replace it.</span>
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-stone">
              <p>
                {isHome
                  ? "Midland is home for ReNu Roof West Texas."
                  : `${area.name} sits ${where}, in ${area.county}.`}{" "}
                Like every roof in the Permian Basin, homes here take years of high-desert sun, blowing dust, wind and spring hail — and asphalt shingles slowly dry
                out, fade and shed the granules that protect them.
              </p>
              <p>
                If your {area.name} roof is aging but still intact, you may not need a full replacement. As a Certified {BUSINESS.tech} Contractor, we apply a
                spray-on nano treatment designed to help restore flexibility, hold granules in place and repel water — for far less than a new roof, with $500 off.
              </p>
              <p>
                It starts with a free inspection. {BUSINESS.owner}, the owner, checks your shingles in person, photographs what he finds and tells you straight
                whether your roof is a candidate.
              </p>
            </div>
            <GoNanoBadge className="mt-8" />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card overflow-hidden">
              <div className="bg-navy px-6 py-5 text-white">
                <p className="eyebrow on-dark">Quick facts</p>
                <p className="font-display mt-2 text-3xl font-black">{area.name}, TX</p>
              </div>
              <ul className="divide-y divide-sand">
                {[
                  { I: MapPin, l: "County", v: area.county },
                  { I: Navigation, l: "From our Midland base", v: isHome ? "Home base" : `~${miles} miles ${dir}` },
                  { I: Clock, l: "Hours", v: `${BUSINESS.hours} (${BUSINESS.hoursNote})` },
                  { I: Check, l: "Offers", v: "Free inspection · $500 off · Financing" },
                ].map(({ I, l, v }) => (
                  <li key={l} className="flex items-center gap-4 px-6 py-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-sand text-red">
                      <I className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold text-stone">{l}</span>
                      <span className="block font-bold text-navy">{v}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <div className="border-t border-sand p-6">
                <p className="text-xs font-bold tracking-[0.2em] text-stone uppercase">Nearby towns we serve</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {nearby.map((n) => (
                    <Link key={n.slug} to={areaPath(n)} className="rounded-md border border-sand px-3 py-1.5 text-sm font-semibold text-navy transition hover:border-red hover:text-red">
                      {n.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="dunes bg-sand py-16 lg:py-24">
        <div className="wrap">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">Our services in {area.name}</p>
            <h2 className="mt-4 text-4xl text-navy sm:text-5xl">Protect the roof you have.</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.08}>
                <ServiceCard s={s} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Local weather */}
      <section className="bg-cream py-16 lg:py-24">
        <div className="wrap">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">Built for West Texas</p>
            <h2 className="mt-4 text-4xl text-navy sm:text-5xl">What the weather does to {area.name} roofs.</h2>
          </Reveal>
          <Reveal className="mt-12">
            <ThreatTabs />
          </Reveal>
        </div>
      </section>

      {/* Offers */}
      <section className="bg-cream pb-16 lg:pb-24">
        <div className="wrap">
          <Reveal className="mb-10 max-w-3xl">
            <p className="eyebrow">Offers for {area.name} homeowners</p>
            <h2 className="mt-4 text-4xl text-navy sm:text-5xl">$500 off. Free inspection. Financing.</h2>
          </Reveal>
          <OffersGrid />
        </div>
      </section>

      {/* Map + FAQ */}
      <section className="dunes-dark bg-navy py-16 text-white lg:py-24">
        <div className="wrap grid items-center gap-14 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <p className="eyebrow on-dark">Where {area.name} fits</p>
            <h2 className="mt-4 text-4xl sm:text-5xl">Serving {area.name} and the whole Permian Basin.</h2>
            <p className="mt-5 text-lg text-white/75">
              {isHome ? "Midland is the center of our 50-mile service area." : `${area.name} is ${where} — inside our 50-mile service area.`} Click any town on the
              map to see its page.
            </p>
            <Link to="/service-area" className="btn btn-glass mt-8">
              All service areas <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <AreaMap highlight={area.name} />
          </Reveal>
        </div>
      </section>

      <section className="bg-cream py-16 lg:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <Reveal>
            <p className="eyebrow">FAQs</p>
            <h2 className="mt-4 text-4xl text-navy sm:text-5xl">Roof rejuvenation in {area.name}: your questions.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <FAQ items={faqs} />
          </Reveal>
        </div>
      </section>

      <section className="bg-sand py-16 lg:py-24">
        <div className="wrap grid items-center gap-12 lg:grid-cols-[1fr_1.15fr]">
          <Reveal>
            <p className="eyebrow">Book in {area.name}</p>
            <h2 className="mt-4 text-4xl text-navy sm:text-5xl">Get your free {area.name} roof inspection.</h2>
            <p className="mt-5 text-lg text-stone">Answer a few quick questions and Kenneth will reach out to schedule — or call {BUSINESS.phoneDisplay}.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <LeadForm />
          </Reveal>
        </div>
      </section>

      <CTASection title={`Don't replace your ${area.name} roof. ReNu it.`} image={IMG.pumpjackSunset} />
    </>
  );
}
