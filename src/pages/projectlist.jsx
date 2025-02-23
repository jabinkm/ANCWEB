// "use client"

// import React from "react"

// import { useState, useEffect } from "react"
// import { motion } from "framer-motion"
// import { Search } from "lucide-react"

// const projectData = [
//     {
//         year: "2024",
//         client: "JAZAN INTEGRATED GASIFICATION & POWER COMPANY",
//         projectName: "JIGPC PLANT",
//         location: "JAZAN",
//         typeOfWork: "VALVE & FLANGE BOX INSTALLATION",
//       },
//       {
//         year: "2024",
//         client: "WISON ENGINEERING Ltd",
//         projectName: "DPCU UNIT-SAUDI ARAMCO",
//         location: "SHAYBAH",
//         typeOfWork: "CHEMICAL CLEANING",
//       },
//       {
//         year: "2024",
//         client: "ARABIAN CHEMICAL TERMINAL",
//         projectName: "JUBAIL COMMERCIAL PORT-T-25 & P09A",
//         location: "AL JUBAIL",
//         typeOfWork: "THERMAL INSULATION",
//       },
//       {
//         year: "2024",
//         client: "WISON ENGINEERING Ltd",
//         projectName: "DPCU UNIT-SAUDI ARAMCO",
//         location: "SHAYBAH",
//         typeOfWork: "THERMAL INSULATION",
//       },
//       {
//         year: "2024",
//         client: "FACTORY OF BAKER HUGHES SAUDI ARABIA FOR INDUSTRY",
//         projectName: "JAFURAH-1 SAUDI ARAMCO",
//         location: "DAMMAM",
//         typeOfWork: "SCAFFOLDING & THERMAL INSULATION",
//       },
//       {
//         year: "2024",
//         client: "ARABIAN CHEMICAL TERMINAL",
//         projectName: "JUBAIL COMMERCIAL PORT-SLOPE TANKS",
//         location: "AL JUBAIL",
//         typeOfWork: "PAINTING",
//       },
//       {
//         year: "2024",
//         client: "ROTARY ENGINEERING",
//         projectName: "MARJAN-SAUDI ARAMCO",
//         location: "MARJAN",
//         typeOfWork: "SCAFFOLDING & PAINTING",
//       },
//       {
//         year: "2024",
//         client: "AL FAREJI CONTRACTING COMPANY",
//         projectName: "EAST PIPES PLANT SHUTDOWN",
//         location: "DAMMAM",
//         typeOfWork: "REFRACTORY",
//       },
//       {
//         year: "2024",
//         client: "OLAYAN DESCON INDST. CO. LTD. (ODICO)",
//         projectName: "RTR PLANT SHUTDOWN",
//         location: "RASTANURA",
//         typeOfWork: "BLASTING & PAINTING",
//       },
//       {
//         year: "2024",
//         client: "SAAG SOLUTIONS",
//         projectName: "NOMAC PLANT SHUTDOWN",
//         location: "JEDDAH",
//         typeOfWork: "REFRACTORY & INSULATION",
//       },
//       {
//         year: "2024",
//         client: "ANBEEB INDUSTRIAL SERVICES CO. LTD.",
//         projectName: "RTR PLANT SHUTDOWN",
//         location: "RASTANURA",
//         typeOfWork: "BLASTING & PAINTING",
//       },
//       {
//         year: "2024",
//         client: "JAZAN INTEGRATED GASIFICATION AND POWER COMPANY (JIGPC)",
//         projectName: "HSFO SUPPLY SYSTEM",
//         location: "JAZAN",
//         typeOfWork: "THERMAL INSULATION, SCAFFOLDING, COATING",
//       },
//       {
//         year: "2024",
//         client: "BAKER HUGHES",
//         projectName: "JAFURAH 1 & JAFURAH 2",
//         location: "DAMMAM-8H YARD",
//         typeOfWork: "THERMAL INSULATION ON SKIDS",
//       },
//       {
//         year: "2024",
//         client: "ARABIAN CHEMICALS TERMINALS",
//         projectName: "ACT PROJECTS-T-25 INSULATION",
//         location: "JUBAIL",
//         typeOfWork: "THERMAL INSULATION",
//       },
//       {
//         year: "2024",
//         client: "ARABIAN CHEMICALS TERMINALS",
//         projectName: "ACT PROJECTS-P-09A PIPELINE, PUMPS AND FLOW METERS",
//         location: "JUBAIL",
//         typeOfWork: "THERMAL INSULATION",
//       },
//       {
//         year: "2024",
//         client: "TABLE FOUR CONTRACTING CO.",
//         projectName: "RASTANURA REFINERY",
//         location: "RAS TANURA",
//         typeOfWork: "THERMAL INSULATION",
//       },
//       {
//         year: "2023",
//         client: "EXPERTISE CONTRACTING CO.",
//         projectName: "YANPET-SABIC PROJECT",
//         location: "YANBU",
//         typeOfWork: "WATERPROOFING",
//       },
//       {
//         year: "2023",
//         client: "CHEMANOL METHANOL CHEMICAL COMPANY",
//         projectName: "MAINTENANCE JOB",
//         location: "JUBAIL",
//         typeOfWork: "THERMAL INSULATION",
//       },
//       {
//         year: "2023",
//         client: "OLAYAN DESCON INDST. CO. LTD. (ODICO)",
//         projectName: "SATORP SHUTDOWN",
//         location: "JUBAIL",
//         typeOfWork: "THERMAL INSULATION",
//       },
//       {
//         year: "2023",
//         client: "AL AMARA INTERNATIONAL TRAD & CONT. COMPANY LTD.",
//         projectName: "SATORP SHUTDOWN",
//         location: "JUBAIL",
//         typeOfWork: "THERMAL INSULATION",
//       },
//       {
//         year: "2023",
//         client: "INTEGRATED TECHNOLOGIES CONT.",
//         projectName: "FARABI SHUTDOWN",
//         location: "YANBU",
//         typeOfWork: "THERMAL INSULATION",
//       },
//       {
//         year: "2023",
//         client: "SAUDI CHEMICAL COMPANY",
//         projectName: "MILITARY EXPLOSIVES FACTORY",
//         location: "RIYADH",
//         typeOfWork: "BLASTING & PAINTING",
//       },
//       {
//         year: "2023",
//         client: "OLAYAN DESCON INDST. CO. LTD. (ODICO)",
//         projectName: "SAMREF-SHUTDOWN JOB",
//         location: "YANBU",
//         typeOfWork: "BLASTING & PAINTING",
//       },
//       {
//         year: "2023",
//         client: "L&T HYDROCARBON SAUDI COMPANY",
//         projectName: "AR RAZI-4 CONDENSER",
//         location: "JUBAIL",
//         typeOfWork: "THERMAL INSULATION",
//       },
//       {
//         year: "2023",
//         client: "HARRIS PYE SAUDI LLC.",
//         projectName: "KAIF (KJO)",
//         location: "AL KAFJI",
//         typeOfWork: "THERMAL INSULATION",
//       },
//       {
//         year: "2023",
//         client: "AMC",
//         projectName: "YANBU PORT/ARAMCO",
//         location: "YANBU",
//         typeOfWork: "CONCRETE COATING",
//       },
//       {
//         year: "2023",
//         client: "OLAYAN DESCON INDST. CO. LTD. (ODICO)",
//         projectName: "S-CHEM",
//         location: "JUBAIL",
//         typeOfWork: "THERMAL INSULATION",
//       },
//       {
//         year: "2023",
//         client: "LUBERAF",
//         projectName: "LUBERAF SHUTDOWN JOB",
//         location: "JEDDAH",
//         typeOfWork: "BLASTING & PAINTING",
//       },
//       {
//         year: "2023",
//         client: "KYTOS ARABIA",
//         projectName: "FARABI",
//         location: "YANBU",
//         typeOfWork: "SCAFFOLDING",
//       },
//       {
//         year: "2023",
//         client: "K.A. KHONAINI & PARTNER CONT. CO .LTD",
//         projectName: "JUBAIL COMMERCIAL PORT",
//         location: "AL JUBAIL",
//         typeOfWork: "THERMAL INSULATION",
//       },
//       {
//         year: "2023",
//         client: "EXPERTISE CONTRACTING CO.",
//         projectName: "FARABI SHUT DOWN JOB",
//         location: "YANBU",
//         typeOfWork: "FIREPROOFING",
//       },
//       {
//         year: "2023",
//         client: "GENERAL ELECTRIC SAUDI ADVANCED TURBINES (GESAT)",
//         projectName: "SKID INSULATION",
//         location: "DAMMAM",
//         typeOfWork: "THERMAL INSULATION",
//       },
//       {
//         year: "2023",
//         client: "ARABIAN CHEMICAL TERMINAL",
//         projectName: "JUBAIL COMMERCIAL PORT",
//         location: "AL JUBAIL",
//         typeOfWork: "PAINTING & THERMAL INSULATION",
//       },
//       {
//         year: "2023",
//         client: "RAFA GULF CONTRACTING COMPANY",
//         projectName: "ARAMCO PROJECT",
//         location: "DAMMAM",
//         typeOfWork: "REFRACTORY",
//       },
//       {
//         year: "2023",
//         client: "WISON ENGINEERING Ltd",
//         projectName: "SAUDI KAYAN SHUT DOWN JOB",
//         location: "AL JUBAIL",
//         typeOfWork: "THERMAL INSULATION",
//       },
//       {
//         year: "2023",
//         client: "H.K AL SAIDIQ",
//         projectName: "SAUDI KAYAN SHUT DOWN JOB",
//         location: "AL JUBAIL",
//         typeOfWork: "THERMAL INSULATION",
//       },
//       {
//         year: "2023",
//         client: "CORE TEAM GENERAL CONTRACTING CO.",
//         projectName: "UNITED, SABIC",
//         location: "AL JUBAIL",
//         typeOfWork: "THERMAL INSULATION",
//       },
//       {
//         year: "2023",
//         client: "SAUDI ARAMCO BASE OIL COMPANY-LUBEREF",
//         projectName: "LUBEREF SHUT DOWN JOB",
//         location: "JEDDAH",
//         typeOfWork: "BLASTING & PAINTING",
//       },
//       {
//         year: "2023",
//         client: "EXPERTISE CONTRACTING CO.",
//         projectName: "FARABI SHUT DOWN JOB",
//         location: "YANBU",
//         typeOfWork: "SCAFFOLDING, PAINTING, INSULATION",
//       },
//       {
//         year: "2023",
//         client: "EXPERTISE CONTRACTING CO.",
//         projectName: "LUBEREF SHUT DOWN JOB",
//         location: "JEDDAH",
//         typeOfWork: "BLASTING & PAINTING",
//       },
//       {
//         year: "2023",
//         client: "ARAMCO",
//         projectName: "RIYADH REFINERY SHUT DOWN JOB",
//         location: "RIYADH",
//         typeOfWork: "EHT, INSULATION",
//       },
//       {
//         year: "2023",
//         client: "OLAYAN DESCON INDST. CO. LTD. (ODICO)",
//         projectName: "RIYADH REFINERY SHUT DOWN JOB",
//         location: "RIYADH",
//         typeOfWork: "BLASTING & PAINTING",
//       },
//       {
//         year: "2023",
//         client: "SINOPEC ENGINEERING GROUP SAUDI CO. LTD.",
//         projectName: "ARAMCO-RASTANURA PROJECT",
//         location: "AL JUBAIL",
//         typeOfWork: "THERMAL INSULATION",
//       },
//       {
//         year: "2022",
//         client: "AL YAMAMA",
//         projectName: "SHARQ SHUT DOWN JOB",
//         location: "AL JUBAIL",
//         typeOfWork: "PAINTING",
//       },
//       {
//         year: "2022",
//         client: "ARABIAN CHEMICAL TERMINAL",
//         projectName: "JUBAIL COMMERCIAL PORT",
//         location: "AL JUBAIL",
//         typeOfWork: "SCAFFOLDING, THERMAL INSULATION",
//       },
//       {
//         year: "2022",
//         client: "OLAYAN DESCON INDST. CO. LTD. (ODICO)",
//         projectName: "SASREF SHUTDOWN JOB",
//         location: "AL JUBAIL",
//         typeOfWork: "BLASTING, PAINTING & INSULATION",
//       },
//       {
//         year: "2022",
//         client: "SULZER CHEMTECH (UK) LTD.",
//         projectName: "SAFCO-SHUTDOWN JOB",
//         location: "AL JUBAIL",
//         typeOfWork: "SCAFFOLDING, BLASTING & INSULATION",
//       },
//       {
//         year: "2022",
//         client: "AL BLAGHA",
//         projectName: "DAMMAM SHIPYARD",
//         location: "DAMMAM",
//         typeOfWork: "THERMAL INSULATION",
//       },
//       {
//         year: "2022",
//         client: "AL BLAGHA",
//         projectName: "DUBA ARAMCO PROJECT",
//         location: "DUBA",
//         typeOfWork: "BLASTING & PAINTING",
//       },
//       {
//         year: "2022",
//         client: "SHAMASI CONTRACTING COMPANY",
//         projectName: "FARABI-POLO PROJECT",
//         location: "YANBU",
//         typeOfWork: "THERMAL INSULATION",
//       },
//       {
//         year: "2022",
//         client: "OLAYAN DESCON INDST. CO. LTD. (ODICO)",
//         projectName: "S-CHEM SHUT DOWN JOB",
//         location: "AL JUBAIL",
//         typeOfWork: "BLASTING, PAINTING & INSULATION",
//       },
// ]

// const Input = ({ ...props }) => (
//   <input
//     {...props}
//     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//   />
// )

// export default function ProjectsTable() {
//   const [searchTerm, setSearchTerm] = useState("")
//   const [displayData, setDisplayData] = useState(projectData)
//   const [visibleData, setVisibleData] = useState([])
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const itemsPerPage = 20

//   useEffect(() => {
//     const filtered = projectData.filter((project) =>
//       Object.values(project).some((value) => value.toString().toLowerCase().includes(searchTerm.toLowerCase())),
//     )
//     setDisplayData(filtered)
//     setCurrentIndex(0)
//   }, [searchTerm])

//   useEffect(() => {
//     setVisibleData(displayData.slice(0, currentIndex + itemsPerPage))
//   }, [displayData, currentIndex])

//   const handleScroll = (e) => {
//     const { scrollTop, scrollHeight, clientHeight } = e.currentTarget
//     if (scrollHeight - scrollTop <= clientHeight * 1.5 && visibleData.length < displayData.length) {
//       setCurrentIndex((prev) => prev + itemsPerPage)
//     }
//   }

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.8 }}
//       className="w-full"
//     >
//       <div className="flex items-center gap-2 mb-4 max-w-sm">
//         <Search className="w-5 h-5 text-gray-500" />
//         <Input placeholder="Search projects..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
//       </div>

//       <div className="rounded-lg border bg-white shadow-sm overflow-hidden">
//         <div className="overflow-y-auto max-h-[600px]" onScroll={handleScroll}>
//           <table className="w-full">
//             <thead className="bg-black text-white sticky top-0">
//               <tr>
//                 <th className="text-left p-3 font-bold">YEAR</th>
//                 <th className="text-left p-3 font-bold">CLIENT</th>
//                 <th className="text-left p-3 font-bold">PROJECT NAME</th>
//                 <th className="text-left p-3 font-bold">LOCATION</th>
//                 <th className="text-left p-3 font-bold">TYPE OF WORK</th>
//               </tr>
//             </thead>
//             <tbody>
//               {visibleData.map((project, index) => (
//                 <motion.tr
//                   key={`${project.year}-${project.projectName}-${index}`}
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.3, delay: index * 0.05 }}
//                   className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
//                 >
//                   <td className="p-3 font-medium">{project.year}</td>
//                   <td className="p-3">{project.client}</td>
//                   <td className="p-3">{project.projectName}</td>
//                   <td className="p-3">{project.location}</td>
//                   <td className="p-3">{project.typeOfWork}</td>
//                 </motion.tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </motion.div>
//   )
// }

