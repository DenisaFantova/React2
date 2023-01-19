import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const App = () => {
  const [cislo, setCislo] = useState();
  const [loading, setLoading] = useState(false);

  // const nacistData = () => {
  // setLoading(true)
  // fetch("https://random.zkusmo.eu/shaky")
  //   .then((resp) => {
  //     switch (resp.status) {
  //       case 200:
  //         return resp.json();
  //       case 500:
  //         alert("Server vrátil chybu.");
  //         break;
  //     }
  //   })
  //   .then((data) => {
  //     if (data) {
  //       setCislo(data.randomNumber);
  //     }
  //   })
  //   .catch(error => {
  //     console.error("Chyba komunikace se serverem:", error.message)
  //     alert("Chyba komunikace se serverem. Jste připojeni k internetu?")
  //   })
  //   .finally(() => setLoading(false))
  // }

  const nacistData = async () => {
    try {
      const resp = await fetch("https://random.zkusmo.eu/shaky");
      switch (resp.status) {
        case 200:
          const data = await resp.json();
          setCislo(data.randomNumber);
          break;
        case 500:
          alert("Server vrátil chybu.");
          break;
      }
    } catch (error) {
      console.error("Chyba komunikace se serverem:", error.message);
      alert("Chyba komunikace se serverem. Jste připojeni k internetu?");
    } finally {
      setLoading(false)
    }
  };

  const handleClick = () => {
    nacistData();
  };

  return (
    <div className='container'>
      <button onClick={handleClick}>Budiž číslo</button>
      <div>Náhodné číslo: {cislo}</div>
      {loading && "Načítám data"}
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
