"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ReactNode } from "react";

interface Props {
  i: number;
  children?: ReactNode;
}

export default function Footer({children, i}: Props) {

  const { ref, visible } = useScrollReveal(0.5);
  const delay = 0.2

  return (
    <p
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`text-ivoire/66 lg:mt-8 mt-5 ${visible ? "animate-fade-up" : "opacity-0"}`}
      style={{ animationDelay: `${i * delay}s` }}>
      {children}
    </p>
  );
}
