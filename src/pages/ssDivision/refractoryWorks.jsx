import React from "react";
import ServicePageSSD from "../../components/servicePageSSD";

const refractoryImages = [
  "/images/refractory1.jpeg",
  "/images/refractory2.jpeg",
  "/images/refractory3.jpeg",
];

export default function RefractoryServices() {
  return (
    <ServicePageSSD
      title="REFRACTORY SERVICES"
      description="Our electrical heat tracing solutions are designed to maintain process temperatures, prevent freezing, and ensure efficient operation of pipelines and equipment. We provide comprehensive services from design to installation and maintenance, optimizing your processes and reducing energy costs."
      features={[
        "Custom-designed heat tracing systems for various industrial applications",
        "Installation of self-regulating and constant wattage heating cables",
        "Advanced control and monitoring systems for optimal performance",
        "Energy-efficient solutions to reduce operational costs",
        "Freeze protection for pipes, tanks, and vessels",
        "Maintenance and troubleshooting services for existing heat tracing systems",
      ]}
      images={refractoryImages}
    />
  );
}
