import { Routes, Route } from "react-router-dom";
import Home from "../app/home";
import AboutUs from "../pages/aboutUs";
import ContactPage from "../pages/contactUs";
import Projects from "../pages/projects";
import PipeColdCutting from "../pages/pipeColdCutting";
import SSD from "../pages/specialityServiceDivision";
import MED from "../pages/mechanicalDivision";
import Piping from "../pages/meDivision/piping";
import EquipmentErection from "../pages/meDivision/equipmentErection";
import SteelStructure from "../pages/meDivision/steelStructure";
import PreEngineeredBuildings from "../pages/meDivision/preEngBuildings";
import ValvesAndInstruments from "../pages/meDivision/valvesAndInstruments";


export default function UserRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about-us" element={<AboutUs />} />
      <Route path="contact-us" element={<ContactPage />} />
      <Route path="projects" element={<Projects />} />
      <Route path="pipe-cold-cutting" element={<PipeColdCutting />} />
      <Route path="*" element={<Home />} />
      <Route path="mechanical-division" element={<MED />} />
      <Route path="speciality-service-division" element={<SSD />} />
      <Route path="mechanical-division/piping" element={<Piping />} />
      <Route path="mechanical-division/equipment-erection" element={<EquipmentErection />} />
      <Route path="mechanical-division/steel-structure" element={<SteelStructure />} />
      <Route path="mechanical-division/pre-engineered-buildings" element={<PreEngineeredBuildings />} />
      <Route path="/mechanical-division/valves-and-instruments" element={<ValvesAndInstruments />} />
    </Routes>
  );
}
