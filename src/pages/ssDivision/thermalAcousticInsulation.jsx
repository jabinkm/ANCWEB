import React from "react";
import ServicePageSSD from "../../components/servicePageSSD";

const thermalAcousticInsulationImages = [
  "/images/insulation1.jpg",
  "/images/insulation3.jpg",
  "/images/insulation2.jpg",
];

export default function ThermalAcousticInsulation() {
  return (
    <ServicePageSSD
      title="THERMAL & ACOUSTIC INSULATION"
      description="Our thermal and acoustic insulation services provide top-notch solutions to enhance energy efficiency and reduce noise pollution in industrial and commercial settings. We use cutting-edge materials and techniques to create comfortable, energy-efficient environments that meet the highest industry standards."
      features={[
        "High-performance insulation materials for optimal thermal efficiency",
        "Advanced acoustic solutions for noise reduction in various environments",
        "Custom-designed insulation systems for specific industry requirements",
        "Energy-saving techniques that reduce heating and cooling costs",
        "Compliance with international safety and environmental standards",
        "Expert installation by certified professionals",
      ]}
      images={thermalAcousticInsulationImages}
    />
  );
}
