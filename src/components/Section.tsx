import SectionHeader from "./SectionHeader";
import { ReactNode } from "react";

interface Props {
  bg: "acier" | "fonderie";
  title: string;
  highlight: string;
  children?: ReactNode;
}

export default function Section({ bg, title, highlight, children }: Props) {
  return(
    <section className={`bg-${bg} xl:px-20 lg:px-40 md:px-30 lg:py-20 py-10 px-5 flex flex-col items-center flex-1`}>

      <div className="xl:w-2/3 lg:w-full md:w-full"> 
        <SectionHeader title={title} highlight={highlight} />
        {children}
      </div> 
    </section>
  )
}