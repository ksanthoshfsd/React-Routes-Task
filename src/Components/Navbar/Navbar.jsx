import React from "react";
import "../Navbar/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid xyz">
          <Link to="/" className="navbar-brand abc">
          NextGen Tech 
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link to="/">All</Link>
              </li>
              <li className="nav-item">
                <Link to="/fullstackdevelopment">Full Stack Development</Link>
              </li>

              <li className="nav-item">
                <Link to="/DataScience">Data Science</Link>
              </li>
              <li className="nav-item">
                <Link to="/CyberSecurity">Cyber Security</Link>
              </li>              
              <li className="nav-item">
                <Link to="/Career">Career</Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;