"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/a-propos", label: "À Propos" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)");
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false);
    };
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return (
    <>
      <nav className="z-100 fixed top-0 left-0 w-full px-5 md:px-5 lg:px-20 py-5 bg-acier border-b border-ivoire/66">
        <div className="flex justify-between items-center">

          <div className="text-ivoire font-bold text-5xl font-bebas-neue">
            <Link href="/" onClick={() => setOpen(false)}>
              FAR<span className="text-cuivre">GA</span>
            </Link>
          </div>

          {/* Desktop (lg+) — liens centrés */}
          <ul className="hidden lg:flex gap-15 text-md text-ivoire/66 font-dm-sans">
            {LINKS.map((l) => (
              <li key={l.href} className="hover:text-cuivre">
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>

          {/* Desktop (lg+) — bouton devis à droite */}
          <Link href="/contact" className="hidden lg:block">
            <button className="bg-cuivre text-ivoire px-6 py-2 rounded-sm font-dm-sans">
              Parlons de votre projet
            </button>
          </Link>

          {/* Tablette (md uniquement) — liens + devis groupés à droite */}
          <div className="hidden md:flex lg:hidden items-center gap-8">
            <ul className="flex gap-6 text-md text-ivoire/66 font-dm-sans">
              {LINKS.map((l) => (
                <li key={l.href} className="hover:text-cuivre">
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
            <Link href="/contact">
              <button className="bg-cuivre text-ivoire px-6 py-2 rounded-sm font-dm-sans">
                Parlons de votre projet
              </button>
            </Link>
          </div>

          {/* Mobile (< md) — burger */}
          <button
            type="button"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden relative flex flex-col justify-center items-center w-10 h-10 gap-1.5"
          >
            <span
              className={`block h-0.5 w-7 bg-ivoire transition-transform duration-300 ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-7 bg-ivoire transition-opacity duration-200 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-7 bg-ivoire transition-transform duration-300 ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Overlay mobile — sous le navbar (z-90 < z-100) */}
      <div
        className={`md:hidden fixed inset-0 z-90 bg-acier transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 text-4xl text-ivoire font-bebas-neue">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="hover:text-cuivre"
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)} className="mt-4">
            <button className="bg-cuivre text-ivoire px-6 py-2 rounded-sm font-dm-sans text-base">
              Parlons de votre projet
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
