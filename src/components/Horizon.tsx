/**
 * Signature divider: the Lone Star flag stripe.
 * A navy canton with a white star, then a white band over a red band,
 * running the full width at the bottom of every hero.
 * (`fill` is kept for API compatibility; the stripe sits on top of the section edge.)
 */
export default function Horizon({ className = "" }: { fill?: string; className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-x-0 bottom-0 z-10 flex ${className}`}>
      <div className="grid h-[22px] w-[90px] shrink-0 place-items-center bg-navy text-[13px] leading-none text-white sm:h-[28px] sm:w-[150px]">★</div>
      <div className="flex flex-1 flex-col">
        <div className="h-[11px] bg-white sm:h-[14px]" />
        <div className="h-[11px] bg-red sm:h-[14px]" />
      </div>
    </div>
  );
}
