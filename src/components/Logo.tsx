import { Link } from "react-router-dom";
import { IMG } from "../data/images";
import { BUSINESS } from "../data/site";

/** The logo has navy/red lettering on a transparent background — always place it on a light surface. */
export default function Logo({ className = "h-14" }: { className?: string }) {
  return (
    <Link to="/" aria-label={`${BUSINESS.name} — home`} className="shrink-0">
      <img src={IMG.logo} alt="ReNu Roof West Texas logo" className={`${className} w-auto`} />
    </Link>
  );
}
