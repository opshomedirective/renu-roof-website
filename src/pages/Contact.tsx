import { Clock, Mail, MapPin, Phone, PhoneCall, UserRound } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import LeadForm from "../components/LeadForm";
import { BUSINESS } from "../data/site";
import { IMG } from "../data/images";
import { useSEO } from "../seo";

export default function Contact() {
  useSEO({
    title: "Contact ReNu Roof West Texas | Free Roof Inspection in Midland, TX",
    description: "Book a free, owner-led roof inspection or phone appointment with ReNu Roof West Texas. Call (432) 349-4299 — Monday to Saturday, 9AM to 6PM.",
  });

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let's take a look at <span className="sun">your roof.</span>
          </>
        }
        sub="Book a free inspection or start with a phone appointment — whichever is easier for you. Mention the $500 offer when you book."
        image={IMG.sunsetSky}
        imageAlt="West Texas sunset sky"
        crumbs={[{ label: "Contact" }]}
      />

      <section className="bg-cream py-16 lg:py-24">
        <div className="wrap grid gap-14 lg:grid-cols-[1fr_1.25fr]">
          <Reveal>
            <p className="eyebrow">Talk to the owner</p>
            <h2 className="mt-4 text-4xl text-navy sm:text-5xl">Call, text or book online.</h2>
            <p className="mt-5 text-lg text-stone">When you call ReNu Roof, you reach {BUSINESS.owner} — the same person who'll inspect your roof.</p>
            <div className="mt-10 space-y-4">
              <a
                href={`tel:${BUSINESS.phoneTel}`}
                className="flex items-center gap-4 rounded-md bg-gradient-to-r from-red to-red-bright p-5 text-white shadow-[0_20px_40px_-20px_rgba(155,16,24,.9)] transition hover:-translate-y-0.5"
              >
                <span className="grid h-12 w-12 place-items-center rounded-full bg-white/15">
                  <Phone className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs text-white/75">Call or text</span>
                  <span className="font-display text-2xl font-extrabold">{BUSINESS.phoneDisplay}</span>
                </span>
              </a>
              {[
                { icon: Mail, l: "Email", v: BUSINESS.email, href: `mailto:${BUSINESS.email}` },
                { icon: Clock, l: "Hours", v: `${BUSINESS.hours} (${BUSINESS.hoursNote})` },
                { icon: PhoneCall, l: "Phone appointments", v: "Available — talk it through before we visit" },
                { icon: UserRound, l: "Your inspector", v: `${BUSINESS.owner}, owner` },
                { icon: MapPin, l: "Service area", v: "Midland & a 50-mile radius" },
              ].map(({ icon: I, l, v, href }) => {
                const inner = (
                  <>
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-sand text-red">
                      <I className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-semibold text-stone">{l}</span>
                      <span className="block font-bold break-words text-navy">{v}</span>
                    </span>
                  </>
                );
                return href ? (
                  <a key={l} href={href} className="flex items-center gap-4 rounded-xl border border-sand bg-white p-5 transition hover:border-red/40">
                    {inner}
                  </a>
                ) : (
                  <div key={l} className="flex items-center gap-4 rounded-xl border border-sand bg-white p-5">
                    {inner}
                  </div>
                );
              })}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <LeadForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
