import { useState } from "react";

import Navbar from "./components/layout/Navbar";

import HeroSection from "./components/sections/HeroSection";
import Dashboard from "./components/sections/Dashboard";

import AIEngine from "./components/sections/AIEngine";
import HealthSection from "./components/sections/HealthSection";
import PrivacySection from "./components/sections/PrivacySection";
import SmartCity from "./components/sections/SmartCity";
import Footer from "./components/layout/Footer";
import LiveMap from "./components/sections/LiveMap";

import NewUserForm from "./components/NewUserForm";
import RouteResultCard from "./components/RouteResultCard";
import LiveRouteMap from "./components/LiveRouteMap";
import RouteComparison from "./components/RouteComparison";

export default function App() {

  const [generatedUser, setGeneratedUser] =
    useState(null);

  return (
    <div className="bg-[#EEF4F0] overflow-x-hidden pt-28">

      <Navbar />

      <HeroSection />

      <Dashboard />


      <NewUserForm
        onAddUser={setGeneratedUser}
      />

      <RouteResultCard
        user={generatedUser}
      />

      <LiveRouteMap
        user={generatedUser}
      />

      <RouteComparison
        user={generatedUser}
      />

      <AIEngine />

      <LiveMap />

      <HealthSection />

      <PrivacySection />

      <SmartCity />

      <Footer />

    </div>
  );
}