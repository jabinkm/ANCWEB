// 'use client'

// import React, { useEffect, useRef } from "react";
// import { motion, useScroll, useTransform } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { Typography, Button } from "@material-tailwind/react";
// import { Navigation } from "../components/navigationAboutUs";
// import { Footer } from "../components/footer";
// import { Cog, Shield, HandshakeIcon as HandShake, CheckCircle } from 'lucide-react';
// import { useCountUp } from "../hooks/useCountUp";


// const timelineEvents = [
//   {
//     year: "2012",
//     title: "ANC Arabia",
//     description: "Humble beginning as an Establishment for catering industrial requirements in 2012, ANC Arabia Started with given strength & integrity as the pillars.",
//   },
//   {
//     year: "2015",
//     title: "Specialty Services Division",
//     description: "Expanded services to include Thermal & Acoustic Insulation, Blasting & Painting, Fireproofing, Refractory, and Scaffolding",
//   },
//   {
//     year: "2020",
//     title: "EHT Division",
//     description: "Launched Electrical Heat Tracing System and Leak Detection System services",
//   },
//   {
//     year: "2021",
//     title: "Mechanical Division",
//     description: "Added comprehensive mechanical services including Pipes & Pipe Supports, Structures, Equipment, and Pre-engineered Buildings",
//   },
//   // {
//   //   year: "2023",
//   //   title: "Civil Projects",
//   //   description: "Expanded into Facility Management, Project Site Management, Civil & Road Construction, and Waterproofing",
//   // },
// ];

// const statistics = [
//   { number: 500, label: "Employees", suffix: "+" },
//   { number: 150, label: "Equipments", suffix: "+" },
//   { number: 30000, label: "Sq. Mtr Facility", suffix: "+" },
//   { number: 12, label: "Years of Industrial presence in Kingdom", suffix: "+" },
// ];

// const coreValues = [
//   { icon1: <Cog className="w-6 h-6" />, title: "Efficiency", color: "text-red-600" },
//   { icon: <Shield className="w-6 h-6" />, title: "Reliability", color: "text-red-600" },
//   { icon: <HandShake className="w-6 h-6" />, title: "Commitment", color: "text-red-600" },
// ];

// const directors = [
//   {
//     image: "/images/AhmedYoosuf.jpg",
//     name: "Ahmed Yoosuf Al Nujaidhi",
//     title: "CEO",
//     description: "Is leading up the directions of ANC Corporation, ensuring the implementation of policies and procedures, and responsibilities, with strong vision.",
//   },
//   {
//     image: "/images/shamnadkka.jpg",
//     name: "Shamnad Hamza",
//     title: "General Manager",
//     description: "With extensive experience in Oil industry is ultimately responsible for the overall direction, the corporate strategies and Policies of ANC operations.",
//   },
// ];

// const whyUsPoints = [
//   "12+ Years of Marketing Excellence",
//   "Power of Togetherness",
//   "6.2 Million+ Manhours without LTI",
//   "Customers served by Expert Staffs",
//   "500 + Skilled and Trained Workforce",
// ];

// export default function AboutUs() {
//   const { scrollYProgress } = useScroll();
//   const opacityHero = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
//   const yHero = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const [ref, inView] = useInView({
//     triggerOnce: false,
//     threshold: 0.1,
//   });


//   return (
    
//     <main className="flex flex-col min-h-screen">
      
//       <Navigation />
//       <div className="overflow-hidden">
//       {/* Hero Section */}
//       <motion.div 
//         className="relative h-[500px] bg-black"
//         style={{ opacity: opacityHero, y: yHero }}
//       >
//         <img
//           src="/images/about.png"
//           alt="About-Us-Hero"
//           className="object-cover opacity-70 h-[500px] w-full"
//         />
//         <motion.div 
//           className="absolute inset-0 flex flex-col items-center justify-evenly text-white/60"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <h1 className="text-2xl sm:text-5xl md:text-6xl font-bold mb-4">ABOUT ANC ARABIA</h1>
//           <p className="text-xl">One Word. Substantial Solutions.</p>
//         </motion.div>
//       </motion.div>

//       {/* Who We Are Section */}
//       <motion.section 
//         className="py-16 bg-gray-100"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <div className="container mx-auto px-4">
//           <motion.h2 
//             className="text-3xl font-bold text-center mb-8"
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.2, duration: 0.8 }}
//           >
//             WHO WE ARE
//           </motion.h2>
//           <motion.div
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.4, duration: 0.8 }}
//           >
//             <Typography className="text-center max-w-4xl mx-auto">
//               AHMED YOOSUF AL NUJAIDHI CONTRACTING company was established in the
//               year 2012 with its headquarters in Khobar and regional office in Jubail is 100% Saudi Company
//               with highly skilled workforce. We offer mechanical industrial
//               solutions to the petrochemical, refinery and power generation
//               industries including a variety of specialized services such as
//               Thermal & Acoustic Insulation, Coating & Painting, Electrical Heat
//               Tracing, Bolt Torquing and Pipe Cold Cutting Services etc. We are
//               backed by a highly experienced and qualified manpower as well a
//               devoted and professional management team.
//             </Typography>
//           </motion.div>
//         </div>
//       </motion.section>

//       {/* Our Numbers Section */}
//       <section className="md:py-16 bg-white" ref={ref}>
//         <div className="container mx-auto px-4 py-12">
//           <motion.h2 
//             className="text-3xl font-bold text-center mb-16"
//             initial={{ opacity: 0, y: 20 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.8 }}
//           >
//             OUR NUMBERS
//           </motion.h2>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
//               {statistics.map((stat, index) => {
//                 const { count, elementRef } = useCountUp(stat.number, 1000);
//                 return (
//                   <motion.div 
//                     key={index} 
//                     className="text-center shadow-2xl rounded-lg py-8"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={inView ? { opacity: 1, y: 0 } : {}}
//                     transition={{ duration: 0.8, delay: index * 0.2 }}
//                     ref={elementRef}
//                   >
//                     <div className="mb-2">
//                       <span className="text-red-500 text-5xl font-bold">
//                         {count}{stat.suffix}
//                       </span>
//                     </div>
//                     <Typography className="text-lg font-medium">
//                       {stat.label}
//                     </Typography>
//                   </motion.div>
//                 );
//               })}

//           {/* <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
//             {statistics.map((stat, index) => {
//               const animatedNumber = useCountUp(stat.number);
//               return (
//                 <motion.div 
//                   key={index} 
//                   className="text-center shadow-2xl rounded-lg py-8"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={inView ? { opacity: 1, y: 0 } : {}}
//                   transition={{ duration: 0.8, delay: index * 0.2 }}
//                 >
//                   <div className="mb-2">
//                     <span className="text-red-500 text-5xl font-bold">
//                       {animatedNumber}{stat.suffix}
//                     </span>
//                   </div>
//                   <Typography className="text-lg font-medium">
//                     {stat.label}
//                   </Typography>
//                 </motion.div>
//               );
//             })} */}
//           </div>
//           <motion.div 
//             className="flex flex-col md:flex-row justify-center items-center gap-12 mt-8"
//             initial={{ opacity: 0, y: 20 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.8, delay: 0.8 }}
//           >
//             {coreValues.map((value, index) => (
//               <motion.div 
//                 key={index} 
//                 className="flex items-center gap-3"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <motion.div 
//                   className={`${value.color} text-2xl`}
//                   initial={{ rotate: 0 }}
//                   animate={{ rotate: 360 }}
//                   transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//                 >
//                   {value.icon1}
//                 </motion.div>
//                 <div className="text-red-600">{value.icon}</div>
                
//                 <Typography className="text-xl font-medium">
//                   {value.title}
//                 </Typography>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Corporate History Section */}
//       <section className="py-16">
//         <div className="container mx-auto px-4">
//           <motion.h2 
//             className="text-3xl font-bold text-center mb-12"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             CORPORATE HISTORY
//           </motion.h2>
//           <div className="relative">
//             <div className="absolute left-[50%] transform translate-x-1/2 h-full w-3 bg-red-600" />
//             <div className="space-y-24">
//               {timelineEvents.map((event, index) => (
//                 <motion.div
//                   key={index}
//                   className={`flex items-center ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
//                   initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.8 }}
//                 >
//                   <div className="w-1/2 px-8">
//                     <div className={`${index % 2 === 0 ? "text-left" : "text-right"}`}>
//                       <span className="text-red-600 font-bold text-xl">{event.year}</span>
//                       <h3 className="text-xl font-bold mt-2">{event.title}</h3>
//                       <p className="mt-2 text-gray-600">{event.description}</p>
//                     </div>
//                   </div>
//                   <motion.div 
//                     className="absolute left-[49.5%] transform translate-x-1/2 w-10 h-10 bg-red-500 rounded-full border-4 border-white animate-bounce"
//                     // whileHover={{ scale: 1.2 }}
//                     // transition={{ duration: 0.3 }}
//                   />
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Our Directors Section */}
//       <section className="py-16 bg-red-600 text-white">
//         <div className="container mx-auto px-4">
//           <motion.h2 
//             className="text-3xl font-bold text-center mb-12"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             OUR DIRECTORS
//           </motion.h2>
//           <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
//             {directors.map((director, index) => (
//               <motion.div 
//                 key={index} 
//                 className="text-center"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.8, delay: index * 0.2 }}
//               >
//                 <motion.div 
//                   className="relative w-48 h-48 mx-auto mb-8"
//                   whileHover={{ scale: 1.1 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <img
//                     src={director.image}
//                     alt={director.name}
//                     className="rounded-full object-cover w-full h-full"
//                   />
//                 </motion.div>
//                 <h3 className="text-xl font-bold">{director.name}</h3>
//                 <p className="text-red-100 font-bold mb-2">{director.title}</p>
//                 <p className="text-sm text-gray-300">{director.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Why Us Section */}
//       <section className="py-16">
//         <div className="container mx-auto px-4">
//           <div className="grid md:grid-cols-2 gap-8 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//             >
//               <img
//                 src="/images/whyus.jpeg"
//                 alt="Why Choose Us"
//                 width={600}
//                 height={400}
//                 className="rounded-lg"
//               />
//             </motion.div>
//             <div>
//               <motion.h2 
//                 className="text-3xl font-bold mb-8"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.8 }}
//               >
//                 WHY US
//               </motion.h2>
//               <ul className="space-y-4">
//                 {whyUsPoints.map((point, index) => (
//                   <motion.li 
//                     key={index} 
//                     className="flex items-center"
//                     initial={{ opacity: 0, x: 20 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.5, delay: index * 0.1 }}
//                   >
//                     <CheckCircle className="text-red-600 mr-3" />
//                     <span>{point}</span>
//                   </motion.li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Our Presence Section */}
//       <motion.section 
//         className="py-16 bg-white"
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8 }}
//       >
//         <div className="container mx-auto px-4">
//           <motion.h2 
//             className="text-3xl font-bold text-center mb-12"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             OUR PRESENCE
//           </motion.h2>
//           <motion.div 
//             className="relative w-full h-[800px]"
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 1 }}
//           >
//             <img
//               src="/images/map1.png"
//               alt="Our Presence in Saudi Arabia"
//               className="object-contain h-[800px] mx-auto rounded-lg"
//             />
//           </motion.div>
//         </div>
//       </motion.section>
//       <Footer />
//       </div>
//     </main>
//   );
// }

'use client'

import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Typography, Button } from "@material-tailwind/react";
import { Navigation } from "../components/navigationAboutUs";
import { Footer } from "../components/footer";
import { Cog, Shield, HandshakeIcon as HandShake, CheckCircle } from 'lucide-react';
import { useCountUp } from "../hooks/useCountUp";


const timelineEvents = [
  {
    year: "2012",
    title: "ANC Arabia",
    description: "Humble beginning as an Establishment for catering industrial requirements in 2012, ANC Arabia Started with given strength & integrity as the pillars.",
  },
  {
    year: "2015",
    title: "Specialty Services Division",
    description: "Expanded services to include Thermal & Acoustic Insulation, Blasting & Painting, Fireproofing, Refractory, and Scaffolding",
  },
  {
    year: "2020",
    title: "EHT Division",
    description: "Launched Electrical Heat Tracing System and Leak Detection System services",
  },
  {
    year: "2021",
    title: "Mechanical Division",
    description: "Added comprehensive mechanical services including Pipes & Pipe Supports, Structures, Equipment, and Pre-engineered Buildings",
  },
  // {
  //   year: "2023",
  //   title: "Civil Projects",
  //   description: "Expanded into Facility Management, Project Site Management, Civil & Road Construction, and Waterproofing",
  // },
];

const statistics = [
  { number: 500, label: "Employees", suffix: "+" },
  { number: 150, label: "Equipments", suffix: "+" },
  { number: 30000, label: "Sq. Mtr Facility", suffix: "+" },
  { number: 12, label: "Years of Industrial presence in Kingdom", suffix: "+" },
];

const coreValues = [
  { icon1: <Cog className="w-6 h-6" />, title: "Efficiency", color: "text-red-600" },
  { icon: <Shield className="w-6 h-6" />, title: "Reliability", color: "text-red-600" },
  { icon: <HandShake className="w-6 h-6" />, title: "Commitment", color: "text-red-600" },
];

const directors = [
  {
    image: "/images/AhmedYoosuf.jpg",
    name: "Ahmed Yoosuf Al Nujaidhi",
    title: "CEO",
    description: "Is leading up the directions of ANC Corporation, ensuring the implementation of policies and procedures, and responsibilities, with strong vision.",
  },
  {
    image: "/images/shamnadkka.jpg",
    name: "Shamnad Hamza",
    title: "General Manager",
    description: "With extensive experience in Oil industry is ultimately responsible for the overall direction, the corporate strategies and Policies of ANC operations.",
  },
];

const whyUsPoints = [
  "12+ Years of Marketing Excellence",
  "Power of Togetherness",
  "6.2 Million+ Manhours without LTI",
  "Customers served by Expert Staffs",
  "500 + Skilled and Trained Workforce",
];

export default function AboutUs() {
  const { scrollYProgress } = useScroll();
  const opacityHero = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const yHero = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });


  return (
    
    <main className="flex flex-col min-h-screen">
      
      <Navigation />
      <div className="overflow-hidden">
      {/* Hero Section */}
      <motion.div 
        className="relative h-[500px] bg-black"
        style={{ opacity: opacityHero, y: yHero }}
      >
        <img
          src="/images/about.png"
          alt="About-Us-Hero"
          className="object-cover opacity-70 h-[500px] w-full"
        />
        <motion.div 
          className="absolute inset-0 flex flex-col items-center justify-evenly text-white/80"
          initial={{ opacity: 10, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-2xl sm:text-5xl md:text-6xl font-bold mb-4">ABOUT ANC ARABIA</h1>
          <p className="text-xl">One Word. Substantial Solutions.</p>
        </motion.div>
      </motion.div>

      {/* Who We Are Section */}
      <motion.section 
        className="py-16 bg-gray-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            WHO WE ARE
          </motion.h2>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Typography className="text-center max-w-4xl mx-auto">
              AHMED YOOSUF AL NUJAIDHI CONTRACTING Company was established in the
              year 2012 with its headquarters in Khobar and regional office in Jubail is 100% Saudi Company
              with highly skilled workforce. We offer mechanical industrial
              solutions to the petrochemical, refinery and power generation
              industries including a variety of specialized services such as
              Thermal & Acoustic Insulation, Coating & Painting, Electrical Heat
              Tracing, Bolt Torquing and Pipe Cold Cutting Services etc. We are
              backed by a highly experienced and qualified manpower as well a
              devoted and professional management team.
            </Typography>
          </motion.div>
        </div>
      </motion.section>

      {/* Our Numbers Section */}
      <section className="md:py-16 bg-white" ref={ref}>
        <div className="container mx-auto px-4 py-12">
          <motion.h2 
            className="text-3xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            OUR NUMBERS
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
              {statistics.map((stat, index) => {
                const { count, elementRef } = useCountUp(stat.number, 1000);
                return (
                  <motion.div 
                    key={index} 
                    className="text-center shadow-2xl rounded-lg py-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    ref={elementRef}
                  >
                    <div className="mb-2">
                      <span className="text-red-500 text-5xl font-bold">
                        {count}{stat.suffix}
                      </span>
                    </div>
                    <Typography className="text-lg font-medium">
                      {stat.label}
                    </Typography>
                  </motion.div>
                );
              })}
          </div>
          <motion.div 
            className="flex flex-col md:flex-row justify-center items-center gap-12 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {coreValues.map((value, index) => (
              <motion.div 
                key={index} 
                className="flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div 
                  className={`${value.color} text-2xl`}
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  {value.icon1}
                </motion.div>
                <div className="text-red-600">{value.icon}</div>
                
                <Typography className="text-xl font-medium">
                  {value.title}
                </Typography>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Mission, Vision & Core Values Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            OUR MISSION, VISION & CORE VALUES
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-red-600">Our Mission</h3>
              <p>We will continuously strive to meet and exceed customer's expectations, through delivering right products and services to our clients compliance to requirements of customer focus on quality and customer satisfaction.</p>
            </motion.div>
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-red-600">Our Vision</h3>
              <p>Our vision is to be one of the Leading companies in Kingdom of Saudi Arabia in our fields of operation; maintain highest quality and professionalism in our services; and actively contribute to Vision 2030.</p>
            </motion.div>
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-red-600">Our Core Values</h3>
              <p>Our business based on the following core values:</p>
              <ul className="mt-2 space-y-2">
                {["Customer Focus", "Safety", "Excellence", "Teamwork", "Innovation", "Responsibility"].map((value, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-center"
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  >
                    <CheckCircle className="text-red-600 mr-3" />
                    <span>{value}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Corporate History Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            CORPORATE HISTORY
          </motion.h2>
          <div className="relative">
            <div className="absolute left-[50%] transform translate-x-1/2 h-full w-3 bg-red-600" />
            <div className="space-y-24">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="w-1/2 px-8">
                    <div className={`${index % 2 === 0 ? "text-left" : "text-right"}`}>
                      <span className="text-red-600 font-bold text-xl">{event.year}</span>
                      <h3 className="text-xl font-bold mt-2">{event.title}</h3>
                      <p className="mt-2 text-gray-600">{event.description}</p>
                    </div>
                  </div>
                  <motion.div 
                    className="absolute left-[49.5%] transform translate-x-1/2 w-10 h-10 bg-red-500 rounded-full border-4 border-white animate-bounce"
                    // whileHover={{ scale: 1.2 }}
                    // transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Directors Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            OUR DIRECTORS
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {directors.map((director, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <motion.div 
                  className="relative w-48 h-48 mx-auto mb-8"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={director.image || "/placeholder.svg"}
                    alt={director.name}
                    className="rounded-full object-cover w-full h-full"
                  />
                </motion.div>
                <h3 className="text-xl font-bold">{director.name}</h3>
                <p className="text-red-100 font-bold mb-2">{director.title}</p>
                <p className="text-sm text-gray-300">{director.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/images/whyus.jpeg"
                alt="Why Choose Us"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </motion.div>
            <div>
              <motion.h2 
                className="text-3xl font-bold mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                WHY US
              </motion.h2>
              <ul className="space-y-4">
                {whyUsPoints.map((point, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-center"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <CheckCircle className="text-red-600 mr-3" />
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vendor Registrations Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            OUR VENDOR REGISTRATIONS
          </motion.h2>
          <motion.div
            className="overflow-x-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <table className="w-full min-w-[600px] border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-black text-white">
                  <th className="py-4 px-6 text-left font-bold">SL.NO</th>
                  <th className="py-4 px-6 text-left font-bold">VENDOR NAME</th>
                  <th className="py-4 px-6 text-left font-bold">VENDOR CODE</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { no: 1, name: "SAUDI ARAMCO", code: "10059334" },
                  { no: 2, name: "SABIC", code: "11051270" },
                  { no: 3, name: "SADARA", code: "1000005003" },
                  { no: 4, name: "MA'ADEN", code: "20231294" },
                  { no: 5, name: "SATORP", code: "14188" },
                  { no: 6, name: "SIPCHEM", code: "104637" },
                  { no: 7, name: "CHEMANOL", code: "3763" },
                  { no: 8, name: "SAMREF", code: "11192" },
                  { no: 9, name: "TASNEE PETROCHEMICAL COMPANY", code: "106409" },
                  { no: 10, name: "FARABI PETROCHEMICAL COMPANY", code: "8001642" },
                  { no: 11, name: "SAUDI ARAMCO OIL BASE COMPANY - LUBEREF", code: "63149" },
                  { no: 12, name: "SAUDI ELECTRICITY COMPANY (SEC)", code: "5016018" },
                ].map((vendor, index) => (
                  <motion.tr
                    key={index}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <td className="py-4 px-6 border-b border-gray-200">{vendor.no}</td>
                    <td className="py-4 px-6 border-b border-gray-200 font-medium">{vendor.name}</td>
                    <td className="py-4 px-6 border-b border-gray-200">{vendor.code}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Our Presence Section */}
      <motion.section 
        className="py-16 bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            OUR PRESENCE
          </motion.h2>
          <motion.div 
            className="relative w-full h-[800px]"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <img
              src="/images/map1.png"
              alt="Our Presence in Saudi Arabia"
              className="object-contain h-[800px] mx-auto rounded-lg"
            />
          </motion.div>
        </div>
      </motion.section>
      <Footer />
      </div>
    </main>
  );
}