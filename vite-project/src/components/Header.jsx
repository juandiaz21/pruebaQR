import React from "react";
import bcnLogo from "../assets/bcn_logo.svg";
import logo from "../assets/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <img src={logo} alt="Oficina por la No Discriminación" />
      </div>
      <div className="header-content">
        <h1 className="header-title">
          Oficina por la <span className="highlight">No Discriminación</span>
        </h1>
      </div>
      <div className="header-right-logo">
        <img src={bcnLogo} alt="Ayuntamiento de Barcelona" />
      </div>
    </header>
  );
};

export default Header;
