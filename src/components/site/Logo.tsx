import { Link } from "@tanstack/react-router";
import logo from "@/assets/colegio-rs-logo.png.asset.json";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      to="/"
      className={`group inline-flex items-center gap-3 ${className}`}
      aria-label="Colégio RS — página inicial"
    >
      <img
        src={logo.url}
        alt="Colégio RS"
        className="h-12 w-12 rounded-xl object-contain bg-white p-1 ring-2 ring-orange/30 shadow-soft transition-transform duration-500 group-hover:scale-105"
      />
      <span className="sr-only">Colégio RS — Mauá · SP</span>
    </Link>
  );
}
