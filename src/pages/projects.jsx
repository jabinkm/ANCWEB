import React, { useEffect, useState } from 'react';
import { Typography, Button } from "@material-tailwind/react";
import { Navigation } from '../components/navigationProjects';
import { Footer } from '../components/footer';

const categories = [
  { id: "all", name: "ALL" },
  { id: "insulation", name: "INSULATION & COATING" },
  { id: "pipe", name: "PIPE COLD CUTTING" },
  { id: "trading", name: "INDUSTRIAL TRADING" },
  { id: "support", name: "SUPPORT SERVICES" },
];

const projects = [
  {
    id: 1,
    title: "Material Engineering",
    description: "Developing more efficient material eng",
    image: "/images/MaterialEngineer.jpg",
    categories: ["Material", "Engineering"],
    type: "insulation"
  },
  {
    id: 2,
    title: "IUT Bank Building",
    description: "Developing more efficient material eng",
    image: "/images/bank.jpg",
    categories: ["Material", "Engineering"],
    type: "pipe"
  },
  {
    id: 3,
    title: "Wind Energy Plant",
    description: "Developing more efficient material eng",
    image: "/images/wind-energy.jpg",
    categories: ["Material", "Engineering"],
    type: "trading"
  },
  {
    id: 4,
    title: "Office Building",
    description: "Developing more efficient material eng",
    image: "/images/office.jpg",
    categories: ["Material", "Engineering"],
    type: "support"
  },
  {
    id: 5,
    title: "US Logistic Port",
    description: "Developing more efficient material eng",
    image: "/projects/port.jpg",
    categories: ["Material", "Engineering"],
    type: "insulation"
  },
  {
    id: 6,
    title: "Moscow life",
    description: "Developing more efficient material eng",
    image: "/projects/moscow.jpg",
    categories: ["Material", "Engineering"],
    type: "pipe"
  },
  {
    id: 7,
    title: "Car Engineering",
    description: "Developing more efficient material eng",
    image: "/projects/car.jpg",
    categories: ["Material", "Engineering"],
    type: "trading"
  },
  {
    id: 8,
    title: "Factory development",
    description: "Developing more efficient material eng",
    image: "/projects/factory.jpg",
    categories: ["Material", "Engineering"],
    type: "support"
  },
  {
    id: 9,
    title: "Wind Energy Plant",
    description: "Developing more efficient material eng",
    image: "/projects/wind-plant.jpg",
    categories: ["Material", "Engineering"],
    type: "insulation"
  },
];

export default function Projects() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.type === activeCategory);

  return (
    <div className="min-h-screen">
      
        <Navigation />
      {/* Hero Section */}
      <div className="relative h-[500px] bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/projects.png')",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative container mx-auto h-full flex flex-col justify-center px-4">
          <Typography variant="h1" className="text-white text-5xl font-bold">
            PROJECTS
          </Typography>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 duration-300">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "filled" : "outlined"}
                color={activeCategory === category.id ? "red" : "gray"}
                className="rounded-full"
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button color="white" variant="outlined" size="lg">
                    View Project
                  </Button>
                </div> */}
              </div>
              <div className="mt-4">
                <Typography variant="h5" className="mb-2">
                  {project.title}
                </Typography>
                <Typography color="gray" className="mb-2">
                  {project.description}
                </Typography>
                <div className="flex gap-2">
                  {project.categories.map((category, index) => (
                    <Typography
                      key={index}
                      variant="small"
                      color="gray"
                      className="italic"
                    >
                      {category}
                      {index < project.categories.length - 1 && ", "}
                    </Typography>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
