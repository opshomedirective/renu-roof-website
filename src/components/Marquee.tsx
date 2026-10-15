import { Link } from "react-router-dom";
import { AREAS, areaPath } from "../data/site";

/** Infinite town marquee — every town links to its service-area page. */
export default function Marquee() {
  const row = [...AREAS, ...AREAS];
  return (
    <div className="mask-fade-x relative overflow-hidden bg-navy py-5">
      <div className="animate-marquee flex w-max items-center gap-8 hover:[animation-play-state:paused]">
        {row.map((a, i) => (
          <span key={i} className="flex items-center gap-8">
            <Link to={areaPath(a)} className="font-display text-2xl font-extrabold whitespace-nowrap text-white/90 transition hover:text-red-bright sm:text-3xl">
              {a.name}
            </Link>
            <span className="text-lg text-red-bright">★</span>
          </span>
        ))}
      </div>
    </div>
  );
}
