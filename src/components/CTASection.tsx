import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import Reveal from "./Reveal";
import { BUSINESS } from "../data/site";
import { IMG } from "../data/images";

export default function CTASection({
  title = "Find out if your roof can be renewed.",
  body = "Free, owner-led inspections across Midland and West Texas — plus $500 off your roof rejuvenation and financing available.",
  image = IMG.pumpjackSunset,
}: {
  title?: string;
  body?: string;
  image?: string;
}) {
  return (
    <section className="px-3 py-16 sm:px-6 lg:py-24">
      <div className="relative mx-auto max-w-[86rem] overflow-hidden rounded-[1.5rem] bg-navy text-white">
        <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-red/40" />
        <div className="relative px-6 py-16 sm:px-14 lg:py-24">
          <Reveal className="max-w-2xl">
            <p className="eyebrow on-dark">Free inspection · $500 off</p>
            <h2 className="mt-5 text-4xl leading-[1.02] text-balance sm:text-6xl">{title}</h2>
            <p className="mt-6 max-w-xl text-lg text-white/80">{body}</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="btn btn-red">
                Book my free inspection <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={`tel:${BUSINESS.phoneTel}`} className="btn btn-glass">
                <Phone className="h-4 w-4" /> {BUSINESS.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
