import { productions } from "@/data/productions";
import ProductionItem from "./ProductionItem";

interface Props {
  limit: number;
}

export default function ProductionsGrid({limit}: Props) {

  return (
    <div className="grid grid-cols-3 gap-0.5 mt-30">
      {productions.slice(0, limit).map((production, i) => (

        <ProductionItem
          key={i}
          production={production}
          i={i}
        />
        
      ))}
    </div>
  );
}
