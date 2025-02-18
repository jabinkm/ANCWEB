import React from 'react';
import { Typography } from "@material-tailwind/react";

const clients = [
  { name: "Saudi Aramco", logo: "/images/saudiAramco.png" },
  { name: "SABIC", logo: "/images/sabic.png" },
  { name: "Tasnee Petrochemicals", logo: "/images/tasnee.png" },
  { name: "Saudi Electricity (SEC)", logo: "/images/saudiElectricity.png" },
  { name: "Farabi Petrochemicals", logo: "/images/farabi.svg" },
  { name: "Chemanol", logo: "/images/chemanol.png" },
  { name: "Luberef", logo: "/images/luberef.png" },
  { name: "Larsen and Toubro", logo: "/images/larsen-toubro.png" },
  { name: "BCI", logo: "/images/bci.png" },
  { name: "Linde", logo: "/images/linde.png" },
  { name: "S-Chem", logo: "/images/schem.png" },
  { name: "Samsung Engineering", logo: "/images/samsung-engineering.png" },
  { name: "Hyundai Engineering", logo: "/images/hyundai-engineering.svg" },
  { name: "Saipem", logo: "/images/Saipem.webp" },
  { name: "SK E&C", logo: "/images/SKEC.png" },
  { name: "Sinopec", logo: "/images/sinopec.png" },
  { name: "Air Products", logo: "/images/AirProducts.png" },
  { name: "Siemens", logo: "/images/Siemens.png" },
  { name: "Gesat", logo: "/images/Gesat.png" },
  // Add more clients as needed
];

export default function OurClients() {
  return (
    <div className="w-full bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* <Typography variant="h3" className="text-center mb-8">
          Our Clients
        </Typography> */}
         <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">Our Clients</h2>
        <div className="relative">
          <div className="flex animate-scroll-fast hover:animate-scroll gap-16">
            {[...clients, ...clients].map((client, index) => (
              <div key={index} className="flex-shrink-0 w-64 mx-4">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-full h-64 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
