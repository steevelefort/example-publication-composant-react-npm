import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Modal from 'lsoft-modal/dist/components/Modal';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={ () => { setIsOpen(true); }  }>Ouvrir la modale</button>        
      </header>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        Ceci est le contenu de ma modale.
      </Modal>
    </div>
  );
}

export default App;
