import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

import Payment from './Payment';

const App = () => {
  return (
    <div className="container">
      <Payment />
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
