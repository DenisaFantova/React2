import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

import Sidebar from './components/Sidebar';
import Calendar from './components/Calendar';

const App = () => {
  return (
    <div className="container">
      <Sidebar
        title="Můj sidebar"
        content="Lorem ipsum dolor sit amet a tak dale"
        left={<div><h2>Levá strana</h2><p>text vlevo</p></div>}
        right={<Calendar />}>
        <h2>Počasí</h2>
        <p>Lorem ipsum dolor sit amet.</p>
        <h2>Kalendář</h2>
        <Calendar />
      </Sidebar>
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
