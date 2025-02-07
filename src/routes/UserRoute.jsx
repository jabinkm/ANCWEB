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
import CoatingPainting from "../pages/ssDivision/coatingPainting";
import ThermalAcousticInsulation from "../pages/ssDivision/ThermalAcousticInsulation";
import FireProofing from "../pages/ssDivision/fireProofing";
import ScaffoldingServices from "../pages/ssDivision/scaffoldingServices";
import RefractoryServices from "../pages/ssDivision/refractoryWorks";
import WaterProofing from "../pages/ssDivision/waterProofing";
import ElectricalHeatTracing from "../pages/ssDivision/electricalHeatTracing";
import IndustrialMaterialSupply from "../pages/industrialMaterialSupply";
import OurServices from "../pages/ourServices";
import Page404 from "../pages/page404";


export default function UserRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about-us" element={<AboutUs />} />
      <Route path="contact-us" element={<ContactPage />} />
      <Route path="projects" element={<Projects />} />
      <Route path="pipe-cold-cutting" element={<PipeColdCutting />} />
      <Route path="services" element={<OurServices />} />
      <Route path="mechanical-division" element={<MED />} />
      <Route path="speciality-service-division" element={<SSD />} />
      <Route path="mechanical-division/piping" element={<Piping />} />
      <Route path="mechanical-division/equipment-erection" element={<EquipmentErection />} />
      <Route path="mechanical-division/steel-structure" element={<SteelStructure />} />
      <Route path="mechanical-division/pre-engineered-buildings" element={<PreEngineeredBuildings />} />
      <Route path="mechanical-division/valves-and-instruments" element={<ValvesAndInstruments />} />
      <Route path="speciality-service-division/coating-and-painting" element={<CoatingPainting />} />
      <Route path="speciality-service-division/thermal-and-acoustic-insulation" element={<ThermalAcousticInsulation />} />
      <Route path="speciality-service-division/fireproofing" element={<FireProofing />} />
      <Route path="speciality-service-division/scaffolding-services" element={<ScaffoldingServices />} />
      <Route path="speciality-service-division/refractory-services" element={<RefractoryServices />} />
      <Route path="speciality-service-division/waterproofing" element={<WaterProofing />} />
      <Route path="speciality-service-division/electrical-heat-tracing" element={<ElectricalHeatTracing />} />
      <Route path="industrial-materials-supply" element={<IndustrialMaterialSupply />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
