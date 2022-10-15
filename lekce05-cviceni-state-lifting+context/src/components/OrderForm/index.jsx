import React, {useState}  from 'react'
import EmailInput from '../EmailInput'

const OrderForm = () => {
  const [email, setEmail] = useState(
    {
        value: '',
        valid: false
    }
  );

  const handleEmailChange = (newEmail) => {
    setEmail({...email, value: newEmail});
    
    if (newEmail.includes('@')) {
        setEmail({...email, value: newEmail, valid: true})
    } else {
      setEmail({...email, value: newEmail, valid: false})
    }
  }
   
  return (
    <>
    <EmailInput email={email.value} isValid={email.valid} onChange={handleEmailChange}/>
    <button type="submit">Submit</button>
    </>
  )
}

export default OrderForm