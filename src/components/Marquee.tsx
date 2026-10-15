import { AREAS } from "../data/site";

export default function Marquee({ items = AREAS.map((a) => a.name) }: { items?: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="mask-fade-x relative overflow-hidden bg-navy py-5">
      <div className="animate-marquee flex w-max items-center gap-8">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="font-display text-2xl font-extrabold whitespace-nowrap text-white/90 sm:text-3xl">{t}</span>
            <span className="text-lg text-sunset">★</span>
          </span>
        ))}
      </div>
    </div>
  );
}
