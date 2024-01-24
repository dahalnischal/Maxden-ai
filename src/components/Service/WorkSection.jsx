import React from "react";

const WorkSection = () => {
  return (
    <section className="work">
      <div className="heading">
        <h2>Формат работы</h2>
      </div>
      <div className="work-grid">
        <div className="work-card">
          <h3>Стандартный</h3>
          <p>
            Вникаем в бизнес-процессы, проектируем и реализуем наилучшее решение
            за фиксированный срок
          </p>
        </div>
        <div className="work-card">
          <h3>Итерационный</h3>
          <p>
            Формируем команду, которая будет итеративно улучшать и поддерживать
            ваши продукты
          </p>
        </div>
        <div className="work-card">
          <h3>Исследования</h3>
          <p>
            Проводим исследование и помогаем быстро внедрить технологии, которые
            сделают продукт лидером на рынке
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
