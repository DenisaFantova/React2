import React, { useEffect } from 'react'

const Metronome = () => {

  useEffect(
    () => {
      const casovac = setInterval(
        () => {
          console.log('tik')
        },
        2000
      )
      return () => {
        console.log('odpojení komponenty')
        clearInterval(casovac)
      }
    },
    []
  )

  return (
    <>
    <h1>Metronome</h1></>
  )
}

export default Metronome