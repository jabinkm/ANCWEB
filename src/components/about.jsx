'use client'

import { Button } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";


export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <motion.section
      id="about"
      className="py-16 md:py-24 bg-gray-100"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      ref={ref}
    >
      <div className="container mx-auto px-4 my-auto">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            variants={itemVariants}
          >
            <img
              src="/images/aboutHero.png"
              alt="About ANC"
              width={600}
              height={400}
              className="rounded-lg shadow-xl transition duration-300 hover:shadow-2xl"
            />
          </motion.div>
          <div className="md:w-1/2 md:pl-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6 text-gray-800"
              variants={itemVariants}
            >
              About ANC
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 mb-6"
              variants={itemVariants}
            >
              Ahmed Yoosuf Al Nujaidhi Contracting Company (ANC) is a leading contracting company based in Al Khobar, Saudi Arabia. With over 12 years of experience, we specialize in providing top-quality insulation and coating solutions for industrial and commercial projects.
            </motion.p>
            <motion.p
              className="text-lg text-gray-600 mb-6"
              variants={itemVariants}
            >
              Our team of skilled professionals is committed to delivering excellence in every project we undertake. We pride ourselves on our attention to detail, use of cutting-edge technology, and adherence to international quality standards.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link to={"/about-us"}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition duration-300">
                    Learn More About Us
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

