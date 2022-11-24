import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

import CollapseBox from './components/CollapseBox';

const App = () => {
  return (
    <div className="container">
        <CollapseBox title="Podrobnosti">
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>Consectetuer adipiscing elit. Fusce nibh. In laoreet, magna id viverra tincidunt.</p>
        </CollapseBox>
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
