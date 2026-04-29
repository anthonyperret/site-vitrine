"use client";

export default function Footer() {

  return (
    <footer>
      <div className="w-full flex items-center text-ivoire/66 font-dm-sans bg-acier px-40 py-10 border-t border-ivoire/66">

        <div className="flex-1 text-ivoire font-bold text-2xl font-bebas-neue">
          FAR<span className="text-cuivre">GA</span>
        </div>

        <span className="text-xs">© 2026 FARGA — Tous droits réservés</span>

        <ul className="flex-1 flex justify-end gap-5 text-sm">
          <li>Mentions légales</li>
          <li>CGV</li>
          <li>Contact</li>
        </ul>

      </div>
    </footer>
  );
}
