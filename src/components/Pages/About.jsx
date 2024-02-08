import React, { useEffect } from "react";
import AboutMain from "../About/AboutMain";
import AboutDetails from "../About/AboutDetails";
import NeedSection from "../About/NeedSection";
import ThreeCard from "../About/ThreeCard";
import Procedure from "../About/Procedure";
import Employee from "../About/Employee";
import { useRef } from "react";

const About = () => {
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
      <AboutMain scrollToElement={scrollToElement} />
      <AboutDetails />
      <NeedSection />
      <ThreeCard />
      <Procedure targetRef={targetRef} />
      <Employee />
    </div>
  );
};

export default About;
