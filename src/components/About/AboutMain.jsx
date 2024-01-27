import React from "react";

const AboutMain = () => {
  return (
    <section className="about-main">
      <a href="" className="scroll-dowm">
        <img src="assets/images/down-arrow.svg" alt="arrow" />
      </a>
      <div className="about-wraps">
        <div className="about-heading">
          <h1>maxden.ai - Ваш Надежный Партнер в Мире ИИ</h1>
        </div>
        <div className="counter-wraps">
          <img src="assets/images/Dot.svg" alt="dot" className="dot" />
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
