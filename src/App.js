//Modulos
import React from 'react';
import { ReactDOM } from 'react-dom';
import './App.css';
//Componentes para el App
import Primero from './components/wallet-data/Primero'
import Segundo from './components/wallet-data/Segundo'
import Tercero from './components/wallet-data/Tercero'
import Cuarto from './components/wallet-data/Cuarto'
import Quinto from './components/wallet-data/Quinto'

//Router


function App() {
  return (
    <>
      <div className='Primero'><Primero/></div>

      <div className='Segundo'><Segundo/></div>

      <div className='Tercero'><Tercero/></div>

      <div className='Cuarto'><Cuarto/></div>

      <div className='Quinto'><Quinto/></div>
    </>


  );
}

export default App;
