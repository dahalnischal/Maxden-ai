import { Dialog } from "primereact/dialog";
import React from "react";
import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ScrollParallax } from "react-just-parallax";
import ContactDialog from "./Dialog/ContactDialog";

const ScrollAnimation = ({ scrollToElement }) => {
  const [visible, setVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const controls = useAnimation();
  const ballControls = useAnimation();
  const ball2Controls = useAnimation();
  const ball3Controls = useAnimation();
  const ball4Controls = useAnimation();
  const mainWrapperController = useAnimation();
  const paginationWrapperController = useAnimation();
  const mobileMmcControls = useAnimation();
  const componentMounted = useRef(false);

  const [project3, setProject3] = useState(false);
  const [project4, setProject4] = useState(false);
  const [project5, setProject5] = useState(false);
  const [project6, setProject6] = useState(false);

  const controls = useAnimation();
  const componentMounted = useRef(false);
  const paginationWrapperController = useAnimation();

  const { ref, inView, entry } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > 0 && inView) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [inView]);

  useEffect(() => {
    // Update animation based on scroll direction
    if (componentMounted.current) {
      if (scrollDirection === "down") {
        controls.start({
          height: "0vh",
          opacity: 0,
          paddingTop: 0,
          paddingBottom: 0,
        });
        ballControls.start({
          width: "50px",
          opacity: 0.1,
          bottom: "-250px",
          duration: 0.1,
        });
        ball2Controls.start({ width: "30px", opacity: 0.1, duration: 0.1 });
        ball3Controls.start({ width: "50px", opacity: 0.1, duration: 0.1 });
        ball4Controls.start({
          width: "60px",
          opacity: 0.1,
          top: "10%",
          duration: 0.1,
        });
        mobileMmcControls.start({
          opacity: 1,
          marginLeft: "30px",
          duration: 0.1,
        });
        paginationWrapperController.start({ opacity: 0, duration: 0.1 });
        // mainWrapperController.start({ height: "95px" });
      } else {
        controls.start({
          height: "74vh",
          opacity: 1,
          paddingTop: "65px",
          duration: 0.1,
        });
        ballControls.start({
          width: "163px",
          opacity: 1,
          bottom: 0,
          duration: 0.1,
        });
        ball2Controls.start({ width: "58px", opacity: 1, duration: 0.1 });
        ball3Controls.start({ width: "73px", opacity: 1, duration: 0.1 });
        ball4Controls.start({
          width: "80px",
          opacity: 1,
          top: "28%",
          duration: 0.1,
        });
        mobileMmcControls.start({ opacity: 1, duration: 0.1 });
        paginationWrapperController.start({ opacity: 1, duration: 0.1 });

        // mainWrapperController.start({ height: "100%" });
      }
    } else {
      // If the component is mounting (refreshing the page), set the initial height without animation
      controls.set({ height: "74vh", paddingTop: "65px" });
      ballControls.set({ width: "163px", bottom: 0 });
      ball2Controls.set({ width: "58px" });
      ball3Controls.set({ width: "73px" });
      ball4Controls.set({ width: "80px", top: "28%" });
      mobileMmcControls.set({ opacity: 1 });
      paginationWrapperController.set({ opacity: 1 });
      // mainWrapperController.set({ height: "100%" });
      //
      componentMounted.current = true;
    }
  }, [
    scrollDirection,
    controls,
    ballControls,
    ball2Controls,
    ball3Controls,
    ball4Controls,
    mobileMmcControls,
    paginationWrapperController,
  ]);

  return (
    <>
      <motion.div
        className="main hero-section-main-desktop mobile"
        animate={mainWrapperController}
        initial="initial"
        transition={{ duration: 1 }}
      >
        <motion.div
          className="main hero-section-main"
          animate={controls}
          initial="initial"
          transition={{ duration: 1 }}
        >
          <img src="assets/images/hand.png" alt="hand" className="hand" />
          <div className="main-wraps">
            <div
              className="down-arrow cursor-pointer"
              onClick={scrollToElement}
            >
              <img src="assets/images/down-arrow.svg" alt="arrow" />
            </div>
            <motion.img
              src="assets/images/ball 1.png"
              alt="ball"
              className="ball1"
              animate={ballControls}
              initial="initial"
              transition={{ duration: 1 }}
            />
            <motion.img
              src="assets/images/ball 2.png"
              alt="ball"
              className="ball2"
              animate={ball3Controls}
              initial="initial"
              transition={{ duration: 1 }}
            />
            <motion.img
              src="assets/images/ball 3.png"
              alt="ball"
              className="ball3"
              animate={ball3Controls}
              initial="initial"
              transition={{ duration: 1 }}
            />
            <motion.img
              src="assets/images/ball 4.png"
              alt="ball"
              className="ball4"
              animate={ball2Controls}
              initial="initial"
              transition={{ duration: 1 }}
            />
            <div className="main-topic">
              <span>замени офисного работника на</span>
              <h1>искусственный интеллект</h1>
            </div>
            <div className="main-content-wraps">
              <div className="pagination-wraps">
                <div className="num">01</div>
                <div className="line" />
                <div className="num last">05</div>
              </div>
              <div className="main-content">
                <p>
                  Разработаем систему с искусственным интеллектом индивидуально
                  для вашего бизнеса. Автоматизируем процессы, увеличим продажи,
                  повысим эффективность.
                </p>
                <div className="btn-p" onClick={() => setVisible(true)}>
                  <span>Обсудить проект</span>
                </div>
              </div>
            </div>
            <Dialog
              visible={visible}
              className="hide-sidebar-dialog"
              showHeader={false}
              position={"top"}
            >
              <ContactDialog setVisible={setVisible} />
            </Dialog>
          </div>
        </motion.div>
        <motion.div
          className="mobile-mmc"
          animate={mobileMmcControls}
          initial="initial"
          ref={ref}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="pagination-wraps pagination-wraps-mobile"
            animate={paginationWrapperController}
            initial="initial"
            transition={{ duration: 1 }}
          >
            <div className="num">01</div>
            <div className="line" />
            <div className="num last">05</div>
          </motion.div>
          <div className="main-content-mobile">
            <p>
              Разработаем систему с искусственным интеллектом индивидуально для
              вашего бизнеса. Автоматизируем процессы, увеличим продажи, повысим
              эффективность.
            </p>
            <div className="btn-p" onClick={() => setVisible(true)}>
              <span>Обсудить проект</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.section
        className="our-clients our-clients-mobile"
        animate={controls}
        initial="initial"
        ref={ref}
        transition={{ duration: 1 }}
      >
        <div className="client-wraps">
          <div className="clients-grid">
            <div className="clents-content-wraps">
              <motion.div
                className="pagination-wraps second"
                animate={paginationWrapperController}
                transition={{ duration: 1 }}
              >
                <div className="num">02</div>
                <div className="line" />
                <div className="num last">05</div>
              </motion.div>
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
          className="hide-sidebar-dialog"
          showHeader={false}
        >
          <ProjectDialog setProject3={setProject3} />
        </Dialog>
        <Dialog
          visible={project4}
          className="hide-sidebar-dialog"
          showHeader={false}
        >
          <Project4 setProject4={setProject4} />
        </Dialog>
        <Dialog
          visible={project5}
          className="hide-sidebar-dialog"
          showHeader={false}
        >
          <Project5 setProject5={setProject5} />
        </Dialog>
        <Dialog
          visible={project6}
          className="hide-sidebar-dialog"
          showHeader={false}
        >
          <Project6 setProject6={setProject6} />
        </Dialog>
      </motion.section>
    </>
  );
};

export default ScrollAnimation;
