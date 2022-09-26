import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Slider from "../../components/Slider";
import Title from "../../components/Title";
import "./style.css";
const About = () => {
  return (
    <div className="about-page">
      <header>
        <Navbar />
      </header>
      <section className="about-me container">
        <Title title={"About Me"} />
        <div>
          {/* <h3>This is how</h3> */}
          <p className="details">
            I am a result-oriented and innovative software engineer who is
            interested in developing highly-scalable and performant web
            applications and softwares. I also enjoy communicating technical
            concepts to non-technical stakeholders. I enjoy working in a team as
            well as being independent. I look up to each day as an opportunity
            to learn something new and improve on it.
          </p>
        </div>
      </section>
      <section className="skills ">
        <Title title={"Technical Skills"} />
        <div className="container">
          <h4>HTML & CSS</h4>
          <div className="progress">
            <div style={{ width: "74%" }}></div>
          </div>
          <h4>JavaScript</h4>
          <div className="progress">
            <div style={{ width: "68%" }}></div>
          </div>
          <h4>React.js</h4>
          <div className="progress">
            <div style={{ width: "60%" }}></div>
          </div>
          <h4>Node.js / Express.js</h4>
          <div className="progress">
            <div style={{ width: "65%" }}></div>
          </div>
          <h4>MongoDB</h4>
          <div className="progress">
            <div style={{ width: "50%" }}></div>
          </div>
          <h4>MySQL / PostgreSQL</h4>
          <div className="progress">
            <div style={{ width: "45%" }}></div>
          </div>
        </div>
      </section>
      <section className="testimonials container">
        <Title title={"Testimonials"} />
        <Slider />
      </section>
      <Footer />
    </div>
  );
};

export default About;
