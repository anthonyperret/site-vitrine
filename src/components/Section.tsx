import SectionHeader from "./SectionHeader";
import { ReactNode } from "react";

interface Props {
  bg: "acier" | "fonderie";
  eyebrow: string;
  title: string;
  highlight: string;
  children?: ReactNode;
}

export default function Section({ bg, eyebrow, title, highlight, children }: Props) {
  return(
    <section className={`bg-${bg} 2xl:px-100 lg:py-30 px-5 py-10`}>
            
      <SectionHeader eyebrow={eyebrow} title={title} highlight={highlight} />
      {children}
    </section>
  )
}