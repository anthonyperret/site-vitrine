'use client';
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface Props {
  number: string;
  title: string;
  desc: string;
  i: number;
}

export default function ReviewItem({ number, title, desc, i }: Props) {

  const { ref, visible } = useScrollReveal(0.5);
  const delay = 0.2

  return (

    <div ref={ref as React.RefObject<HTMLDivElement>} className={`${visible ? "animate-fade-up" : "opacity-0"} flex flex-col gap-2 ${i < 3 ? "lg:border-r lg:border-b-0 border-b border-ivoire/33" : ""}  lg:p-7 lg:mb-0 pb-3 mb-3`} style={{ animationDelay: `${i * delay}s` }}>
      <span className="text-cuivre/33 font-bebas-neue lg:text-6xl text-2xl">{number}</span>
      <h3 className="text-ivoire">{title}</h3>
      <p className="text-ivoire/66">{desc}</p>
    </div>
  )
}