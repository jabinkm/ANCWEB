import React from "react";
import { Typography } from "@material-tailwind/react";
import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";

const timelineEvents = [
  {
    year: "2012",
    title: "ANC Arabia",
    description:
      "Humble beginning as an Establishment for catering industrial requirements in 2012, ANC Arabia Started with given strength & integrity as the pillars.",
  },
  {
    year: "2015",
    title: "Specialty Services Division",
    description:
      "Expanded services to include Thermal & Acoustic Insulation, Blasting & Painting, Fireproofing, Refractory, and Scaffolding",
  },
  {
    year: "2020",
    title: "EHT Division",
    description:
      "Launched Electrical Heat Tracing System and Leak Detection System services",
  },
  {
    year: "2021",
    title: "Mechanical Division",
    description:
      "Added comprehensive mechanical services including Pipes & Pipe Supports, Structures, Equipment, and Pre-engineered Buildings",
  },
  {
    year: "2023",
    title: "Civil Projects",
    description:
      "Expanded into Facility Management, Project Site Management, Civil & Road Construction, and Waterproofing",
  },
];
const statistics = [
  {
    number: "350+",
    label: "Employees",
  },
  {
    number: "100+",
    label: "Equipments",
  },
  {
    number: "15,000+",
    label: "Sq. Mtr Facility",
  },
  {
    number: "12+",
    label: "Years of Industrial presence in Kingdom",
  },
];
const coreValues = [
  {
    icon: "fas fa-cogs",
    title: "Efficiency",
    color: "text-red-600",
  },
  {
    icon: "fas fa-shield-alt",
    title: "Reliability",
    color: "text-red-600",
  },
  {
    icon: "fas fa-handshake",
    title: "Commitment",
    color: "text-red-600",
  },
];

const directors = [
  {
    image: "/chairman.jpg",
    name: "Ahmed yoosuf Al Nujaidhi",
    title: "CHAIRMAN",
    description:
      "Is leading up the directions of ANC Corporation, ensuring the implementation of policies and procedures, and responsibilities, with strong vision.",
  },
  {
    image: "images/shamnadkka.jpg",
    name: "Shamnad Hamza",
    title: "CEO",
    description:
      "With extensive experience in Oil industry is ultimately responsible for the overall direction, the corporate strategies and Policies of ANC operations.",
  },
];

const whyUsPoints = [
  "12+ Years of Marketing Excellence",
  "State-of-the-Art Equipment",
  "Power of Togetherness",
  "Customers served by Expert Staff, Better",
  "Skilled and Trained Workforce",
];

const certifications = [
  {
    title: "Effective certified occupational health & safety management system",
    standard: "OHSAS 18001:2007",
    organization: "UKAS MANAGEMENT SYSTEMS",
  },
  {
    title: "Effective certified environmental management system",
    standard: "ISO 14001:2015",
    description: "For the Management of EHS",
  },
  {
    title: "Safety training - 15 hours",
    description:
      "Training covering all job processes to build awareness of safety procedures and hazards as well as HSE training requirements",
  },
];

export default function AboutUs() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navigation />
      {/* Hero Section */}
      <div className="relative h-[500px] bg-black">
        <img
          src="images/ksamap.jpg"
          alt="About Us Hero"
          fill
          className="object-cover opacity-50 h-[500px] w-full"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-bold mb-4">ABOUT ANC ARABIA</h1>
          <p className="text-xl">One Word. Substantial Solutions.</p>
        </div>
      </div>

      {/* Who We Are Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">WHO WE ARE</h2>
          <Typography className="text-center max-w-4xl mx-auto">
            AHMED YOOSUF AL NUJAIDHI CONTRACTING company was established in the
            year 2012 with its headquarters in Jubail and 100% Saudi Company
            with highly skilled workforce. We offer mechanical industrial
            solutions to the petrochemical, refinery and power generation
            industries including a variety of specialized services such as
            Thermal & Acoustic Insulation, Coating & Painting, Electrical Heat
            Tracing, Bolt Torquing and Pipe Cold Cutting Services etc. We are
            backed by a highly experienced and qualified manpower as well a
            devoted and professional management team.
           
            {/* Founded in 2012, ANC Arabia is a leading industrial conglomerate in the Kingdom of Saudi Arabia offering world-class Oil & gas services. Our growth spans over petrochemical, oil & gas, fertilizer, power generation, water utilities, and other industrial sectors, providing comprehensive solutions for the present generation and beyond. */}
          </Typography>
        </div>
      </section>

      {/* Our Numbers Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center shadow-xl rounded-lg">
                <div className="mb-2">
                  <span className="text-red-600 text-5xl font-bold">
                    {stat.number}
                  </span>
                </div>
                <Typography className="text-lg font-medium">
                  {stat.label}
                </Typography>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-12 mt-8">
            {coreValues.map((value, index) => (
              <div key={index} className="flex items-center gap-3">
                <i className={`${value.icon} ${value.color} text-2xl`}></i>
                <Typography className="text-xl font-medium">
                  {value.title}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate History Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            CORPORATE HISTORY
          </h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-3 bg-red-600" />

            {/* Timeline Events */}
            <div className="space-y-24">
              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? "flex-row-reverse" : ""
                  }`}
                >
                  <div className="w-1/2 px-8">
                    <div
                      className={`${
                        index % 2 === 0 ? "text-left" : "text-right"
                      }`}
                    >
                      <span className="text-red-600 font-bold text-xl">
                        {event.year}
                      </span>
                      <h3 className="text-xl font-bold mt-2">{event.title}</h3>
                      <p className="mt-2 text-gray-600">{event.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-red-500 rounded-full border-4 border-white hover:w-16 hover:h-16 duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Directors Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            OUR DIRECTORS
          </h2>
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
                <p className="text-red-100 font-bold mb-2">{director.title}</p>
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
          <h2 className="text-3xl font-bold text-center mb-8">
            COMMITTED TO SAFETY
          </h2>
          <p className="text-center max-w-4xl mx-auto mb-12">
            Our team principle is to ensure a safe and healthy environment for
            our employees. We're committed to providing mandatory HSE to all our
            employees. In compliance with the minimum required standards of our
            clients. We ensure a safe and healthy workplace to avoid incidents,
            accidents and occupational illness. We have a dedicated HSE team to
            ensure all safety measures are in place.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="text-center p-6 border border-gray-700 rounded-lg"
              >
                <h3 className="font-bold mb-4">{cert.title}</h3>
                {cert.standard && (
                  <p className="text-sm text-gray-400">{cert.standard}</p>
                )}
                {cert.organization && (
                  <p className="text-sm text-gray-400">{cert.organization}</p>
                )}
                {cert.description && (
                  <p className="text-sm text-gray-400">{cert.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Presence Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">OUR PRESENCE</h2>
          <div className="relative w-full h-[600px]">
            <img
              src="images/ksamap.jpg"
              alt="Our Presence in Saudi Arabia"
              fill=""
              className="object-contain h-[600px] mx-auto"
            />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
