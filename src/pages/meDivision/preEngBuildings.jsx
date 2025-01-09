import React from 'react';
import ServicePageMED from '../../components/servicePageMED';

const pebImages = [
  "/images/peb1.jpg",
  "/images/peb2.jpg",
  "/images/peb3.jpeg",
  "/images/peb4.jpeg",
];

export default function PreEngineeredBuildings() {
  return (
    <ServicePageMED
      title="PRE ENGINEERED BUILDINGS"
      description="We specialize in pre-engineered buildings, offering cost-effective and efficient solutions for industrial and commercial spaces. Our PEB solutions combine flexibility, durability, and rapid construction to meet diverse client needs."
      features={[
        "Customized design and engineering",
        "Rapid construction and installation",
        "Flexibility for future expansions",
        "Energy-efficient building envelope systems",
        "Integration of MEP systems",
        "Compliance with local building codes and regulations"
      ]}
      images={pebImages}
    />
  );
}

