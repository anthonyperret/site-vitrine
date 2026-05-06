'use client';
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Production } from "@/data/productions";
import Link from "next/link";

interface Props {
  production: Production;
  i: number;
}

export default function ProductionItem({production, i} : Props) {

  const { ref, visible } = useScrollReveal(0.5);
  const delay = 0.2

  return(

    <Link href={production.url} className="flex-1">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`relative lg:h-62 h-40 cursor-pointer bg-acier overflow-hidden group transition-colors ${visible ? "animate-fade-up" : "opacity-0"} flex justify-center items-center`}
        style={{ animationDelay: `${i * delay}s` }}
      >
        <h3 className="lg:hidden block text-ivoire">{production.title}</h3>

        <div className="absolute top-2 right-2 text-ivoire/33 font-dm-sans tagline text-xs border border-ivoire/33 px-2 py-1 bg-fonderie">{production.type}</div>

        <div className="lg:flex hidden absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
          <h3 className="text-ivoire">{production.title}</h3>
          <p className="text-xs text-cuivre tagline">{production.tagline}</p>
        </div>
      </div>
    </Link>
  )
}