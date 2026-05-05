'use client';
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Service } from "@/data/services";
import Link from "next/link";

interface Props {
  service: Service;
  i: number;
}

export default function ServiceItem({service, i} : Props) {

  const { ref, visible } = useScrollReveal(0.5);
  const delay = 0.2

  return(
    <Link href={`/services#${service.number}`} className="flex-1">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`h-full cursor-pointer bg-fonderie text-ivoire lg:px-10 lg:pt-20 lg:pb-10 px-5 py-5 flex flex-col lg:gap-5 gap-3 border-t-3 border-transparent hover:border-cuivre hover:bg-fonderie/80 transition-colors ${visible ? "animate-fade-up" : "opacity-0"}`}
        style={{ animationDelay: `${i * delay}s` }}
      >
        <div className="flex lg:flex-col gap-3 lg:gap-5">
          <span className="font-bebas-neue lg:text-acier lg:text-6xl text-2xl text-cuivre">{service.number}</span>
          <h3 className="">{service.title}</h3>
        </div>
        <p className="font-dm-sans text-ivoire/66 text-sm">{service.desc2}</p>
        <div className="mt-auto w-max border border-ivoire/33 px-2 py-1 text-cuivre tagline text-xs">
          {service.price > 0 ? `à partir de ${service.price}€` : "sur devis"}
        </div>
      </div>
    </Link>
  )
}