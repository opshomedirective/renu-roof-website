import { useState } from "react";
import { AREAS, BUSINESS } from "../data/site";

/**
 * Radar-style service-area map. Towns are plotted from real lat/lng
 * inside the 50-mile radius centered on ZIP 79705 (Midland) — no map API.
 */
const SIZE = 600;
const C = SIZE / 2;
const { lat: cLat, lng: cLng, radiusMiles } = BUSINESS.serviceCenter;
const MI_PER_LAT = 69;
const MI_PER_LNG = 69 * Math.cos((cLat * Math.PI) / 180);
const R = 280;
const scale = R / radiusMiles;
const SUN = "#e0343e";

const project = (lat: number, lng: number) => ({
  x: C + (lng - cLng) * MI_PER_LNG * scale,
  y: C - (lat - cLat) * MI_PER_LAT * scale,
});

const LABELS: Record<string, [number, number, "start" | "end" | "middle"]> = {
  Odessa: [-10, 4, "end"],
  Andrews: [-10, 4, "end"],
  "Big Spring": [10, 4, "start"],
  Lamesa: [10, 4, "start"],
  Stanton: [10, 4, "start"],
  Crane: [10, 4, "start"],
  "Garden City": [10, 4, "start"],
  Goldsmith: [-10, 4, "end"],
};

export default function AreaMap() {
  const [hover, setHover] = useState<string | null>(null);

  return (
    <div className="relative mx-auto w-full max-w-[640px]">
      <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="h-auto w-full" role="img" aria-label="Map of the ReNu Roof West Texas service area: 50 miles around Midland, Texas">
        <defs>
          <radialGradient id="radar" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={SUN} stopOpacity="0.24" />
            <stop offset="100%" stopColor={SUN} stopOpacity="0" />
          </radialGradient>
          <linearGradient id="sweep" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={SUN} stopOpacity="0" />
            <stop offset="100%" stopColor={SUN} stopOpacity="0.34" />
          </linearGradient>
          <clipPath id="disc">
            <circle cx={C} cy={C} r={R} />
          </clipPath>
        </defs>

        <circle cx={C} cy={C} r={R} fill="url(#radar)" stroke={SUN} strokeOpacity="0.65" strokeDasharray="4 6" />
        {[0.25, 0.5, 0.75].map((f) => (
          <circle key={f} cx={C} cy={C} r={R * f} fill="none" stroke="#fff" strokeOpacity="0.08" />
        ))}
        <line x1={C - R} y1={C} x2={C + R} y2={C} stroke="#fff" strokeOpacity="0.06" />
        <line x1={C} y1={C - R} x2={C} y2={C + R} stroke="#fff" strokeOpacity="0.06" />
        {(
          [
            ["N", C, C - R - 8],
            ["S", C, C + R + 18],
            ["W", C - R - 14, C + 4],
            ["E", C + R + 14, C + 4],
          ] as const
        ).map(([t, x, y]) => (
          <text key={t} x={x} y={y} textAnchor="middle" fill="#a9b5c4" fontSize="12" fontWeight="700" fontFamily="DM Sans">
            {t}
          </text>
        ))}

        <g clipPath="url(#disc)">
          <path d={`M ${C} ${C} L ${C + R} ${C} A ${R} ${R} 0 0 0 ${C + R * Math.cos(-Math.PI / 4)} ${C + R * Math.sin(-Math.PI / 4)} Z`} fill="url(#sweep)">
            <animateTransform attributeName="transform" type="rotate" from={`0 ${C} ${C}`} to={`360 ${C} ${C}`} dur="8s" repeatCount="indefinite" />
          </path>
        </g>
        <text x={C + R * Math.cos(Math.PI / 4) + 6} y={C + R * Math.sin(Math.PI / 4) + 6} fill={SUN} fontSize="12" fontWeight="800" fontFamily="DM Sans">
          50 mi
        </text>

        {AREAS.filter((a) => a.name !== "Midland").map((a) => {
          const { x, y } = project(a.lat, a.lng);
          const on = hover === a.name;
          const lab = LABELS[a.name];
          const [dx, dy, anchor] = lab ?? [10, 4, "start"];
          return (
            <g key={a.name} onMouseEnter={() => setHover(a.name)} onMouseLeave={() => setHover(null)} className="cursor-pointer">
              <circle cx={x} cy={y} r={12} fill="transparent" />
              <circle cx={x} cy={y} r={on ? 6.5 : 3.5} fill={on ? SUN : "#ffffff"} />
              {(lab || on) && (
                <text
                  x={x + dx}
                  y={y + dy}
                  textAnchor={anchor}
                  fill={on ? SUN : "#ffffffcc"}
                  fontSize={on ? 15 : 12}
                  fontWeight={on ? 800 : 600}
                  fontFamily="DM Sans"
                  paintOrder="stroke"
                  stroke="#0b1c2f"
                  strokeWidth={on ? 4 : 3}
                >
                  {a.name}
                </text>
              )}
            </g>
          );
        })}

        <circle cx={C} cy={C} r="10" fill={SUN}>
          <animate attributeName="r" values="8;34;8" dur="2.4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values=".6;0;.6" dur="2.4s" repeatCount="indefinite" />
        </circle>
        <path
          transform={`translate(${C - 11} ${C - 11}) scale(0.92)`}
          d="M12 1.5l3.1 6.6 7.2.9-5.3 5 1.4 7.1L12 17.6 5.6 21.1 7 14l-5.3-5 7.2-.9z"
          fill={SUN}
          stroke="#0b1c2f"
          strokeWidth="1.2"
        />
        <text x={C} y={C + 30} textAnchor="middle" fill="#fff" fontSize="14" fontWeight="800" fontFamily="DM Sans" paintOrder="stroke" stroke="#0b1c2f" strokeWidth="4">
          Midland
        </text>
      </svg>
      <div className="glass absolute bottom-2 left-2 rounded-xl px-4 py-3 text-xs text-white">
        <p className="font-bold tracking-widest text-amber uppercase">Coverage</p>
        <p className="font-display text-lg font-extrabold">{radiusMiles}-mile radius</p>
        <p className="text-mist">around ZIP {BUSINESS.serviceCenter.zip} · hover a dot</p>
      </div>
    </div>
  );
}
