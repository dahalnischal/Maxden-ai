import { Dialog } from "primereact/dialog";
import React, { useEffect } from "react";
import { useState } from "react";
import ContactDialog from "../Dialog/ContactDialog";
import QuestionDialog from "../Dialog/QuestionDialog";

const ServiceHero = ({ scrollToElement }) => {
  const [visible, setVisible] = useState(false);
  const [question, setQuestion] = useState(false);
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
    <section className="service-main">
      <div className="scroll-dowm cursor-pointer" onClick={scrollToElement}>
        <img src="assets/images/down-arrow.svg" alt="arrow" />
      </div>
      <div className="services-wraps">
        <div className="heading">
          <h1>
            уволь сотрудника,
            <br /> найми нейросеть!
          </h1>
          <span>ей не надо платить зарплату</span>
        </div>
        <div className="services-box">
          <div className="topic">
            <h2>услуги</h2>
            <div className="dev-details">
              <div>
                <span>срок разработки</span>
                <h3>от 1 месяца</h3>
              </div>
              <div>
                <span>стоимость разработки</span>
                <h3>от 350 тыс. рублей</h3>
              </div>
            </div>
          </div>
          <div className="details">
            <p>
              Заменим сотрудника на искусственный интеллект! <br />
              Какой-то очень крутой текст от Макса. Разработка и обучения чат
              ботов для выполнения специфических задач, таких как обработка
              заказов, предоставление информации о продуктах и услугах, а также
              решение стандартных запросов клиентов.{" "}
            </p>
            <div className="btns-wraps">
              <div
                className="btn-bdr"
                onClick={() => setQuestion(true)}
                title="Задать вопрос"
              >
                Задать вопрос
              </div>
              <div
                className="btn-p"
                onClick={() => setVisible(true)}
                title="Рассчитать стоимость"
              >
                Рассчитать стоимость
              </div>
            </div>
          </div>
        </div>
        <Dialog
          visible={question}
          onHide={() => setQuestion(false)}
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
        >
          <QuestionDialog setQuestion={setQuestion} />
        </Dialog>
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

export default ServiceHero;
