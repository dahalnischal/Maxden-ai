import React from "react";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-wraps">
        <div className="footer-main">
          <div className="footer-logo">
            <a href="">
              <img src="assets/images/maxden-logo-footer.png" alt="Maxdenai" />{" "}
            </a>
          </div>
          <ul className="footer-list">
            <li>
              <a href="" title="Услуги">
                Услуги
              </a>
            </li>
            <li>
              <a href="" title="Портфолио">
                Портфолио
              </a>
            </li>
            <li>
              <a href="" title="О нас">
                О нас
              </a>
            </li>
            <li>
              <a href="" title="Контакты">
                Контакты
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
