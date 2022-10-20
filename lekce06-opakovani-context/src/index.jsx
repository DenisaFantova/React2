import React, {useState} from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

import Mama from './components/Mama';
import Tata from './components/Tata';

import {CinnostContext} from './cinnost-context.js';

const App = () => {
  const [stavDitete, setStavDitete] = useState({
    cinnost: 'spí',
    jeHladove: false,
  });

  const changeCinnost = (novaCinnost) => {
    setStavDitete({
      ...stavDitete,
      cinnost: novaCinnost
    });
  }

   return (
    <CinnostContext.Provider value={{
      ...stavDitete,
      changeCinnost
    }}>
      <div className="container">
          <h1>App</h1>
          <Mama />
          <Tata />
      </div>
    </CinnostContext.Provider>
  );

};

createRoot(
  document.querySelector('#app'),
).render(<App />);
