import React from "react";
import ServicePageSSD from "../../components/servicePageSSD";

const refractoryImages = [
  "/images/RFT1.jpg",
  "/images/RFT2.jpg",
  "/images/RFT3.jpg",
];

export default function RefractoryServices() {
  return (
    <ServicePageSSD
      title="REFRACTORY SERVICES"
      description="Our refractory services include the installation, repair, and maintenance of refractory materials to ensure the longevity and efficiency of your industrial equipment. We offer tailored solutions to meet the specific needs of your operations, enhancing performance and reducing downtime."
      features={[
        "Custom-designed refractory solutions for various industrial applications",
        "Installation of high-quality refractory materials",
        "Repair and maintenance services to extend the life of your equipment",
        "Advanced techniques for optimal performance",
        "Energy-efficient solutions to reduce operational costs",
        "Inspection and troubleshooting services for existing refractory systems",
      ]}
      images={refractoryImages}
    />
  );
}
