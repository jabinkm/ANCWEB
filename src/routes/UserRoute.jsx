import { Routes, Route } from "react-router-dom";
import Home from "../app/page";
import AboutUs from "../pages/aboutUs";
import ContactUs from "../pages/contactUs";

export default function UserRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about-us" element={<AboutUs />} />
      <Route path="contact-us" element={<ContactUs />} />
    </Routes>
  );
}
