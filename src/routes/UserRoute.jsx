import { Routes, Route } from "react-router-dom";
import Home from "../app/page";
import AboutUs from "../pages/aboutUs";

export default function UserRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about-us" element={<AboutUs />} />
    </Routes>
  );
}