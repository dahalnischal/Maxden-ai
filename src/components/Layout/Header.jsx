import React from "react";

const Header = () => {
  return (
    <section className="navbar">
      <div className="nav-wraps">
        <div className="main-nav">
          <div className="nav-logo">
            <a href="#" title="Maxdenai">
              <img src="assets/images/maxden-logo.png" alt="maxden-logo" />
            </a>
          </div>
          <ul className="nav-list">
            <li>
              <a href="" title="услуги">
                услуги
              </a>
            </li>
            <li>
              {" "}
              <a href="" title="портфолио">
                портфолио
              </a>
            </li>
            <li>
              <a href="" title="о нас">
                о нас
              </a>
            </li>
            <li>
              <a href="" title="контакты">
                контакты
              </a>
            </li>
          </ul>
          <div className="contact-details">
            <div className="phone">
              <a href="tel:8 981 884-09-55" title="8 981 884-09-55">
                8 981 884-09-55
              </a>
            </div>
            <div>
              <a href="" title="whatsapp">
                <img src="assets/images/whatsapp.svg" alt="whatsapp" />
              </a>
              <a href="" title="telegram">
                <img src="assets/images/telegram.svg" alt="telegram" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
