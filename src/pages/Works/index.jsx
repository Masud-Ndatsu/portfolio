import React from "react";
import "./style.css";
import Navbar from "../../components/Navbar";
import Title from "../../components/Title";
import Footer from "../../components/Footer";

import pimg from "../../img/projects/url_shortener.jpg";

const Works = () => {
  return (
    <div className="work-page">
      <header>
        <Navbar />
      </header>
      <section className="portfolio container">
        <Title title={"My Work"} />
        <div className="projects">
          <div className="project">
            <img src={pimg} alt="" />
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
              doloremque qui et quaerat doloribus quibusdam ratione quam nemo
              iure vero.
            </p>
            <div className="overlay">
              <span>
                <a
                  href="http://localhost:3000"
                  className="external-link"
                  target="_blanck"
                >
                  Live Demo
                </a>
                <a
                  href="http://localhost:3000"
                  className="external-link"
                  target="_blanck"
                >
                  Github
                </a>
              </span>
            </div>
          </div>
          <div className="project">
            <img src={pimg} alt="" />
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
              doloremque qui et quaerat doloribus quibusdam ratione quam nemo
              iure vero.
            </p>
            <div className="overlay">
              <span>
                <a
                  href="http://localhost:3000"
                  className="external-link"
                  target="_blanck"
                >
                  Live Demo
                </a>
                <a
                  href="http://localhost:3000"
                  className="external-link"
                  target="_blanck"
                >
                  Github
                </a>
              </span>
            </div>
          </div>
          <div className="project">
            <img src={pimg} alt="" />
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
              doloremque qui et quaerat doloribus quibusdam ratione quam nemo
              iure vero.
            </p>
            <div className="overlay">
              <span>
                <a
                  href="http://localhost:3000"
                  className="external-link"
                  target="_blanck"
                >
                  Live Demo
                </a>
                <a
                  href="http://localhost:3000"
                  className="external-link"
                  target="_blanck"
                >
                  Github
                </a>
              </span>
            </div>
          </div>
          <div className="project">
            <img src={pimg} alt="" />
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
              doloremque qui et quaerat doloribus quibusdam ratione quam nemo
              iure vero.
            </p>
            <div className="overlay">
              <span>
                <a
                  href="http://localhost:3000"
                  className="external-link"
                  target="_blanck"
                >
                  Live Demo
                </a>
                <a
                  href="http://localhost:3000"
                  className="external-link"
                  target="_blanck"
                >
                  Github
                </a>
              </span>
            </div>
          </div>
          <div className="project">
            <img src={pimg} alt="" />
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
              doloremque qui et quaerat doloribus quibusdam ratione quam nemo
              iure vero.
            </p>
            <div className="overlay">
              <span>
                <a
                  href="http://localhost:3000"
                  className="external-link"
                  target="_blanck"
                >
                  Live Demo
                </a>
                <a
                  href="http://localhost:3000"
                  className="external-link"
                  target="_blanck"
                >
                  Github
                </a>
              </span>
            </div>
          </div>
          <div className="project">
            <img src={pimg} alt="" />
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
              doloremque qui et quaerat doloribus quibusdam ratione quam nemo
              iure vero.
            </p>
            <div className="overlay">
              <span>
                <a
                  href="http://localhost:3000"
                  className="external-link"
                  target="_blanck"
                >
                  Live Demo
                </a>
                <a
                  href="http://localhost:3000"
                  className="external-link"
                  target="_blanck"
                >
                  Github
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Works;
