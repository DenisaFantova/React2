import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

import MusicPlayer from './MusicPlayer';

const App = () => {
  return (
    <div className="container">
      <MusicPlayer src="vlad-gluschenko-meaning.mp3"/>
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
