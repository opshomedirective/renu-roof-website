import { Link } from "react-router-dom";
import { Clock, Mail, MapPin, Phone, ScanSearch } from "lucide-react";
import Logo from "./Logo";
import GoNanoBadge from "./GoNanoBadge";
import { AREAS, BUSINESS, NAV, areaPath } from "../data/site";
import { SERVICES } from "../data/services";

export default function Footer() {
  return (
    <footer className="dunes-dark relative overflow-hidden bg-navy pb-24 text-white lg:pb-0">
      <div aria-hidden className="pointer-events-none absolute -top-48 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-red/15 blur-[140px]" />
      <div className="wrap relative pt-16">
        <div className="horizon text-lg">★</div>
      </div>
      <div className="wrap relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr]">
        <div>
          <div className="inline-block rounded-2xl bg-cream p-4">
            <Logo className="h-24" />
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-mist">
            ReNu Roof West Texas offers roof protection and rejuvenation featuring {BUSINESS.tech} technology for homeowners in Midland and across the Permian Basin.
            Renew your roof before you replace it.
          </p>
          <GoNanoBadge dark size="sm" className="mt-6" />
          <div>
            <Link to="/contact" className="btn btn-red mt-6 !py-3">
              <ScanSearch className="h-4 w-4" /> Book a free inspection
            </Link>
          </div>
        </div>

        <div>
          <p className="eyebrow on-dark mb-5">Services</p>
          <ul className="space-y-2.5 text-sm text-white/75">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`} className="transition hover:text-red-bright">
                  {s.title}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/offers" className="transition hover:text-red-bright">
                $500 Off & Financing
              </Link>
            </li>
          </ul>
          <p className="eyebrow on-dark mt-8 mb-3">Serving</p>
          <p className="flex flex-wrap gap-x-2 gap-y-1 text-sm leading-relaxed text-white/60">
            {AREAS.map((x) => (
              <Link key={x.slug} to={areaPath(x)} className="transition hover:text-red-bright">
                {x.name}
              </Link>
            ))}
          </p>
        </div>

        <div>
          <p className="eyebrow on-dark mb-5">Company</p>
          <ul className="space-y-2.5 text-sm text-white/75">
            <li>
              <Link to="/" className="transition hover:text-red-bright">
                Home
              </Link>
            </li>
            {NAV.filter((n) => !n.to.startsWith("/services")).map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="transition hover:text-red-bright">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow on-dark mb-5">Contact</p>
          <ul className="space-y-4 text-sm">
            <li>
              <a href={`tel:${BUSINESS.phoneTel}`} className="flex items-center gap-3 transition hover:text-red-bright">
                <Phone className="h-4 w-4 shrink-0 text-red-bright" />
                <span className="font-display text-2xl font-extrabold">{BUSINESS.phoneDisplay}</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-3 break-all text-white/75 transition hover:text-red-bright">
                <Mail className="h-4 w-4 shrink-0 text-red-bright" /> {BUSINESS.email}
              </a>
            </li>
            <li className="flex gap-3 text-white/75">
              <Clock className="h-4 w-4 shrink-0 text-red-bright" />
              <span>
                {BUSINESS.hours} <span className="text-white/45">({BUSINESS.hoursNote})</span>
              </span>
            </li>
            <li className="flex gap-3 text-white/75">
              <MapPin className="h-4 w-4 shrink-0 text-red-bright" />
              <span>
                Serving {BUSINESS.region}
                <br />
                <span className="text-white/45">50-mile radius around Midland</span>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div aria-hidden className="pointer-events-none relative select-none">
        <p className="font-display text-center text-[13vw] leading-[0.8] font-black whitespace-nowrap text-white/[0.05]">ReNu ROOF</p>
      </div>

      <div className="wrap relative flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-xs text-white/45 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
        </p>
        <div className="flex gap-5">
          <Link to="/contact" className="hover:text-white">
            Privacy Policy
          </Link>
          <Link to="/contact" className="hover:text-white">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
