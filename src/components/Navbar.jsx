import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/logo.png";
const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar">
        <h1 className="">
          <img className="logo" src={logo} alt="" />
        </h1>
        <ul className="nav-links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/work">work</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
