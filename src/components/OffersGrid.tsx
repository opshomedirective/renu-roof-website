import { Link } from "react-router-dom";
import { ArrowUpRight, BadgeDollarSign, ScanSearch, Wallet } from "lucide-react";
import Reveal from "./Reveal";
import { OFFERS } from "../data/site";

const ICONS = [BadgeDollarSign, ScanSearch, Wallet];

export default function OffersGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {OFFERS.map((o, i) => {
        const I = ICONS[i];
        const hero = i === 0;
        return (
          <Reveal key={o.title} delay={i * 0.08}>
            <Link
              to="/contact"
              className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border p-7 transition duration-500 hover:-translate-y-2 ${
                hero ? "border-transparent bg-red text-white dunes-dark" : "card hover:border-red/40"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`text-xs font-bold tracking-[0.25em] uppercase ${hero ? "text-white/80" : "text-red"}`}>{o.tag}</span>
                <ArrowUpRight className="h-5 w-5 transition group-hover:rotate-45" />
              </div>
              <I className={`mt-8 h-10 w-10 ${hero ? "text-white" : "text-red"}`} strokeWidth={1.5} />
              <p className="font-display mt-4 flex items-baseline gap-2 text-6xl leading-none font-black">
                {o.value}
                {o.unit && <span className="text-base font-bold tracking-widest">{o.unit}</span>}
              </p>
              <p className="font-display mt-4 text-2xl font-extrabold">{o.title}</p>
              <p className={`mt-2 text-sm leading-relaxed ${hero ? "text-white/85" : "text-stone"}`}>{o.body}</p>
              <p className={`mt-auto pt-6 text-[11px] ${hero ? "text-white/70" : "text-stone/70"}`}>Restrictions may apply. Ask for details.</p>
            </Link>
          </Reveal>
        );
      })}
    </div>
  );
}
