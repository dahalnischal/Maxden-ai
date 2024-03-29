import { Dialog } from "primereact/dialog";
import React from "react";
import { useState, useEffect } from "react";
import ContactDialog from "../Dialog/ContactDialog";
import Project3 from "../Dialog/Projects/Project3";
import Project7 from "../Dialog/Projects/Project7";
import Project6 from "../Dialog/Projects/Project6";
import Project4 from "../Dialog/Projects/Project4";
import { ScrollParallax } from "react-just-parallax";

const MachineSection = () => {
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
    <>
      <section className="machine">
        <div className="machine-wraps ">
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
              <img
                src="assets/images/brain.png"
                alt="brain"
                className="brain"
              />
              <div className="m-feature-grid">
                <div className="wrappers-feature">
                  <div
                    className="feature-card"
                    onClick={() => setProject4(true)}
                  >
                    <div className="icon-wraps">
                      <img
                        src="assets/images/sight.png"
                        alt="sight"
                        className="icon"
                      />
                    </div>
                    <h4>Компьютерное зрение</h4>
                    <p>
                      Алгоритмы для распознавания и анализа изображений и видео
                      в реальном времени
                    </p>
                  </div>

                  <div
                    className="feature-card"
                    onClick={() => setProject7(true)}
                  >
                    <div className="icon-wraps">
                      <img
                        src="assets/images/Recommender.png"
                        alt="Automation"
                        className="icon"
                      />
                    </div>
                    <h4>Рекомендательные системы</h4>
                    <p>
                      Системы для предложения товаров на основе анализа
                      поведения пользователей
                    </p>
                  </div>
                </div>
                <div className="wrappers-feature">
                  <div
                    className="feature-card"
                    onClick={() => setProject3(true)}
                  >
                    <div className="icon-wraps">
                      <img
                        src="assets/images/Machine.png"
                        alt="Machine"
                        className="icon"
                      />
                    </div>
                    <h4>Машинное обучение на производстве</h4>
                    <p>
                      Алгоритмы для предиктивного обслуживания, оптимизации
                      линий и контроля качества
                    </p>
                  </div>
                  <div
                    className="feature-card"
                    onClick={() => setProject6(true)}
                  >
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
        <div className="machine-wraps machine-wraps-mobile">
          <div className="dots">
            <img src="assets/images/Dot.svg" alt="dot" />
            <img src="assets/images/Dot.svg" alt="dot" />
          </div>

          <img
            src="assets/images/Ellipse1.png"
            alt="ball"
            className="ellipse1"
          />

          <div className="machine-grid-wraps">
            <div className="pagination-wraps fourth">
              <div className="num">04</div>
              <div className="line"></div>
              <div className="num last">05</div>
            </div>
            <img src="assets/images/brain.png" alt="brain" className="brain" />
            <div className="m-feature-grid">
              <div className="feature-card" onClick={() => setProject4(true)}>
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

              <div className="feature-card" onClick={() => setProject7(true)}>
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

              <div className="feature-card" onClick={() => setProject3(true)}>
                <div className="icon-wraps">
                  <img
                    src="assets/images/Machine.png"
                    alt="Machine"
                    className="icon"
                  />
                </div>
                <h4>Машинное обучение на производстве</h4>
                <p>
                  Алгоритмы для предиктивного обслуживания, оптимизации линий и
                  контроля качества
                </p>
              </div>
              <div className="feature-card" onClick={() => setProject6(true)}>
                <div className="icon-wraps">
                  <img
                    src="assets/images/Decision.png"
                    alt="Automation"
                    className="icon"
                  />
                </div>
                <h4>Алгоритмы принятия решений</h4>
                <p>
                  Решения для финансового анализа, маркетинга, бонусных систем,
                  управления рисками, оптимизации логистики
                </p>
              </div>
            </div>
            <div className="flex align-center justify-center">
              <div className="btn-bdr" onClick={() => setVisible(true)}>
                Обсудить проект
              </div>
            </div>
            <div className="topic">
              <h2>Интеграция машинного обучения</h2>
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
          position={windowSize[0] > 960 ? "center" : "bottom"}
          className="hide-sidebar-dialog"
          showHeader={false}
          blockScroll={true}
          dismissableMask={true}
          onHide={() => setProject4(false)}
        >
          <Project4 setProject4={setProject4} />
        </Dialog>
        <Dialog
          visible={project6}
          position={windowSize[0] > 960 ? "center" : "bottom"}
          className="hide-sidebar-dialog"
          showHeader={false}
          blockScroll={true}
          dismissableMask={true}
          onHide={() => setProject6(false)}
        >
          <Project6 setProject6={setProject6} />
        </Dialog>
        <Dialog
          visible={project7}
          position={windowSize[0] > 960 ? "center" : "bottom"}
          className="hide-sidebar-dialog"
          showHeader={false}
          blockScroll={true}
          dismissableMask={true}
          onHide={() => setProject7(false)}
        >
          <Project7 setProject7={setProject7} />
        </Dialog>
      </section>

      <section className="machine machine-mobile">
        <div className="machine-wraps ">
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
              <img
                src="assets/images/brain.png"
                alt="brain"
                className="brain"
              />
              <div className="m-feature-grid">
                <div className="wrappers-feature">
                  <div
                    className="feature-card"
                    onClick={() => setProject4(true)}
                  >
                    <div className="icon-wraps">
                      <img
                        src="assets/images/sight.png"
                        alt="sight"
                        className="icon"
                      />
                    </div>
                    <h4>Компьютерное зрение</h4>
                    <p>
                      Алгоритмы для распознавания и анализа изображений и видео
                      в реальном времени
                    </p>
                  </div>

                  <div
                    className="feature-card"
                    onClick={() => setProject7(true)}
                  >
                    <div className="icon-wraps">
                      <img
                        src="assets/images/Recommender.png"
                        alt="Automation"
                        className="icon"
                      />
                    </div>
                    <h4>Рекомендательные системы</h4>
                    <p>
                      Системы для предложения товаров на основе анализа
                      поведения пользователей
                    </p>
                  </div>
                </div>
                <div className="wrappers-feature">
                  <div
                    className="feature-card"
                    onClick={() => setProject3(true)}
                  >
                    <div className="icon-wraps">
                      <img
                        src="assets/images/Machine.png"
                        alt="Machine"
                        className="icon"
                      />
                    </div>
                    <h4>Машинное обучение на производстве</h4>
                    <p>
                      Алгоритмы для предиктивного обслуживания, оптимизации
                      линий и контроля качества
                    </p>
                  </div>
                  <div
                    className="feature-card"
                    onClick={() => setProject6(true)}
                  >
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
        <div className="machine-wraps machine-wraps-mobile">
          <div className="dots">
            <img src="assets/images/Dot.svg" alt="dot" />
            <img src="assets/images/Dot.svg" alt="dot" />
          </div>

          <img
            src="assets/images/Ellipse1.png"
            alt="ball"
            className="ellipse1"
          />

          <div className="machine-grid-wraps">
            <div className="pagination-wraps fourth">
              <div className="num">04</div>
              <div className="line"></div>
              <div className="num last">05</div>
            </div>
            <img src="assets/images/brain.png" alt="brain" className="brain" />
            <div className="m-feature-grid">
              <div className="feature-card" onClick={() => setProject4(true)}>
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

              <div className="feature-card" onClick={() => setProject7(true)}>
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

              <div className="feature-card" onClick={() => setProject3(true)}>
                <div className="icon-wraps">
                  <img
                    src="assets/images/Machine.png"
                    alt="Machine"
                    className="icon"
                  />
                </div>
                <h4>Машинное обучение на производстве</h4>
                <p>
                  Алгоритмы для предиктивного обслуживания, оптимизации линий и
                  контроля качества
                </p>
              </div>
              <div className="feature-card" onClick={() => setProject6(true)}>
                <div className="icon-wraps">
                  <img
                    src="assets/images/Decision.png"
                    alt="Automation"
                    className="icon"
                  />
                </div>
                <h4>Алгоритмы принятия решений</h4>
                <p>
                  Решения для финансового анализа, маркетинга, бонусных систем,
                  управления рисками, оптимизации логистики
                </p>
              </div>
            </div>
            <div className="flex align-center justify-center">
              <div className="btn-bdr" onClick={() => setVisible(true)}>
                Обсудить проект
              </div>
            </div>
            <div className="topic">
              <h2>Интеграция машинного обучения</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MachineSection;
