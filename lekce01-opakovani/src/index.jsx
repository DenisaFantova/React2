import React, {useEffect, useState} from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const Komponenta = ({name, age}) => {

  const handleClick = () => {
    alert('Ahoj')
  }

  const handleChange = (event) => {
    console.log(event.target.value)
  }

  return (
    <>
      <h1>Ahoj</h1>
      <p>Jméno: {name}</p>
      <p>Věk: {age + 1}</p>
      <button onClick={handleClick}>Pozdrav</button>
      <input type="text" onChange={handleChange}/>
    </> 
  )
0}

const Polozka = ({nazev}) => {
  return <li>{nazev}</li>
}

const NakupniSeznam = ({seznam}) => {
  return (
    <>
    <ul>
      {
        seznam.map(polozka => <Polozka key={polozka} nazev={polozka} />)
      }
    </ul>
    </>
  )
}

const Pocitadlo = () => {

  const [pocet, setPocet] = useState(1)

  useEffect(
    () => {
      console.log('Počítadlo se překreslilo')
    },
    []
  )

  const handleClick = () => {
    setPocet(pocet + 1)
    console.log(pocet)
  }

  return (
    <>
      <p>Počet: {pocet}</p>
      <button onClick={handleClick}>+</button>
    </>
  )
}

const App = () => {

  useEffect(
    () => {
      console.log('App se zobrazila na stránce')
    },
    []
  )

  return (
    <>
    <Pocitadlo />
    <hr />
    <Komponenta name="Denisa" age={32} />
    <NakupniSeznam seznam={['Kokos', 'Meloun', 'Jahůdka', 'Avokádo']}/>
    </>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
