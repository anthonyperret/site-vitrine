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
      className={`flex-1 cursor-pointer bg-fonderie text-ivoire px-10 pt-10 pb-10 flex flex-col gap-5 border-t-3 border-transparent hover:border-cuivre hover:bg-fonderie/80 transition-colors ${visible ? "animate-fade-up" : "opacity-0"}`}
      style={{ animationDelay: `${i * delay}s` }}
    >
      <span className="text-cuivre text-4xl font-bebas-neue">&quot;</span>
      <p className="font-dm-sans text-ivoire/66 text-sm italic">{review.text}</p>
      <div className="mt-auto">
        <p className="text-ivoire text-xs mb-1">{review.client}</p>
        <p className="text-xs text-ivoire/33 tagline">{review.job}</p>
      </div>

    </div>
  )
}