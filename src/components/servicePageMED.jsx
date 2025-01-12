import React, { useEffect } from 'react';
import { Typography, Card, CardBody, Button } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import ImageCarousel from './imageCarousel';
import { Footer } from "./footer";
import { Navigation } from "./navigationOurServices";
import { CheckCircle } from 'lucide-react'

export default function ServicePageMED({ title, description, features, images }) {
    useEffect(() => {
        window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
      <Navigation />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16"> {/* Update 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h1" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-black"> {/* Update 2 */}
            {title}
          </Typography>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center mb-8 sm:mb-12 lg:mb-16"> {/* Update 3 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="overflow-hidden max-w-lg mx-auto md:max-w-none"> {/* Update 4 */}
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
            <Typography className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6"> {/* Update 5 */}
              {description}
            </Typography>
            <Typography variant="h5" className="mb-4 text-red-500">
              Key Features:
            </Typography>
            <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-600"> {/* Update 6 */}
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
            <Button className="bg-gradient-to-r from-red-500 to-red-700 text-white px-4 sm:px-6 py-2 text-sm sm:text-base rounded-full hover:from-red-600 hover:to-red-800 transition duration-300 w-full sm:w-auto"> {/* Update 7 */}
              Back to Mechanical Division
            </Button>
          </Link>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

