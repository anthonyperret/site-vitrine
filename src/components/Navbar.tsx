"use client";
import Link from "next/link";

export default function Navbar() {

  return (
    <nav className="z-100 fixed top-0 left-0 w-full px-40 py-5 bg-acier border-b border-ivoire/66">

      <div className="flex justify-between items-center">

        <div className="text-ivoire font-bold text-5xl font-bebas-neue">
          <Link href="/">
            FOR<span className="text-cuivre">JA</span>
          </Link>
        </div>

        <ul className="flex gap-15 text-md text-ivoire/66 font-dm-sans">
          <li className="hover:text-cuivre">
            <Link href="/">Services</Link>
          </li>
          <li className="hover:text-cuivre">
            <Link href="/">Réalisations</Link>
          </li>
          <li className="hover:text-cuivre">
            <Link href="/">À Propos</Link>
          </li>
          <li className="hover:text-cuivre">
            <Link href="/">Contact</Link>
          </li>
        </ul>

        <button className="bg-cuivre text-ivoire px-6 py-3 rounded-sm font-dm-sans">Devis gratuit</button>
      </div>
    </nav>
  );
}
