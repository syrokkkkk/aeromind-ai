import Navbar from "./components/layout/Navbar";

import HeroSection from "./components/sections/HeroSection";
import ExposureProfile from "./components/sections/ExposureProfile";
import AIEngine from "./components/sections/AIEngine";
import Dashboard from "./components/sections/Dashboard";
import RouteOptimization from "./components/sections/RouteOptimization";
import HealthSection from "./components/sections/HealthSection";
import PrivacySection from "./components/sections/PrivacySection";
import SmartCity from "./components/sections/SmartCity";
import Footer from "./components/layout/Footer";
import LiveMap from "./components/sections/LiveMap";

export default function App() {
  return (
    <div className="bg-[#EEF4F0] overflow-x-hidden pt-28">
      
      <Navbar />

      <HeroSection />

      <ExposureProfile />

      <AIEngine />

      <Dashboard />
      <LiveMap />

      <RouteOptimization />

      <HealthSection />

      <PrivacySection />

      <SmartCity />

      <Footer />
    </div>
  );
}