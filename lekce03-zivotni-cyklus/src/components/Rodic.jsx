import React, {useEffect, useState} from 'react'
import Potomek1 from './Potomek1'

const Rodic = () => {
  const [count, setCount] = useState(0)

  useEffect(
    () => {
        console.log('mount Rodiče')
    },
    []
  )

  useEffect(
    () => {
        console.log('update Rodiče')
    }
  )

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <>
        <h2>Rodič</h2>
        <p>Počet: {count}</p>
        <button onClick={handleClick}>+</button>
        <hr />
        <Potomek1 />
    </>
  )
}

export default Rodic