import React, {useEffect, useRef} from 'react'

let prevRate = 25;

const ExchangeRate = ({currency, rate}) => {
    const prevRate = useRef();

    useEffect(() => {
      prevRate.current = rate;
    }, [rate])    

    return (
    <div>
        Průběžný kurz {currency}:
        {rate}
        {/* {prevRate.current < rate ? ' ↑' : ' ↓'} */}
        {prevRate.current < rate ? "↑" :  (prevRate.current > rate ? "↓" : "=")}

    </div>
  )
}

export default ExchangeRate;