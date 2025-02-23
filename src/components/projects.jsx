
import { Card, CardHeader, CardBody, Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: 'Industrial Plant Insulation',
    image: '/images/industrialPlantInsulation.avif',
    description: 'Comprehensive thermal insulation for a large industrial plant in Jubail.',
  },
  {
    title: 'Oil Refinery Coating',
    image: '/images/oilRefinaryCoating.jpg',
    description: 'Protective coating application for an oil refinery in Yanbu.',
  },
  {
    title: 'Commercial Building HVAC',
    image: '/images/CommercialHVAC.jpeg',
    description: 'HVAC insulation for a high-rise commercial building in Riyadh.',
  },
  {
    title: 'Pipeline Heat Tracing',
    image: '/images/EHT.jpg',
    description: 'Electric heat tracing system for a long-distance pipeline project.',
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="mt-6 hover:shadow-lg transition-shadow duration-300">
              <CardHeader color="blue-gray" className="relative h-56 hover:scale-105 transition-transform duration-300">
                <img
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="object-cover w-full h-full rounded-t-lg"
                />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {project.title}
                </Typography>
                <Typography>
                  {project.description}
                </Typography>
              </CardBody>
            </Card>
          ))}
          <Link to={"/projects"}>
          <Button className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition duration-300 mx-auto">
           View More Projects
          </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

