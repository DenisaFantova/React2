import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link,  } from 'react-router-dom';
import './style.css';


const About = () => {
  return (
  <>
    <h2>O nás</h2>
    <p>Ipsum dolor sit amet consectetur adipisicing elit. Ipsa odit perferendis hic repellendus minus quia dignissimos odio delectus saepe in, fugiat distinctio sunt nemo cupiditate unde ab voluptas est porro.</p>
  </>
  )
}

const Contact = () => {
  return (
  <>
    <h2>Kontakt</h2>
    <p>Dolor sit amet consectetur adipisicing elit. Ipsa odit perferendis hic repellendus minus quia dignissimos odio delectus saepe in, fugiat distinctio sunt nemo cupiditate unde ab voluptas est porro.</p>
  </>
  )
}

const Home = () => {
  return (
  <>
    <h2>Úvodní stránka</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa odit perferendis hic repellendus minus quia dignissimos odio delectus saepe in, fugiat distinctio sunt nemo cupiditate unde ab voluptas est porro.</p>
  </>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <>
        <h1>Naše super firma</h1>
        <nav>
          <Link to="/">Úvod</Link> |
          <Link to="/about">O nás</Link> |
          <Link to="/contact">Kontakt</Link>
        </nav>
        <hr />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </>
    </BrowserRouter>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
