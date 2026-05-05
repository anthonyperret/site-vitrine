import { services } from "@/data/services";
import ServiceItem from "./ServiceItem";

export default function ServicesGrid() {

  return (
    <div className="grid lg:grid-cols-4 gap-0.5 lg:mt-30 mt-10">
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
