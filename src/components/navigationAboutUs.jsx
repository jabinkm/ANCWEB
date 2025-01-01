'use client'

import { useState } from 'react'
import { Link } from 'react-router-dom';
import { Navbar, Collapse, Typography, IconButton, Button, Menu, MenuHandler, MenuList, MenuItem } from "@material-tailwind/react";
import React from 'react';

const divisionsMenu = [
  {
    title: "MECHANICAL DIVISION (MED)",
    link: "/mechanical-division",
    subMenu: [
      "PIPING",
      "EQUIPMENT ERECTION",
      "STEEEL STRUCTURE FABRICATION & ERECTION",
      "PRE ENGINEERED BUILDINGS",
      "VALVES & INSTRUMENTS"
    ]
  },

  {
    title: "SPECIALITY SERVICE DIVISION (SSD)",
    link: "/speciality-service-division",
    subMenu: [
      "THERMAL & ACOUSTIC INSULATION",
      "COATING & PAINTING",
      "FIREPROOFING",
      "SCAFFOLDING SERVICES",
      "REFRACTORY WORKS",
      "WATER PROOFING",
      "ELECTRICAL HEAT TRACING",
    ]
  },
  
  {
    title: "INDUSTRIAL MATERIALS SUPPLY",
    subMenu: [
      "",
      ""
    ]
  },
];

function DivisionsMenu() {
  return (
    <Menu>
      <MenuHandler>
        <Typography as="div" variant="small" className="font-normal cursor-pointer text-gray-700 hover:text-red-600">
          OUR SERVICES
        </Typography>
      </MenuHandler>
      <MenuList className="p-1">
        {divisionsMenu.map((division, index) => (
          <Menu key={index} placement="right-start">
            <MenuHandler>
              <Link to={division.link}>
              <MenuItem>{division.title}</MenuItem>
              </Link>
            </MenuHandler>
            <MenuList>
              {division.subMenu.map((item, subIndex) => (
                <MenuItem key={subIndex}>{item}</MenuItem>
              ))}
            </MenuList>
          </Menu>
        ))}
      </MenuList>
    </Menu>
  );
}

function MobileDivisionsMenu() {
  return (
    <div className="pl-3">
      <Typography variant="small" color="blue-gray" className="font-medium">
        OUR SERVICES
      </Typography>
      {divisionsMenu.map((division, index) => (
        <div key={index} className="pl-3 mt-1">
          <Link to={division.link}>
          <Typography variant="small" color="blue-gray" className="font-medium">
            {division.title}
          </Typography>
          </Link>
          <ul className="pl-3">
            {division.subMenu.map((item, subIndex) => (
              <li key={subIndex}>
                <Typography variant="small" color="gray" className="font-normal">
                  {item}
                </Typography>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (

    <Navbar className="sticky top-0 z-50 max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <img
          src="images/anc-full-removebg.png"
          alt="ANC Logo"
          width={200}
          height={60}
          className="sm:h-12 w-auto"
        />
        <div className="hidden lg:block">
          <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
              as="li"
              variant="small"
              color="blue-gray"
              className="p-1 font-normal"
            >
              <Link to={"/"} className="flex items-center text-gray-700 hover:text-red-600">
                HOME
              </Link>
            </Typography>
            <Typography
              as="li"
              variant="small"
              color="blue-gray"
              className="p-1 font-normal"
            >
              <Link to={"/about-us"} className="flex items-center text-red-600 hover:text-red-600">
                ABOUT US
              </Link>
            </Typography>
            <Typography
              as="li"
              variant="small"
              color="blue-gray"
              className="p-1 font-normal"
            >
              <DivisionsMenu />
            </Typography>
            <Typography
              as="li"
              variant="small"
              color="blue-gray"
              className="p-1 font-normal"
            >
              <Link to={"/projects"} className="flex items-center text-gray-700 hover:text-red-600">
                PROJECTS
              </Link>
            </Typography>
            <Typography
              as="li"
              variant="small"
              color="blue-gray"
              className="p-1 font-normal"
            >
              <Link to={"/contact-us"} className="flex items-center text-gray-700 hover:text-red-600">
                CONTACT US
              </Link>
            </Typography>
          </ul>
        </div>
        <Link to={"/contact-us"}>
        <Button className="hidden lg:inline-block bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition duration-300">
          GET A QUOTE
        </Button>
        </Link>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <i className="fas fa-times" />
          ) : (
            <i className="fas fa-bars" />
          )}
        </IconButton>
      </div>
      <Collapse open={isOpen}>
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal"
          >
            <Link to={"/"} className="flex items-center text-gray-700 hover:text-red-600" onClick={() => setIsOpen(false)}>
              HOME
            </Link>
          </Typography>
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal"
          >
            <Link to={"/about-us"} className="flex items-center text-red-600 hover:text-red-600" onClick={() => setIsOpen(false)}>
              ABOUT US
            </Link>
          </Typography>
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal"
          >
            <MobileDivisionsMenu />
          </Typography>
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal"
          >
            <Link to={"/projects"} className="flex items-center text-gray-700 hover:text-red-600" onClick={() => setIsOpen(false)}>
              PROJECTS
            </Link>
          </Typography>
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal"
          >
            <Link to={"/contact-us"} className="flex items-center text-gray-700 hover:text-red-600" onClick={() => setIsOpen(false)}>
              CONTACT US
            </Link>
          </Typography>
        </ul>
        <Link to={"/contact-us"}>
        <Button className="mb-2 bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 mt-4 transition duration-300">
          GET A QUOTE
        </Button>
        </Link>
      </Collapse>
    </Navbar>
  )
}