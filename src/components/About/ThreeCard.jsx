import React from "react";

const ThreeCard = () => {
  return (
    <div className="three-card-wraps">
      <div className="integrate-card">
        <div className="icon-wraps">
          <img
            src="assets/images/telescope.png"
            alt="telescope"
            className="icon"
          />
        </div>
        <h4>Выгода от внедрения ИИ</h4>
        <p>
          Внедрение искусственного интеллекта в ваш бизнес с Maxden.Ai означает
          не только технологическое преимущество, но и значительную
          экономическую выгоду.
          <br />
          <br />
          ИИ помогает оптимизировать бизнес-процессы, улучшать взаимодействие с
          клиентами и повышать общую эффективность работы.
          <br />
          <br />
          Мы тщательно анализируем потребности вашего бизнеса и предлагаем
          наиболее выгодные решения, которые помогают снизить затраты, увеличить
          доходы и обеспечить устойчивое развитие компании в долгосрочной
          перспективе.
        </p>
      </div>
      <div className="integrate-card">
        <div className="icon-wraps">
          <img
            src="assets/images/analytics.png"
            alt="analytics"
            className="icon"
          />
        </div>
        <h4>Скорость и конкурентная цена работы</h4>
        <p>
          В Maxden.Ai мы объединили скорость и доступность, чтобы предоставить
          вам лучший сервис. Используя гибкие методологии управления проектами,
          такие как Scrum и Agile, мы достигаем максимальной эффективности в
          работе, оптимизируя время и ресурсы.
          <br />
          <br />
          Это позволяет нам предлагать конкурентоспособные цены, сохраняя при
          этом высокое качество наших ИИ-решений. Мы стремимся к тому, чтобы
          каждый проект был выполнен в срок и в рамках бюджета, при этом
          превосходя ваши ожидания по качеству и эффективности.
        </p>
      </div>
      <div className="integrate-card">
        <div className="icon-wraps">
          <img
            src="assets/images/Automation.png"
            alt="Automation"
            className="icon"
          />
        </div>
        <h4>Гибкость в сотрудничестве</h4>
        <p>
          В Maxden.Ai мы ценим уникальность каждого нашего клиента и стремимся к
          созданию индивидуальных условий сотрудничества.
          <br />
          <br />
          Наша команда обладает гибкостью, чтобы адаптироваться к вашим
          финансовым возможностям, временным рамкам и масштабам проекта.
          <br />
          <br />
          Мы проведем детальный анализ и оценку вашего проекта, предложим
          оптимальные решения и смету, а также разработаем стратегию,
          максимально соответствующую вашим целям и потребностям.
        </p>
      </div>
    </div>
  );
};

export default ThreeCard;
