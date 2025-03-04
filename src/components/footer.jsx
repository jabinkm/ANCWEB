
import { Link } from "react-router-dom";
import { Typography, IconButton } from "@material-tailwind/react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img
              src="/images/ANCwhite.png"
              alt="ANC Logo"
              width={150}
              height={50}
              className="mb-4"
            />
            <Typography className="font-normal text-blue-gray-400">
              Ahmed Yoosuf Al Nujaidhi Contracting Company (ANC) is a leading provider of insulation and coating solutions in Saudi Arabia.
            </Typography>
          </div>
          <div>
            <Typography variant="h6" color="white" className="mb-4">
              Quick Links
            </Typography>
            <ul className="space-y-2">
              <li className="text-gray-400 hover:text-white transition duration-300"><Link to={"/"} >Home</Link></li>
              <li className="text-gray-400 hover:text-white transition duration-300"><Link to={"/about-us"}>About Us</Link></li>
              <li className="text-gray-400 hover:text-white transition duration-300"><Link to={"/services"}>Services</Link></li>
              <li className="text-gray-400 hover:text-white transition duration-300"><Link to={"/projects"}>Projects</Link></li>
              <li className="text-gray-400 hover:text-white transition duration-300"><Link to={"/contact-us"}>Contact</Link></li>
            </ul>
          </div>
          <div>
            <Typography variant="h6" color="white" className="mb-4">
              Contact Info
            </Typography>
            <Typography className="font-normal mb-2 text-blue-gray-400">
              King Saud Street Intersection 1 - 2, <br/>Al-Khobar - 31952, Saudi Arabia.
            </Typography>
            <Typography color="gray" className="font-normal mb-2">
            <p className="text-gray-600 hover:text-red-500"><a href="tel:+966 13 893 3315">+966 13 893 3315</a></p>
            <p className="text-gray-600 hover:text-red-500"><a href="tel:+966 50 131 0073">+966 50 131 0073</a></p>
            </Typography>
            <Typography color="gray" className="font-normal">
            <p className="text-gray-600 hover:text-red-500"><a href="mailto:info@ancarabia.com">info@ancarabia.com</a></p>
            <p className="text-gray-600 hover:text-red-500"><a href="mailto:estimation@ancarabia.com">estimation@ancarabia.com</a></p>
            </Typography>
          </div>
          <div>
            <Typography variant="h6" color="white" className="mb-4">
              Follow Us
            </Typography>
            <div className="flex space-x-4">
            <a href="https://www.facebook.com/ancarabia">
              <IconButton color="white" className="rounded-full">
                <i className="fab fa-facebook-f" />
              </IconButton>
              </a>
              <IconButton color="white" className="rounded-full">
                <i className="fab fa-twitter" />
              </IconButton>
              <a href="https://www.linkedin.com/company/anc-arabia/posts/">
              <IconButton color="white" className="rounded-full">
                <i className="fab fa-linkedin-in" />
              </IconButton>
              </a>
              <IconButton color="white" className="rounded-full">
                <i className="fab fa-instagram" />
              </IconButton>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-5 pt-5 text-center">
          <Typography color="red" className="font-normal">
            &copy; {new Date().getFullYear()} Ahmed Yoosuf Al Nujaidhi Contracting Company All rights reserved.
          </Typography>
        </div>
      </div>
    </footer>
  )
}

