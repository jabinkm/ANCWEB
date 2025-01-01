import { Typography, Card, CardBody, Button } from "@material-tailwind/react";
import { TopHeader } from "../components/top-header";
import { Footer } from "../components/footer";
import { Navigation } from "../components/navigationOurServices";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "THERMAL AND ACOUSTIC INSULATION",
    // sublink: "/thermal-and-acoustic-insulation",
    description:
      "We provide top-notch thermal and acoustic insulation services to enhance energy efficiency and reduce noise pollution in industrial and commercial settings.",
    image: "images/specialityService.webp",
    features: [
      "High-Performance Insulation Materials",
      "Noise Reduction Solutions",
      "Energy Saving Techniques",
    ],
  },
  {
    title: "COATING & PAINTING",
    // sublink: "/coating-and-painting",
    description:
      "Our coating and painting services protect your structures and equipment from corrosion, wear, and environmental damage, ensuring longevity and durability.",
    image: "images/painting.jpg",
    features: [
      "Anti-Corrosion Coatings",
      "Industrial Painting",
      "Surface Preparation",
    ],
  },
  {
    title: "FIREPROOFING",
    // sublink: "/fireproofing",
    description:
      "We offer comprehensive fireproofing solutions to safeguard your facilities and assets from fire hazards, complying with safety standards and regulations.",
    image: "images/fireproofing.jpg",
    features: [
      "Intumescent Coatings",
      "Cementitious Fireproofing",
      "Firestop Systems",
    ],
  },
  {
    title: "SCAFFOLDING SERVICES",
    description:
      "Our scaffolding services provide safe and reliable access solutions for construction, maintenance, and repair projects, ensuring worker safety and project efficiency.",
    image: "images/scaffolding.jpg",
    features: [
      "Custom Scaffolding Design",
      "Erection and Dismantling",
      "Safety Inspections",
    ],
  },
  {
    title: "REFRACTORY WORKS",
    description:
      "We specialize in refractory works, offering installation and maintenance of high-temperature resistant materials for furnaces, kilns, and other industrial applications.",
    image: "/images/refractory.jpeg",
    features: [
      "Refractory Lining Installation",
      "Maintenance and Repair",
      "High-Temperature Solutions",
    ],
  },
  {
    title: "WATER PROOFING",
    description:
      "Our waterproofing services protect your structures from water damage, ensuring durability and longevity in various environmental conditions.",
    image: "/images/waterproofing.jpg",
    features: [
      "Membrane Waterproofing",
      "Cementitious Waterproofing",
      "Leak Detection and Repair",
    ],
  },
  {
    title: "ELECTRICAL HEAT TRACING",
    description:
      "We provide electrical heat tracing solutions to maintain process temperatures, prevent freezing, and ensure efficient operation of pipelines and equipment.",
    image: "/images/electricalHeatTracing.jpg",
    features: [
      "Self-Regulating Heating Cables",
      "Control and Monitoring Systems",
      "Installation and Maintenance",
    ],
  },
];

// const partners = [
//   { name: "Partner 1", logo: "/images/partners/logo1.png" },
//   { name: "Partner 2", logo: "/images/partners/logo2.png" },
//   { name: "Partner 3", logo: "/images/partners/logo3.png" },
//   { name: "Partner 4", logo: "/images/partners/logo4.png" },
// ];

export default function SSD() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen">
      <TopHeader />
      <Navigation />
      {/* Hero Section */}
      <div className="relative h-[500px] bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/specialityServices.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative container mx-auto h-full flex flex-col justify-center px-4">
          <Typography
            variant="h1"
            className="text-white text-4xl md:text-6xl font-bold max-w-4xl"
          >
            SPECIALITY SERVICE DIVISION FOR EVERY PROJECT
          </Typography>
          <Typography className="text-gray-300 mt-4 max-w-2xl">
            Working with the highest engineered specifications.
          </Typography>
        </div>
      </div>

      {/* Partners Section
        <div className="bg-white py-8 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center items-center gap-8">
              {partners.map((partner, index) => (
                <img
                  key={index}
                  src={partner.logo}
                  alt={partner.name}
                  className="h-12 object-contain grayscale hover:grayscale-0 transition-all"
                />
              ))}
            </div>
          </div>
        </div>
   */}
      {/* Services Section */}
      <div className="container mx-auto px-4 py-16">
        <Typography
          variant="h2"
          className="text-3xl font-bold mb-12 text-center"
        >
          OUR SPECIALITY SERVICE DIVISION
        </Typography>

        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 0 ? "" : "md:grid-flow-dense"
              }`}
            >
              <div className={index % 2 === 0 ? "md:pr-8" : "md:pl-8"}>
                <Typography variant="h3" className="text-2xl font-bold mb-4">
                  {service.title}
                </Typography>
                <Typography className="text-gray-700 mb-4">
                  {service.description}
                </Typography>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
                <Link to={service.sublink}>
                <Button className="lg:inline-block bg-blue-gray-200 text-red-500 hover:text-white px-6 py-2 rounded-full hover:bg-red-700 transition duration-300 mt-8 ml-8">
                  view more
                </Button>
              </Link>
              </div>
              <div className={index % 2 === 0 ? "" : "md:order-first"}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[300px] object-cover rounded-lg shadow-lg"
                />
              </div>
              
            </div>
          ))}
        </div>

        {/* Other Resources Section */}
        <div className="mt-16">
          <Typography variant="h3" className="text-2xl font-bold mb-4">
            OTHER RESOURCES
          </Typography>
          <Typography className="text-gray-700 mb-4">
            Beyond our core services, we offer valuable resources to add value
            to your projects:
          </Typography>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            {/* <li>Initial Site Assessment</li>
              <li>Budget and planning services</li>
              <li>Project Management</li>
              <li>Ongoing Maintenance Plans</li>
              <li>Energy Optimization</li> */}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
