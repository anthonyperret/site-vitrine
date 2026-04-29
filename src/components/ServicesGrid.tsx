"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Link from "next/link";
import { services } from "@/data/services";

export default function ServicesGrid() {
  const { ref, visible } = useScrollReveal(0.5);

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="flex gap-0.5 mt-30">
      {services.map((service, i) => (
        <Link key={service.number} href={`/services#${service.number}`} className="flex-1">
          <div
            className={`h-full cursor-pointer bg-fonderie text-ivoire px-10 pt-20 pb-10 flex flex-col gap-5 border-t-3 border-transparent hover:border-cuivre hover:bg-fonderie/80 transition-colors ${visible ? "animate-fade-up" : "opacity-0"}`}
            style={{ animationDelay: `${i * 0.20}s` }}
          >
            <span className="text-acier font-bebas-neue text-6xl">{service.number}</span>
            <h3 className="uppercase font-bebas-neue text-3xl">{service.title}</h3>
            <p className="font-dm-sans text-ivoire/66 text-sm">{service.desc1}</p>
            <div className="mt-auto w-max border border-ivoire/33 px-2 py-1 text-cuivre tagline font-dm-sans text-xs">
              {service.price > 0 ? `à partir de ${service.price}€` : "sur devis"}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
