import React from "react";
import ServicePageSSD from "../../components/servicePageSSD";

const waterProofingImages = [
  "/images/wp1.jpeg",
  "/images/wp2.jpeg",
  "/images/wp3.jpeg",
];

export default function WaterProofing() {
  return (
    <ServicePageSSD
      title="WATERPROOFING"
      description="Our waterproofing services protect your structures from water damage, ensuring durability and longevity in various environmental conditions. We employ advanced techniques and materials to create effective barriers against water intrusion, safeguarding your investments."
      features={[
        "Comprehensive membrane waterproofing for roofs, basements, and foundations",
        "Cementitious waterproofing for concrete structures",
        "Advanced leak detection and repair services",
        "Elastomeric coatings for flexible waterproofing solutions",
        "Green roof waterproofing systems",
        "Regular maintenance and inspection programs",
      ]}
      images={waterProofingImages}
    />
  );
}
