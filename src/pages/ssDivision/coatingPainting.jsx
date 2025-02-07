import React from "react";
import ServicePageSSD from "../../components/servicePageSSD";

const coatingPaintingImages = [
  "/images/painting3.jpeg",
  "/images/painting2.webp",
  "/images/painting5.jpg",
];

export default function CoatingPainting() {
  return (
    <ServicePageSSD
      title="COATING AND PAINTING"
      description="Our coating and painting services offer superior protection for your structures and equipment against corrosion, wear, and environmental damage. We use state-of-the-art coating technologies and high-quality paints to ensure longevity, durability, and aesthetic appeal for your industrial and commercial assets."
      features={[
        "Advanced anti-corrosion coatings for extended asset life",
        "Industrial painting solutions for various surfaces and environments",
        "Specialized surface preparation techniques for optimal adhesion",
        "Custom color matching and aesthetic enhancements",
        "Environmentally friendly and low-VOC coating options",
        "Regular maintenance and touch-up services",
      ]}
      images={coatingPaintingImages}
    />
  );
}
