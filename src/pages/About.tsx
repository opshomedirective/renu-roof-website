import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import CTASection from "../components/CTASection";
import GoNanoBadge from "../components/GoNanoBadge";
import { BUSINESS, PROCESS, PROMISES } from "../data/site";
import { IMG } from "../data/images";
import { useSEO } from "../seo";

export default function About() {
  useSEO({
    title: "About ReNu Roof West Texas | Owner-Led Roof Rejuvenation in Midland",
    description: "ReNu Roof West Texas helps Midland and Permian Basin homeowners protect and renew aging shingle roofs. Every inspection is done by the owner, Kenneth Thompson.",
  });

  return (
    <>
      <PageHero
        eyebrow="About ReNu Roof"
        title={
          <>
            West Texas roofs, <span className="sun">renewed.</span>
          </>
        }
        sub="Midland-based and owner-led — helping homeowners across the Permian Basin get more life out of the roof they already have."
        image={IMG.highwayDesert}
        imageAlt="West Texas highway through the desert"
        crumbs={[{ label: "About" }]}
      />

      <section className="bg-cream py-16 lg:py-24">
        <div className="wrap grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Our story</p>
            <h2 className="mt-4 text-4xl text-navy sm:text-5xl">Renew before you replace.</h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-stone">
              <p>
                ReNu Roof West Texas was built on a simple idea: a lot of roofs out here get replaced before they really need to be. The sun, wind and hail wear shingles
                down — but if they're still intact, protecting and renewing them first may save you thousands.
              </p>
              <p>
                That's why every inspection is done by the owner, {BUSINESS.owner}. He gets on the roof, photographs what he finds, explains it in plain English, and
                tells you honestly whether your roof is a good candidate for rejuvenation — or not.
              </p>
              <p>
                As a certified {BUSINESS.tech} contractor, we apply {BUSINESS.tech} nanotechnology, serve Midland and a 50-mile radius around it, and we're growing — with
                Odessa next on our map.
              </p>
            </div>
            <GoNanoBadge className="mt-8" />
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="btn btn-red">
                Book a free inspection <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={`tel:${BUSINESS.phoneTel}`} className="btn btn-outline text-navy">
                <Phone className="h-4 w-4" /> {BUSINESS.phoneDisplay}
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="relative pb-10">
            <img src={IMG.pumpjackSunset} alt="Pumpjack at sunset in the Permian Basin" className="aspect-[4/5] w-[78%] rounded-2xl object-cover" loading="lazy" />
            <img src={IMG.inspectors} alt="Roof inspection in progress" className="absolute right-0 bottom-0 aspect-square w-[50%] rounded-2xl border-8 border-cream object-cover shadow-2xl" loading="lazy" />
          </Reveal>
        </div>
      </section>

      <section className="dunes-dark bg-navy py-16 text-white lg:py-24">
        <div className="wrap">
          <Reveal className="max-w-3xl">
            <p className="eyebrow on-dark">Our promises</p>
            <h2 className="mt-4 text-4xl sm:text-5xl">What you can count on.</h2>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PROMISES.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 0.06} className="rounded-xl border border-white/10 bg-white/[0.04] p-7">
                <span className="font-display text-sm font-black text-amber">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-xl">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 lg:py-24">
        <div className="wrap">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow justify-center">How it works</p>
            <h2 className="mt-4 text-4xl text-navy sm:text-5xl">Simple, honest, owner-led.</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.08} className="card p-7">
                <span className="font-display grid h-12 w-12 place-items-center rounded-full bg-red font-black text-white">{p.step}</span>
                <h3 className="mt-5 text-xl text-navy">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection image={IMG.texasFlag} />
    </>
  );
}
