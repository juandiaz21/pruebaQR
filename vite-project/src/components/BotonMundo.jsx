// BotonMundo.jsx
import React, { useState } from 'react';
import './BotonMundo.css';

const BotonMundo = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Función para manejar el clic en el botón
  const toggleMenu = () => {
    setIsOpen(!isOpen); // Alterna el estado de visibilidad
  };

  return (
    <div className="boton-mundo-container">
      {/* Botón que despliega la lista */}
      <button className="boton-mundo" onClick={toggleMenu}>
        🌍
      </button>

      {/* Lista de idiomas, solo visible cuando isOpen es true */}
      {isOpen && (
        <ul className="idioma-list">
          <li>Español</li>
          <li>Català</li>
          <li>English</li>
        </ul>
      )}
    </div>
  );
};

export default BotonMundo;
