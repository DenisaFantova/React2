import React, {useState} from 'react'

import {useCinnost} from '../cinnost-context.js';

import Dite from './Dite'

const Mama = () => {
  const {cinnost} = useCinnost();

  return (
    <div className='mama'>
        <h3>Máma</h3>
        <p>Dítě právě {cinnost}.</p>

        <Dite />
    </div>
  )
}

export default Mama