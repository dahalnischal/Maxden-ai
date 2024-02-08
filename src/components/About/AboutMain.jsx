import React from "react";
import { ScrollParallax } from "react-just-parallax";

const AboutMain = ({ scrollToElement }) => {
  return (
    <section className="about-main">
      <div className="scroll-dowm cursor-pointer" onClick={scrollToElement}>
        <img src="assets/images/down-arrow.svg" alt="arrow" />
      </div>
      <div className="about-wraps">
        <div className="about-heading">
          <h1>maxden.ai - Ваш Надежный Партнер в Мире ИИ</h1>
        </div>
        <div className="counter-wraps">
          <ScrollParallax isAbsolutelyPositioned strength={-0.1} zIndex={-1}>
            <img src="assets/images/Dot.svg" alt="dot" className="dot" />
          </ScrollParallax>
          <div className="value-wraps">
            <h1>4+</h1>
            <span>лет опыта работы</span>
          </div>
          <div className="value-wraps">
            <h1>12</h1>
            <span>человек в команде</span>
          </div>
          <div className="value-wraps">
            <h1>20+</h1>
            <span>реализованных проектов </span>
          </div>
          <div className="value-wraps">
            <h1>1</h1>
            <span>млн. нагруженнных запросов в день</span>
          </div>
          <div className="value-wraps">
            <h1>100</h1>
            <span>тыс. чашек кофе выпито</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMain;
