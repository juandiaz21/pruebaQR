// App.jsx
import React from 'react';
import BotonMundo from './components/BotonMundo';
import CuadroFila from './components/CuadroFila';
import Header from './components/Header';
import TextoInfo from './components/TextoInfo'; // Asegúrate de importar TextoInfo correctamente

function App() {
  return (
    <div className="App">
      <Header />
      
      {/* Contenedor para el texto y el botón, alineados horizontalmente */}
      <div className="texto-boton-container">
        <TextoInfo texto="Este es el texto encima de los cuadros" />
        <BotonMundo />
      </div>
      
      {/* CuadroFila para los cuadros */}
      <div className="reminders">
        <CuadroFila color="purple" />
        <CuadroFila color="green" />
        <CuadroFila color="yellow" />
      </div>
    </div>
  );
}

export default App;
