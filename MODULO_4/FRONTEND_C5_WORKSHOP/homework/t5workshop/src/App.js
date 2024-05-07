import React from 'react';
import './App.css'
import PortafolioUno from './components/portafolio1'
import PortafolioDos from './components/PortafolioDos'
import PortafolioTres from './components/portafolio3';
function App(){
  return(
      <div class="body">
        <PortafolioUno/>
        <PortafolioDos/>
        <PortafolioTres/>
        <div class='viewmore'>
        <a class="ab" href="viewmore">View more</a>
        </div>
      </div>
      )
}
export default App;
