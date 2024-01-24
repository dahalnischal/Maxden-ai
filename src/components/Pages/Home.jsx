import React from "react";
import HeroSection from "../../components/Home/HeroSection";
import OurClients from "../../components/Home/OurClients";
import NeuroSection from "../../components/Home/NeuroSection";
import MachineSection from "../../components/Home/MachineSection";
const Home = () => {
  return (
    <div>
      <HeroSection />
      <OurClients />
      <NeuroSection />
      <MachineSection />
    </div>
  );
};

export default Home;
