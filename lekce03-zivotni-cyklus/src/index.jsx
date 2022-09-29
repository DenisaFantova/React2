import React, {useState} from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import Rodic from './components/Rodic'
import Metronome from './components/Metronome';
const App = () => {
const [show, setShow] = useState(false)

  return (
    <>
      <button onClick={() => {setShow(!show)}}>
       {show ?  'Skrýt' : 'Zobrazit' }
      </button>
      {show && 
        <Metronome />
      }
    </>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
