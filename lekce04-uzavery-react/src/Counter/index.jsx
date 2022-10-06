import React, {useState, useEffect} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
      setCount(count + 1);
    };   

    const handleTimer = (e) => {
      setCount((oldCount) => oldCount + 1);
    };
  
    useEffect(() => {
      const handleKeyUp = (e) => {
        if (e.code === 'Space') {
          setCount((oldCount) => oldCount + 1 );
          console.log('mezernik')
        }
      };

      document.addEventListener('keyup', handleKeyUp);
      return () => document.removeEventListener('keyup', handleKeyUp);
    }, []);   

    useEffect(() => {
      const timerId = window.setInterval(handleTimer, 2500);
      return () => window.clearInterval(timerId);
    }, []);
  
    return (
      <button onClick={handleClick}>Počet: {count}</button>
    );
  };

export default Counter