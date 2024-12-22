import React from "react";
import { Typography } from "@material-tailwind/react"
import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";

const timelineEvents = [
  {
    year: "2012",
    title: "Humble beginning",
    description: "Founded in 2005, Expertise is a leading industrial conglomerate in the Kingdom of Saudi Arabia offering world-class Oil & gas services equipment and a handful of clients. Started with given strength & integrity as the pillars."
  },
  {
    year: "2010",
    title: "Evolving with the market",
    description: "With determination, expert technical background, supply based on the needs of the market."
  },
  {
    year: "2012",
    title: "Transportation Services",
    description: "Started transportation services were scaled to complement field scope."
  },
  {
    year: "2015",
    title: "Accelerating Growth",
    description: "2015: Started oil field/pipeline servicing,renting highest equipment and introduced new line in the Kingdom to serve local and KSA & GCC customers. Company was awarded with several contracts from Saudi Aramco."
  },
  {
    year: "2017",
    title: "Prominent status",
    description: "Expertise established a prominent reputation service provider serving a variety of sectors including petrochemical, oil & gas, fertilizer, power generation, water utilities and water treatment."
  },
  {
    year: "2020",
    title: "Towards the brighter status",
    description: "With the growing corporate image, our challenge is set to extend our services to other geographical areas, led to currently working in multiple GCC countries, Vietnam, Europe and more."
  }
];

const directors = [
  {
    image: "/chairman.jpg",
    name: "Mr. Saud Al-Expertise",
    title: "CHAIRMAN",
    description: "Is leading up the directions of Expertise Corporation, ensuring the implementation of policies and procedures, and responsibilities, with strong vision."
  },
  {
    image: "/president.jpg",
    name: "Mohammed Saud",
    title: "PRESIDENT & CEO",
    description: "With extensive experience in Oil industry is ultimately responsible for the overall direction, the corporate strategies and Policies of Expertise operations."
  }
];

const whyUsPoints = [
  "30+ Years of Marketing Excellence",
  "State-of-the-Art Equipment",
  "Power of Togetherness",
  "Customers served by Expert Staff, Better",
  "Skilled and Trained Workforce"
];

const certifications = [
  {
    title: "Effective certified occupational health & safety management system",
    standard: "OHSAS 18001:2007",
    organization: "UKAS MANAGEMENT SYSTEMS"
  },
  {
    title: "Effective certified environmental management system",
    standard: "ISO 14001:2015",
    description: "For the Management of EHS"
  },
  {
    title: "Safety training - 15 hours",
    description: "Training covering all job processes to build awareness of safety procedures and hazards as well as HSE training requirements"
  }
];

export default function AboutUs() {
  return (
    <main className="flex flex-col min-h-screen">
        <Navigation />
      {/* Hero Section */}
      <div className="relative h-[400px] bg-black">
        <img
          src="/about-hero.jpg"
          alt="About Us Hero"
          fill
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-bold mb-4">ABOUT US</h1>
          <p className="text-xl">One Vision. Extensive Solutions.</p>
        </div>
      </div>

      {/* Who We Are Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">WHO WE ARE</h2>
          <Typography className="text-center max-w-4xl mx-auto">
            Founded in 2005, Expertise is a leading industrial conglomerate in the Kingdom of Saudi Arabia offering world-class Oil & gas services. Our growth spans over petrochemical, oil & gas, fertilizer, power generation, water utilities, and other industrial sectors, providing comprehensive solutions for the present generation and beyond.
          </Typography>
        </div>
      </section>

      {/* Corporate History Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">CORPORATE HISTORY</h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-2 bg-red-500" />
            
            {/* Timeline Events */}
            <div className="space-y-24">
              {timelineEvents.map((event, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                  <div className="w-1/2 px-8">
                    <div className={`${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                      <span className="text-red-600 font-bold text-xl">{event.year}</span>
                      <h3 className="text-xl font-bold mt-2">{event.title}</h3>
                      <p className="mt-2 text-gray-600">{event.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-red-500 rounded-full border-4 border-white" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Directors Section */}
      <section className="py-16 bg-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">OUR DIRECTORS</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {directors.map((director, index) => (
              <div key={index} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <img
                    src={director.image}
                    alt={director.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">{director.name}</h3>
                <p className="text-red-400 font-bold mb-2">{director.title}</p>
                <p className="text-sm text-gray-300">{director.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="/why-us-image.jpg"
                alt="Why Choose Us"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-8">WHY US</h2>
              <ul className="space-y-4">
                {whyUsPoints.map((point, index) => (
                  <li key={index} className="flex items-center">
                    <i className="fas fa-check-circle text-red-600 mr-3" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Committed to Safety Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">COMMITTED TO SAFETY</h2>
          <p className="text-center max-w-4xl mx-auto mb-12">
            Our team principle is to ensure a safe and healthy environment for our employees. We're committed to providing mandatory HSE to all our employees. In compliance with the minimum required standards of our clients. We ensure a safe and healthy workplace to avoid incidents, accidents and occupational illness. We have a dedicated HSE team to ensure all safety measures are in place.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center p-6 border border-gray-700 rounded-lg">
                <h3 className="font-bold mb-4">{cert.title}</h3>
                {cert.standard && <p className="text-sm text-gray-400">{cert.standard}</p>}
                {cert.organization && <p className="text-sm text-gray-400">{cert.organization}</p>}
                {cert.description && <p className="text-sm text-gray-400">{cert.description}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Presence Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">OUR PRESENCE</h2>
          <div className="relative h-[400px] w-full">
            <img
              src="/saudi-map.png"
              alt="Our Presence in Saudi Arabia"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

