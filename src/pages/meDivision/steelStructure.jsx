import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

const steelImages = [
  "/images/steel1.jpg",
  "/images/steel2.jpg",
  "/images/steel3.jpg",
];

export default function SteelStructure() {
  return (
    <ServicePageTemplate
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

