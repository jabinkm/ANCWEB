import React from 'react';
import ServicePageMED from '../../components/servicePageMED';

const coatingAndPaintingImages = [
  "/images/equipment1.jpeg",
  "/images/equipment2.jpeg",
  "/images/equipment3.jpeg",
];

export default function EquipmentErection() {
  return (
    <ServicePageMED
      title="EQUIPMENT ERECTION"
      description="We offer comprehensive equipment erection services, ensuring precise installation and alignment of industrial machinery and structures. Our team of skilled professionals handles complex projects with utmost care and efficiency."
      features={[
        "Turnkey equipment installation solutions",
        "Precision alignment and calibration",
        "Rigging and heavy lifting capabilities",
        "Integration with existing systems",
        "Adherence to strict safety protocols",
        "Post-installation testing and commissioning"
      ]}
      images={coatingAndPaintingImages}
    />
  );
}

