import { Dialog } from "primereact/dialog";
import React, { useEffect } from "react";
import { ScrollParallax } from "react-just-parallax";
import { useState } from "react";
import ContactDialog from "../Dialog/ContactDialog";
const Procedure = ({ targetRef }) => {
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
    <section className="procedure" ref={targetRef}>
      <ScrollParallax isAbsolutelyPositioned strength={-0.1} zIndex={-1}>
        <div className="dots">
          <img src="assets/images/Dot.svg" alt="dot" />
          <img src="assets/images/Dot.svg" alt="dot" />
        </div>
      </ScrollParallax>
      <ScrollParallax isAbsolutelyPositioned strength={-0.1} zIndex={-1}>
        <img src="assets/images/Ellipse1.png" alt="ball" className="ellipse1" />
      </ScrollParallax>

      <ScrollParallax isAbsolutelyPositioned strength={-0.1} zIndex={-1}>
        <img src="assets/images/Dot.svg" alt="dot" className="dot" />
      </ScrollParallax>
      <div className="procedure-wrap">
        <div className="topic">
          <h2>Порядок разработки систем ИИ</h2>
        </div>
        <div className="points-wrapper">
          <div className="points-wraps">
            <div className="num-wraps">
              <div className="num-circle">
                <div className="num">1</div>
              </div>
              <span>Шаг 1: Анализ задачи</span>
            </div>
            <div className="content">
              <p>
                Исследуем задачу, акцентируя внимание на потенциале
                искусственного интеллекта. Анализируем типы данных, их объем и
                сложность, а также специфические алгоритмы и методы машинного
                обучения, которые могут быть применены. Особое внимание уделяем
                вопросам обучения моделей ИИ, их верификации и валидации.
              </p>
            </div>
          </div>
          <div className="points-wraps">
            <div className="num-wraps">
              <div className="num-circle">
                <div className="num">2</div>
              </div>
              <span>Шаг 2: Разработка системы</span>
            </div>
            <div className="content">
              <p>
                Исследуем задачу, акцентируя внимание на потенциале
                искусственного интеллекта. Анализируем типы данных, их объем и
                сложность, а также специфические алгоритмы и методы машинного
                обучения, которые могут быть применены. Особое внимание уделяем
                вопросам обучения моделей ИИ, их верификации и валидации.
              </p>
            </div>
          </div>
          <div className="points-wraps">
            <div className="num-wraps">
              <div className="num-circle">
                <div className="num">3</div>
              </div>
              <span>Шаг 3: Внедрение и поддержка решения</span>
            </div>
            <div className="content">
              <p>
                Исследуем задачу, акцентируя внимание на потенциале
                искусственного интеллекта. Анализируем типы данных, их объем и
                сложность, а также специфические алгоритмы и методы машинного
                обучения, которые могут быть применены. Особое внимание уделяем
                вопросам обучения моделей ИИ, их верификации и валидации.
              </p>
            </div>
          </div>
        </div>
        <div className="btns-wraps">
          <div
            className="btn-p"
            onClick={() => setVisible(true)}
            title="Обсудить проект"
          >
            Обсудить проект
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
  );
};

export default Procedure;
