import { Dialog } from "primereact/dialog";
import React from "react";
import { useState, useEffect } from "react";
import { ScrollParallax } from "react-just-parallax";
import ContactDialog from "../Dialog/ContactDialog";
import Project3 from "../Dialog/Projects/Project3";
import Project7 from "../Dialog/Projects/Project7";
import Project6 from "../Dialog/Projects/Project6";
import Project4 from "../Dialog/Projects/Project4";
const MachineIntegrate = () => {
  const [visible, setVisible] = useState(false);
  const [project3, setProject3] = useState(false);
  const [project4, setProject4] = useState(false);
  const [project6, setProject6] = useState(false);
  const [project7, setProject7] = useState(false);
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
    <section className="m-integrate">
      <ScrollParallax isAbsolutelyPositioned strength={-0.1} zIndex={-1}>
        <div className="dots">
          <img src="assets/images/Dot.svg" alt="dot" />
          <img src="assets/images/Dot.svg" alt="dot" />
        </div>
      </ScrollParallax>
      <ScrollParallax isAbsolutelyPositioned zIndex={-1} strength={-0.1}>
        <img src="assets/images/Ellipse1.png" alt="ball" className="ellipse1" />
      </ScrollParallax>

      <div className="m-integrate-wraps">
        <div className="topicwraps">
          <div className="heading">
            <h2>Интеграция машинного обучения</h2>
            <div
              title="Обсудить проект"
              className="btn-p"
              onClick={() => setVisible(true)}
            >
              Обсудить проект
            </div>
          </div>
          <img src="assets/images/brain.png" alt="bot" className="brain-img" />
        </div>

        <div className="m-integrate-grid-wraps">
          <div className="mob-header">
            <h2>Интеграция машинного обучения</h2>
          </div>
          <div className="m-integrate-grid">
            <div className="integrate-card" onClick={() => setProject4(true)}>
              <div className="icon-wraps">
                <img
                  src="assets/images/sight.png"
                  alt="sight"
                  className="icon"
                />
              </div>
              <h4>Компьютерное зрение</h4>
              <p>
                Разработка алгоритмов для распознавания и анализа визуальной
                информации, на видео и изображениях, в режиме реального времени.
              </p>
            </div>
            <div className="integrate-card" onClick={() => setProject3(true)}>
              <div className="icon-wraps">
                <img
                  src="assets/images/Personalized.png"
                  alt="Personalized"
                  className="icon"
                />
              </div>
              <h4>Машинное обучение на производстве</h4>
              <p>
                Разработка алгоритмов машинного обучения для предиктивного
                обслуживания оборудования, оптимизация производственных линий,
                управление качеством и автоматизация контроля процессов.
              </p>
            </div>
            <div className="integrate-card" onClick={() => setProject7(true)}>
              <div className="icon-wraps">
                <img
                  src="assets/images/analytics.png"
                  alt="Analytics"
                  className="icon"
                />
              </div>
              <h4>Рекомендательные системы</h4>
              <p>
                Разработка систем, которые используют алгоритмы машинного
                обучения для анализа предпочтений и поведения пользователей,
                чтобы предлагать персонализированный контент, продукты или
                услуги.
              </p>
            </div>
            <div className="integrate-card" onClick={() => setProject6(true)}>
              <div className="icon-wraps">
                <img
                  src="assets/images/Generating.png"
                  alt="Generating"
                  className="icon"
                />
              </div>
              <h4>Алгоритмы принятия решений</h4>
              <p>
                Разработка алгоритмов, которые помогают компаниям в принятии
                решений основываясь на данных пользователей.
                <br />
                <br />
                Применения включают финансовый анализ, маркетинг, бонусные
                системы, управление рисками, оптимизацию логистики и управление
                цепочками поставок.
              </p>
            </div>
          </div>
          <div className="mob-btn">
            <div
              title="Обсудить проект"
              className="btn-bdr"
              onClick={() => setVisible(true)}
            >
              Обсудить проект
            </div>
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
      <Dialog
        visible={project3}
        className="hide-sidebar-dialog"
        position={windowSize[0] > 960 ? "center" : "bottom"}
        showHeader={false}
        blockScroll={true}
        dismissableMask={true}
        onHide={() => setProject3(false)}
      >
        <Project3 setProject3={setProject3} />
      </Dialog>
      <Dialog
        visible={project4}
        className="hide-sidebar-dialog"
        position={windowSize[0] > 960 ? "center" : "bottom"}
        showHeader={false}
        blockScroll={true}
        dismissableMask={true}
        onHide={() => setProject4(false)}
      >
        <Project4 setProject4={setProject4} />
      </Dialog>
      <Dialog
        visible={project6}
        className="hide-sidebar-dialog"
        position={windowSize[0] > 960 ? "center" : "bottom"}
        showHeader={false}
        blockScroll={true}
        dismissableMask={true}
        onHide={() => setProject6(false)}
      >
        <Project6 setProject6={setProject6} />
      </Dialog>
      <Dialog
        visible={project7}
        className="hide-sidebar-dialog"
        position={windowSize[0] > 960 ? "center" : "bottom"}
        showHeader={false}
        blockScroll={true}
        dismissableMask={true}
        onHide={() => setProject7(false)}
      >
        <Project7 setProject7={setProject7} />
      </Dialog>
    </section>
  );
};

export default MachineIntegrate;
