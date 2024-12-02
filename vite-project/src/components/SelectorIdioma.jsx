import React from 'react';
import { useTranslation } from 'react-i18next';

const SelectorIdioma = () => {
    const { i18n } = useTranslation();

    const handleLanguageChange = (event) => {
        i18n.changeLanguage(event.target.value);
    };

    return (
        <select onChange={handleLanguageChange}>
            <option value="en">English</option>
            <option value="es">Español</option>
            {/* Agrega más opciones de idioma según sea necesario */}
        </select>
    );
};

export default SelectorIdioma;