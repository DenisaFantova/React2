import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

import FinalRegistration from './components/FinalRegistration';

const App = () => {
  return (
    <div className="container">
        <FinalRegistration />
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
