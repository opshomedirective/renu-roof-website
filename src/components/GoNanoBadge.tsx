import { BadgeCheck } from "lucide-react";
import { IMG } from "../data/images";

/**
 * "Certified GoNano Contractor" badge using the official GoNano logo
 * (gonano-logo.png on light, gonano-logo-white.png on dark).
 * Only show this while ReNu Roof West Texas holds GoNano certification.
 */
export default function GoNanoBadge({ dark = false, size = "md", className = "" }: { dark?: boolean; size?: "sm" | "md" | "lg"; className?: string }) {
  const logoH = size === "lg" ? "h-10" : size === "sm" ? "h-6" : "h-8";
  return (
    <div
      className={`inline-flex items-center gap-4 rounded-md border px-5 py-3 ${dark ? "border-white/20 bg-white/[0.06] text-white" : "border-sand bg-white text-navy shadow-sm"} ${className}`}
    >
      <img src={dark ? IMG.gonanoLogoWhite : IMG.gonanoLogo} alt="GoNano" className={`${logoH} w-auto`} />
      <span className={`h-8 w-px ${dark ? "bg-white/25" : "bg-dune"}`} />
      <span className="flex items-center gap-2 leading-tight">
        <BadgeCheck className={`h-6 w-6 shrink-0 ${dark ? "text-red-bright" : "text-red"}`} />
        <span>
          <span className="block text-[11px] font-bold tracking-[0.25em] uppercase opacity-70">Certified</span>
          <span className="font-display block text-lg font-black tracking-wide uppercase">GoNano Contractor</span>
        </span>
      </span>
    </div>
  );
}
