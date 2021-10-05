import React from "react";
import { Link, NavLink } from "react-router-dom";

// Header component
const Header = (props) => {
  const { logo } = props;
  return (
    <header className="container-fluid d-flex shadow-sm pt-3">
      <div className="container d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center ">
          <Link className="text-decoration-none" to="/home">
            <h1 className="fs-2 fw-bold">
              <span className="primary-color">{logo} edu</span>
              <span className="text-dark">cal</span>
            </h1>
          </Link>
        </div>
        <nav>
          <ul className="d-flex align-items-center">
            <NavLink
              className="nav-link"
              activeClassName="primary-color fw-bold"
              to="/home"
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              className="nav-link"
              activeClassName="primary-color fw-bold"
              to="/about"
            >
              <li>About</li>
            </NavLink>
            <NavLink
              className="nav-link"
              activeClassName="primary-color fw-bold"
              to="/services"
            >
              <li>Services</li>
            </NavLink>
            <NavLink
              className="nav-link"
              activeClassName="primary-color fw-bold"
              to="/contact"
            >
              <li>Contact</li>
            </NavLink>
            <input
              type="text"
              placeholder="Search"
              className="nav-input"
            ></input>
            <button className="button-blue">Try for free</button>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
