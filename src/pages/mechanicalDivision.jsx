import {
    Typography,
    Card,
    CardBody,
    Button,
  } from "@material-tailwind/react";
import { TopHeader } from "../components/top-header";
import { Footer } from "../components/footer";
import { Navigation } from "../components/navigationOurServices";
  
  const services = [
    {
      title: "PIPING",
      description: "Our mechanical division provides effective piping solutions for industrial and commercial facilities, ensuring reliability and efficiency.",
      image: "images/piping.avif",
      features: [
        "Industrial Equipment",
        "Process Piping and Equipment",
        "Energy Efficiency Solutions"
      ]
    },
    {
      title: "EQUIPMENT ERECTION",
      description: "We offer comprehensive equipment erection services, ensuring precise installation and alignment of industrial machinery and structures.",
      image: "images/mechanical-equipment-erection.jpg",
      features: [
        "Heavy Machinery Installation",
        "Structural Assembly",
        "Precision Alignment"
      ]
    },
    {
      title: "STEEL STRUCTURE FABRICATION AND ERECTION",
      description: "Our expertise in steel structure fabrication and erection ensures robust and durable constructions for various industrial applications.",
      image: "images/Steel-Structure-Fabrication.jpg",
      features: [
        "Custom Steel Fabrication",
        "On-site Assembly",
        "Quality Assurance"
      ]
    },
    {
      title: "PRE ENGINEERED BUILDINGS",
      description: "We specialize in pre-engineered buildings, offering cost-effective and efficient solutions for industrial and commercial spaces.",
      image: "images/pre-engineered-building.jpg",
      features: [
        "Design and Engineering",
        "Quick Installation",
        "Cost-effective Solutions"
      ]
    },
    {
      title: "VALVES AND INSTRUMENTS",
      description: "Our services include the supply and installation of high-quality valves and instruments for precise control and monitoring of industrial processes.",
      image: "/images/valves.jpg",
      features: [
        "Wide Range of Valves",
        "Instrumentation Solutions",
        "Installation and Maintenance"
      ]
    }
  ];
  
  // const partners = [
  //   { name: "Partner 1", logo: "/images/partners/logo1.png" },
  //   { name: "Partner 2", logo: "/images/partners/logo2.png" },
  //   { name: "Partner 3", logo: "/images/partners/logo3.png" },
  //   { name: "Partner 4", logo: "/images/partners/logo4.png" },
  // ];
  
  export default function Services() {
    return (
      <div className="min-h-screen">
      <TopHeader />
      <Navigation />
        {/* Hero Section */}
        <div className="relative h-[500px] bg-black">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/mechanical.png')",
            }}
          >
            <div className="absolute inset-0 bg-black/70" />
          </div>
          <div className="relative container mx-auto h-full flex flex-col justify-center px-4">
            <Typography variant="h1" className="text-white text-4xl md:text-6xl font-bold max-w-4xl">
              SPECIALIZED MECHANICAL SERVICES FOR EVERY PROJECT
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
          <Typography variant="h2" className="text-3xl font-bold mb-12 text-center">
            OUR MECHANICAL DIVISION
          </Typography>
  
          <div className="space-y-16">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? '' : 'md:grid-flow-dense'
                }`}
              >
                <div className={index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}>
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
                </div>
                <div className={index % 2 === 0 ? '' : 'md:order-first'}>
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
              Beyond our core services, we offer valuable resources to add value to your projects:
            </Typography>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Initial Site Assessment</li>
              <li>Budget and planning services</li>
              <li>Project Management</li>
              <li>Ongoing Maintenance Plans</li>
              <li>Energy Optimization</li>
            </ul>
          </div>
        </div>
            <Footer />
      </div>
    );
  }
  
  