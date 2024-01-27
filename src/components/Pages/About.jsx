import React from "react";
import AboutMain from "../About/AboutMain";
import AboutDetails from "../About/AboutDetails";
import NeedSection from "../About/NeedSection";
import ThreeCard from "../About/ThreeCard";
import Procedure from "../About/Procedure";
import Employee from "../About/Employee";

const About = () => {
  return (
    <div>
      <AboutMain />
      <AboutDetails />
      <NeedSection />
      <ThreeCard />
      <Procedure />
      <Employee />
    </div>
  );
};

export default About;
