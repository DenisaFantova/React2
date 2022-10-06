const startGame = () => {
    let health = 5;
  
    const handleClick = () => {
        health -= 1;
        console.log('health:', health)
        if (health === 0) {
            alert('You are now dead!');
        }
    };
  
    document.addEventListener('click', handleClick);
  };
  
  startGame();