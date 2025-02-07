import React from "react";
import ServicePageSSD from "../../components/servicePageSSD";

const EHTImages = [
  "/images/EHT1.jpg",
  "/images/EHT2.jpeg",
  "/images/EHT3.jpeg",
];

export default function ElectricalHeatTracing() {
  return (
    <ServicePageSSD
      title="ELECTRICAL HEAT TRACING"
      description="Our electrical heat tracing solutions are designed to maintain process temperatures, prevent freezing, and ensure efficient operation of pipelines and equipment. We provide comprehensive services from design to installation and maintenance, optimizing your processes and reducing energy costs."
      features={[
        "Custom-designed heat tracing systems for various industrial applications",
        "Installation of self-regulating and constant wattage heating cables",
        "Advanced control and monitoring systems for optimal performance",
        "Energy-efficient solutions to reduce operational costs",
        "Freeze protection for pipes, tanks, and vessels",
        "Maintenance and troubleshooting services for existing heat tracing systems",
      ]}
      images={EHTImages}
    />
  );
}
