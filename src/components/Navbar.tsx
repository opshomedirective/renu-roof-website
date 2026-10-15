import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, BadgeDollarSign, Clock, Menu, Phone, X } from "lucide-react";
import Logo from "./Logo";
import { BUSINESS, NAV } from "../data/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Offer bar */}
      <div className="bg-red text-white">
        <div className="wrap flex h-9 items-center justify-center gap-6 text-[11px] font-bold sm:justify-between sm:text-xs">
          <p className="flex items-center gap-2">
            <BadgeDollarSign className="h-4 w-4 shrink-0" />
            <span className="sm:hidden">$500 OFF · Free inspections · Financing</span>
            <span className="hidden sm:inline">$500 OFF roof rejuvenation · Free inspections · Financing available</span>
          </p>
          <div className="hidden items-center gap-6 md:flex">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" /> {BUSINESS.hours}
            </span>
            <a href={`tel:${BUSINESS.phoneTel}`} className="inline-flex items-center gap-1.5 hover:underline">
              <Phone className="h-3.5 w-3.5" /> {BUSINESS.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Main bar — always light so the navy/red logo stays readable */}
      <div className={`border-b transition-all duration-500 ${scrolled ? "border-sand bg-white/95 shadow-[0_18px_40px_-30px_rgba(11,28,47,.6)] backdrop-blur-xl" : "border-sand bg-white"}`}>
        <nav className={`wrap flex items-center justify-between gap-6 transition-all duration-500 ${scrolled ? "h-[72px]" : "h-24"}`}>
          <Logo className={`transition-all duration-500 ${scrolled ? "h-14" : "h-[4.6rem]"}`} />

          <ul className="hidden items-center gap-0.5 xl:flex">
            {NAV.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) => `relative rounded-md px-3.5 py-2 text-[15px] font-semibold transition ${isActive ? "text-red" : "text-navy/80 hover:text-navy"}`}
                >
                  {({ isActive }) => (
                    <>
                      {item.label}
                      {isActive && <motion.span layoutId="nav-underline" className="absolute inset-x-3 -bottom-0.5 h-[3px] rounded-full bg-red" />}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a href={`tel:${BUSINESS.phoneTel}`} className="hidden items-center gap-2 font-bold text-navy 2xl:inline-flex">
              <Phone className="h-4 w-4 text-red" /> {BUSINESS.phoneDisplay}
            </a>
            <Link to="/contact" className="btn btn-red hidden !py-3 sm:inline-flex">
              Free Inspection
            </Link>
            <button onClick={() => setOpen(true)} className="grid h-11 w-11 place-items-center rounded-full border border-navy/20 text-navy xl:hidden" aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 overflow-y-auto bg-cream xl:hidden">
            <div className="wrap flex h-24 items-center justify-between">
              <Logo className="h-16" />
              <button onClick={() => setOpen(false)} className="grid h-11 w-11 place-items-center rounded-full border border-navy/20 text-navy" aria-label="Close menu">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="wrap pb-16">
              <ul className="divide-y divide-dune border-y border-dune">
                {[{ label: "Home", to: "/" }, ...NAV].map((item, i) => (
                  <motion.li key={item.to} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 * i }}>
                    <Link to={item.to} className="font-display flex items-center justify-between py-5 text-3xl font-black uppercase">
                      {item.label} <ArrowUpRight className="h-6 w-6 text-red" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-8 rounded-2xl bg-navy p-5 text-white">
                <p className="text-xs font-bold tracking-widest text-amber uppercase">Limited offer</p>
                <p className="font-display text-3xl font-black">$500 OFF</p>
                <p className="text-sm text-white/75">roof rejuvenation · financing available</p>
              </div>
              <a href={`tel:${BUSINESS.phoneTel}`} className="btn btn-red mt-6 w-full">
                <Phone className="h-4 w-4" /> Call {BUSINESS.phoneDisplay}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
