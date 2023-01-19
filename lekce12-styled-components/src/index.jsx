import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

import Message from './components/Message';

const App = () => {
  return (
    <div className="container">
      <Message />
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
