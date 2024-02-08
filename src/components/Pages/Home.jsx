import React from "react";
import HeroSection from "../../components/Home/HeroSection";
import OurClients from "../../components/Home/OurClients";
import NeuroSection from "../../components/Home/NeuroSection";
import MachineSection from "../../components/Home/MachineSection";
import { useRef } from "react";
const Home = () => {
  const targetRef = useRef(null);

  const scrollToElement = () => {
    targetRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <HeroSection scrollToElement={scrollToElement} />
      <OurClients />
      <NeuroSection val={targetRef} />
      <MachineSection />
    </div>
  );
};

export default Home;
