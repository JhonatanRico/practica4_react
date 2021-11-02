import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Header';
import Lista from './Components/Lista';
import Libros from './Components/Libros';
import LibreriaProvider from './Components/LibreriaContext';


function App() {
  return (
    <div className="App">
    <LibreriaProvider>
          <Header/>
          <div className="Contenedor">
              <Libros/>
              <Lista/> 
          </div>            
        </LibreriaProvider>
    </div>
    
  );
}

export default App;
