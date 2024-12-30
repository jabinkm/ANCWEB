import React from 'react';
import {
  Typography,
  List,
  ListItem,
  Card,
  CardBody,
  Button,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';

const divisions = [
  { name: "Thermal Insulation", path: "/divisions/thermal-insulation" },
  { name: "Coating & Painting", path: "/divisions/coating-painting" },
  { name: "Pipe Cold Cutting", path: "/divisions/pipe-cold-cutting", active: true },
  { name: "Industrial Trading", path: "/divisions/industrial-trading" },
  { name: "Support Services", path: "/divisions/support-services" },
];

const tools = [
  {
    name: "HYDRAULIC POWERPACKS",
    image: "/images/tools/hydraulic-powerpack.png",
  },
  {
    name: "WATERWALL PANEL CUTTING",
    image: "/images/tools/waterwall-panel.png",
  },
  {
    name: "CHAIN TYPE PIPE CUTTING MACHINE",
    image: "/images/tools/chain-type.png",
  },
  {
    name: "EASY-TO-FIT PIPE WELDING",
    image: "/images/tools/easy-fit.png",
  },
];

export default function PipeColdCutting() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[300px] bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/pipe-cutting-hero.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative container mx-auto h-full flex flex-col justify-center px-4">
          <Typography variant="h1" className="text-white text-5xl font-bold">
            PIPE COLD CUTTING
          </Typography>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <Card className="shadow-lg">
              <CardBody>
                <Typography variant="h6" color="blue-gray" className="mb-4">
                  OUR DIVISIONS
                </Typography>
                <List>
                  {divisions.map((division, index) => (
                    <Link key={index} to={division.path}>
                      <ListItem
                        className={`hover:bg-red-50 ${
                          division.active ? "bg-red-50 text-red-500" : ""
                        }`}
                      >
                        {division.name}
                      </ListItem>
                    </Link>
                  ))}
                </List>
              </CardBody>
            </Card>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3">
            <div className="space-y-8">
              <div>
                <Typography variant="h3" className="mb-4">
                  Pipe Cold Cutting
                </Typography>
                <Typography className="mb-4">
                  Pipe Cold Cutting Supply & Services (Affiliated with DWT-GmbH)<br />
                  <a href="https://www.dwt-pipetools.com" className="text-blue-500 hover:underline">
                    https://www.dwt-pipetools.com
                  </a>
                </Typography>
              </div>

              <div>
                <Typography variant="h5" className="mb-4">
                  Pipe cutting and beveling (Tools & Equipment Supply)
                </Typography>
                <Typography className="mb-4">
                  The perfect machines for pipe cutting and beveling of heavy wall pipes. With our huge range of pipe cutting and pipe cutting and beveling machines every kind of pipe can be cut for further pipe edge preparation.
                </Typography>
              </div>

              <div>
                <Typography variant="h5" className="mb-4">
                  Exact Pipe Cutting Machines
                </Typography>
                <Typography className="mb-4">
                  Exact pipe cutters are suitable for all kinds of pipe materials; a single machine allows cutting pipes of greatly differing sizes. Pipe cutting is significantly faster as compared to traditional methods. The resulting surfaces are precise and of uniform quality - the pipes are ready for joining right away.
                </Typography>
              </div>

              <div>
                <Typography variant="h5" className="mb-4">
                  DLW Pipe Cold Cutting Machine
                </Typography>
                <Typography className="mb-4">
                  The Pipe Cold Cutter is a low weight machine for cutting and beveling. It is a split frame for fast OD mounting. It is easy to clamp and adjust to the pipe. The DLW requires a minimum of space around the pipe and is delivered with electrical, pneumatic or hydraulic motor.
                </Typography>
              </div>

              <div>
                <Typography variant="h5" className="mb-4">
                  Boiler Panel Saw
                </Typography>
                <Typography className="mb-4">
                  The boiler tube panel cutter has been developed for repair and weld preparation of boiler tube panels in high pressure boilers and supercritical boilers.
                </Typography>
              </div>

              <div>
                <Typography variant="h5" className="mb-4">
                  Chain Type Pipe Cutting Machine
                </Typography>
                <Typography className="mb-4">
                  This pneumatic pipe cutting machine is the ideal tool for cutting and beveling of pipes made of different material.
                </Typography>
              </div>

              {/* Partner Logos */}
              <div className="flex items-center gap-8 mt-8">
                <img src="/images/logos/anc-logo.png" alt="ANC Logo" className="h-12" />
                <img src="/images/logos/babcock-logo.png" alt="Babcock Logo" className="h-12" />
                <img src="/images/logos/dwt-logo.png" alt="DWT Logo" className="h-12" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tools Section */}
      <div className="bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <Typography variant="h3" className="text-white mb-12">
            PIPE COLD CUTTING TOOLS
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tools.map((tool, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="rounded-full border-4 border-red-500 p-2 mb-4">
                  <img
                    src={tool.image}
                    alt={tool.name}
                    className="w-48 h-48 rounded-full object-cover"
                  />
                </div>
                <Typography
                  variant="h6"
                  className="text-white text-center"
                >
                  {tool.name}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="grid md:grid-cols-2">
        <div className="bg-red-600 text-white p-16">
          <Typography variant="h3" className="mb-4">
            Anything you Need
          </Typography>
          <Typography className="mb-6">
            Contact us for more info ?
          </Typography>
          <Button
            variant="outlined"
            color="white"
            className="hover:bg-white hover:text-red-600"
          >
            CONTACT US
          </Button>
        </div>
        <div className="bg-black text-white p-16">
          <Typography variant="h3" className="mb-4 text-red-600">
            It's The Best Solution
          </Typography>
          <Typography>
            The company has been working as an esteemed industrial organization
            in Saudi Arabia since 2012
          </Typography>
        </div>
      </div>
    </div>
  );
}

