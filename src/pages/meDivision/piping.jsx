import React from 'react';
import ServicePageMED from '../../components/servicePageMED';

const pipingImages = [
  "/images/pipe1.jpg",
  "/images/pipe2.jpeg",
  "/images/pipe3.jpeg",
];

export default function Piping() {
  return (
    <ServicePageMED
      title="PIPING"
      description="Our mechanical division provides effective piping solutions for industrial and commercial facilities, ensuring reliability and efficiency. We specialize in designing, installing, and maintaining complex piping systems that meet the highest industry standards."
      features={[
        "Custom piping design and layout",
        "High-pressure and high-temperature piping systems",
        "Corrosion-resistant materials selection",
        "Compliance with industry regulations and safety standards",
        "Advanced welding techniques and quality control",
        "Preventive maintenance and repair services"
      ]}
      images={pipingImages}
    />
  );
}

