import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import OrderForm from './components/OrderForm';

const App = () => {
  return (
    <div className="container">
      <OrderForm />
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
