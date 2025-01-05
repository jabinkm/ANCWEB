import React, { useEffect } from 'react';
import { Typography, Card, CardBody, Button } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import ImageCarousel from './imageCarousel';
import { TopHeader } from "./top-header";
import { Footer } from "./footer";
import { Navigation } from "./navigationOurServices";

export default function ServicePageTemplate({ title, description, features, images }) {
    useEffect(() => {
        window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
      <TopHeader />
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h1" className="text-4xl md:text-6xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-black">
            {title}
          </Typography>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="overflow-hidden">
              <CardBody>
                <ImageCarousel images={images} />
              </CardBody>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Typography className="text-gray-700 mb-6">
              {description}
            </Typography>
            <Typography variant="h5" className="mb-4 text-red-500">
              Key Features:
            </Typography>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                >
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <Link to="/mechanical-division">
            <Button className="bg-gradient-to-r from-red-500 to-red-700 text-white px-6 py-2 rounded-full hover:from-red-600 hover:to-red-800 transition duration-300">
              Back to Mechanical Division
            </Button>
          </Link>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

