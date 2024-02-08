import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  const menuItems = [
    {
      title: "услуги",
      link: "/services",
    },
    {
      title: "портфолио",
      link: "/portfolio",
    },
    {
      title: "о нас",
      link: "/about",
    },
  ];
  return (
    <section className="footer">
      <div className="footer-wraps">
        <div className="footer-main">
          <div className="footer-logo">
            <Link to="/" title="Maxdenai">
              <img src="assets/images/maxden-logo-footer.png" alt="Maxdenai" />{" "}
            </Link>
          </div>

          <ul className="footer-list">
            {menuItems.map((e, index) => (
              <li key={index}>
                <Link to={e?.link} title={e.title}>
                  {e.title}
                </Link>
              </li>
            ))}

            <li>
              <p title="контакты">контакты</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
