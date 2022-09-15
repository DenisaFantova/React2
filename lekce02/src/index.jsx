import React, {useState} from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const TimeDisplay = () => {
  const [time, setTime] = useState({
    hours: 13,
    minutes: 24,
    seconds: 58,
  });
   
  const addMinute = () => {
    if (minutes === 59) {
      setTime({ ...time, hours: time.hours + 1, minutes: 0 });
    } else {
      setTime({ ...time, minutes: time.minutes + 1 });
    }
  }
};

const App = () => {
  return (
    <div className="container">
      <header>
        <div className="logo" />
        <h1>Webová aplikace</h1>
      </header>
      <main>
        <p>
          Startovací šablona pro webovou aplikaci v Reactu. Vytvořeno pomocí
          <a href="https://www.npmjs.com/package/create-czechitas-app">create-czechitas-app</a>
          .
        </p>
      </main>
      <footer>
        <p>Czechitas, Digitální akademie: Web</p>
      </footer>
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
