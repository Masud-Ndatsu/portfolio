import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import "./style.css";
      
      

const Home = () => {

  
  return (
    <>
      <header id="header">
        <div className="nav-wrapper">
          <Navbar />
        </div>
        <div className="header-content container">
          <div className="banner">
            <h1 className="title">
              I Am Mas'ud the{" "}
              <span
                className="txt-type"
                data-wait="3000"
                data-words='["Fullstack","Engineer"]'
              ></span>
            </h1>
            <p className="lead">
              specialized in Backend, Frontend and Database Engineering
            </p>
            <Link to="/work" className="btn">
              view my Work
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Home;
