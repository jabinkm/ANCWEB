
import { Link } from "react-router-dom";
import { Typography, IconButton } from "@material-tailwind/react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img
              src="images/ANClogowithnobg.png"
              
              alt="ANC Logo"
              width={150}
              height={50}
              className="mb-4"
            />
            <Typography color="gray" className="font-normal">
              Ahmed Yoosuf Al Nujaidhi Contracting Est. (ANC) is a leading provider of insulation and coating solutions in Saudi Arabia.
            </Typography>
          </div>
          <div>
            <Typography variant="h6" color="white" className="mb-4">
              Quick Links
            </Typography>
            <ul className="space-y-2">
              <li className="text-gray-400 hover:text-white transition duration-300"><Link to={"/"} >Home</Link></li>
              <li className="text-gray-400 hover:text-white transition duration-300"><Link to={"#about"}>About Us</Link></li>
              <li className="text-gray-400 hover:text-white transition duration-300"><Link to={"#services"}>Services</Link></li>
              <li className="text-gray-400 hover:text-white transition duration-300"><Link to={"#projects"}>Projects</Link></li>
              <li className="text-gray-400 hover:text-white transition duration-300"><Link to={"#contact"}>Contact</Link></li>
            </ul>
          </div>
          <div>
            <Typography variant="h6" color="white" className="mb-4">
              Contact Info
            </Typography>
            <Typography color="gray" className="font-normal mb-2">
              King Saud Street Intersection 1 - 2, Al Khobar - 31952, Saudi Arabia
            </Typography>
            <Typography color="gray" className="font-normal mb-2">
              Phone: +966 13 867 2400
            </Typography>
            <Typography color="gray" className="font-normal">
              Email: info@anc-contracting.com
            </Typography>
          </div>
          <div>
            <Typography variant="h6" color="white" className="mb-4">
              Follow Us
            </Typography>
            <div className="flex space-x-4">
              <IconButton color="white" className="rounded-full">
                <i className="fab fa-facebook-f" />
              </IconButton>
              <IconButton color="white" className="rounded-full">
                <i className="fab fa-twitter" />
              </IconButton>
              <IconButton color="white" className="rounded-full">
                <i className="fab fa-linkedin-in" />
              </IconButton>
              <IconButton color="white" className="rounded-full">
                <i className="fab fa-instagram" />
              </IconButton>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <Typography color="gray" className="font-normal">
            &copy; {new Date().getFullYear()} Ahmed Yoosuf Al Nujaidhi Contracting Est. All rights reserved.
          </Typography>
        </div>
      </div>
    </footer>
  )
}

