import { Dialog } from "primereact/dialog";
import React from "react";
import { useState, useEffect } from "react";
import ContactDialog from "../Dialog/ContactDialog";

import { ScrollParallax } from "react-just-parallax";

const HeroSection = ({ scrollToElement }) => {
  const [visible, setVisible] = useState(false);

  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      <div className="main hero-section-main-desktop">
        <section className="main hero-section-main">
          <img src="assets/images/hand.png" alt="hand" className="hand" />
          <div className="main-wraps">
            <div
              className="down-arrow cursor-pointer"
              onClick={scrollToElement}
            >
              <img src="assets/images/down-arrow.svg" alt="arrow" />
            </div>
            <ScrollParallax isAbsolutelyPositioned strength={-0.3} zIndex={-1}>
              <img
                src="assets/images/ball 1.png"
                alt="ball"
                className="ball1"
              />
            </ScrollParallax>
            <ScrollParallax isAbsolutelyPositioned strength={-0.5} zIndex={-1}>
              <img
                src="assets/images/ball 2.png"
                alt="ball"
                className="ball2"
              />
            </ScrollParallax>

            <ScrollParallax strength={-0.3} zIndex={-1}>
              <img
                src="assets/images/ball 3.png"
                alt="ball"
                className="ball3"
              />
            </ScrollParallax>

            <ScrollParallax isAbsolutelyPositioned strength={-0.6} zIndex={-1}>
              <img
                src="assets/images/ball 4.png"
                alt="ball"
                className="ball4"
              />
            </ScrollParallax>
            <div className="main-topic">
              <span>замени офисного работника на</span>
              <h1>искусственный интеллект</h1>
            </div>
            <div className="main-content-wraps">
              <div className="pagination-wraps">
                <div className="num">01</div>
                <div className="line" />
                <div className="num last">05</div>
              </div>
              <div className="main-content">
                <p>
                  Разработаем систему с искусственным интеллектом индивидуально
                  для вашего бизнеса. Автоматизируем процессы, увеличим продажи,
                  повысим эффективность.
                </p>
                <div className="btn-p" onClick={() => setVisible(true)}>
                  <span>Обсудить проект</span>
                </div>
              </div>
            </div>
            <Dialog
              visible={visible}
              className="hide-sidebar-dialog contact-dialog-home"
              showHeader={false}
              position={windowSize[0] > 960 ? "top" : "bottom"}
              maskStyle={
                windowSize[0] > 960
                  ? { alignItems: "center" }
                  : { alignItems: "flex-end" }
              }
              blockScroll={true}
              dismissableMask={true}
              onHide={() => setVisible(false)}
            >
              <ContactDialog setVisible={setVisible} />
            </Dialog>
          </div>
        </section>
        <div className="mobile-mmc">
          <div className="pagination-wraps pagination-wraps-mobile">
            <div className="num">01</div>
            <div className="line" />
            <div className="num last">05</div>
          </div>
          <div className="main-content-mobile">
            <p>
              Разработаем систему с искусственным интеллектом индивидуально для
              вашего бизнеса. Автоматизируем процессы, увеличим продажи, повысим
              эффективность.
            </p>
            <div className="btn-p" onClick={() => setVisible(true)}>
              <span>Обсудить проект</span>
            </div>
          </div>
        </div>
      </div>

      <div className="main hero-section-main-desktop mobile">
        <div className="main hero-section-main">
          <img src="assets/images/hand.png" alt="hand" className="hand" />
          <div className="main-wraps">
            <div
              className="down-arrow cursor-pointer"
              onClick={scrollToElement}
            >
              <img src="assets/images/down-arrow.svg" alt="arrow" />
            </div>
            <ScrollParallax isAbsolutelyPositioned strength={-0.3} zIndex={-2}>
              <img
                src="assets/images/ball 1.png"
                alt="ball"
                className="ball1"
              />
            </ScrollParallax>
            <ScrollParallax isAbsolutelyPositioned strength={-0.5} zIndex={-2}>
              <img
                src="assets/images/ball 2.png"
                alt="ball"
                className="ball2"
              />
            </ScrollParallax>

            <ScrollParallax strength={-0.3} zIndex={-2}>
              <img
                src="assets/images/ball 3.png"
                alt="ball"
                className="ball3"
              />
            </ScrollParallax>

            <ScrollParallax isAbsolutelyPositioned strength={-0.6} zIndex={-2}>
              <img
                src="assets/images/ball 4.png"
                alt="ball"
                className="ball4"
              />
            </ScrollParallax>
            <div className="main-topic">
              <span>замени офисного работника на</span>
              <h1>искусственный интеллект</h1>
            </div>
            <div className="main-content-wraps">
              <div className="pagination-wraps">
                <div className="num">01</div>
                <div className="line" />
                <div className="num last">05</div>
              </div>
              <div className="main-content">
                <p>
                  Разработаем систему с искусственным интеллектом индивидуально
                  для вашего бизнеса. Автоматизируем процессы, увеличим продажи,
                  повысим эффективность.
                </p>
                <div className="btn-p" onClick={() => setVisible(true)}>
                  <span>Обсудить проект</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-mmc">
          <div className="pagination-wraps pagination-wraps-mobile">
            <div className="num">01</div>
            <div className="line" />
            <div className="num last">05</div>
          </div>
          <div className="main-content-mobile">
            <p>
              Разработаем систему с искусственным интеллектом индивидуально для
              вашего бизнеса. Автоматизируем процессы, увеличим продажи, повысим
              эффективность.
            </p>
            <div className="btn-p" onClick={() => setVisible(true)}>
              <span>Обсудить проект</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
