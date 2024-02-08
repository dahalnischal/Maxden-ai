import React from "react";
import { useState, useEffect } from "react";
import { Dialog } from "primereact/dialog";
import ProjectDialog from "../Dialog/Projects/Project3";
import Project4 from "../Dialog/Projects/Project4";
import Project5 from "../Dialog/Projects/Project5";
import Project6 from "../Dialog/Projects/Project6";
import { Link } from "react-router-dom";
const OurClients = () => {
  const [project3, setProject3] = useState(false);
  const [project4, setProject4] = useState(false);
  const [project5, setProject5] = useState(false);
  const [project6, setProject6] = useState(false);
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
    <>
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
                <div className="clients-logos-wraps clients-logos-wraps-mobile">
                  <div className="logos">
                    <img
                      src="assets/images/yota.png"
                      alt=""
                      className="client-logo img-responsive"
                    />
                  </div>

                  <div className="logos" onClick={() => setProject4(true)}>
                    <img
                      src="assets/images/Avito_logo2.png"
                      alt=""
                      className="client-logo img-responsive"
                    />
                  </div>

                  <div className="logos" onClick={() => setProject5(true)}>
                    <img
                      src="assets/images/metrica.png"
                      alt=""
                      className="client-logo img-responsive"
                    />
                  </div>
                  <div className="logos" onClick={() => setProject3(true)}>
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

                  <div className="logos" onClick={() => setProject6(true)}>
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
                <Link to="/portfolio" title=" Все проекты" className="btn-p">
                  <span> Все проекты</span>
                </Link>
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

              <div className="logos" onClick={() => setProject4(true)}>
                <img
                  src="assets/images/Avito_logo2.png"
                  alt=""
                  className="client-logo img-responsive"
                />
              </div>

              <div className="logos" onClick={() => setProject5(true)}>
                <img
                  src="assets/images/metrica.png"
                  alt=""
                  className="client-logo img-responsive"
                />
              </div>
              <div className="logos" onClick={() => setProject3(true)}>
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

              <div className="logos" onClick={() => setProject6(true)}>
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

        <Dialog
          visible={project3}
          className="hide-sidebar-dialog desktop"
          position={windowSize[0] > 960 ? "center" : "bottom"}
          showHeader={false}
          blockScroll={true}
          dismissableMask={true}
          onHide={() => setProject3(false)}
        >
          <ProjectDialog setProject3={setProject3} />
        </Dialog>
        <Dialog
          visible={project4}
          className="hide-sidebar-dialog desktop"
          position={windowSize[0] > 960 ? "center" : "bottom"}
          showHeader={false}
          blockScroll={true}
          dismissableMask={true}
          onHide={() => setProject4(false)}
        >
          <Project4 setProject4={setProject4} />
        </Dialog>
        <Dialog
          visible={project5}
          className="hide-sidebar-dialog desktop"
          position={windowSize[0] > 960 ? "center" : "bottom"}
          showHeader={false}
          blockScroll={true}
          dismissableMask={true}
          onHide={() => setProject5(false)}
        >
          <Project5 setProject5={setProject5} />
        </Dialog>
        <Dialog
          visible={project6}
          position={windowSize[0] > 960 ? "center" : "bottom"}
          className="hide-sidebar-dialog desktop"
          showHeader={false}
          blockScroll={true}
          dismissableMask={true}
          onHide={() => setProject6(false)}
        >
          <Project6 setProject6={setProject6} />
        </Dialog>
      </section>

      <section className="our-clients our-clients-mobile">
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
                <div className="clients-logos-wraps clients-logos-wraps-mobile">
                  <div className="logos">
                    <img
                      src="assets/images/yota.png"
                      alt=""
                      className="client-logo img-responsive"
                    />
                  </div>

                  <div className="logos" onClick={() => setProject4(true)}>
                    <img
                      src="assets/images/Avito_logo2.png"
                      alt=""
                      className="client-logo img-responsive"
                    />
                  </div>

                  <div className="logos" onClick={() => setProject5(true)}>
                    <img
                      src="assets/images/metrica.png"
                      alt=""
                      className="client-logo img-responsive"
                    />
                  </div>
                  <div className="logos" onClick={() => setProject3(true)}>
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

                  <div className="logos" onClick={() => setProject6(true)}>
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
                <Link to="/portfolio" title=" Все проекты" className="btn-p">
                  <span> Все проекты</span>
                </Link>
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

              <div className="logos" onClick={() => setProject4(true)}>
                <img
                  src="assets/images/Avito_logo2.png"
                  alt=""
                  className="client-logo img-responsive"
                />
              </div>

              <div className="logos" onClick={() => setProject5(true)}>
                <img
                  src="assets/images/metrica.png"
                  alt=""
                  className="client-logo img-responsive"
                />
              </div>
              <div className="logos" onClick={() => setProject3(true)}>
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

              <div className="logos" onClick={() => setProject6(true)}>
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
    </>
  );
};

export default OurClients;
