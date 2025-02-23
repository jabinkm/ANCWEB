import { Typography, Card, CardBody, Button } from "@material-tailwind/react";
import { Footer } from "../components/footer";
import { Navigation } from "../components/navigationOurServices";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const services = [
  {
    title: "THERMAL AND ACOUSTIC INSULATION",
    sublink: "/speciality-service-division/thermal-and-acoustic-insulation",
    description:
      "We provide top-notch thermal and acoustic insulation services to enhance energy efficiency and reduce noise pollution in industrial and commercial settings.",
    image: "images/specialityService.webp",
    features: [
      "Hot, Cold and Acoustic Insulations",
      "High-Performance Insulation Materials",
      "Noise Reduction Solutions",
      "Energy Saving Techniques",
    ],
  },
  {
    title: "COATING & PAINTING",
    sublink: "/speciality-service-division/coating-and-painting",
    description:
      "Our coating and painting services protect your structures and equipment from corrosion, wear, and environmental damage, ensuring longevity and durability.Our highly skilled professional and experienced team can provide full scope of services related to Sand blasting and Painting:",
    image: "images/painting.jpg",
    features: [
      "Epoxy Coating Systems",
      "Polyurethane Coating Systems",
      "Alkyd Enamel Coating System",
      "Aluminum-Pigmented Alkyd Coating System",
      "Chlorinated Rubber Coating System",
      "Bituminous Paint",
      "High Temperature Coating Systems",
      "Tape Wrapping",
      "Anti-Corrosion Coatings",
      "Industrial Painting",
      "Surface Preparation",
    ],
  },
  {
    title: "FIREPROOFING",
    sublink: "/speciality-service-division/fireproofing",
    description:
      "We offer comprehensive fireproofing solutions to safeguard your facilities and assets from fire hazards, complying with safety standards and regulations.",
    image: "/images/fireproofing.jpg",
    features: [
      "Intumescent Coatings",
      "Cementitious Fireproofing",
      "Firestop Systems",
    ],
  },
  {
    title: "SCAFFOLDING SERVICES",
    sublink: "/speciality-service-division/scaffolding-services",
    description:
      "Our scaffolding services provide safe and reliable access solutions for construction, maintenance, and repair projects, ensuring worker safety and project efficiency.",
    image: "/images/scaffolding.jpg",
    features: [
      "Suspended scaffold",
      "Cantilever scaffold",
      "Tower scaffold",
      "Custom Scaffolding Design",
      "Erection and Dismantling",
      "Safety Inspections",
    ],
  },
  {
    title: "REFRACTORY WORKS",
    sublink: "/speciality-service-division/refractory-services",
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
    sublink: "/speciality-service-division/waterproofing",
    description:
      "Our waterproofing services protect your structures from water damage, ensuring durability and longevity in various environmental conditions.",
    image: "/images/waterproofing.jpg",
    features: [
      "Polyurethane coatings",
      "Polyurea coatings",
      "Bitumen Based Coatings",
      "Leak Detection and Repair",
    ],
  },
  {
    title: "ELECTRICAL HEAT TRACING",
    sublink: "/speciality-service-division/electrical-heat-tracing",
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

export default function SSD() {
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
            backgroundImage: "url('/images/specialityServices.jpg')",
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
              SPECIALITY SERVICE DIVISION FOR EVERY PROJECT
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
            OUR SPECIALITY SERVICE DIVISION
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

// import React, { useEffect } from 'react';
// import { Typography, Button } from "@material-tailwind/react";
// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { Link } from "react-router-dom";
// import { TopHeader } from "../components/top-header";
// import { Footer } from "../components/footer";
// import { Navigation } from "../components/navigationOurServices";

// const services = [
//   {
//     title: "THERMAL AND ACOUSTIC INSULATION",
//     description: "We provide top-notch thermal and acoustic insulation services to enhance energy efficiency and reduce noise pollution in industrial and commercial settings.",
//     image: "images/specialityService.webp",
//     features: [
//       "High-Performance Insulation Materials",
//       "Noise Reduction Solutions",
//       "Energy Saving Techniques",
//     ],
//     link: "/services/thermal-acoustic-insulation",
//   },
//   {
//     title: "COATING & PAINTING",
//     description: "Our coating and painting services protect your structures and equipment from corrosion, wear, and environmental damage, ensuring longevity and durability.",
//     image: "images/painting.jpg",
//     features: [
//       "Anti-Corrosion Coatings",
//       "Industrial Painting",
//       "Surface Preparation",
//     ],
//     link: "/speciality-service-division/coating-and-painting",
//   },
//   {
//     title: "FIREPROOFING",
//     description: "We offer comprehensive fireproofing solutions to safeguard your facilities and assets from fire hazards, complying with safety standards and regulations.",
//     image: "/images/fireproofing.jpg",
//     features: [
//       "Intumescent Coatings",
//       "Cementitious Fireproofing",
//       "Firestop Systems",
//     ],
//     link: "/services/fireproofing",
//   },
//   {
//     title: "SCAFFOLDING SERVICES",
//     description: "Our scaffolding services provide safe and reliable access solutions for construction, maintenance, and repair projects, ensuring worker safety and project efficiency.",
//     image: "/images/scaffolding.jpg",
//     features: [
//       "Custom Scaffolding Design",
//       "Erection and Dismantling",
//       "Safety Inspections",
//     ],
//     link: "/services/scaffolding-services",
//   },
//   {
//     title: "REFRACTORY WORKS",
//     description: "We specialize in refractory works, offering installation and maintenance of high-temperature resistant materials for furnaces, kilns, and other industrial applications.",
//     image: "/images/refractory.jpeg",
//     features: [
//       "Refractory Lining Installation",
//       "Maintenance and Repair",
//       "High-Temperature Solutions",
//     ],
//     link: "/services/refractory-works",
//   },
//   {
//     title: "WATER PROOFING",
//     description: "Our waterproofing services protect your structures from water damage, ensuring durability and longevity in various environmental conditions.",
//     image: "/images/waterproofing.jpg",
//     features: [
//       "Membrane Waterproofing",
//       "Cementitious Waterproofing",
//       "Leak Detection and Repair",
//     ],
//     link: "/services/waterproofing",
//   },
//   {
//     title: "ELECTRICAL HEAT TRACING",
//     description: "We provide electrical heat tracing solutions to maintain process temperatures, prevent freezing, and ensure efficient operation of pipelines and equipment.",
//     image: "/images/electricalHeatTracing.jpg",
//     features: [
//       "Self-Regulating Heating Cables",
//       "Control and Monitoring Systems",
//       "Installation and Maintenance",
//     ],
//     link: "/services/electrical-heat-tracing",
//   },
// ];

// function AnimatedSection({ children }) {
//   const controls = useAnimation();
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   useEffect(() => {
//     if (inView) {
//       controls.start("visible");
//     }
//   }, [controls, inView]);

//   return (
//     <motion.div
//       ref={ref}
//       animate={controls}
//       initial="hidden"
//       variants={{
//         visible: { opacity: 1, y: 0 },
//         hidden: { opacity: 0, y: 50 },
//       }}
//       transition={{ duration: 0.5 }}
//     >
//       {children}
//     </motion.div>
//   );
// }

// export default function SpecialtyServiceDivision() {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <div className="min-h-screen">
//       <TopHeader />
//       <Navigation />
//       {/* Hero Section */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//         className="relative h-[500px] bg-black"
//       >
//         <div
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//           style={{
//             backgroundImage: "url('/images/specialityServices.jpg')",
//           }}
//         >
//           <div className="absolute inset-0 bg-black/70" />
//         </div>
//         <div className="relative container mx-auto h-full flex flex-col justify-center px-4">
//           <motion.div
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.2, duration: 0.8 }}
//           >
//             <Typography
//               variant="h1"
//               className="text-white text-4xl md:text-6xl font-bold max-w-4xl"
//             >
//               SPECIALITY SERVICE DIVISION FOR EVERY PROJECT
//             </Typography>
//           </motion.div>
//           <motion.div
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.4, duration: 0.8 }}
//           >
//             <Typography className="text-gray-300 mt-4 max-w-2xl">
//               Working with the highest engineered specifications.
//             </Typography>
//           </motion.div>
//         </div>
//       </motion.div>

//       {/* Services Section */}
//       <div className="container mx-auto px-4 py-16">
//         <AnimatedSection>
//           <Typography
//             variant="h2"
//             className="text-3xl font-bold mb-12 text-center"
//           >
//             OUR SPECIALITY SERVICE DIVISION
//           </Typography>
//         </AnimatedSection>

//         <div className="space-y-16">
//           {services.map((service, index) => (
//             <AnimatedSection key={index}>
//               <div
//                 className={`grid md:grid-cols-2 gap-8 items-center ${
//                   index % 2 === 0 ? "" : "md:grid-flow-dense"
//                 }`}
//               >
//                 <div className={index % 2 === 0 ? "md:pr-8" : "md:pl-8"}>
//                   <Typography variant="h3" className="text-2xl font-bold mb-4">
//                     {service.title}
//                   </Typography>
//                   <Typography className="text-gray-700 mb-4">
//                     {service.description}
//                   </Typography>
//                   <ul className="list-disc list-inside space-y-2 text-gray-600">
//                     {service.features.map((feature, featureIndex) => (
//                       <motion.li
//                         key={featureIndex}
//                         initial={{ x: 20, opacity: 0 }}
//                         animate={{ x: 0, opacity: 1 }}
//                         transition={{
//                           delay: 0.1 * featureIndex,
//                           duration: 0.5,
//                         }}
//                       >
//                         {feature}
//                       </motion.li>
//                     ))}
//                   </ul>
//                   <motion.div
//                     initial={{ y: 20, opacity: 0 }}
//                     animate={{ y: 0, opacity: 1 }}
//                     transition={{ delay: 0.5, duration: 0.5 }}
//                   >
//                     <Link to={service.link}>
//                       <Button className="lg:inline-block bg-blue-gray-200 text-red-500 hover:text-white px-6 py-2 rounded-full hover:bg-red-700 transition duration-300 mt-8 ml-8">
//                         view more
//                       </Button>
//                     </Link>
//                   </motion.div>
//                 </div>
//                 <motion.div
//                   className={index % 2 === 0 ? "" : "md:order-first"}
//                   initial={{ scale: 0.8, opacity: 0 }}
//                   animate={{ scale: 1, opacity: 1 }}
//                   transition={{ delay: 0.3, duration: 0.8 }}
//                 >
//                   <img
//                     src={service.image}
//                     alt={service.title}
//                     className="w-full h-[300px] object-cover rounded-lg shadow-lg"
//                   />
//                 </motion.div>
//               </div>
//             </AnimatedSection>
//           ))}
//         </div>

//         {/* Other Resources Section */}
//         <AnimatedSection>
//           <div className="mt-16">
//             <Typography variant="h3" className="text-2xl font-bold mb-4">
//               OTHER RESOURCES
//             </Typography>
//             <Typography className="text-gray-700 mb-4">
//               Beyond our core services, we offer valuable resources to add value
//               to your projects:
//             </Typography>
//             <ul className="list-disc list-inside space-y-2 text-gray-600">
//               {[
//                 "Initial Site Assessment",
//                 "Budget and planning services",
//                 "Project Management",
//                 "Ongoing Maintenance Plans",
//                 "Energy Optimization",
//               ].map((item, index) => (
//                 <motion.li
//                   key={index}
//                   initial={{ x: 20, opacity: 0 }}
//                   animate={{ x: 0, opacity: 1 }}
//                   transition={{ delay: 0.1 * index, duration: 0.5 }}
//                 >
//                   {item}
//                 </motion.li>
//               ))}
//             </ul>
//           </div>
//         </AnimatedSection>
//       </div>
//       <Footer />
//     </div>
//   );
// }
