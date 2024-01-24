import React from "react";

const ServiceHero = () => {
  return (
    <section className="service-main">
      <a href="" className="scroll-dowm">
        <img src="assets/images/down-arrow.svg" alt="arrow" />
      </a>
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
              <a href="" className="btn-bdr" title="Задать вопрос">
                Задать вопрос
              </a>
              <a href="" className="btn-p" title="Рассчитать стоимость">
                Рассчитать стоимость
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
