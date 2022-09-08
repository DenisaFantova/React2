import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link,  } from 'react-router-dom';
import HomePage from './components/HomePage';
import './style.css';


const App = () => {
  return (
    <>
    <BrowserRouter>  
      <Routes>
        <Route path="/" element={ <HomePage />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
