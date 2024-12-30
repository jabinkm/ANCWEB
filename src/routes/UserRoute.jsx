import { Routes, Route } from "react-router-dom";
import Home from "../app/home";
import AboutUs from "../pages/aboutUs";
import ContactPage from "../pages/contactUs";
import Projects from "../pages/projects";
import PipeColdCutting from "../pages/pipeColdCutting";
import Services from "../pages/ourServices";


export default function UserRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about-us" element={<AboutUs />} />
      <Route path="contact-us" element={<ContactPage />} />
      <Route path="projects" element={<Projects />} />
      <Route path="pipe-cold-cutting" element={<PipeColdCutting />} />
      <Route path="*" element={<Home />} />
      <Route path="our-services" element={<Services />} />
    </Routes>
  );
}
