import React from "react";

const OurClients = () => {
  return (
    <section className="our-clients">
      <div className="client-wraps">
        <div className="clients-grid">
          <div className="clents-content-wraps">
            <div className="pagination-wraps second">
              <div className="num">02</div>
              <div className="line" />
              <div className="num last">05</div>
            </div>
            <div className="clients-details">
              <h2>Наши клиенты</h2>
              <p>
                20+ успешных проектов в области чат-ботов и ИИ. Наши партнеры
                это различные компании от стартапов до корпоративных гигантов,
                таких как Газпром Битум
              </p>

              <a href="#" title=" Все проекты" className="btn-p">
                <span> Все проекты</span>
              </a>
            </div>
          </div>
          <div className="clients-logos-wraps">
            <div className="logos">
              <img
                src="assets/images/yota.png"
                alt=""
                className="client-logo img-responsive"
              />
            </div>

            <div className="logos">
              <img
                src="assets/images/Avito_logo2.png"
                alt=""
                className="client-logo img-responsive"
              />
            </div>

            <div className="logos">
              <img
                src="assets/images/metrica.png"
                alt=""
                className="client-logo img-responsive"
              />
            </div>
            <div className="logos">
              <img
                src="assets/images/raenpom.png"
                alt=""
                className="client-logo img-responsive"
              />
            </div>
            <div className="logos">
              <img
                src="assets/images/sk.png"
                alt=""
                className="client-logo img-responsive"
              />
            </div>

            <div className="logos">
              <img
                src="assets/images/gnezdo.png"
                alt=""
                className="client-logo img-responsive"
              />
            </div>
            <div className="logos hidden">
              <img
                src="assets/images/gnezdo.png"
                alt=""
                className="client-logo img-responsive"
              />
            </div>
          </div>
        </div>
        <div className="business-purpose-sec">
          <img
            src="assets/images/grey-logo-vector.png"
            alt=""
            className="logo-vector"
          />
          <h3>разработка и внедрение искусственного интеллекта</h3>
          <h2>пoд задачи бизнеса</h2>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
