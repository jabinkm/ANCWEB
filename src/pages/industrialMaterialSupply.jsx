import React from 'react';
import { motion } from 'framer-motion';
import { Typography, Card, CardBody, Button } from "@material-tailwind/react";
import { Zap, Shield, Cable, Gauge, PipetteIcon as Pipe, Box, Wrench } from 'lucide-react';
import { Navigation } from '../components/navigationOurServices';
import { Footer } from '../components/footer';
import { Link } from 'react-router-dom';

const categories = [
  {
    title: "Pipe and Fittings",
    icon: <Wrench size={40} />,
    description: "Comprehensive range of high-quality pipes and fittings for various industrial applications, including water supply, gas & oil distribution, and chemical processing. Our products ensure leak-free connections and long-lasting performance.",
  },
  {
    title: "Electrical Materials",
    icon: <Zap size={40} />,
    description: "Wide selection of electrical components for industrial and domestic use, including switchgears, transformers, control panels, and wiring accessories. We provide reliable solutions for all your electrical needs.",
  },
  {
    title: "Hazardous and Non-Hazardous Fittings",
    icon: <Shield size={40} />,
    description: "Specialized fittings designed for both hazardous and non-hazardous environments, ensuring safety and compliance in all conditions. Our products meet strict industry standards and regulations.",
  },
  {
    title: "Cables and Cable Ladders",
    icon: <Cable size={40} />,
    description: "Extensive range of cables and cable management solutions, including power cables, fiber optics, and robust cable ladder systems. We offer products that ensure efficient and organized cable installations.",
  },
  {
    title: "Instrumentation Tubes",
    icon: <Gauge size={40} />,
    description: "Precision instrumentation tubes for various industrial applications, ensuring accurate measurements and reliable performance. Our tubes are suitable for high-pressure and corrosive environments.",
  },
  {
    title: "Tube Fittings for Petroleum Constructions",
    icon: <Pipe size={40} />,
    description: "Specialized tube fittings designed for the demanding requirements of petroleum industry constructions. Our fittings provide secure connections and resist extreme temperatures and pressures.",
  },
  {
    title: "Conduit and Conduit Fittings",
    icon: <Box size={40} />,
    description: "Comprehensive range of conduits and fittings for electrical and communication cable protection in diverse environments. We offer solutions that ensure safety and longevity of your electrical systems.",
  },
];
export default function IndustrialMaterialSupply() {
  return (
    <div className="min-h-screen bg-gray-100">
        <Navigation />
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[600px] bg-blue-gray-900 flex items-center justify-center"
      >
        {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/industrialMS.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 text-center text-white">
          <motion.h1
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl font-bold mb-4"
          >
            Industrial Material Supply
          </motion.h1>
          <motion.p
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl"
          >
            Your Trusted Partner in Industrial Solutions
          </motion.p>
        </div>
      </motion.section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography variant="h2" color="blue-gray" className="mb-4 text-center">
              About Our Industrial Trading
            </Typography>
            <Typography className="text-center max-w-3xl mx-auto">
              We are one of the reputed importers and suppliers, specialized in supporting various types of Industrial and Domestic Electrical & Instrumentation, Construction materials, Safety items, and Fasteners. With years of experience and a commitment to quality, we provide comprehensive solutions to meet the diverse needs of our clients across industries.
            </Typography>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Typography variant="h2" color="blue-gray" className="mb-8 text-center">
            Our Product Categories
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-blue-gray-900 hover:shadow-lg transition-shadow duration-300">
                  <CardBody>
                    <div className="flex items-center justify-center mb-4 text-red-500">
                      {category.icon}
                    </div>
                    <Typography variant="h5" color="white" className="mb-2 text-center">
                      {category.title}
                    </Typography>
                    <Typography className="text-center text-blue-gray-200">
                      {category.description}
                    </Typography>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography variant="h3" className="mb-4">
              Ready to Elevate Your Industrial Solutions?
            </Typography>
            <Typography className="mb-8">
              Contact us today to discuss how we can support your project with our comprehensive range of industrial materials and expertise.
            </Typography>
            <Link to="/contact-us">
            <Button size="lg" color="red" ripple="light">
              Get in Touch
            </Button>
            </Link>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

