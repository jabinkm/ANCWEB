import { Card, CardBody, Typography, IconButton, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: "fas fa-shield-alt",
    title: 'Thermal Insulation',
    description: 'High-performance thermal insulation solutions for industrial and commercial applications.',
  },
  {
    icon: "fas fa-tint",
    title: 'Protective Coatings',
    description: 'Advanced coating systems to protect surfaces from corrosion, chemicals, and extreme weather conditions.',
  },
  {
    icon: "fas fa-thermometer-half",
    title: 'Heat Tracing',
    description: 'Electric heat tracing systems to maintain process temperatures and prevent freezing in pipelines.',
  },
  // {
  //   icon: "fas fa-wrench",
  //   title: 'Maintenance Services',
  //   description: 'Comprehensive maintenance and repair services for insulation and coating systems.',
  // },
]

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="mt-6 hover:shadow-lg transition-shadow duration-300">
              <CardBody>
                <IconButton color="red" className="mb-4">
                  <i className={service.icon} />
                </IconButton>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {service.title}
                </Typography>
                <Typography>
                  {service.description}
                </Typography>
              </CardBody>
            </Card>
          ))}
          <Link to={"/services"}>
          <Button className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition duration-300 mx-auto">
           View Our Services
          </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

// import { useEffect, useRef } from "react"
// import { motion, useAnimation, useInView } from "framer-motion"
// import { Card, CardBody, Typography, IconButton } from "@material-tailwind/react"

// const services = [
//   {
//     icon: "fas fa-shield-alt",
//     title: "Thermal Insulation",
//     description: "High-performance thermal insulation solutions for industrial and commercial applications.",
//   },
//   {
//     icon: "fas fa-tint",
//     title: "Protective Coatings",
//     description:
//       "Advanced coating systems to protect surfaces from corrosion, chemicals, and extreme weather conditions.",
//   },
//   {
//     icon: "fas fa-thermometer-half",
//     title: "Heat Tracing",
//     description: "Electric heat tracing systems to maintain process temperatures and prevent freezing in pipelines.",
//   },
//   {
//     icon: "fas fa-wrench",
//     title: "Maintenance Services",
//     description: "Comprehensive maintenance and repair services for insulation and coating systems.",
//   },
// ]

// const ServiceCard = ({ service, index }) => {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true })
//   const controls = useAnimation()

//   useEffect(() => {
//     if (isInView) {
//       controls.start("visible")
//     }
//   }, [isInView, controls])

//   return (
//     <motion.div
//       ref={ref}
//       initial="hidden"
//       animate={controls}
//       variants={{
//         hidden: { opacity: 0, y: 50 },
//         visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } },
//       }}
//     >
//       <Card className="mt-6 hover:shadow-lg transition-shadow duration-300">
//         <CardBody>
//           <IconButton color="red" className="mb-4 mx-auto" size="lg">
//             <i className={service.icon} />
//           </IconButton>
//           <Typography variant="h5" color="blue-gray" className="mb-2 text-center">
//             {service.title}
//           </Typography>
//           <Typography className="text-center">{service.description}</Typography>
//         </CardBody>
//       </Card>
//     </motion.div>
//   )
// }

// export function Services() {
//   return (
//     <section id="services" className="py-16 md:py-24 bg-gray-100">
//       <div className="container mx-auto px-4">
//         <motion.h2
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900"
//         >
//           Our Services
//         </motion.h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {services.map((service, index) => (
//             <ServiceCard key={index} service={service} index={index} />
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

