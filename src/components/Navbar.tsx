"use client";
import Link from "next/link";

import { useState, useEffect } from "react";

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 10);
  };

  window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`z-100 fixed top-0 left-0 w-full px-40 py-4 transition-all duration-300 border-b
      ${scrolled
        ? "bg-white/10 backdrop-blur-md border-white/20 shadow-lg"
        : "border-transparent shadow-none bg-transparent"
      }`}
    >

      <div className="flex justify-between items-center">
        <div className="text-white font-bold text-4xl font-sekuya">
          <Link href="/">FORJA</Link>
        </div>
        <ul className="flex gap-10 text-white font-pt-sans font-bold">
          <li className="uppercase">
            <Link href="/services">Services</Link>
          </li>
          <li className="uppercase">
            <Link href="/">À Propos</Link>
          </li>
          <li className="uppercase">
            <Link href="/">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
