import React from "react";
import bcnLogo from "../assets/bcn_logo.svg"; // Logo de Barcelona
import logo from "../assets/logo.png"; // Imagen de los colores
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      {/* Imagen de los colores centrada arriba */}
      <div className="header-logo">
        <img src={logo} alt="Oficina por la No Discriminación" />
      </div>

      {/* Contenedor del texto */}
      <div className="header-content">
        <h1 className="header-title">
          Oficina por la <span className="highlight">No Discriminación</span>
        </h1>
      </div>

      {/* Logo de Barcelona a la derecha */}
      <div className="header-right-logo">
        <img src={bcnLogo} alt="Ayuntamiento de Barcelona" />
      </div>
    </header>
  );
};

export default Header;
