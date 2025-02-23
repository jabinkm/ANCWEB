import React, { useEffect, useState } from "react";
import { Typography, Button } from "@material-tailwind/react";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import { Navigation } from "../components/navigationProjects";
import { Footer } from "../components/footer";

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
    image: "/images/projects/0003.jpg",
    categories: ["Material", "Engineering"],
    type: "insulation",
  },
  {
    id: 2,
    title: "IUT Bank Building",
    description: "Developing more efficient material eng",
    image: "/images/projects/0005.jpg",
    categories: ["Material", "Engineering"],
    type: "pipe",
  },
  {
    id: 3,
    title: "Wind Energy Plant",
    description: "Developing more efficient material eng",
    image: "/images/projects/0007.jpg",
    categories: ["Material", "Engineering"],
    type: "trading",
  },
  {
    id: 4,
    title: "Office Building",
    description: "Developing more efficient material eng",
    image: "/images/projects/0015.jpg",
    categories: ["Material", "Engineering"],
    type: "support",
  },
  {
    id: 5,
    title: "US Logistic Port",
    description: "Developing more efficient material eng",
    image: "/images/projects/0017.jpg",
    categories: ["Material", "Engineering"],
    type: "insulation",
  },
  {
    id: 6,
    title: "Moscow life",
    description: "Developing more efficient material eng",
    image: "/images/projects/0018.jpg",
    categories: ["Material", "Engineering"],
    type: "pipe",
  },
  {
    id: 7,
    title: "Car Engineering",
    description: "Developing more efficient material eng",
    image: "/images/projects/0025.jpg",
    categories: ["Material", "Engineering"],
    type: "trading",
  },
  {
    id: 8,
    title: "Factory development",
    description: "Developing more efficient material eng",
    image: "/images/projects/0035.jpg",
    categories: ["Material", "Engineering"],
    type: "support",
  },
  {
    id: 9,
    title: "Wind Energy Plant",
    description: "Developing more efficient material eng",
    image: "/images/projects/0043.jpg",
    categories: ["Material", "Engineering"],
    type: "insulation",
  },
  {
    id: 10,
    title: "Car Engineering",
    description: "Developing more efficient material eng",
    image: "/images/projects/0048.jpg",
    categories: ["Material", "Engineering"],
    type: "trading",
  },
  {
    id: 11,
    title: "Factory development",
    description: "Developing more efficient material eng",
    image: "/images/projects/0051.jpg",
    categories: ["Material", "Engineering"],
    type: "support",
  },
  {
    id: 12,
    title: "Wind Energy Plant",
    description: "Developing more efficient material eng",
    image: "/images/projects/0053.jpg",
    categories: ["Material", "Engineering"],
    type: "insulation",
  },
  {
    id: 13,
    title: "Car Engineering",
    description: "Developing more efficient material eng",
    image: "/images/projects/009.jpg",
    categories: ["Material", "Engineering"],
    type: "trading",
  },
  {
    id: 14,
    title: "Factory development",
    description: "Developing more efficient material eng",
    image: "/images/projects/014.jpg",
    categories: ["Material", "Engineering"],
    type: "support",
  },
  {
    id: 15,
    title: "Wind Energy Plant",
    description: "Developing more efficient material eng",
    image: "/images/projects/017.jpg",
    categories: ["Material", "Engineering"],
    type: "insulation",
  },
  {
    id: 16,
    title: "Factory development",
    description: "Developing more efficient material eng",
    image: "/images/projects/026.jpg",
    categories: ["Material", "Engineering"],
    type: "support",
  },
  {
    id: 17,
    title: "Wind Energy Plant",
    description: "Developing more efficient material eng",
    image: "/images/projects/035.jpg",
    categories: ["Material", "Engineering"],
    type: "insulation",
  },
];

const projectData = [
  {
    year: "2024",
    client: "JAZAN INTEGRATED GASIFICATION & POWER COMPANY",
    projectName: "JIGPC PLANT",
    location: "JAZAN",
    typeOfWork: "VALVE & FLANGE BOX INSTALLATION",
  },
  {
    year: "2024",
    client: "WISON ENGINEERING Ltd",
    projectName: "DPCU UNIT-SAUDI ARAMCO",
    location: "SHAYBAH",
    typeOfWork: "CHEMICAL CLEANING",
  },
  {
    year: "2024",
    client: "ARABIAN CHEMICAL TERMINAL",
    projectName: "JUBAIL COMMERCIAL PORT-T-25 & P09A",
    location: "AL JUBAIL",
    typeOfWork: "THERMAL INSULATION",
  },
  {
    year: "2024",
    client: "WISON ENGINEERING Ltd",
    projectName: "DPCU UNIT-SAUDI ARAMCO",
    location: "SHAYBAH",
    typeOfWork: "THERMAL INSULATION",
  },
  {
    year: "2024",
    client: "FACTORY OF BAKER HUGHES SAUDI ARABIA FOR INDUSTRY",
    projectName: "JAFURAH-1 SAUDI ARAMCO",
    location: "DAMMAM",
    typeOfWork: "SCAFFOLDING & THERMAL INSULATION",
  },
  {
    year: "2024",
    client: "ARABIAN CHEMICAL TERMINAL",
    projectName: "JUBAIL COMMERCIAL PORT-SLOPE TANKS",
    location: "AL JUBAIL",
    typeOfWork: "PAINTING",
  },
  {
    year: "2024",
    client: "ROTARY ENGINEERING",
    projectName: "MARJAN-SAUDI ARAMCO",
    location: "MARJAN",
    typeOfWork: "SCAFFOLDING & PAINTING",
  },
  {
    year: "2024",
    client: "AL FAREJI CONTRACTING COMPANY",
    projectName: "EAST PIPES PLANT SHUTDOWN",
    location: "DAMMAM",
    typeOfWork: "REFRACTORY",
  },
  {
    year: "2024",
    client: "OLAYAN DESCON INDST. CO. LTD. (ODICO)",
    projectName: "RTR PLANT SHUTDOWN",
    location: "RASTANURA",
    typeOfWork: "BLASTING & PAINTING",
  },
  {
    year: "2024",
    client: "SAAG SOLUTIONS",
    projectName: "NOMAC PLANT SHUTDOWN",
    location: "JEDDAH",
    typeOfWork: "REFRACTORY & INSULATION",
  },
  {
    year: "2024",
    client: "ANBEEB INDUSTRIAL SERVICES CO. LTD.",
    projectName: "RTR PLANT SHUTDOWN",
    location: "RASTANURA",
    typeOfWork: "BLASTING & PAINTING",
  },
  {
    year: "2024",
    client: "JAZAN INTEGRATED GASIFICATION AND POWER COMPANY (JIGPC)",
    projectName: "HSFO SUPPLY SYSTEM",
    location: "JAZAN",
    typeOfWork: "THERMAL INSULATION, SCAFFOLDING, COATING",
  },
  {
    year: "2024",
    client: "BAKER HUGHES",
    projectName: "JAFURAH 1 & JAFURAH 2",
    location: "DAMMAM-8H YARD",
    typeOfWork: "THERMAL INSULATION ON SKIDS",
  },
  {
    year: "2024",
    client: "ARABIAN CHEMICALS TERMINALS",
    projectName: "ACT PROJECTS-T-25 INSULATION",
    location: "JUBAIL",
    typeOfWork: "THERMAL INSULATION",
  },
  {
    year: "2024",
    client: "ARABIAN CHEMICALS TERMINALS",
    projectName: "ACT PROJECTS-P-09A PIPELINE, PUMPS AND FLOW METERS",
    location: "JUBAIL",
    typeOfWork: "THERMAL INSULATION",
  },
  {
    year: "2024",
    client: "TABLE FOUR CONTRACTING CO.",
    projectName: "RASTANURA REFINERY",
    location: "RAS TANURA",
    typeOfWork: "THERMAL INSULATION",
  },
  {
    year: "2023",
    client: "EXPERTISE CONTRACTING CO.",
    projectName: "YANPET-SABIC PROJECT",
    location: "YANBU",
    typeOfWork: "WATERPROOFING",
  },
  {
    year: "2023",
    client: "CHEMANOL METHANOL CHEMICAL COMPANY",
    projectName: "MAINTENANCE JOB",
    location: "JUBAIL",
    typeOfWork: "THERMAL INSULATION",
  },
  {
    year: "2023",
    client: "OLAYAN DESCON INDST. CO. LTD. (ODICO)",
    projectName: "SATORP SHUTDOWN",
    location: "JUBAIL",
    typeOfWork: "THERMAL INSULATION",
  },
  {
    year: "2023",
    client: "AL AMARA INTERNATIONAL TRAD & CONT. COMPANY LTD.",
    projectName: "SATORP SHUTDOWN",
    location: "JUBAIL",
    typeOfWork: "THERMAL INSULATION",
  },
  {
    year: "2023",
    client: "INTEGRATED TECHNOLOGIES CONT.",
    projectName: "FARABI SHUTDOWN",
    location: "YANBU",
    typeOfWork: "THERMAL INSULATION",
  },
  {
    year: "2023",
    client: "SAUDI CHEMICAL COMPANY",
    projectName: "MILITARY EXPLOSIVES FACTORY",
    location: "RIYADH",
    typeOfWork: "BLASTING & PAINTING",
  },
  {
    year: "2023",
    client: "OLAYAN DESCON INDST. CO. LTD. (ODICO)",
    projectName: "SAMREF-SHUTDOWN JOB",
    location: "YANBU",
    typeOfWork: "BLASTING & PAINTING",
  },
  {
    year: "2023",
    client: "L&T HYDROCARBON SAUDI COMPANY",
    projectName: "AR RAZI-4 CONDENSER",
    location: "JUBAIL",
    typeOfWork: "THERMAL INSULATION",
  },
  {
    year: "2023",
    client: "HARRIS PYE SAUDI LLC.",
    projectName: "KAIF (KJO)",
    location: "AL KAFJI",
    typeOfWork: "THERMAL INSULATION",
  },
  {
    year: "2023",
    client: "AMC",
    projectName: "YANBU PORT/ARAMCO",
    location: "YANBU",
    typeOfWork: "CONCRETE COATING",
  },
  {
    year: "2023",
    client: "OLAYAN DESCON INDST. CO. LTD. (ODICO)",
    projectName: "S-CHEM",
    location: "JUBAIL",
    typeOfWork: "THERMAL INSULATION",
  },
  {
    year: "2023",
    client: "LUBERAF",
    projectName: "LUBERAF SHUTDOWN JOB",
    location: "JEDDAH",
    typeOfWork: "BLASTING & PAINTING",
  },
  {
    year: "2023",
    client: "KYTOS ARABIA",
    projectName: "FARABI",
    location: "YANBU",
    typeOfWork: "SCAFFOLDING",
  },
  {
    year: "2023",
    client: "K.A. KHONAINI & PARTNER CONT. CO .LTD",
    projectName: "JUBAIL COMMERCIAL PORT",
    location: "AL JUBAIL",
    typeOfWork: "THERMAL INSULATION",
  },
  {
    year: "2023",
    client: "EXPERTISE CONTRACTING CO.",
    projectName: "FARABI SHUT DOWN JOB",
    location: "YANBU",
    typeOfWork: "FIREPROOFING",
  },
  {
    year: "2023",
    client: "GENERAL ELECTRIC SAUDI ADVANCED TURBINES (GESAT)",
    projectName: "SKID INSULATION",
    location: "DAMMAM",
    typeOfWork: "THERMAL INSULATION",
  },
  {
    year: "2023",
    client: "ARABIAN CHEMICAL TERMINAL",
    projectName: "JUBAIL COMMERCIAL PORT",
    location: "AL JUBAIL",
    typeOfWork: "PAINTING & THERMAL INSULATION",
  },
  {
    year: "2023",
    client: "RAFA GULF CONTRACTING COMPANY",
    projectName: "ARAMCO PROJECT",
    location: "DAMMAM",
    typeOfWork: "REFRACTORY",
  },
  {
    year: "2023",
    client: "WISON ENGINEERING Ltd",
    projectName: "SAUDI KAYAN SHUT DOWN JOB",
    location: "AL JUBAIL",
    typeOfWork: "THERMAL INSULATION",
  },
  {
    year: "2023",
    client: "H.K AL SAIDIQ",
    projectName: "SAUDI KAYAN SHUT DOWN JOB",
    location: "AL JUBAIL",
    typeOfWork: "THERMAL INSULATION",
  },
  {
    year: "2023",
    client: "CORE TEAM GENERAL CONTRACTING CO.",
    projectName: "UNITED, SABIC",
    location: "AL JUBAIL",
    typeOfWork: "THERMAL INSULATION",
  },
  {
    year: "2023",
    client: "SAUDI ARAMCO BASE OIL COMPANY-LUBEREF",
    projectName: "LUBEREF SHUT DOWN JOB",
    location: "JEDDAH",
    typeOfWork: "BLASTING & PAINTING",
  },
  {
    year: "2023",
    client: "EXPERTISE CONTRACTING CO.",
    projectName: "FARABI SHUT DOWN JOB",
    location: "YANBU",
    typeOfWork: "SCAFFOLDING, PAINTING, INSULATION",
  },
  {
    year: "2023",
    client: "EXPERTISE CONTRACTING CO.",
    projectName: "LUBEREF SHUT DOWN JOB",
    location: "JEDDAH",
    typeOfWork: "BLASTING & PAINTING",
  },
  {
    year: "2023",
    client: "ARAMCO",
    projectName: "RIYADH REFINERY SHUT DOWN JOB",
    location: "RIYADH",
    typeOfWork: "EHT, INSULATION",
  },
  {
    year: "2023",
    client: "OLAYAN DESCON INDST. CO. LTD. (ODICO)",
    projectName: "RIYADH REFINERY SHUT DOWN JOB",
    location: "RIYADH",
    typeOfWork: "BLASTING & PAINTING",
  },
  {
    year: "2023",
    client: "SINOPEC ENGINEERING GROUP SAUDI CO. LTD.",
    projectName: "ARAMCO-RASTANURA PROJECT",
    location: "AL JUBAIL",
    typeOfWork: "THERMAL INSULATION",
  },
  {
    year: "2022",
    client: "AL YAMAMA",
    projectName: "SHARQ SHUT DOWN JOB",
    location: "AL JUBAIL",
    typeOfWork: "PAINTING",
  },
  {
    year: "2022",
    client: "ARABIAN CHEMICAL TERMINAL",
    projectName: "JUBAIL COMMERCIAL PORT",
    location: "AL JUBAIL",
    typeOfWork: "SCAFFOLDING, THERMAL INSULATION",
  },
  {
    year: "2022",
    client: "OLAYAN DESCON INDST. CO. LTD. (ODICO)",
    projectName: "SASREF SHUTDOWN JOB",
    location: "AL JUBAIL",
    typeOfWork: "BLASTING, PAINTING & INSULATION",
  },
  {
    year: "2022",
    client: "SULZER CHEMTECH (UK) LTD.",
    projectName: "SAFCO-SHUTDOWN JOB",
    location: "AL JUBAIL",
    typeOfWork: "SCAFFOLDING, BLASTING & INSULATION",
  },
  {
    year: "2022",
    client: "AL BLAGHA",
    projectName: "DAMMAM SHIPYARD",
    location: "DAMMAM",
    typeOfWork: "THERMAL INSULATION",
  },
  {
    year: "2022",
    client: "AL BLAGHA",
    projectName: "DUBA ARAMCO PROJECT",
    location: "DUBA",
    typeOfWork: "BLASTING & PAINTING",
  },
  {
    year: "2022",
    client: "SHAMASI CONTRACTING COMPANY",
    projectName: "FARABI-POLO PROJECT",
    location: "YANBU",
    typeOfWork: "THERMAL INSULATION",
  },
  {
    year: "2022",
    client: "OLAYAN DESCON INDST. CO. LTD. (ODICO)",
    projectName: "S-CHEM SHUT DOWN JOB",
    location: "AL JUBAIL",
    typeOfWork: "BLASTING, PAINTING & INSULATION",
  },

  {
    year: "2022",
    client: "SIEMENS",
    projectName: "RAFHAH PROJECT",
    location: "RAFHAH",
    typeOfWork: "SCAFFOLDING, BLASTING & INSULATION",
  },
  {
    year: "2022",
    client: "LINDE",
    projectName: "SADARA PROJECT",
    location: "AL JUBAIL",
    typeOfWork: "THERMAL INSULATION",
  },
  {
    year: "2022",
    client: "AL AMARA INTERNATIONAL TRAD & CONT. COMPANY LTD.",
    projectName: "SATORP PROJECT",
    location: "AL JUBAIL",
    typeOfWork: "THERMAL INSULATION",
  },
  {
    year: "2022",
    client: "OLAYAN DESCON INDST. CO. LTD. (ODICO)",
    projectName: "SATORP PROJECT",
    location: "AL JUBAIL",
    typeOfWork: "THERMAL INSULATION",
  },
  {
    year: "2022",
    client: "SIEMENS",
    projectName: "MARJAN-SAUDI ARAMCO",
    location: "DAMMAM",
    typeOfWork: "EHT INSTALLATION",
  },
  {
    year: "2022",
    client: "SEPCO",
    projectName: "PP14",
    location: "RIYADH",
    typeOfWork: "SCAFFOLDING",
  },
  {
    year: "2022",
    client: "OLAYAN DESCON INDST. CO. LTD. (ODICO)",
    projectName: "S-CHEM",
    location: "AL JUBAIL",
    typeOfWork: "THERMAL INSULATION & PAINTING",
  },
  {
    year: "2022",
    client: "OLAYAN DESCON INDST. CO. LTD. (ODICO)",
    projectName: "PETROKEMYA",
    location: "AL JUBAIL",
    typeOfWork: "THERMAL INSULATION",
  },
  {
    year: "2022",
    client: "REDLAND INDUSTRIAL SERVICE LTD (RISAL)",
    projectName: "JIZAN REFINERY PROJECT-ARAMCO",
    location: "JAZAN",
    typeOfWork: "REFRACTORY DRY-OUT",
  },
  {
    year: "2022",
    client: "OLAYAN DESCON INDST. CO. LTD. (ODICO)",
    projectName: "INTERNAL PAINT APPLICATION-BERRY GAS PLANT",
    location: "AL JUBAIL",
    typeOfWork: "BLASTING & PAINTING",
  },
  {
    year: "2022",
    client: "BCI",
    projectName: "BASIC CHEMICAL INDUSTRIES",
    location: "AL JUBAIL",
    typeOfWork: "THERMAL INSULATION",
  },
  {
    year: "2022",
    client: "AL AMARA INTERNATIONAL TRAD & CONT. COMPANY LTD.",
    projectName: "SATORP PROJECT",
    location: "AL JUBAIL",
    typeOfWork: "THERMAL INSULATION",
  },
  {
    year: "2022",
    client: "EXPERTISE CONTRACTING CO.",
    projectName: "SASREF",
    location: "AL JUBAIL",
    typeOfWork: "BLASTING & PAINTING",
  },
  {
    year: "2022",
    client: "KHUSHEIM COMPANY FOR INDUSTRIAL EQUIPMENT.",
    projectName: "S-CHEM",
    location: "AL JUBAIL",
    typeOfWork: "EHT INSTALLATION",
  },
  {
    year: "2022",
    client: "EXPERTISE CONTRACTING CO.",
    projectName: "TURAIF PROJECT",
    location: "TURAIF",
    typeOfWork: "WRAPPING & INSULATION",
  },
  {
    year: "2022",
    client: "AL AMARA INTERNATIONAL TRAD & CONT. COMPANY LTD.",
    projectName: "TASNEE",
    location: "AL JUBAIL",
    typeOfWork: "THERMAL INSULATION",
  },
  {
    year: "2022",
    client: "SINOPEC ENGINEERING GROUP SAUDI CO. LTD.",
    projectName: "XUPEY PROJECT-SHARQ",
    location: "AL JUBAIL",
    typeOfWork: "THERMAL INSULATION",
  },
  {
    year: "2022",
    client: "SULZER CHEMTECH (UK) LTD.",
    projectName: "SADARA PROJECT",
    location: "AL JUBAIL",
    typeOfWork: "THERMAL INSULATION",
  },
  {
    year: "2022",
    client: "MIDDLE EAST CONTRACTING COMPANY LTD.",
    projectName: "RUMAH PROJECT",
    location: "RIYADH",
    typeOfWork: "BLASTING & PAINTING",
  },
  {
    year: "2022",
    client: "OLAYAN DESCON INDST. CO. LTD. (ODICO)",
    projectName: "SAUDI ARAMCO REFINERY",
    location: "JIZAN",
    typeOfWork: "THERMAL INSULATION & REFRACTORY",
  },
  {
    year: "2022",
    client: "NVENT THERMAL BELGIUM NV",
    projectName: "FEMCO - CYLINGAS PROJECT",
    location: "AL JUBAIL",
    typeOfWork: "TRAC-LOC TANK INSULATION",
  },
  {
    year: "2022",
    client: "EXPERTISE CONTRACTING CO.",
    projectName: "YANPET-SABIC PROJECT",
    location: "YANBU",
    typeOfWork: "THERMAL INSULATION & PAINTING",
  },
  {
    year: "2022",
    client: "L&T HYDROCARBON SAUDI COMPANY",
    projectName: "L&T FABRICATION YARD",
    location: "ABU HADRIYAH",
    typeOfWork: "COLD CUTTING",
  },
  {
    year: "2022",
    client: "GAS ARABIAN SERVICES",
    projectName: "STEAM HEADER EXTENSION WORKS",
    location: "SHEDGUM",
    typeOfWork: "THERMAL INSULATION",
  },
  {
    year: "2022",
    client: "KHUSHEIM COMPANY FOR INDUSTRIAL EQUIPMENT.",
    projectName: "21 SKID - SAUDI ARAMCO",
    location: "DAMMAM",
    typeOfWork: "EHT INSTALLATION",
  },
  {
    year: "2022",
    client: "SEPCO",
    projectName: "PP13",
    location: "RIYADH",
    typeOfWork: "SCAFFOLDING",
  },
  {
    year: "2022",
    client: "EXPERTISE CONTRACTING CO.",
    projectName: "NORTHERN REGION CEMENT CO.",
    location: "TURAIF",
    typeOfWork: "WRAPPING & THERMAL INSULATION",
  },
  {
    year: "2022",
    client: "BRANCH OF CHINA PETROLEUM PIPELINE ENGINEERING CO. LTD.",
    projectName: "SAUDI ARAMCO",
    location: "QATIF",
    typeOfWork: "COLD CUTTING",
  },
  {
    year: "2022",
    client: "MIDDLE EAST CONTRACTING COMPANY LTD.",
    projectName: "RUMAH PROJECT",
    location: "RIYADH",
    typeOfWork: "STENCILING WORK",
  },
  {
    year: "2022",
    client: "GULF ASIA CONTRACTING COMPANY LLC.",
    projectName: "SADARA PROJECT",
    location: "AL JUBAIL",
    typeOfWork: "COLD CUTTING",
  },
  {
    year: "2022",
    client: "EXPERTISE CONTRACTING CO.",
    projectName: "KHURSANIYAH PLANT",
    location: "KHURSANIYA",
    typeOfWork: "BOLT TORQUING",
  },
  {
    year: "2021",
    client: "GULF ASIA CONTRACTING COMPANY LLC.",
    projectName: "MAADEN AMMONIA PLANT III PROJECT",
    location: "RAS AL KHAIR",
    typeOfWork: "THERMAL INSULATION",
  },
  {
    year: "2021",
    client: "JUFFALI HEAVY EQUIPMENT COMPANY (JHECO)",
    projectName: "SADARA PROJECT",
    location: "AL JUBAIL",
    typeOfWork: "BLASTING & PAINTING",
  },
  {
    year: "2021",
    client: "MIDDLE EAST CONTRACTING COMPANY LTD.",
    projectName: "RUMAH PROJECT",
    location: "RIYADH",
    typeOfWork: "THERMAL INSULATION",
  },
  {
    year: "2021",
    client: "ADHAR",
    projectName: "MAINTENANCE JOB",
    location: "AL JUBAIL",
    typeOfWork: "SCAFFOLDING & INSULATION",
  },
  {
    year: "2021",
    client: "SHARQAQI CO. ELECTROMECHANICAL CONTRACTOR.",
    projectName: "KING ABDUL AZIZ AIR BASE PROJECT (KAAB)",
    location: "AL KHOBAR",
    typeOfWork: "DUCT FABRICATION & INSTALLATION",
  },
  {
    year: "2021",
    client: "OLAYAN DESCON INDST. CO. LTD. (ODICO)",
    projectName: "SATORP",
    location: "AL JUBAIL",
    typeOfWork: "THERMAL INSULATION",
  },
  {
    year: "2021",
    client: "GULF ASIA CONTRACTING COMPANY LLC.",
    projectName: "MAADEN - WADI AL SHAMMAL",
    location: "TURAIF",
    typeOfWork: "UNDER GROUND WRAPPING",
  },
  {
    year: "2021",
    client: "GAS ARABIAN SERVICES",
    projectName: "INOCHEM PROJECT",
    location: "RAS AL KHAIR",
    typeOfWork: "BLASTING & PAINTING",
  },
  {
    year: "2021",
    client: "NASSER AL HAJRI CORPORATION",
    projectName: "BASIC CHEMICAL INDUSTRIES",
    location: "AL JUBAIL",
    typeOfWork: "THERMAL INSULATION",
  },
  {
    year: "2021",
    client: "THERMO MECCANICA",
    projectName: "SHUQAIG-SWCC",
    location: "SHUQAIG",
    typeOfWork: "SCAFFOLDING",
  },
  {
    year: "2021",
    client: "SINOPEC ENGINEERING GROUP SAUDI CO. LTD.",
    projectName: "SABIC UNITED - DOT PROJECT",
    location: "AL JUBAIL",
    typeOfWork: "THERMAL INSULATION",
  },
  {
    year: "2021",
    client: "SEPCO",
    projectName: "YANBU-SWCC PROJECT",
    location: "YANBU",
    typeOfWork: "SCAFFOLDING",
  },
  {
    year: "2021",
    client: "THERMO MECCANICA",
    projectName: "YANBU-SWCC PROJECT",
    location: "YANBU",
    typeOfWork: "SCAFFOLDING",
  },
  {
    year: "2021",
    client: "OLAYAN DESCON INDST. CO. LTD. (ODICO)",
    projectName: "SADARA - LINDE PROJECT",
    location: "AL JUBAIL",
    typeOfWork: "THERMAL INSULATION & EHT WORK",
  },
  {
    year: "2021",
    client: "SINOPEC ENGINEERING GROUP SAUDI CO. LTD.",
    projectName: "SAUDI ARAMCO IPC PROJECT",
    location: "RAS TANURA",
    typeOfWork: "THERMAL INSULATION",
  },
  {
    year: "2021",
    client: "SINOPEC ENGINEERING GROUP SAUDI CO. LTD.",
    projectName: "SABIC IBB RELIABILITY IMPROVEMENT PROJECT",
    location: "AL JUBAIL",
    typeOfWork: "THERMAL INSULATION",
  },
  {
    year: "2021",
    client: "HARRIS PYE SAUDI LLC.",
    projectName: "SEC SHOAIBA PROJECT",
    location: "JEDDAH",
    typeOfWork: "THERMAL INSULATION",
  },
  {
    year: "2021",
    client: "CHEMANOL METHANOL CHEMICAL COMPANY",
    projectName: "MAINTENANCE JOB",
    location: "AL JUBAIL",
    typeOfWork: "SCAFFOLDING & INSULATION",
  },
  {
    year: "2021",
    client: "J. DE JONGE LLC",
    projectName: "MAADEN - RAS AL KHAIR",
    location: "RAS AL KHAIR",
    typeOfWork: "THERMAL INSULATION",
  },
  {
    year: "2021",
    client: "ZAMIL OPERATIONS & MAINTENANCE CO. LTD.",
    projectName: "QURAYYAH - QIPP PROJECT",
    location: "QURAYYAH",
    typeOfWork: "THERMAL INSULATION",
  },
  {
    year: "2021",
    client: "HARRIS PYE SAUDI LLC.",
    projectName: "SWCC POWER PLANT",
    location: "AL KHOBAR",
    typeOfWork: "THERMAL INSULATION",
  },
  {
    year: "2020",
    client: "SINOPEC ENGINEERING GROUP SAUDI CO. LTD.",
    projectName: "SABIC BOG PIPELINE",
    location: "AL JUBAIL",
    typeOfWork: "BLASTING & PAINTING",
  },
  {
    year: "2020",
    client: "AL AMARA INTERNATIONAL TRAD & CONT. COMPANY LTD.",
    projectName: "SATORP PES-115 PROJECT",
    location: "AL JUBAIL",
    typeOfWork: "THERMAL INSULATION",
  },
  {
    year: "2020",
    client: "SEPCOIII ELECTRIC POWER CONSTRUCTION CO., LTD",
    projectName: "SEC PP13 POWER PLANT",
    location: "DURMA - RIYADH",
    typeOfWork: "THERMAL INSULATION & PAINTING",
  },
  {
    year: "2020",
    client: "GAS ARABIAN SERVICES",
    projectName: "DRESSAR AL RUSHD",
    location: "AL JUBAIL",
    typeOfWork: "THERMAL INSULATION",
  },
  {
    year: "2020",
    client: "ARABIAN CHEMICAL TERMINAL",
    projectName: "JUBAIL COMMERCIAL PORT",
    location: "AL JUBAIL",
    typeOfWork: "THERMAL INSULATION",
  },
  {
    year: "2020",
    client: "KHUSHEIM COMPANY FOR INDUSTRIAL EQUIPMENT",
    projectName: "SAUDI ARAMCO",
    location: "RAS TANURA",
    typeOfWork: "EHT INSTALLATION",
  },
  {
    year: "2020",
    client: "COPERION MIDDLE EAST CO. LTD.",
    projectName: "COPERION FACTORY",
    location: "AL JUBAIL",
    typeOfWork: "OVEN INSULATION",
  },
  {
    year: "2020",
    client: "SAUDI ROCKWOOL FACTORY",
    projectName: "STORAGE TANK MAINTENANCE",
    location: "RIYADH",
    typeOfWork: "THERMAL INSULATION",
  },
  {
    year: "2020",
    client: "ARABIAN CHEMICAL TERMINAL",
    projectName: "JUBAIL COMMERCIAL PORT",
    location: "AL JUBAIL",
    typeOfWork: "BLASTING & PAINTING",
  },
  {
    year: "2020",
    client: "SINOPEC ENGINEERING GROUP SAUDI CO. LTD.",
    projectName: "UNITED - EG1 PROJECT",
    location: "AL JUBAIL",
    typeOfWork: "THERMAL INSULATION",
  },
  {
    year: "2020",
    client: "CHEMANOL METHANOL CHEMICAL COMPANY",
    projectName: "METHANOL PLANT",
    location: "AL JUBAIL",
    typeOfWork: "THERMAL INSULATION MAINTENANCE",
  },
  {
    year: "2020",
    client: "KHUSHEIM COMPANY FOR INDUSTRIAL EQUIPMENT",
    projectName: "SIEMENSE DAMMAM",
    location: "DAMMAM",
    typeOfWork: "THERMAL INSULATION",
  },
  {
    year: "2020",
    client: "GENERAL ELECTRIC SAUDI ADVANCED TURBINES (GESAT)",
    projectName: "SKID INSULATION",
    location: "DAMMAM",
    typeOfWork: "THERMAL INSULATION",
  },
  {
    year: "2020",
    client: "CONFIDENT MIDDLE EAST EST.",
    projectName: "ADDAR PLANT",
    location: "AL JUBAIL",
    typeOfWork: "THERMAL INSULATION",
  },
  {
    year: "2020",
    client: "AES ARABIA LTD.",
    projectName: "SAUDI ARAMCO SALES GAS FILTER",
    location: "RIYADH",
    typeOfWork: "THERMAL INSULATION",
  },
  {
    year: "2019",
    client: "OLAYAN DESCON INDST. CO. LTD. (ODICO)",
    projectName: "SASREF IMP-III PROJECT",
    location: "AL JUBAIL",
    typeOfWork: "THERMAL INSULATION",
  },
  {
    year: "2019",
    client: "QUALITY & EXCELLENCE COMPANY LIMITED",
    projectName: "POWER PLANT",
    location: "QURAYYA",
    typeOfWork: "THERMAL INSULATION",
  },
  {
    year: "2019",
    client: "GENERAL ELECTRIC SAUDI ADVANCED TURBINES (GESAT)",
    projectName: "SKID INSULATION",
    location: "DAMMAM",
    typeOfWork: "THERMAL INSULATION",
  },
  {
    year: "2019",
    client: "MANARAH AL-JUBAIL CONT. CO. LTD (MCCL)",
    projectName: "SAUDI ARAMCO MANIFA",
    location: "MANIFA",
    typeOfWork: "THERMAL INSULATION",
  },
  {
    year: "2019",
    client: "AFAQ COMMERCIAL PROJECT CONTRACTING EST.",
    projectName: "GULF PACK INDUSTRIES",
    location: "AL JUBAIL",
    typeOfWork: "THERMAL INSULATION",
  },
  {
    year: "2019",
    client: "EXPERTISE CONTRACTING CO.",
    projectName: "YANPET-SABIC PROJECT",
    location: "YANBU",
    typeOfWork: "THERMAL INSULATION",
  },
  {
    year: "2019",
    client: "GLOBAL SUHAIMI COMPANY",
    projectName: "JAZAN REFINERY (SK & HYUNDAI)",
    location: "JAZAN",
    typeOfWork: "VALVE INSULATION",
  },
  {
    year: "2019",
    client: "DENYS ARABIA COMPANY LTD.",
    projectName: "KHURSANIYAH UPSTREAM GAS PIPE LINE",
    location: "KHURSANIYA",
    typeOfWork: "THERMAL INSULATION",
  },
  {
    year: "2019",
    client: "TERMOMECANICA SAUDI CO. LTD",
    projectName: "SWCC-YANBU",
    location: "YANBU",
    typeOfWork: "TANK INSULATION & EHT INSTALLATION",
  },
  {
    year: "2019",
    client: "GLOBAL SUHAIMI COMPANY",
    projectName: "HANWA - JAZAN REFINERY",
    location: "JAZAN",
    typeOfWork: "FABRICATION",
  },
  {
    year: "2019",
    client: "EXPERTISE CONTRACTING CO.",
    projectName: "SAFCO SABIC",
    location: "TANK INSULATION",
    typeOfWork: "THERMAL INSULATION",
  },
  {
    year: "2019",
    client: "GAS ARABIAN SERVICES",
    projectName: "SIPCHEM CO2 LINE",
    location: "AL JUBAIL",
    typeOfWork: "THERMAL INSULATION",
  },
];

const Input = ({ ...props }) => (
  <input
    {...props}
    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
);

export default function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.type === activeCategory);

  const [searchTerm, setSearchTerm] = useState("");
  const [displayData, setDisplayData] = useState(projectData);
  const [visibleData, setVisibleData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 20;

  useEffect(() => {
    const filtered = projectData.filter((project) =>
      Object.values(project).some((value) =>
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setDisplayData(filtered);
    setCurrentIndex(0);
  }, [searchTerm]);

  useEffect(() => {
    setVisibleData(displayData.slice(0, currentIndex + itemsPerPage));
  }, [displayData, currentIndex]);

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    if (
      scrollHeight - scrollTop <= clientHeight * 1.5 &&
      visibleData.length < displayData.length
    ) {
      setCurrentIndex((prev) => prev + itemsPerPage);
    }
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen">
      <motion.div
        className="min-h-screen"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <Navigation />
        {/* Hero Section */}
        <motion.div
          className="relative h-[500px] bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="relative h-[500px] bg-black">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('/images/projects.png')",
              }}
            >
              <div className="absolute inset-0 bg-black/50" />
            </div>
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-evenly text-white/80"
              initial={{ opacity: 10, x: 200 }}
              animate={{ opacity: 1, x: 10 }}
              transition={{ duration: 3 }}
            >
              <div className="relative container mx-auto h-full flex flex-col justify-center px-4">
                <Typography
                  variant="h1"
                  className="text-white text-5xl font-bold"
                >
                  PROJECTS
                </Typography>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Filter Buttons */}
        <div className="bg-gray-100 py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4 duration-300">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={
                    activeCategory === category.id ? "filled" : "outlined"
                  }
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
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
                {/* <div className="mt-4">
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
              </div> */}
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-[90%] mx-auto mt-16"
        >
          <div className="flex items-center gap-2 mb-4 max-w-sm">
            <Search className="w-5 h-5 text-gray-500" />
            <Input
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="rounded-lg border bg-white shadow-sm overflow-hidden">
            <div
              className="overflow-y-auto max-h-[700px]"
              onScroll={handleScroll}
            >
              <table className="w-full">
                <thead className="bg-black text-white sticky top-0">
                  <tr>
                    <th className="text-left p-3 font-bold">YEAR</th>
                    <th className="text-left p-3 font-bold">CLIENT</th>
                    <th className="text-left p-3 font-bold">PROJECT NAME</th>
                    <th className="text-left p-3 font-bold">LOCATION</th>
                    <th className="text-left p-3 font-bold">TYPE OF WORK</th>
                  </tr>
                </thead>
                <tbody>
                  {visibleData.map((project, index) => (
                    <motion.tr
                      key={`${project.year}-${project.projectName}-${index}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="p-3 font-medium">{project.year}</td>
                      <td className="p-3">{project.client}</td>
                      <td className="p-3">{project.projectName}</td>
                      <td className="p-3">{project.location}</td>
                      <td className="p-3">{project.typeOfWork}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        <Footer />
      </motion.div>
    </div>
  );
}
