import React, {useState, useEffect} from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

import ExchangeRate from './ExchangeRate';

const startGenerator = (initial, period, callback) => {
  setInterval(() => {
    let rate = 25;
    for (let i = 0; i < 100; i++) {
      rate += (Math.random() / 100);
    }
    
    callback(Math.round(rate * 100) / 100);
  }, period);
};

const App = () => {
  const [eurRate, setEurRate] = useState(25);
  const [gbpRate, setGbpRate] = useState(28);

  useEffect(() => {
    startGenerator(25, 1500, setEurRate);  
    startGenerator(28, 2000, setGbpRate);  
  }, [])
  

  return (
    <div className="container">
      <ExchangeRate rate={eurRate} currency="EUR"/>
      <ExchangeRate rate={gbpRate} currency="GBP"/>
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
