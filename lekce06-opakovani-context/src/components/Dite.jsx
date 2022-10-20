import React, {useState} from 'react'

import {useCinnost} from '../cinnost-context.js';

const Dite = () => {
  const {cinnost, changeCinnost} = useCinnost();

  const handleChange = (event) => {
    changeCinnost(event.target.value);
  }

  return (
    <div className="dite">
        <h4>Dítě</h4>

        <select value={cinnost} onChange={handleChange}>
            <option>brečí</option>
            <option>směje se</option>
            <option>spí</option>
        </select>

    </div>
  )
}

export default Dite