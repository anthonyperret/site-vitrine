'use client';
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Review } from "@/data/reviews";

interface Props {
  review: Review;
  i: number;
}

export default function ReviewItem({ review, i }: Props) {

  const { ref, visible } = useScrollReveal(0.5);
  const delay = 0.2

  return (

    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`flex-1 cursor-pointer bg-fonderie text-ivoire lg:px-10 lg:py-10 px-5 py-5 flex flex-col gap-5 border-t-3 border-transparent hover:border-cuivre hover:bg-fonderie/80 transition-colors ${visible ? "animate-fade-up" : "opacity-0"}`}
      style={{ animationDelay: `${i * delay}s` }}
    >
      <span className="text-cuivre text-4xl leading-1 font-bebas-neue">&quot;</span>
      <p className="text-ivoire/66 italic">{review.text}</p>
      <div className="mt-auto">
        <div className="text-ivoire text-sm mb-1">{review.client}</div>
        <div className="text-ivoire/33 text-xs tagline">{review.job}</div>
      </div>

    </div>
  )
}