import React from "react";

const Portfolio = () => {
  return (
    <div className="container py-10 text-center">
      <h2 className="md:text-5xl text-3xl font-bold md:py-14 py-10 px-5 text-center">
        My Portfolio
      </h2>

      <p className="pt-6 pb-3">
        {" "}
        <strong>My name:</strong> Md. Abul Kazim (Alamin)
      </p>

      <p className="py-3">
        {" "}
        <strong>Email:</strong> makalamin012@gmail.com
      </p>

      <p className="py-3">
        {" "}
        <strong>Education:</strong> BSc. in Civil Eng. , SUST.
      </p>

      <section className="skills pt-20" id="skills">
        <h2 className="md:text-4xl text-3xl font-bold py-10 px-5 text-center">My Skills</h2>
        <div className="skills-container">
          <div className="skills-box">
            <img src="./images/html-5.png" alt="" className="skills-icons" />
            <h3>HTML 5</h3>
          </div>

          <div className="skills-box">
            <img src="./images/css-3.png" alt="" className="skills-icons" />
            <h3>CSS3</h3>
          </div>

          <div className="skills-box">
            <img
              src="./images/javascript.png"
              alt=""
              className="skills-icons"
            />
            <h3>JAVASCRIPT</h3>
          </div>

          <div className="skills-box">
            <img src="./images/nodejs.png" alt="" className="skills-icons" />
            <h3>NODE.JS</h3>
          </div>

          <div className="skills-box">
            <img src="./images/react.png" alt="" className="skills-icons" />
            <h3>REACT</h3>
          </div>

          <div className="skills-box">
            <img src="./images/mongodb.png" alt="" className="skills-icons" />
            <h3>MongoDB</h3>
          </div>

          <div className="skills-box">
            <img src="./images/php.png" alt="" className="skills-icons" />
            <h3>PHP</h3>
          </div>

          <div className="skills-box">
            <img src="./images/mysql.png" alt="" className="skills-icons" />
            <h3>MYSQL</h3>
          </div>

          <div className="skills-box">
            <img src="./images/wordpress.png" alt="" className="skills-icons" />
            <h3>WordPress</h3>
          </div>
        </div>
      </section>

      <section className="my-works pt-20">
        <h2 className="md:text-4xl text-3xl font-bold py-10 px-5 text-center">My Recent Works</h2>
        <div className="flex flex-wrap gap-10 md:px-1 px-4">
          <div className="card w-96 bg-base-100 shadow-lg">
            <div className="card-body items-center text-center">
              <a
                href="https://better-life-wellness.web.app/"
                target="_blank"
                rel="noreferrer"
                className="text-green-500"
              >
                <img src="./images/portfolio/1.png" alt="" />{" "}
              </a>
              <h2 className="card-title mt-5">Better Life Wellness</h2>
              <p>
                <a
                  href="https://better-life-wellness.web.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-green-500 font-bold"
                >
                  View Live Site
                </a>
              </p>
            </div>
          </div>

          <div className="card w-96 bg-base-100 shadow-lg">
            <div className="card-body items-center text-center">
              <a
                href="https://star-cargo-warehouse.web.app/"
                target="_blank"
                rel="noreferrer"
                className="text-green-500"
              >
                <img src="./images/portfolio/2.png" alt="" />{" "}
              </a>
              <h2 className="card-title mt-5">Star Cargo Warehouse</h2>
              <p>
                <a
                  href="https://star-cargo-warehouse.web.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-green-500 font-bold"
                >
                  View Live Site
                </a>
              </p>
            </div>
          </div>

          <div className="card w-96 bg-base-100 shadow-lg">
            <div className="card-body items-center text-center">
              <a
                href="https://www.makalamin.com/"
                target="_blank"
                rel="noreferrer"
                className="text-green-500"
              >
                <img src="./images/portfolio/3.png" alt="" />{" "}
              </a>
              <h2 className="card-title mt-5">MakAlamin.com</h2>
              <p>
                <a
                  href="https://www.makalamin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-green-500 font-bold"
                >
                  View Live Site
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
