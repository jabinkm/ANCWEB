import {
    Typography,
    Card,
    CardBody,
    Button,
  } from "@material-tailwind/react";
import { TopHeader } from "../components/top-header";
import { Navigation } from "../components/navigationProjects";
import { Footer } from "../components/footer";
  
  const services = [
    {
      title: "MECHANICAL INSULATION",
      description: "Our mechanical insulation services provide effective thermal management solutions for industrial and commercial facilities.",
      image: "/images/services/mechanical.jpg",
      features: [
        "Industrial Equipment",
        "Process Piping and Equipment",
        "Energy Efficiency Solutions"
      ]
    },
    {
      title: "INDUSTRIAL INSULATION",
      description: "We provide comprehensive industrial insulation consulting & design services to help you achieve maximum efficiency and cost-effectiveness.",
      image: "/images/services/industrial.jpg",
      features: [
        "Process Applications",
        "Storage Tank Insulation",
        "Advanced Energy Solutions"
      ]
    },
    {
      title: "COMMERCIAL INSULATION",
      description: "Our commercial insulation solutions help reduce energy costs and maintain comfortable environments in commercial buildings.",
      image: "/images/services/commercial.jpg",
      features: [
        "HVAC and Plumbing Systems",
        "Building Insulation",
        "Energy Conservation Solutions"
      ]
    },
    {
      title: "DUCT INSULATION",
      description: "We specialize in providing cost-effective ducting solutions, offering a full range of services from design and fabrication to installation and maintenance.",
      image: "/images/services/duct.jpg",
      features: [
        "Commercial/Industrial HVAC Ducting",
        "Ventilation Systems",
        "Technical Consulting",
        "Installation Services"
      ]
    },
    {
      title: "PIPE INSULATION",
      description: "Our pipe insulation solutions provide thermal efficiency, condensation control, and protection for various piping systems.",
      image: "/images/services/pipe.jpg",
      features: [
        "Chilled Water Distribution Systems",
        "Hot Water and Heating Hot Water Pipes",
        "Steam and Condensate Lines"
      ]
    },
    {
      title: "EQUIPMENT INSULATION",
      description: "Comprehensive equipment insulation solutions for a wide range of industrial applications.",
      image: "/images/services/equipment.jpg",
      features: [
        "Boilers",
        "Generators",
        "Heat Exchangers",
        "Vessels",
        "Tanks",
        "Turbines",
        "Industrial Equipment",
        "Mechanical Systems & Process Piping"
      ]
    },
    {
      title: "FABRICATION",
      description: "We provide custom fabrication solutions for all mechanical and process applications. Our fabrication is done in a state-of-the-art facility by experienced craftsmen.",
      image: "/images/services/fabrication.jpg",
      features: [
        "Custom Covers",
        "Removable Pads",
        "Metal Jacketing",
        "Vessels"
      ]
    }
  ];
  
  const partners = [
    { name: "Partner 1", logo: "/images/partners/logo1.png" },
    { name: "Partner 2", logo: "/images/partners/logo2.png" },
    { name: "Partner 3", logo: "/images/partners/logo3.png" },
    { name: "Partner 4", logo: "/images/partners/logo4.png" },
  ];
  
  export default function Services() {
    return (
      <div className="min-h-screen">\
      <TopHeader />
      <Navigation />
        {/* Hero Section */}
        <div className="relative h-[500px] bg-black">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/services/hero-bg.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-black/70" />
          </div>
          <div className="relative container mx-auto h-full flex flex-col justify-center px-4">
            <Typography variant="h1" className="text-white text-4xl md:text-6xl font-bold max-w-4xl">
              SPECIALIZED INSULATION SERVICES FOR EVERY PROJECT
            </Typography>
            <Typography className="text-gray-300 mt-4 max-w-2xl">
              Working with the highest engineered specifications. From pipes and industrial equipment to HVAC systems and storage tanks.
            </Typography>
          </div>
        </div>
  
        {/* Partners Section */}
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
  
        {/* Services Section */}
        <div className="container mx-auto px-4 py-16">
          <Typography variant="h2" className="text-3xl font-bold mb-12 text-center">
            OUR INSULATION SOLUTIONS
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
  
  