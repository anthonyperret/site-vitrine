"use client";
import Link from "next/link";
import { Service } from "@/data/services";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface Props {
  service: Service;
}

export default function ServiceCard({ service }: Props) {
  const { ref, visible } = useScrollReveal(0.5);

  return(
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      id={service.number}
      className={`scroll-mt-30 lg:flex w-full border border-ivoire/33 rounded-sm hover:border-cuivre transition-colors ${visible ? "animate-fade-up" : "opacity-0"}`}
    >

      {/* Desktop */}
      <div className={`${service.featured ? "bg-cuivre" : "bg-acier border-r"} w-1/3 px-10 py-10 border-ivoire/33 lg:flex hidden flex-col justify-between gap-20`}>
        <div className="flex flex-col gap-2">
          <span className="text-ivoire/33 font-bebas-neue text-6xl">{service.number}</span>
          <h3 className="text-ivoire font-bebas-neue text-4xl">{service.title}</h3>
          <p className="font-dm-sans text-ivoire/66 text-xs">{service.desc1}</p>
        </div>

        <div>
          <span className="text-xs text-ivoire/33 tagline">
            {service.price > 0 ? "à partir de" : "sur devis"}
          </span>
          <h3 className="text-ivoire font-bebas-neue text-5xl">
            {service.price > 0 ? `${service.price}€` : ""}
          </h3>
          <Link href="/contact">
            <button className={`${service.featured ? "bg-ivoire text-cuivre" : "bg-cuivre text-ivoire"} mt-5 px-6 py-2 rounded-sm font-dm-sans w-full`}>Demander un devis</button>
          </Link>
        </div>

      </div>

      {/* Mobile */}
      <div className={`${service.featured ? "bg-cuivre" : "bg-acier border-r"} px-5 py-5 border-ivoire/33 lg:hidden flex`}>
        <div className="flex flex-col gap-2">
          <div className="flex gap-3">
            <span className={`${service.featured ? "text-ivoire/66" : "text-cuivre"}  font-bebas-neue text-2xl`}>{service.number}</span>
            <h3 className="text-ivoire">{service.title}</h3>
          </div>
        </div>

        <div className="text-end flex-1">
          <span className="text-xs text-ivoire/33 tagline">
            {service.price > 0 ? "à partir de" : "sur devis"}
          </span>
          <h3 className="text-ivoire font-bebas-neue text-5xl">
            {service.price > 0 ? `${service.price}€` : ""}
          </h3>
          
        </div>

      </div>

      <div className="lg:w-2/3 px-5 py-5 flex flex-col gap-5">
        <p className="font-dm-sans text-ivoire/66">{service.desc2}</p>

        <span className="text-xs text-ivoire/33 tagline mt-auto">
          {service.price > 0 ? "Ce qui est inclus" : "Exemple de fonctionnalités"}
        </span>

        {/* Desktop */}
        <div className="hidden lg:grid grid-cols-2 font-dm-sans text-sm text-ivoire">

          {service.items.map((item, j) => (
            <div key={j} className={`pb-3 mb-2 flex gap-2 items-center ${j < service.items.length - 2 ? "border-b border-ivoire/33" : ""}`}>
              <span className="flex w-4 h-4 rounded-full bg-acier border border-ivoire/33 items-center justify-center">
                <span className="block w-1.5 h-1.5 rounded-full bg-cuivre"></span>
              </span>
              <p>{item}</p>
            </div>
          ))}

        </div>

        {/* Mobile */}
        <div className="grid lg:hidden font-dm-sans text-sm text-ivoire">

          {service.items.map((item, j) => (
            <div key={j} className={`flex gap-2 items-center ${j < service.items.length - 1 ? "border-b border-ivoire/33 pb-3 mb-2" : ""}`}>
              <span className="flex w-4 h-4 rounded-full bg-acier border border-ivoire/33 items-center justify-center">
                <span className="block w-1.5 h-1.5 rounded-full bg-cuivre"></span>
              </span>
              <p>{item}</p>
            </div>
          ))}

          <Link href="/contact">
            <button className={`bg-cuivre text-ivoire mt-5 px-6 py-2 rounded-sm font-dm-sans w-full`}>Demander un devis</button>
          </Link>

        </div>
      </div>

    </div>
  )
}