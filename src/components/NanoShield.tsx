import { useState } from "react";
import { motion } from "motion/react";
import { Check, X } from "lucide-react";

/**
 * Animated cross-section of an asphalt shingle, untreated vs. treated.
 * An ILLUSTRATION of how the treatment is designed to work — not a lab
 * result. Copy stays hedged ("designed to").
 */
const UNTREATED = [
  "Water soaks into dried-out asphalt",
  "Wind, dust and hail knock granules loose",
  "UV rays bake the exposed asphalt",
  "Shingles turn brittle and crack",
];
const TREATED = [
  "Designed to make water bead up and roll off",
  "Designed to help hold granules in place",
  "Helps shield the asphalt from UV",
  "Helps restore flexibility to aging shingles",
];

const GRANULES = Array.from({ length: 26 }, (_, i) => ({ x: 70 + i * 19 + ((i * 7) % 5), r: 5 + ((i * 3) % 3) }));

export default function NanoShield() {
  const [treated, setTreated] = useState(true);
  const list = treated ? TREATED : UNTREATED;

  return (
    <div className="grid items-center gap-10 lg:grid-cols-[1.25fr_1fr]">
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-navy-2 p-3 sm:p-5">
        <div className="mb-3 flex rounded-full bg-navy p-1 text-xs font-bold sm:text-sm">
          {[
            { v: false, l: "Untreated shingle" },
            { v: true, l: "With ReNu + GoNano" },
          ].map((o) => (
            <button key={o.l} onClick={() => setTreated(o.v)} className={`relative flex-1 rounded-full px-3 py-2.5 transition ${treated === o.v ? "text-white" : "text-mist hover:text-white"}`}>
              {treated === o.v && <motion.span layoutId="nano-tab" className={`absolute inset-0 rounded-full ${o.v ? "bg-red" : "bg-white/15"}`} />}
              <span className="relative">{o.l}</span>
            </button>
          ))}
        </div>

        <svg viewBox="0 0 640 360" className="h-auto w-full" role="img" aria-label="Illustration of an asphalt shingle with and without the rejuvenation treatment">
          <defs>
            <linearGradient id="ns-sky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#13283f" />
              <stop offset="1" stopColor="#26405c" />
            </linearGradient>
            <radialGradient id="ns-sun" cx="50%" cy="50%" r="50%">
              <stop offset="0" stopColor="#ffffff" />
              <stop offset="1" stopColor="#e0343e" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="ns-nano" x1="0" x2="1">
              <stop offset="0" stopColor="#b31b23" />
              <stop offset=".5" stopColor="#ffffff" />
              <stop offset="1" stopColor="#b31b23" />
            </linearGradient>
          </defs>
          <rect width="640" height="360" fill="url(#ns-sky)" />

          {/* sun */}
          <circle cx="560" cy="60" r="70" fill="url(#ns-sun)" opacity=".8" />
          <circle cx="560" cy="60" r="24" fill="#ffffff" />

          {/* UV rays */}
          {[0, 1, 2].map((i) => (
            <motion.line
              key={`uv-${i}-${treated}`}
              x1={530 - i * 40}
              y1={80 + i * 6}
              stroke="#ffffff"
              strokeWidth="3"
              strokeDasharray="6 6"
              initial={{ x2: 530 - i * 40, y2: 80 + i * 6 }}
              animate={treated ? { x2: [530 - i * 40, 400 - i * 60], y2: [80 + i * 6, 205] } : { x2: [530 - i * 40, 380 - i * 60], y2: [80 + i * 6, 245] }}
              transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 0.6, delay: i * 0.3 }}
            />
          ))}
          {treated &&
            [0, 1, 2].map((i) => (
              <motion.circle key={`bounce-${i}`} r="4" fill="#ffffff" animate={{ cx: [400 - i * 60, 430 - i * 60], cy: [205, 150], opacity: [1, 0] }} transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 1.4, delay: 1.6 + i * 0.3 }} />
            ))}

          {/* shingle body (asphalt + mat) */}
          <rect x="40" y="226" width="560" height="56" rx="6" fill={treated ? "#2b3340" : "#3b3530"} />
          <rect x="40" y="282" width="560" height="22" rx="4" fill="#5b4c3c" />
          <text x="590" y="298" textAnchor="end" fontSize="11" fontWeight="700" fill="#e2d4bf" fontFamily="DM Sans">
            fiberglass mat
          </text>
          {/* cracks when untreated */}
          {!treated &&
            ["M150 226 l8 18 -6 14 8 16", "M330 226 l-6 16 8 12 -4 20", "M500 226 l6 20 -8 12"].map((d) => (
              <motion.path key={d} d={d} fill="none" stroke="#120d0a" strokeWidth="2.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8 }} />
            ))}

          {/* nano layer */}
          {treated && <motion.rect x="40" y="218" width="560" height="9" rx="4" fill="url(#ns-nano)" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} style={{ transformOrigin: "40px 222px" }} transition={{ duration: 0.8 }} />}

          {/* granules */}
          {GRANULES.map((g, i) => {
            const loose = !treated && i % 3 === 0;
            return (
              <motion.circle
                key={`g-${i}-${treated}`}
                cx={g.x}
                cy={220 - g.r}
                r={g.r}
                fill={i % 2 ? "#8c8f96" : "#6d7179"}
                animate={loose ? { cx: [g.x, g.x - 70], cy: [220 - g.r, 330], opacity: [1, 0] } : { cx: g.x, cy: 220 - g.r, opacity: 1 }}
                transition={loose ? { duration: 1.8, repeat: Infinity, repeatDelay: 1, delay: (i % 5) * 0.3 } : { duration: 0.3 }}
              />
            );
          })}

          {/* wind gusts when untreated */}
          {!treated &&
            [0, 1].map((i) => (
              <motion.path key={`w-${i}`} d={`M600 ${170 + i * 22} q -40 -10 -80 0 t -80 0`} fill="none" stroke="#a9b5c4" strokeWidth="2.5" strokeLinecap="round" animate={{ x: [0, -260], opacity: [0, 0.9, 0] }} transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.5 }} />
            ))}

          {/* water drops */}
          {[0, 1, 2].map((i) =>
            treated ? (
              <motion.ellipse
                key={`d-t-${i}`}
                rx="10"
                ry="11"
                fill="#7fc4ff"
                animate={{ cx: [130 + i * 120, 130 + i * 120, 40 + i * 120 - 80], cy: [40, 200, 210], ry: [11, 10, 10], opacity: [1, 1, 0] }}
                transition={{ duration: 2.2, times: [0, 0.5, 1], repeat: Infinity, delay: i * 0.6 }}
              />
            ) : (
              <motion.ellipse
                key={`d-u-${i}`}
                fill="#7fc4ff"
                animate={{ cx: 130 + i * 120, cy: [40, 214, 222], rx: [10, 10, 30], ry: [11, 10, 3], opacity: [1, 1, 0] }}
                transition={{ duration: 2.2, times: [0, 0.55, 1], repeat: Infinity, delay: i * 0.6 }}
              />
            ),
          )}

          <text x="40" y="340" fontSize="12" fontWeight="700" fill="#a9b5c4" fontFamily="DM Sans">
            Illustration — not to scale
          </text>
        </svg>
      </div>

      <ul className="space-y-3">
        {list.map((t, i) => (
          <motion.li key={t} initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4">
            <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full ${treated ? "bg-red text-white" : "bg-white/10 text-mist"}`}>
              {treated ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
            </span>
            <span className="font-semibold text-white">{t}</span>
          </motion.li>
        ))}
        <li className="pt-1 text-xs text-mist">Toggle above the drawing to compare. Results vary by roof age and condition.</li>
      </ul>
    </div>
  );
}
