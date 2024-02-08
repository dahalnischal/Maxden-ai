import React, { useEffect } from "react";
import ServiceHero from "../Service/ServiceHero";
import NeuroIntegrate from "../Service/NeuroIntegrate";
import MachineIntegrate from "../Service/MachineIntegrate";
import WorkSection from "../Service/WorkSection";
import { useRef } from "react";

const Services = () => {
  const targetRef = useRef(null);

  const scrollToElement = () => {
    targetRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div>
      <ServiceHero scrollToElement={scrollToElement} />
      <NeuroIntegrate targetRef={targetRef} />
      <MachineIntegrate />
      <WorkSection />
    </div>
  );
};

export default Services;
