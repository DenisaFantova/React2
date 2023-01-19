import axios from 'axios';
import React, { useState, useEffect } from 'react';

const VerejneCislo = () => {

  const [cislo, setCislo] = useState();

  const nacistData = async () => {
    try {
      const response = await axios.get("https://random.zkusmo.eu/reliable");
      setCislo(response.data.randomNumber);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section>
      <h1>Veřejné číslo: {cislo}</h1>
      <button onClick={nacistData}>Získej číslo</button>
    </section>
  );
}

export default VerejneCislo;