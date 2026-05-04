import { services } from "@/data/services";
import ServiceItem from "./ServiceItem";

export default function ServicesGrid() {

  return (
    <div className="grid grid-cols-4 gap-0.5 mt-30">
      {services.map((service, i) => (
        
        <ServiceItem
          key={i}
          service={service}
          i={i}
        />

      ))}
    </div>
  );
}
