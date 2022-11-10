import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

import RegistrationForm from './components/RegistrationForm';

const App = () => {
  return (
    <div className="container">
      <RegistrationForm />
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
