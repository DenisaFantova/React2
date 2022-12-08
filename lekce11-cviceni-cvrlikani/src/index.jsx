import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

import Main from './components/Main';
import Post from './components/Post';

const App = () => {
  return (
    <div className="container">
      <Main title="Cvrlikání">
        <Post />
      </Main>
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
