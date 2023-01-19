import React from 'react';
import { createRoot } from 'react-dom/client';

import './style.css';

import Title from './components/Title';
import Message from './components/Message';

const App = () => {
  return (
    <div className="container">
      <Title />
      <h1 className='title'>Druhý titulek</h1>
      <Message typ="varovani" />
      <Message typ="error" />
      <Message typ="xxx" />
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
