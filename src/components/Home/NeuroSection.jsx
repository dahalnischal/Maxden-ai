import { Dialog } from "primereact/dialog";
import React from "react";
import { useState, useEffect } from "react";
import ContactDialog from "../Dialog/ContactDialog";
import Project1 from "../Dialog/Projects/Project1";
import Project2 from "../Dialog/Projects/Project2";
import Project5 from "../Dialog/Projects/Project5";
import Project8 from "../Dialog/Projects/Project8";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";

const NeuroSection = ({ val }) => {
  const [visible, setVisible] = useState(false);
  const [project1, setProject1] = useState(false);
  const [project2, setProject2] = useState(false);
  const [project5, setProject5] = useState(false);
  const [project8, setProject8] = useState(false);
  const eyeref = useRef();

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
      <section className="neuro-sec" ref={val}>
        <div className="neuro-wraps">
          <ScrollParallax
            isAbsolutelyPositioned={false}
            strength={-0.05}
            lerpEase={0.04}
          >
            <div className="whole-neuro-wraps">
              <ScrollParallax isAbsolutelyPositioned strength={-0.05}>
                <div className="dots">
                  <img src="assets/images/Dot.svg" alt="dot" />
                  <img src="assets/images/Dot.svg" alt="dot" />
                </div>
              </ScrollParallax>
              <ScrollParallax isAbsolutelyPositioned strength={-0.05}>
                <img
                  src="assets/images/Ellipse1.png"
                  alt="ball"
                  className="ellipse1"
                />
              </ScrollParallax>
              <div className="pagination-wraps third">
                <div className="num">03</div>
                <div className="line" />
                <div className="num last">05</div>
              </div>
              <div className="neuro-feature-grid">
                <img
                  src="assets/images/eye.png"
                  alt="ai-eye"
                  className="eye"
                  ref={eyeref}
                />
                <div className="topic">
                  <h2>Интеграция нейросотрудника</h2>
                  <div className="btn-bdr" onClick={() => setVisible(true)}>
                    Обсудить проект
                  </div>
                </div>
                <div className="features-grid">
                  <div className="feature-grid-wrapper">
                    <div
                      className="feature-card"
                      onClick={() => setProject8(true)}
                    >
                      <div className="icon-wraps">
                        <img
                          src="assets/images/Automation.png"
                          alt="Automation"
                          className="icon"
                        />
                      </div>
                      <h4>Автоматизация офисных задач</h4>
                      <p>
                        Автоматическая обработка заявок, управления
                        документооборотом, автоматизация действий в 1С,
                        Битрикс24, amoCRM, Microsoft Office, Google Docs
                      </p>
                    </div>
                    <div
                      className="feature-card"
                      onClick={() => setProject2(true)}
                    >
                      <div className="icon-wraps">
                        <img
                          src="assets/images/Generating.png"
                          alt="Generating"
                          className="icon"
                        />
                      </div>
                      <h4>Генерация контента любого типа</h4>
                      <p>
                        Автоматическое создание текстов, изображений,
                        видеоматериалов
                      </p>
                    </div>
                  </div>
                  <div className="feature-grid-wrapper">
                    <div
                      className="feature-card"
                      onClick={() => setProject1(true)}
                    >
                      <div className="icon-wraps">
                        <img
                          src="assets/images/Personalized.png"
                          alt="Personalized"
                          className="icon"
                        />
                      </div>
                      <h4>Персонализированные чат-боты</h4>
                      <p>
                        Обученные боты для обработки заказов и информационной
                        поддержки, интеграция с Telegram, WhatsApp, веб,
                        мобильными приложениями
                      </p>
                    </div>
                    <div
                      className="feature-card"
                      onClick={() => setProject5(true)}
                    >
                      <div className="icon-wraps">
                        <img
                          src="assets/images/analytics.png"
                          alt="analytics"
                          className="icon"
                        />
                      </div>
                      <h4>Автоматизация аналитики и отчетности</h4>
                      <p>
                        Нейросети для анализа данных и документов, генерации
                        отчетов, выявление тенденций, прогнозирование трендов
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollParallax>
        </div>

        <div className="neuro-wraps neuro-wraps-mobile">
          <div className="whole-neuro-wraps">
            <div className="dots">
              <img src="assets/images/Dot.svg" alt="dot" />
              <img src="assets/images/Dot.svg" alt="dot" />
            </div>

            <ScrollParallax isAbsolutelyPositioned strength={-0.05}>
              <img
                src="assets/images/Ellipse1.png"
                alt="ball"
                className="ellipse1"
              />
            </ScrollParallax>

            <div className="pagination-wraps third">
              <div className="num">03</div>
              <div className="line" />
              <div className="num last">05</div>
            </div>
            <div className="neuro-feature-grid">
              <img
                src="assets/images/eye.png"
                alt="ai-eye"
                className="eye"
                ref={eyeref}
              />
              <div className="topic">
                <h2>Интеграция нейросотрудника</h2>
              </div>
              <div className="features-grid">
                <div className="feature-card" onClick={() => setProject8(true)}>
                  <div className="icon-wraps">
                    <img
                      src="assets/images/Automation.png"
                      alt="Automation"
                      className="icon"
                    />
                  </div>
                  <h4>Автоматизация офисных задач</h4>
                  <p>
                    Автоматическая обработка заявок, управления
                    документооборотом, автоматизация действий в 1С, Битрикс24,
                    amoCRM, Microsoft Office, Google Docs
                  </p>
                </div>
                <div className="feature-card" onClick={() => setProject2(true)}>
                  <div className="icon-wraps">
                    <img
                      src="assets/images/Generating.png"
                      alt="Generating"
                      className="icon"
                    />
                  </div>
                  <h4>Генерация контента любого типа</h4>
                  <p>
                    Автоматическое создание текстов, изображений,
                    видеоматериалов
                  </p>
                </div>

                <div className="feature-card" onClick={() => setProject1(true)}>
                  <div className="icon-wraps">
                    <img
                      src="assets/images/Personalized.png"
                      alt="Personalized"
                      className="icon"
                    />
                  </div>
                  <h4>Персонализированные чат-боты</h4>
                  <p>
                    Обученные боты для обработки заказов и информационной
                    поддержки, интеграция с Telegram, WhatsApp, веб, мобильными
                    приложениями
                  </p>
                </div>
                <div className="feature-card" onClick={() => setProject5(true)}>
                  <div className="icon-wraps">
                    <img
                      src="assets/images/analytics.png"
                      alt="analytics"
                      className="icon"
                    />
                  </div>
                  <h4>Автоматизация аналитики и отчетности</h4>
                  <p>
                    Нейросети для анализа данных и документов, генерации
                    отчетов, выявление тенденций, прогнозирование трендов
                  </p>
                </div>
              </div>

              <div className="btn-bdr" onClick={() => setVisible(true)}>
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
          visible={project8}
          className="hide-sidebar-dialog"
          showHeader={false}
          position={windowSize[0] > 960 ? "center" : "bottom"}
          blockScroll={true}
          dismissableMask={true}
          onHide={() => setProject8(false)}
        >
          <Project8 setProject8={setProject8} />
        </Dialog>
        <Dialog
          visible={project1}
          className="hide-sidebar-dialog"
          showHeader={false}
          position={windowSize[0] > 960 ? "center" : "bottom"}
          blockScroll={true}
          dismissableMask={true}
          onHide={() => setProject1(false)}
        >
          <Project1 setProject1={setProject1} />
        </Dialog>
        <Dialog
          visible={project2}
          className="hide-sidebar-dialog"
          showHeader={false}
          position={windowSize[0] > 960 ? "center" : "bottom"}
          blockScroll={true}
          dismissableMask={setProject2}
          onHide={() => setProject8(false)}
        >
          <Project2 setProject2={setProject2} />
        </Dialog>
        <Dialog
          visible={project5}
          className="hide-sidebar-dialog"
          showHeader={false}
          position={windowSize[0] > 960 ? "center" : "bottom"}
          blockScroll={true}
          dismissableMask={true}
          onHide={() => setProject5(false)}
        >
          <Project5 setProject5={setProject5} />
        </Dialog>
      </section>

      <section className="neuro-sec mobile">
        <div className="neuro-wraps">
          <ScrollParallax
            isAbsolutelyPositioned={false}
            strength={-0.05}
            lerpEase={0.04}
          >
            <div className="whole-neuro-wraps">
              <ScrollParallax isAbsolutelyPositioned strength={-0.05}>
                <div className="dots">
                  <img src="assets/images/Dot.svg" alt="dot" />
                  <img src="assets/images/Dot.svg" alt="dot" />
                </div>
              </ScrollParallax>
              <ScrollParallax isAbsolutelyPositioned strength={-0.05}>
                <img
                  src="assets/images/Ellipse1.png"
                  alt="ball"
                  className="ellipse1"
                />
              </ScrollParallax>
              <div className="pagination-wraps third">
                <div className="num">03</div>
                <div className="line" />
                <div className="num last">05</div>
              </div>
              <div className="neuro-feature-grid">
                <img
                  src="assets/images/eye.png"
                  alt="ai-eye"
                  className="eye"
                  ref={eyeref}
                />
                <div className="topic">
                  <h2>Интеграция нейросотрудника</h2>
                  <div className="btn-bdr" onClick={() => setVisible(true)}>
                    Обсудить проект
                  </div>
                </div>
                <div className="features-grid">
                  <div className="feature-grid-wrapper">
                    <div
                      className="feature-card"
                      onClick={() => setProject8(true)}
                    >
                      <div className="icon-wraps">
                        <img
                          src="assets/images/Automation.png"
                          alt="Automation"
                          className="icon"
                        />
                      </div>
                      <h4>Автоматизация офисных задач</h4>
                      <p>
                        Автоматическая обработка заявок, управления
                        документооборотом, автоматизация действий в 1С,
                        Битрикс24, amoCRM, Microsoft Office, Google Docs
                      </p>
                    </div>
                    <div
                      className="feature-card"
                      onClick={() => setProject1(true)}
                    >
                      <div className="icon-wraps">
                        <img
                          src="assets/images/Generating.png"
                          alt="Generating"
                          className="icon"
                        />
                      </div>
                      <h4>Генерация контента любого типа</h4>
                      <p>
                        Автоматическое создание текстов, изображений,
                        видеоматериалов
                      </p>
                    </div>
                  </div>
                  <div className="feature-grid-wrapper">
                    <div
                      className="feature-card"
                      onClick={() => setProject2(true)}
                    >
                      <div className="icon-wraps">
                        <img
                          src="assets/images/Personalized.png"
                          alt="Personalized"
                          className="icon"
                        />
                      </div>
                      <h4>Персонализированные чат-боты</h4>
                      <p>
                        Обученные боты для обработки заказов и информационной
                        поддержки, интеграция с Telegram, WhatsApp, веб,
                        мобильными приложениями
                      </p>
                    </div>
                    <div
                      className="feature-card"
                      onClick={() => setProject5(true)}
                    >
                      <div className="icon-wraps">
                        <img
                          src="assets/images/analytics.png"
                          alt="analytics"
                          className="icon"
                        />
                      </div>
                      <h4>Автоматизация аналитики и отчетности</h4>
                      <p>
                        Нейросети для анализа данных и документов, генерации
                        отчетов, выявление тенденций, прогнозирование трендов
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollParallax>
        </div>

        <div className="neuro-wraps neuro-wraps-mobile">
          <div className="whole-neuro-wraps">
            <div className="dots">
              <img src="assets/images/Dot.svg" alt="dot" />
              <img src="assets/images/Dot.svg" alt="dot" />
            </div>

            <ScrollParallax isAbsolutelyPositioned strength={-0.3}>
              <img
                src="assets/images/Ellipse1.png"
                alt="ball"
                className="ellipse1"
              />
            </ScrollParallax>

            <div className="pagination-wraps third">
              <div className="num">03</div>
              <div className="line" />
              <div className="num last">05</div>
            </div>
            <div className="neuro-feature-grid">
              <img
                src="assets/images/eye.png"
                alt="ai-eye"
                className="eye"
                ref={eyeref}
              />
              <div className="topic">
                <h2>Интеграция нейросотрудника</h2>
              </div>
              <div className="features-grid">
                <div className="feature-card" onClick={() => setProject8(true)}>
                  <div className="icon-wraps">
                    <img
                      src="assets/images/Automation.png"
                      alt="Automation"
                      className="icon"
                    />
                  </div>
                  <h4>Автоматизация офисных задач</h4>
                  <p>
                    Автоматическая обработка заявок, управления
                    документооборотом, автоматизация действий в 1С, Битрикс24,
                    amoCRM, Microsoft Office, Google Docs
                  </p>
                </div>
                <div className="feature-card" onClick={() => setProject1(true)}>
                  <div className="icon-wraps">
                    <img
                      src="assets/images/Generating.png"
                      alt="Generating"
                      className="icon"
                    />
                  </div>
                  <h4>Генерация контента любого типа</h4>
                  <p>
                    Автоматическое создание текстов, изображений,
                    видеоматериалов
                  </p>
                </div>

                <div className="feature-card" onClick={() => setProject2(true)}>
                  <div className="icon-wraps">
                    <img
                      src="assets/images/Personalized.png"
                      alt="Personalized"
                      className="icon"
                    />
                  </div>
                  <h4>Персонализированные чат-боты</h4>
                  <p>
                    Обученные боты для обработки заказов и информационной
                    поддержки, интеграция с Telegram, WhatsApp, веб, мобильными
                    приложениями
                  </p>
                </div>
                <div className="feature-card" onClick={() => setProject5(true)}>
                  <div className="icon-wraps">
                    <img
                      src="assets/images/analytics.png"
                      alt="analytics"
                      className="icon"
                    />
                  </div>
                  <h4>Автоматизация аналитики и отчетности</h4>
                  <p>
                    Нейросети для анализа данных и документов, генерации
                    отчетов, выявление тенденций, прогнозирование трендов
                  </p>
                </div>
              </div>

              <div className="btn-bdr" onClick={() => setVisible(true)}>
                Обсудить проект
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NeuroSection;
