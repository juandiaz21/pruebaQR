import React from 'react';
import { useTranslation } from 'react-i18next';
import './CuadroFila.css';

const lightenColor = (color, percent) => {
  if (!/^#([0-9A-F]{3}){1,2}$/i.test(color)) {
    throw new Error("Por favor, proporciona un color hexadecimal válido.");
  }

  let r, g, b;
  if (color.length === 4) {
    r = parseInt(color[1] + color[1], 16);
    g = parseInt(color[2] + color[2], 16);
    b = parseInt(color[3] + color[3], 16);
  } else {
    r = parseInt(color.substring(1, 3), 16);
    g = parseInt(color.substring(3, 5), 16);
    b = parseInt(color.substring(5, 7), 16);
  }
  r = Math.round(r + (255 - r) * percent);
  g = Math.round(g + (255 - g) * percent);
  b = Math.round(b + (255 - b) * percent);

  r = Math.min(255, Math.max(0, r));
  g = Math.min(255, Math.max(0, g));
  b = Math.min(255, Math.max(0, b));

  const toHex = (value) => value.toString(16).padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};

const CuadroFila = ({ color, texto_1, texto_2 }) => {
  const { t } = useTranslation();
  
  const validColor = color && /^#([0-9A-F]{3}){1,2}$/i.test(color) ? color : "#cccccc"; 
  
  const lighterColor = lightenColor(validColor, 0.3);

  return (
    <div className="cuadro-fila">
      <div className="cuadro cuadro-left" style={{ backgroundColor: validColor }}>
        <p>{t(texto_1)}</p>
      </div>

      <div className="cuadro cuadro-right" style={{ backgroundColor: lighterColor }}>
        <p>{t(texto_2)}</p>
      </div>
    </div>
  );
};


export default CuadroFila;
