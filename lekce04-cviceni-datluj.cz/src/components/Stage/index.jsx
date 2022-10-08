import React, { useState } from 'react';
import Wordbox from '../Wordbox';
import wordList from '../../word-list';
import './style.css';

const generateWord = (size) => {
  const sizeIndex = size === undefined
    ? Math.floor(Math.random() * wordList.length)
    : size - 3;
  
  if (sizeIndex < 0 || sizeIndex >= wordList.length) {
    return null;
  }
  
  const words = wordList[sizeIndex];
  const wordIndex = Math.floor(Math.random() * words.length);
  return words[wordIndex];
};

const Stage = () => {
  const [words, setWords] = useState(['jahoda', 'jantar', 'jaspis']);
  const [mistakes, setMistakes] = useState(0);

  const handleFinish = () => {
    words.shift();
    setWords([...words, generateWord(6)]);
  }

  const handleMistake = () => {
    setMistakes(mistakes + 1)
  }

  return (
    <div className="stage">
      <div className="stage__mistakes">Chyb: {mistakes}</div>
      <div className="stage__words">
         {words.map((word, index) => (index === 0)
         ? <Wordbox active={true} onMistake ={handleMistake} onFinish={handleFinish} word={word} key={word} />
         : <Wordbox active={false} onMistake ={handleMistake} onFinish={handleFinish} word={word} key={word} />
         ) }
      </div>
    </div>
  );
};

export default Stage;
