import React from "react";

const Employee = () => {
  return (
    <section className="employee">
      <div className="dots">
        <img src="assets/images/Dot.svg" alt="dot" />
        <img src="assets/images/Dot.svg" alt="dot" />
      </div>
      <img src="assets/images/Ellipse1.png" alt="ball" className="ellipse1" />
      <div className="employee-wraps">
        <div className="heading">
          <h2>сотрудники</h2>
        </div>
        <div className="employees-flex-wraps">
          <div className="employee-card">
            <div className="employee-details">
              <h2>
                Максим Кучер <br />
                <span>CEO</span>
              </h2>
              <p>
                Основатель и генеральный директор Maxden.Ai, является
                вдохновителем и движущей силой компании. Под его руководством
                компания успешно реализовала несколько масштабных проектов в
                сфере искусственного интеллекта, включая разработку
                инновационных систем для автоматизации процессов в финансовом
                секторе. Его лидерство и чутье на новаторские идеи направляют
                Maxden.Ai на путь постоянного роста и развития в сфере
                искусственного интеллекта.
              </p>
            </div>
            <div className="employee-img">
              <img
                src="assets/images/Maxim.png"
                alt="Maxim"
                className="emp-img"
              />
            </div>
          </div>
          <div className="employee-card">
            <div className="employee-details">
              <h2>
                Рувим Дериволков
                <br />
                <span>Технический Директор </span>
              </h2>
              <p>
                Эксперт в современных технологиях, особенно в сфере
                искусственного интеллекта и машинного обучения. Он обладает
                уникальным сочетанием глубоких технических знаний и отличных
                лидерских качеств, позволяющих ему успешно вести за собой
                команду высококвалифицированных специалистов. Его способность
                интегрировать передовые технологии с практическими
                бизнес-решениями и вдохновлять команду на достижение выдающихся
                результатов делает его неоценимым активом для Maxden.Ai
              </p>
            </div>
            <div className="employee-img">
              <img
                src="assets/images/Ruvim.png"
                alt="Ruvim"
                className="emp-img"
              />
            </div>
          </div>
          <div className="employee-card">
            <div className="employee-details">
              <h2>
                Даниил Манкевич
                <br />
                <span>Архитектор Систем</span>
              </h2>
              <p>
                Даниил имеет уникальный опыт работы над крупномасштабными
                ИИ-проектами, включая разработку систем умного города и
                автоматизированных транспортных сетей. Он является соавтором
                нескольких патентов в области машинного обучения и оптимизации
                данных. Даниил также активно сотрудничает с университетами, ведя
                курсы по системному архитектурному проектированию.
              </p>
            </div>
            <div className="employee-img">
              <img
                src="assets/images/Daniil.png"
                alt="Daniil"
                className="emp-img"
              />
            </div>
          </div>
          <div className="employee-card">
            <div className="employee-details">
              <h2>
                Даниил Гуйван
                <br />
                <span>Проектный Менеджер </span>
              </h2>
              <p>
                Даниил, проектный менеджер, известен своим уникальным подходом к
                управлению сложными проектами в сфере высоких технологий. Он
                успешно руководил международными проектами по внедрению ИИ в
                области здравоохранения и логистики, что принесло компании
                высокое признание в индустрии. Даниил регулярно проводит
                тренинги по Agile и Scrum методологиям, повышая эффективность
                командных процессов.
              </p>
            </div>
            <div className="employee-img">
              <img
                src="assets/images/Daniel.png"
                alt="Daniel"
                className="emp-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Employee;
