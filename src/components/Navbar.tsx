import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="z-100 fixed top-0 left-0 w-full px-12 py-5 bg-white/10 backdrop-blur-md border-b border-white/20 shadow-lg">

      <div className="flex justify-between items-center mx-16">
        <div className="text-white font-bold text-2xl">
          <Link href="/">Logo</Link>
        </div>
        <ul className="flex gap-10 text-white">
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
