// TextoEncimaCuadros.jsx
import React from 'react';
import './TextoInfo.css';

const TextoInfo = ({ texto }) => {
  return (
    <div className="texto-encima-cuadros">
      <p>{texto}</p>
    </div>
  );
};

export default TextoInfo;
