import React from "react";
import ServicePageSSD from "../../components/servicePageSSD";

const fireProofingImages = [
  "/images/fp1.jpg",
  "/images/fp2.jpg",
  "/images/fp3.jpg",
];

export default function FireProofing() {
  return (
    <ServicePageSSD
      title="FIREPROOFING"
      description="Our comprehensive fireproofing solutions are designed to safeguard your facilities and assets from fire hazards. We employ cutting-edge materials and application techniques to ensure your structures meet or exceed safety standards and regulations, providing crucial protection in the event of a fire."
      features={[
        "Advanced intumescent coatings for structural steel protection",
        "Cementitious fireproofing for various building elements",
        "Customized firestop systems for penetrations and joints",
        "Fire-resistant coatings for specialized equipment and machinery",
        "Regular inspections and maintenance to ensure ongoing protection",
        "Compliance with local and international fire safety codes",
      ]}
      images={fireProofingImages}
    />
  );
}
