"use client";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface Props {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export default function Img({ src, alt, width, height }: Props) {
  const { ref, visible } = useScrollReveal(0.2);

  return(

    <div ref={ref as React.RefObject<HTMLDivElement>}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`${visible ? "animate-fade-up" : "opacity-0"} w-full h-auto rounded-md`} />
    </div>
  )
}