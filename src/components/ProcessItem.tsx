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

    <div ref={ref as React.RefObject<HTMLDivElement>} className={`${visible ? "animate-fade-up" : "opacity-0"} flex flex-col gap-3 ${i < 3 ? "border-r border-ivoire/33" : ""}  p-7`} style={{ animationDelay: `${i * delay}s` }}>
      <span className="text-cuivre/33 font-bebas-neue text-6xl">{number}</span>
      <h3 className="uppercase text-ivoire font-bebas-neue text-3xl">{title}</h3>
      <p className="font-dm-sans text-ivoire/66 text-sm">{desc}</p>
    </div>
  )
}