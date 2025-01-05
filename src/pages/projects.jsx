import React, { useEffect, useState } from 'react';
import { Typography, Button } from "@material-tailwind/react";
import { Navigation } from '../components/navigationProjects';
import { TopHeader } from '../components/top-header';
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
        <TopHeader />
        <Navigation />
      {/* Hero Section */}
      <div className="relative h-[300px] bg-black">
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

// import { useState } from 'react';
// import {
//   Typography,
//   Tabs,
//   TabsHeader,
//   TabsBody,
//   Tab,
//   TabPanel,
//   Card,
//   CardHeader,
//   CardBody,
//   Button,
// } from "@material-tailwind/react";
// import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
// import { TopHeader } from '../components/top-header';
// import { Navigation } from '../components/navigationProjects';
// import { Footer } from '../components/footer';

// const categories = [
//   {
//     label: "Oil and Gas",
//     value: "oil",
//     description: "ANC provides innovative solutions to save time and utilize resources during turnarounds, maintenance projects, capital projects and more. We support the upstream, midstream and downstream industries.",
//     mainImage: "/images/projects/oil-gas-main.jpg",
//     subImages: [
//       {
//         src: "/images/projects/oil-gas-1.jpg",
//         title: "Successful Refinery"
//       }
//     ],
//     downloads: [
//       { label: "Download Our Oil & Gas Brochure", url: "#" }
//     ]
//   },
//   {
//     label: "Power Generation",
//     value: "power",
//     description: "Whether your job is a scheduled outage, emergency work or routine boiler maintenance, BrandSafway has the required experience and expertise to support your fossil fuel or renewable power generation project.",
//     mainImage: "/images/projects/power-main.jpg",
//     subImages: [
//       {
//         src: "/images/projects/power-1.jpg",
//         title: "Nuclear Power Plant"
//       },
//       {
//         src: "/images/projects/power-2.jpg",
//         title: "Hydro Power Plant"
//       },
//       {
//         src: "/images/projects/power-3.jpg",
//         title: "Energy Generation Plant"
//       },
//       {
//         src: "/images/projects/power-4.jpg",
//         title: "Modern Power Station"
//       }
//     ],
//     downloads: [
//       { label: "Download Our Power Generation Brochure", url: "#" }
//     ]
//   },
//   {
//     label: "Civil and Infrastructure",
//     value: "civil",
//     description: "From bridges and tunnels to water and wastewater treatment facilities, BrandSafway delivers safe and highly productive solutions for maintenance, repair and capital projects.",
//     mainImage: "/images/projects/civil-main.jpg",
//     subImages: [
//       {
//         src: "/images/projects/civil-1.jpg",
//         title: "Bridge Construction"
//       },
//       {
//         src: "/images/projects/civil-2.jpg",
//         title: "Water Treatment"
//       },
//       {
//         src: "/images/projects/civil-3.jpg",
//         title: "Infrastructure Support"
//       },
//       {
//         src: "/images/projects/civil-4.jpg",
//         title: "Maintenance Work"
//       }
//     ],
//     downloads: [
//       { label: "Download Our Brochures", url: "#" },
//       { label: "Contact Us", url: "#" }
//     ]
//   },
//   {
//     label: "Commercial Construction",
//     value: "commercial",
//     description: "For new construction, renovation and maintenance construction projects, BrandSafway delivers safe, high-performance solutions.",
//     mainImage: "/images/projects/commercial-main.jpg",
//     subImages: [
//       {
//         src: "/images/projects/commercial-1.jpg",
//         title: "Office Building Construction"
//       },
//       {
//         src: "/images/projects/commercial-2.jpg",
//         title: "Hotel Development"
//       },
//       {
//         src: "/images/projects/commercial-3.jpg",
//         title: "Shopping Center"
//       },
//       {
//         src: "/images/projects/commercial-4.jpg",
//         title: "Residential Complex"
//       }
//     ],
//     downloads: [
//       { label: "View Full Case Studies", url: "#" }
//     ]
//   }
// ];

// export default function Projects() {
//   const [activeTab, setActiveTab] = useState("oil");

//   return (
//     <div className="min-h-screen bg-white">
//         <TopHeader />
//         <Navigation />
//       {/* Hero Section */}
//       <div className="relative h-[400px] bg-black">
//         <div 
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//           style={{
//             backgroundImage: "url('/images/oilRefinaryCoating.jpg')",
//           }}
//         >
//           <div className="absolute inset-0 bg-black/50" />
//         </div>
//         <div className="relative container mx-auto h-full flex flex-col justify-center items-center text-center px-4">
//           <div className="bg-black/80 p-4 rounded-full mb-4">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//             </svg>
//           </div>
//           <Typography variant="h1" className="text-white text-5xl font-bold mb-4">
//             Areas of Expertise
//           </Typography>
//           <Typography variant="lead" className="text-white max-w-3xl">
//             ANC provides the broadest range of services, products and solutions — with the greatest depth of expertise — in the oil and gas, power generation, civil and infrastructure, and commercial construction industries.
//           </Typography>
//         </div>
//       </div>

//       {/* Tabs Navigation */}
//       <div className="container mx-auto px-4 -mt-8">
//         <Tabs value={activeTab} onChange={(value) => setActiveTab(value)}>
//           <TabsHeader className="bg-white/80 backdrop-blur-xl">
//             {categories.map(({ label, value }) => (
//               <Tab key={value} value={value} className="py-4">
//                 {label}
//               </Tab>
//             ))}
//           </TabsHeader>
//           <TabsBody>
//             {categories.map(({ value, description, mainImage, subImages, downloads }) => (
//               <TabPanel key={value} value={value} className="py-16">
//                 <div className="grid md:grid-cols-2 gap-8 mb-12">
//                   <div>
//                     <Typography variant="h3" className="mb-6">
//                       {categories.find(cat => cat.value === value)?.label}
//                     </Typography>
//                     <Typography className="mb-6">
//                       {description}
//                     </Typography>
//                     {downloads.map((download, index) => (
//                       <Button
//                         key={index}
//                         variant="text"
//                         className="flex items-center gap-2 text-red-500"
//                         onClick={() => window.open(download.url, '_blank')}
//                       >
//                         <ArrowDownTrayIcon className="h-4 w-4" />
//                         {download.label}
//                       </Button>
//                     ))}
//                   </div>
//                   <div>
//                     <img
//                       src={mainImage}
//                       alt={categories.find(cat => cat.value === value)?.label}
//                       className="w-full h-96 object-cover rounded-lg"
//                     />
//                   </div>
//                 </div>
//                 {subImages.length > 0 && (
//                   <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                     {subImages.map((image, index) => (
//                       <Card key={index} className="overflow-hidden">
//                         <CardHeader floated={false} className="h-48">
//                           <img
//                             src={image.src}
//                             alt={image.title}
//                             className="w-full h-full object-cover"
//                           />
//                         </CardHeader>
//                         <CardBody className="p-3">
//                           <Typography variant="small" className="font-semibold">
//                             {image.title}
//                           </Typography>
//                         </CardBody>
//                       </Card>
//                     ))}
//                   </div>
//                 )}
//               </TabPanel>
//             ))}
//           </TabsBody>
//         </Tabs>
//       </div>
//       <Footer />
//     </div>
//   );
// }

