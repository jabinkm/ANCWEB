import React from "react";
import ServicePageSSD from "../../components/servicePageSSD";

const scaffoldingServicesImages = [
  "/images/scaff1.jpg",
  "/images/scaff2.jpg",
  "/images/scaff3.jpg",
];

export default function ScaffoldingServices() {
  return (
    <ServicePageSSD
      title="SCAFFOLDING SERVICES"
      description="Our scaffolding services provide safe and reliable access solutions for construction, maintenance, and repair projects. We prioritize worker safety and project efficiency, offering custom scaffolding designs that meet the unique requirements of each job site."
      features={[
        "Custom scaffolding design for complex structures and unique project needs",
        "Efficient erection and dismantling by certified professionals",
        "Regular safety inspections and maintenance throughout project duration",
        "Wide range of scaffolding types including tube and fitting, system, and suspended scaffolds",
        "Compliance with OSHA and other relevant safety standards",
        "Load calculation and structural analysis for optimal safety",
      ]}
      images={scaffoldingServicesImages}
    />
  );
}