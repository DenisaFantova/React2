import React, {useState, useRef, useEffect} from 'react'

const Payment = () => {
    const [cardIinputVisible, setCardIinputVisible] = useState(false);
    const cardInputRef = useRef();

    useEffect (() => {
        if (cardIinputVisible) {
            cardInputRef.current.focus();
        }
        }, [cardIinputVisible]
    );

    const handlePay = () => {
        setCardIinputVisible(true);
    }

    return (
      <div className="payment">
        <button onClick={handlePay}>Zaplatit</button>
        {cardIinputVisible ? <input ref={cardInputRef} type="text" /> : null}
      </div>
    );
  };

export default Payment