import React from 'react';
import './CuadroFila.css';

// Función para calcular un color más claro, ahora funciona con cualquier tipo de color
const lightenColor = (color, percent) => {
  // Convertir el color a un formato RGB si es un nombre de color o hexadecimal
  const tempDiv = document.createElement('div');
  tempDiv.style.color = color;
  document.body.appendChild(tempDiv);
  
  const computedColor = window.getComputedStyle(tempDiv).color;
  document.body.removeChild(tempDiv);

  // Extraer valores RGB del estilo calculado
  const rgbValues = computedColor.match(/\d+/g); // Esto devuelve los valores de RGB como array [r, g, b]
  let r = parseInt(rgbValues[0]);
  let g = parseInt(rgbValues[1]);
  let b = parseInt(rgbValues[2]);

  // Aclarar el color
  r = Math.round(r + (255 - r) * percent);
  g = Math.round(g + (255 - g) * percent);
  b = Math.round(b + (255 - b) * percent);

  // Devolver el color en formato RGB
  return `rgb(${r}, ${g}, ${b})`;
};

const CuadroFila = ({ color }) => {
  // Calculamos el color más claro para el rectángulo derecho (por ejemplo, 30% más claro)
  const lighterColor = lightenColor(color, 0.3);

  return (
    <div className="cuadro-fila">
      {/* Rectángulo izquierdo */}
      <div className="cuadro cuadro-left" style={{ backgroundColor: color }}>
        <p>Cuadro Izquierdo</p>
      </div>
      
      {/* Rectángulo derecho */}
      <div className="cuadro cuadro-right" style={{ backgroundColor: lighterColor }}>
        <p>Cuadro Derecho</p>
      </div>
    </div>
  );
};

export default CuadroFila;
