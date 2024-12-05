import React from 'react';
import { useTranslation } from 'react-i18next';
import './TextoInfo.css';

const TextoInfo = () => {

  const { t } = useTranslation();
  
  return (
    <div className="texto-encima-cuadros">
      <p>{t('texto_principal')}</p>
    </div>
  );
};

export default TextoInfo;
