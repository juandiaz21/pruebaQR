import React from 'react';
import { useTranslation } from 'react-i18next';
import './SelectorIdioma.css'; // Asegúrate de importar el archivo CSS

const SelectorIdioma = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className="language-selector-container">
      <label htmlFor="language-select" className="language-selector-label">
      🌍:
      </label>
      <select
        id="language-select"
        onChange={handleLanguageChange}
        className="language-selector"
      >
        <option value="ca">Català</option>
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="ga">Galego</option>
        <option value="fr">Français</option>
        <option value="it">Italiano</option>
        <option value="xi">中国人</option>
        <option value="hi">हिंदी</option>
      </select>
    </div>
  );
};

export default SelectorIdioma;
