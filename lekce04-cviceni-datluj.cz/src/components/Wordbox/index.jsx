import React, { useState, useEffect } from 'react';
import './style.css';

const Wordbox = ({ word, active, onMistake, onFinish}) => {
  const [lettersLeft, setLettersLeft] = useState(word);
  const [mistake, setMistake] = useState(false);

   const handleKeyUp = (e) => {
    if (e.code ===  'Key' + lettersLeft[0].toUpperCase()) {
      setLettersLeft((newWord) => newWord.substring(1))
      setMistake(false)
    } else {
      setMistake(true)
      onMistake()
    }
    
    if (e.code ===  'Key' + word.slice(-1).toUpperCase() && lettersLeft.length === 1) {
      onFinish()
    }
  };

  useEffect(() => {
    if (active) {
    document.addEventListener('keyup', handleKeyUp);

    return () => document.removeEventListener('keyup', handleKeyUp);
    }
  }, [lettersLeft, active, onMistake]);

  
  return (
    <div className={ mistake ? "wordbox wordbox--mistake" : "wordbox"} >{lettersLeft}</div>
  );
};

export default Wordbox;
