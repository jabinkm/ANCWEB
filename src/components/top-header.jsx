// import { IconButton } from "@material-tailwind/react";
// import { motion } from "framer-motion";

// export function TopHeader() {
//   return (
//     <motion.div 
//       className="w-full bg-red-900 text-white py-2 px-4"
//       initial={{ opacity: 0, y: -50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
//         <div className="flex items-center space-x-2 mb-2 sm:mb-0">
//           <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
//             <IconButton variant="text" color="white" size="sm">
//               <a href="https://maps.app.goo.gl/RFk1BDw76YwKeb246">
//                 <i className="fas fa-map-marker-alt" />
//               </a>
//             </IconButton>
//           </motion.div>
//           <motion.span 
//             className="text-sm"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//           >
//             King Saud Street Intersection 1 - 2, Al Khobar - 31952
//           </motion.span>
//         </div>
//         <div className="flex items-center space-x-2">
//           <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
//             <IconButton variant="text" color="white" size="sm">
//               <i className="fas fa-clock" />
//             </IconButton>
//           </motion.div>
//           <motion.span 
//             className="text-sm"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4 }}
//           >
//             Time: Saturday-Thursday 08am-6pm
//           </motion.span>
//         </div>
//       </div>
//     </motion.div>
//   )
// }

