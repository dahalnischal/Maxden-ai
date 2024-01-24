import React from "react";
import ServiceHero from "../Service/ServiceHero";
import NeuroIntegrate from "../Service/NeuroIntegrate";
import MachineIntegrate from "../Service/MachineIntegrate";
import WorkSection from "../Service/WorkSection";

const Services = () => {
  return (
    <div>
      <ServiceHero />
      <NeuroIntegrate />
      <MachineIntegrate />
      <WorkSection />
    </div>
  );
};

export default Services;
