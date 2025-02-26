import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Navbar.css";
import logo from "../assets/images/ai-ethic.png"; // Adjust the path if needed

const Navbar = () => {
  return (
    <header id="header">
      <div className="container">
        <div className="logo">
          <Link to="/home" className="logo-link">
            <img src={logo} alt="Logo" className="logo-image" />
            Bail Reckoner
          </Link>
        </div>
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/dashboard" className="nav-link">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/case-list" className="nav-link">
                Cases
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/bail" className="nav-link">
                Bail Eligibility
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/profile" className="nav-link">
                Profile
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
