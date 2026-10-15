import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, Sun, CloudHail, Wind, ThermometerSun } from "lucide-react";
import { THREATS } from "../data/site";
import { IMG } from "../data/images";

const ICONS = { Sun: Sun, Hail: CloudHail, Wind: Wind, Swings: ThermometerSun } as const;

/** What West Texas weather does to a shingle roof — tabbed, one photo per threat. */
export default function ThreatTabs() {
  const [i, setI] = useState(0);
  const t = THREATS[i];

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-stretch">
      <div className="relative min-h-[320px] overflow-hidden rounded-[1.25rem]">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={t.key}
            src={IMG[t.img]}
            alt={`${t.title} in West Texas`}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/10 to-transparent" />
        <p className="font-display absolute bottom-5 left-6 text-6xl font-black text-white sm:text-7xl">{t.key}</p>
      </div>

      <div className="flex flex-col">
        <div className="grid grid-cols-4 gap-2">
          {THREATS.map((x, k) => {
            const I = ICONS[x.key];
            return (
              <button
                key={x.key}
                onClick={() => setI(k)}
                className={`flex flex-col items-center gap-1.5 rounded-xl border px-2 py-3 text-xs font-bold transition ${
                  k === i ? "border-red bg-red text-white shadow-[0_14px_30px_-14px_rgba(155,16,24,.9)]" : "border-sand bg-white text-stone hover:border-red/50"
                }`}
              >
                <I className="h-5 w-5" />
                {x.key}
              </button>
            );
          })}
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={t.key} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="card mt-4 flex-1 p-7">
            <h3 className="text-2xl text-navy sm:text-3xl">{t.title}</h3>
            <p className="mt-3 leading-relaxed text-stone">{t.body}</p>
            <ul className="mt-6 space-y-2.5">
              {t.tips.map((x) => (
                <li key={x} className="flex items-center gap-3 font-semibold text-navy">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-sand text-red">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {x}
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
