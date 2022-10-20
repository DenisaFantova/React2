import React from 'react'

import {useCinnost} from '../cinnost-context.js';

const Tata = () => {
  const {cinnost} = useCinnost();
  return (
    <div className='tata'>
        <h2>Táta</h2>
        <p>Dítě právě {cinnost}.</p>

    </div>
  )
}

export default Tata