import { Dialog } from "primereact/dialog";
import React from "react";
import { useState } from "react";
import ContactDialog from "../Dialog/ContactDialog";
import MachineDialog1 from "../Dialog/MachineLearning/MachineDialog1";
import MachineDialog2 from "../Dialog/MachineLearning/MachineDialog2";
import MachineDialog3 from "../Dialog/MachineLearning/MachineDialog3";
import { ScrollParallax } from "react-just-parallax";
import MachineDialog4 from "../Dialog/MachineLearning/MachineDialog4";
const MachineSection = () => {
  const [visible, setVisible] = useState(false);
  const [machine1, setMachine1] = useState(false);
  const [machine2, setMachine2] = useState(false);
  const [machine3, setMachine3] = useState(false);
  const [machine4, setMachine4] = useState(false);
  return (
    <section className="machine">
      <div className="machine-wraps">
        <ScrollParallax
          isAbsolutelyPositioned={false}
          strength={-0.05}
          lerpEase={0.04}
        >
          <ScrollParallax isAbsolutelyPositioned strength={-0.05}>
            <div className="dots">
              <img src="assets/images/Dot.svg" alt="dot" />
              <img src="assets/images/Dot.svg" alt="dot" />
            </div>
          </ScrollParallax>
          <ScrollParallax isAbsolutelyPositioned strength={-0.05} zIndex={9}>
            <img
              src="assets/images/Ellipse1.png"
              alt="ball"
              className="ellipse1"
            />
          </ScrollParallax>
          <div className="machine-grid-wraps">
            <div className="pagination-wraps fourth">
              <div className="num">04</div>
              <div className="line"></div>
              <div className="num last">05</div>
            </div>
            <img src="assets/images/brain.png" alt="brain" className="brain" />
            <div className="m-feature-grid">
              <div className="wrappers-feature">
                <div className="feature-card" onClick={() => setMachine1(true)}>
                  <div className="icon-wraps">
                    <img
                      src="assets/images/sight.png"
                      alt="sight"
                      className="icon"
                    />
                  </div>
                  <h4>Компьютерное зрение</h4>
                  <p>
                    Алгоритмы для распознавания и анализа изображений и видео в
                    реальном времени
                  </p>
                </div>

                <div className="feature-card" onClick={() => setMachine2(true)}>
                  <div className="icon-wraps">
                    <img
                      src="assets/images/Recommender.png"
                      alt="Automation"
                      className="icon"
                    />
                  </div>
                  <h4>Рекомендательные системы</h4>
                  <p>
                    Системы для предложения товаров на основе анализа поведения
                    пользователей
                  </p>
                </div>
              </div>
              <div className="wrappers-feature">
                <div className="feature-card" onClick={() => setMachine3(true)}>
                  <div className="icon-wraps">
                    <img
                      src="assets/images/Machine.png"
                      alt="Machine"
                      className="icon"
                    />
                  </div>
                  <h4>Машинное обучение на производстве</h4>
                  <p>
                    Алгоритмы для предиктивного обслуживания, оптимизации линий
                    и контроля качества
                  </p>
                </div>
                <div className="feature-card" onClick={() => setMachine4(true)}>
                  <div className="icon-wraps">
                    <img
                      src="assets/images/Decision.png"
                      alt="Automation"
                      className="icon"
                    />
                  </div>
                  <h4>Алгоритмы принятия решений</h4>
                  <p>
                    Решения для финансового анализа, маркетинга, бонусных
                    систем, управления рисками, оптимизации логистики
                  </p>
                </div>
              </div>
            </div>
            <div className="topic">
              <h2>Интеграция машинного обучения</h2>
              <div className="btn-bdr" onClick={() => setVisible(true)}>
                Обсудить проект
              </div>
            </div>
          </div>
        </ScrollParallax>
      </div>
      <Dialog
        visible={visible}
        className="hide-sidebar-dialog"
        showHeader={false}
        position={"top"}
      >
        <ContactDialog setVisible={setVisible} />
      </Dialog>
      <Dialog
        visible={machine1}
        className="hide-sidebar-dialog"
        showHeader={false}
      >
        <MachineDialog1 setMachine1={setMachine1} />
      </Dialog>
      <Dialog
        visible={machine2}
        className="hide-sidebar-dialog"
        showHeader={false}
      >
        <MachineDialog2 setMachine2={setMachine2} />
      </Dialog>
      <Dialog
        visible={machine3}
        className="hide-sidebar-dialog"
        showHeader={false}
      >
        <MachineDialog3 setMachine3={setMachine3} />
      </Dialog>
      <Dialog
        visible={machine4}
        className="hide-sidebar-dialog"
        showHeader={false}
      >
        <MachineDialog4 setMachine4={setMachine4} />
      </Dialog>
    </section>
  );
};

export default MachineSection;
