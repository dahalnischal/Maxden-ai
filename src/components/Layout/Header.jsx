import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
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

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "auto",
    });
  };
  return (
    <section className="navbar">
      <div className="nav-wraps">
        <div className="main-nav">
          <div className="hamburger-mobile" onClick={() => setOpen(true)}>
            <img src="/assets/images/hamburger.svg"></img>
          </div>
          <div className="nav-logo">
            <Link to="/" title="Maxdenai">
              <img
                src="assets/images/maxden.svg"
                alt="maxden-logo"
                className="img-responsive maxden-logo"
              />
            </Link>
          </div>
          <ul className="nav-list">
            {menuItems.map((e, index) => (
              <li
                key={index}
                className={location.pathname === e.link ? "active" : ""}
              >
                <Link to={e?.link} title={e.title}>
                  {e.title}
                </Link>
              </li>
            ))}

            <li
              onClick={() => {
                setOpen(false);
                scrollToBottom();
              }}
            >
              <p title="контакты">контакты</p>
            </li>
          </ul>
          <div className="contact-details">
            <div className="phone">
              <a href="tel:88 999 226-81-48" title="88 999 226-81-48">
                8 999 226-81-48
              </a>
            </div>
            <div className="linking">
              <a
                target="_blank"
                href="https://wa.me/79992268148"
                title="whatsapp"
              >
                <img src="assets/images/whatsapp.svg" alt="whatsapp" />
              </a>
              <a
                href="https://t.me/cucer_maxim"
                target="_blank"
                title="telegram"
              >
                <img src="assets/images/telegram.svg" alt="telegram" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={open ? "mobile-nav  active" : "mobile-nav"}>
        <div className="cross-mobile-nav" onClick={() => setOpen(false)}>
          <img src="/assets/images/cross.svg" alt="" />
        </div>
        <div className="mobile-menu-items">
          {menuItems.map((e, index) => (
            <li
              key={index}
              onClick={() => {
                setOpen(false);
              }}
            >
              <Link to={e?.link} title={e.title}>
                {e.title}
              </Link>
            </li>
          ))}
          <li
            onClick={() => {
              setOpen(false);
              scrollToBottom();
            }}
          >
            <p title="контакты">контакты</p>
          </li>
        </div>
        <div className=" nav-button">
          <div className="btn-bdr" onClick={() => setOpen(false)}>
            Закрыть
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
