import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Horizon from "../components/Horizon";
import { IMG } from "../data/images";
import { useSEO } from "../seo";

export default function NotFound() {
  useSEO({ title: "Page not found | ReNu Roof West Texas", description: "The page you're looking for doesn't exist." });
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-navy pt-40 text-white">
      <img src={IMG.highwayDesert} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/30" />
      <div className="wrap relative">
        <p className="eyebrow on-dark">404</p>
        <h1 className="mt-5 text-6xl sm:text-8xl">
          Took a wrong <span className="sun">turn.</span>
        </h1>
        <p className="mt-6 max-w-md text-lg text-white/75">That road doesn't go anywhere. Let's get you back on the highway.</p>
        <Link to="/" className="btn btn-red mt-10">
          Back to home <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <Horizon fill="#0b1c2f" />
    </section>
  );
}
