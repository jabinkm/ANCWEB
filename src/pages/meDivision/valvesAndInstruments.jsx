import React from 'react';
import ServicePageMED from '../../components/servicePageMED';

const valveImages = [
  "/images/valves2.jpg",
  "/images/valves3.jpg",
  "/images/valves4.jpg",
];

export default function ValvesAndInstruments() {
  return (
    <ServicePageMED
      title="VALVES AND INSTRUMENTS"
      description="Our services include the supply and installation of high-quality valves and instruments for precise control and monitoring of industrial processes. We provide comprehensive solutions to ensure optimal performance and reliability in your operations."
      features={[
        "Wide range of valve types for various applications",
        "Advanced instrumentation for process control",
        "Customized valve automation solutions",
        "Expert installation and commissioning",
        "Preventive maintenance and calibration services",
        "Compliance with industry standards and regulations"
      ]}
      images={valveImages}
    />
  );
}

