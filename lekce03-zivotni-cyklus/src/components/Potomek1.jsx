import React, {useEffect, useState} from 'react'

const Rodic = () => {
  const [count, setCount] = useState(0)

  useEffect(
    () => {
        console.log('mount - Potomek 1')
    },
    []
  )

  useEffect(
    () => {
        console.log('update - Potomek 1')
    }
  )

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <>
        <h2>Potomek 1</h2>
        <p>Počet: {count}</p>
        <button onClick={handleClick}>+</button>
    </>
  )
}

export default Rodic