import React, {useState} from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

import Player from './Components/Player';
import Lyrics from './Components/Lyrics';

import lines from './lyrics-lines.js';

const App = () => {
  const [currentLineIndex, setCurrentLineIndex] = useState(-1);

  const handleTimeUpdate = (actualTime) => {
    const actualLine = lines.indexOf(lines.find(({time}) => time > actualTime));
    
    if (actualLine > 0 && actualLine - 1 > currentLineIndex) {
      setCurrentLineIndex(actualLine - 1);
      console.log(currentLineIndex)
      console.log(actualLine)
    } else if (actualLine < 0){
      setCurrentLineIndex(lines.length - 1);
    }
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
