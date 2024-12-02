// TextoEncimaCuadros.jsx
import React from 'react';
import './TextoInfo.css';

const TextoInfo = ({ texto }) => {

  const { t } = useTranslation();
  
  return (
    <div className="texto-encima-cuadros">
      <p>{t('Hola')}</p>
    </div>
  );
};

export default TextoInfo;
