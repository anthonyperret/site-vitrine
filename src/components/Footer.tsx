"use client";

import Link from "next/link";

export default function Footer() {

  return (
    <footer>
      <div className="w-full flex items-center text-ivoire/66 font-dm-sans bg-acier px-40 py-10 border-t border-ivoire/66">

        
        <div className="flex-1 text-ivoire font-bold text-2xl font-bebas-neue">
          <Link href="/">
            FAR<span className="text-cuivre">GA</span>
          </Link>
        </div>

        <span className="text-xs">© 2026 FARGA — Tous droits réservés</span>

        <ul className="flex-1 flex justify-end gap-5 text-sm">
          <li><Link href="/mentions-legales">Mentions légales</Link></li>
          <li><Link href="/mentions-legales#politique-de-confidentialite">Politique de confidentialité</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>

      </div>
    </footer>
  );
}
