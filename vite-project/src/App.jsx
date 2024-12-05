import React from 'react';
import { I18nextProvider } from 'react-i18next';
import CuadroFila from './components/CuadroFila';
import Header from './components/Header';
import SelectorIdioma from './components/SelectorIdioma';
import TextoInfo from './components/TextoInfo';
import i18n from './components/i18n';


function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <div className="App">
      <Header />
        <div className="texto-boton-container">
          <SelectorIdioma />
          <TextoInfo texto="Este es el texto encima de los cuadros" />
        </div>
        
        {/* CuadroFila para los cuadros */}
        <div className="reminders">
          <CuadroFila color="#9b59b6" texto_1="texto1_1" texto_2="texto1_2"/>
          <CuadroFila color="#28a745" texto_1="texto2_1" texto_2="texto2_2"/>
          <CuadroFila color="#f1c40f" texto_1="texto3_1" texto_2="texto3_2"/>
        </div>
      </div>
    </I18nextProvider>
  );
}

export default App;
