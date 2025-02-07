import { Typography, Card, CardBody, Button } from "@material-tailwind/react";
import { Footer } from "../components/footer";
import { Navigation } from "../components/navigationOurServices";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const services = [
  {
    title: "MECHANICAL DIVISION",
    sublink: "/mechanical-division",
    description:
      "Our mechanical division specializes in providing high-quality mechanical services, including installation, maintenance, and repair of mechanical systems.",
     
    image: "images/mechanical.png",
    features: [
      "PIPING",
      "EQUIPMENT ERECTION",
      "STEEL STRUCTURE FABRICATION AND ERECTION",
      "PRE ENGINEERED BUILDINGS",
      "VALVES AND INSTRUMENTS",
    ],
  },
  {
    title: "SPECIALITY SERVICE DIVISION",
    sublink: "/speciality-service-division",
    description:
      "Our speciality service division offers a comprehensive range of specialized services designed to meet the unique needs of various industries. From thermal and acoustic insulation to fireproofing and refractory works, we provide expert solutions that ensure safety, efficiency, and compliance with industry standards. Our team of skilled professionals is dedicated to delivering high-quality services that enhance the performance and longevity of your projects.",
    image: "images/insulation1.jpg",
    features: [
      "THERMAL & ACOUSTIC INSULATION",
      "COATIN & PAINTING",
      "FIREPROOFING",
      "SCAFFOLDING SERVICES",
      "REFRACTORY WORKS",
      "WATER PROOFING",
      "ELECTRICAL HEAT TRACING",
    ],
  },
  {
    title: "INDUSTRIAL MATERIALS SUPPLY",
    sublink: "/industrial-materials-supply",
    description:
      "Our industrial materials supply division provides a wide range of high-quality materials essential for various industrial applications. We ensure timely delivery and adherence to industry standards, supporting your projects with reliable and efficient supply solutions.",
    
    image: "/images/supply4.jpg",
    features: [
      "PIPE AND FITTINGS",
      "ELECTRICAL MATERIALS",
      "HAZARDOUS AND NON HAZARDOUS CHEMICALS",
      "CABLES AND CABLE LADDERS",
      "INSTRUMENTATION TUBES",
      "TUBE FITTINGS FOR PETROLEUM CONSTRUCTIONS",
      "CONDUIT AND CONDUIT FITTINGS",
    ],
  },

];

function AnimatedSection({ children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

export default function OurServices() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[600px] bg-black"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/serviceHero.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative container mx-auto h-full flex flex-col justify-center px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Typography
              variant="h1"
              className="text-white text-4xl md:text-6xl font-bold max-w-4xl"
            >
              SERVICES PROVIDED BY ANC ARABIA
            </Typography>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Typography className="text-gray-300 mt-4 max-w-2xl">
              Working with the highest engineered specifications.
            </Typography>
          </motion.div>
        </div>
      </motion.div>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-4">
          {services.map((service, index) => (
            <Link key={index} to={service.sublink}>
              <Button className="bg-blue-gray-900 text-white hover:text-white px-4 py-2 rounded-full hover:bg-red-700 transition duration-300">
                {service.title}
              </Button>
            </Link>
          ))}
        </div>
      </div>
      {/* Services Section */}
      <div className="container mx-auto px-4 py-16">
        <AnimatedSection>
          <Typography
            variant="h2"
            className="text-3xl font-bold mb-12 text-center"
          >
            OUR SERVICE DIVISION
          </Typography>
        </AnimatedSection>

        <div className="space-y-16">
          {services.map((service, index) => (
            <AnimatedSection key={index}>
              <div
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
                      <motion.li
                        key={featureIndex}
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                          delay: 0.1 * featureIndex,
                          duration: 0.5,
                        }}
                      >
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <Link to={service.sublink}>
                      <Button className="lg:inline-block bg-blue-gray-900 text-white hover:text-white px-6 py-2 rounded-full hover:bg-red-700 transition duration-300 mt-8 ml-8">
                        view more
                      </Button>
                    </Link>
                  </motion.div>
                </div>
                <motion.div
                  className={index % 2 === 0 ? "" : "md:order-first"}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[300px] object-cover rounded-lg shadow-lg"
                  />
                </motion.div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Other Resources Section */}
        <AnimatedSection>
          <div className="mt-16">
            <Typography variant="h3" className="text-2xl font-bold mb-4">
              OTHER RESOURCES
            </Typography>
            <Typography className="text-gray-700 mb-4">
              Beyond our core services, we offer valuable resources to add value
              to your projects:
            </Typography>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {[
                "Initial Site Assessment",
                "Budget and planning services",
                "Project Management",
                "Ongoing Maintenance Plans",
                "Energy Optimization",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      </div>
      <Footer />
    </div>
  );
}
