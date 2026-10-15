import { Link } from "react-router-dom";
import { ArrowRight, BadgeDollarSign, Check } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import OffersGrid from "../components/OffersGrid";
import FAQ from "../components/FAQ";
import CTASection from "../components/CTASection";
import { IMG } from "../data/images";
import { useSEO } from "../seo";

const OFFER_FAQ = [
  { q: "What does the $500 off apply to?", a: "It applies to a ReNu roof protection & rejuvenation treatment. We'll apply it to your quote after your free inspection — just mention the offer when you book." },
  { q: "Do I have to buy anything to get the inspection?", a: "No. The inspection is free with no obligation, whether or not your roof turns out to be a candidate." },
  { q: "How does financing work?", a: "Financing is available for qualified homeowners. We'll walk you through the options during your inspection so you can choose what works for you." },
  { q: "Can I combine the offer with financing?", a: "Ask us when you book — we'll go over exactly how your offer and financing apply to your project." },
];

export default function Offers() {
  useSEO({
    title: "$500 Off Roof Rejuvenation + Financing | ReNu Roof West Texas",
    description: "Save $500 on roof protection & rejuvenation in Midland and West Texas. Free inspections and financing available. Call (432) 349-4299.",
  });

  return (
    <>
      <PageHero
        eyebrow="Offers & financing"
        title={
          <>
            <span className="sun">$500 OFF</span> your roof rejuvenation.
          </>
        }
        sub="Plus a free owner-led inspection and financing available — protecting your roof has never been easier."
        image={IMG.ranchTan}
        imageAlt="Brick ranch home with an asphalt shingle roof"
        crumbs={[{ label: "Offers" }]}
      />

      <section className="bg-cream py-16 lg:py-24">
        <div className="wrap">
          <OffersGrid />
        </div>
      </section>

      <section className="dunes-dark bg-navy py-16 text-white lg:py-24">
        <div className="wrap grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="relative overflow-hidden rounded-2xl">
            <img src={IMG.ranchWide} alt="Brick ranch home with an asphalt shingle roof" className="aspect-[4/3] w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
            <div className="absolute bottom-6 left-6 flex items-center gap-3 rounded-md bg-red px-5 py-4 text-white">
              <BadgeDollarSign className="h-8 w-8" strokeWidth={1.5} />
              <p className="font-display text-3xl leading-none font-black">$500 OFF</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow on-dark">How it works</p>
            <h2 className="mt-4 text-4xl sm:text-5xl">Claim your offer in three steps.</h2>
            <ol className="mt-8 space-y-5">
              {[
                ["Book your free inspection", "Call or fill out the form — mention the $500 offer."],
                ["Get your honest answer", "Kenneth checks if your roof is a candidate and gives you a clear quote with $500 off applied."],
                ["Renew your roof", "Pay upfront or use financing — then we treat your roof and walk it with you."],
              ].map(([t, b], i) => (
                <li key={t} className="flex gap-4">
                  <span className="font-display grid h-10 w-10 shrink-0 place-items-center rounded-full bg-red text-lg font-black">{i + 1}</span>
                  <div>
                    <p className="font-display text-2xl font-extrabold">{t}</p>
                    <p className="text-white/70">{b}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-8 flex flex-wrap gap-2">
              {["Free inspection", "Financing available", "Phone appointments"].map((x) => (
                <span key={x} className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white/85">
                  <Check className="h-4 w-4 text-amber" /> {x}
                </span>
              ))}
            </div>
            <Link to="/contact" className="btn btn-red mt-10">
              Claim my $500 off <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream py-16 lg:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <Reveal>
            <p className="eyebrow">FAQs</p>
            <h2 className="mt-4 text-4xl text-navy sm:text-5xl">About our offers.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <FAQ items={OFFER_FAQ} />
          </Reveal>
        </div>
      </section>

      <CTASection image={IMG.stoneRanch} />
    </>
  );
}
