import React, {useEffect, useState} from 'react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ProductPage from './components/ProductPage';

import './style.css';


const App = () => {

  const [products, setProducts] = useState(null)

  useEffect(
      () => {
      fetch('https://apps.kodim.cz/react-2/xxxmuck/products')
      .then((response) => response.json())
      .then((data) => {setProducts(data)})
  },
  []
  )


  return (
    <>
    <BrowserRouter>  
      <Routes>
        <Route path="/" element={ <HomePage products={products}/>}/>
        <Route path="/product/:id" element={ <ProductPage />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
