"use client";

export default function Footer() {

  return (
    <footer>
      <div className="w-full flex justify-around items-center text-ivoire/66 font-dm-sans bg-acier px-40 py-10 border-t border-ivoire/66">

        <div className="text-ivoire font-bold text-2xl font-bebas-neue">
          FOR<span className="text-cuivre">JA</span>
        </div>

        <span className="text-xs">© 2026 FORJA — Tous droits réservés</span>

        <ul className="flex gap-5 text-sm">
          <li>Mentions légales</li>
          <li>CGV</li>
          <li>Contact</li>
        </ul>

      </div>
    </footer>
  );
}
