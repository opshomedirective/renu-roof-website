import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";

export default function FAQ({ items }: { items: readonly { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {items.map((f, i) => {
        const on = open === i;
        return (
          <div key={f.q} className={`rounded-xl border transition ${on ? "border-red/30 bg-white shadow-[0_20px_50px_-30px_rgba(155,16,24,.5)]" : "border-sand bg-white/70"}`}>
            <button onClick={() => setOpen(on ? null : i)} className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left" aria-expanded={on}>
              <span className="text-lg font-bold text-navy">{f.q}</span>
              <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full transition ${on ? "rotate-45 bg-red text-white" : "bg-sand text-red"}`}>
                <Plus className="h-4 w-4" />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {on && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                  <p className="max-w-3xl px-6 pb-6 leading-relaxed text-stone">{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
