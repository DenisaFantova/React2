import React, {useState} from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

import Player from './Components/Player';
import Lyrics from './Components/Lyrics';

import lines from './lyrics-lines.js';

const App = () => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  const handleTimeUpdate = (actualTime) => {
   const actualLine = lines.find(({time}) => time < actualTime);
   const actualIndex = lines.indexOf(lines.find(({time}) => time < actualTime));
   console.log(actualLine)
   console.log(actualIndex);
   console.log(actualTime)
   setCurrentLineIndex(lines.indexOf(lines.find(({time}) => time < actualTime)));
  }

  return (
    <div className="container">
      <Player src="fools-garden-lemon-tree.mp3" handleTimeUpdate={handleTimeUpdate}/>
      <Lyrics lines={lines} currentLineIndex={currentLineIndex}/>
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
