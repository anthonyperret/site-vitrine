"use client";
import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface Props {
  type: "primary" | "secondary";
  label: string;
  path: string;
}

export default function Button({ type, label, path }: Props) {
  const { ref, visible } = useScrollReveal(1);

  return(

    <div ref={ref as React.RefObject<HTMLDivElement>} className={visible ? "animate-fade-up" : "opacity-0"}>
      <Link href={path} >
        <button className={`px-6 py-2 rounded-sm font-dm-sans ${type === "primary" ? "bg-cuivre text-ivoire" : "border border-ivoire/66 text-ivoire/66"}`}>
          {label}
        </button>
      </Link>
    </div>
  )
}