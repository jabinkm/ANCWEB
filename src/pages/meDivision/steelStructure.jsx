import React from 'react';
import ServicePageMED from '../../components/servicePageMED';

const steelImages = [
  "/images/steel1.jpeg",
  "/images/steel2.jpeg",
  "/images/steel3.jpeg",
];

export default function SteelStructure() {
  return (
    <ServicePageMED
      title="STEEL STRUCTURE FABRICATION AND ERECTION"
      description="Our expertise in steel structure fabrication and erection ensures robust and durable constructions for various industrial applications. We combine cutting-edge technology with skilled craftsmanship to deliver high-quality steel structures."
      features={[
        "Custom steel fabrication for unique project requirements",
        "Advanced welding and joining techniques",
        "Corrosion protection and surface treatments",
        "Structural analysis and engineering support",
        "On-site assembly and erection services",
        "Quality control and inspection at every stage"
      ]}
      images={steelImages}
    />
  );
}

