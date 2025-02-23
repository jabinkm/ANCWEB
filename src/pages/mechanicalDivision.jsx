// import { Typography, Card, CardBody, Button } from "@material-tailwind/react";
// import { Footer } from "../components/footer";
// import { Navigation } from "../components/navigationOurServices";
// import { useEffect } from "react";
// import { Link } from "react-router-dom";
// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// const services = [
//   {
//     title: "PIPING",
//     description:
//       "Our mechanical division provides effective piping solutions for industrial and commercial facilities, ensuring reliability and efficiency.",
//     image: "images/piping.jpeg",
//     features: [
//       "Industrial Equipment",
//       "Process Piping and Equipment",
//       "Energy Efficiency Solutions",
//     ],
//     sublink: "/mechanical-division/piping"
//   },
//   {
//     title: "EQUIPMENT ERECTION",
//     description:
//       "We offer comprehensive equipment erection services, ensuring precise installation and alignment of industrial machinery and structures.",
//     image: "images/mechanical-equipment-erection.jpg",
//     features: [
//       "Heavy Machinery Installation",
//       "Structural Assembly",
//       "Precision Alignment",
//     ],
//     sublink: "/mechanical-division/equipment-erection"
//   },
//   {
//     title: "STEEL STRUCTURE FABRICATION AND ERECTION",
//     description:
//       "Our expertise in steel structure fabrication and erection ensures robust and durable constructions for various industrial applications.",
//     image: "images/Steel-Structure-Fabrication.jpg",
//     features: [
//       "Custom Steel Fabrication",
//       "On-site Assembly",
//       "Quality Assurance",
//     ],
//     sublink: "/mechanical-division/steel-structure"
//   },
//   {
//     title: "PRE ENGINEERED BUILDINGS",
//     description:
//       "We specialize in pre-engineered buildings, offering cost-effective and efficient solutions for industrial and commercial spaces.",
//     image: "images/pre-engineered-building.jpg",
//     features: [
//       "Design and Engineering",
//       "Quick Installation",
//       "Cost-effective Solutions",
//     ],
//     sublink: "/mechanical-division/pre-engineered-buildings"
//   },
//   {
//     title: "VALVES AND INSTRUMENTS",
//     description:
//       "Our services include the supply and installation of high-quality valves and instruments for precise control and monitoring of industrial processes.",
//     image: "/images/valves1.jpg",
//     features: [
//       "Wide Range of Valves",
//       "Instrumentation Solutions",
//       "Installation and Maintenance",
//     ],
//     sublink: "/mechanical-division/valves-and-instruments"
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
//         hidden: { opacity: 0, y: 50 }
//       }}
//       transition={{ duration: 0.5 }}
//     >
//       {children}
//     </motion.div>
//   );
// }

// export default function MED() {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <div className="min-h-screen">
    
//       <Navigation />
//       {/* Hero Section */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//         className="relative h-[600px] bg-black"
//       >
//         <div
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//           style={{
//             backgroundImage: "url('/images/mechanical.png')",
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
//               MECHANICAL SERVICES FOR INDUSTRIAL AND COMMERCIAL PROJECTS
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
      
//         <div className="container mx-auto px-4 py-8">
//           <div className="flex flex-wrap justify-center gap-4">
//             {services.map((service, index) => (
//               <Link key={index} to={service.sublink}>
//                 <Button className="bg-blue-gray-900 text-white hover:text-white px-4 py-2 rounded-full hover:bg-red-700 transition duration-300">
//                   {service.title}
//                 </Button>
//               </Link>
//             ))}
//           </div>
//         </div>
      
//       {/* Services Section */}
//       <div className="container mx-auto px-4 py-16">
//         <AnimatedSection>
//           <Typography
//             variant="h2"
//             className="text-3xl font-bold mb-12 text-center"
//           >
//             OUR MECHANICAL DIVISION
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
//                         transition={{ delay: 0.1 * featureIndex, duration: 0.5 }}
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
//                     <Link to={service.sublink}>
//                       <Button className="lg:inline-block bg-blue-gray-900 text-white hover:text-white px-6 py-2 rounded-full hover:bg-red-700 transition duration-300 mt-8 ml-8">
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
//               {["Initial Site Assessment", "Budget and planning services", "Project Management", "Ongoing Maintenance Plans", "Energy Optimization"].map((item, index) => (
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

import { Typography, Card, CardBody, Button } from "@material-tailwind/react";
import { Footer } from "../components/footer";
import { Navigation } from "../components/navigationOurServices";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const services = [
  {
    title: "PIPING",
    description:
      "Our mechanical division provides effective piping solutions for industrial and commercial facilities, ensuring reliability and efficiency.",
    image: "images/piping.jpeg",
    features: [
      "Pipe fabrication",
      "Pipe Installation",
      "Pressure testing (Hydro & pneumatic)",
      " Pre-commissioning and commissioning",

      "Industrial Equipment",
      "Process Piping and Equipment",
      "Energy Efficiency Solutions",
    ],
    sublink: "/mechanical-division/piping"
  },
  {
    title: "EQUIPMENT ERECTION",
    description:
      "We offer comprehensive equipment erection services, ensuring precise installation and alignment of industrial machinery and structures.",
    image: "images/mechanical-equipment-erection.jpg",
    features: [
      "Static equipment",
      "Rotary equipment",
      "Heater and reformer",
      "Heavy Machinery Installation",
      "Structural Assembly",
      "Precision Alignment",
    ],
    sublink: "/mechanical-division/equipment-erection"
  },
  {
    title: "STEEL STRUCTURE FABRICATION AND ERECTION",
    description:
      "Our expertise in steel structure fabrication and erection ensures robust and durable constructions for various industrial applications.",
    image: "images/Steel-Structure-Fabrication.jpg",
    features: [
      "Steel Structure Procurement",
      "Custom Steel Fabrication",
      "Steel Structure Installation",
      "On-site Assembly",
      "Quality Assurance",
    ],
    sublink: "/mechanical-division/steel-structure"
  },
  {
    title: "PRE ENGINEERED BUILDINGS",
    description:
      "We specialize in pre-engineered buildings, offering cost-effective and efficient solutions for industrial and commercial spaces.",
    image: "images/pre-engineered-building.jpg",
    features: [
      "Design, Detailing & Engineering",
      "PEB Fabrication",
      "Quick Installation and Sheeting",
      "Pre-commissioning and commissioning",
      "Cost-effective Solutions",
    ],
    sublink: "/mechanical-division/pre-engineered-buildings"
  },
  {
    title: "VALVES AND INSTRUMENTS",
    description:
      "Our services include the supply and installation of high-quality valves and instruments for precise control and monitoring of industrial processes.",
    image: "/images/valves1.jpg",
    features: [
      "Wide Range of Valves",
      "Instrumentation Solutions",
      "Installation and Maintenance",
    ],
    sublink: "/mechanical-division/valves-and-instruments"
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
        hidden: { opacity: 0, y: 50 }
      }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

export default function MED() {
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
            backgroundImage: "url('/images/mechanical.png')",
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
              MECHANICAL SERVICES FOR INDUSTRIAL AND COMMERCIAL PROJECTS
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
            OUR MECHANICAL DIVISION
          </Typography>
        </AnimatedSection>

        <AnimatedSection>
          <Typography className="text-gray-700 mt-4 mb-12 text-center max-w-4xl mx-auto">
            ANC Arabia is a contracting company that offers wide range of mechanical services, including fabrication and installation of pipes & pipe supports, structures, equipment, and pre-engineered buildings. As a mechanical service provider in these areas, we have a team of highly skilled professionals, access to specialized equipment and materials, a focus on safety standards, and the ability to work closely with clients to meet their specific needs and project requirements.
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
                        transition={{ delay: 0.1 * featureIndex, duration: 0.5 }}
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
                    src={service.image || "/placeholder.svg"}
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
              {["Initial Site Assessment", "Budget and planning services", "Project Management", "Ongoing Maintenance Plans", "Energy Optimization"].map((item, index) => (
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