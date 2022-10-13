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
    console.log(newEmail)
    console.log(email)
    
    // if (newEmail.value.includes('@')) {
    //    setEmail({...email, valid: true})
    // }
  }
   
  return (
    <>
    <EmailInput email={email.value} isValid={email.valid} onChange={handleEmailChange}/>
    <button type="submit">Submit</button>
    </>
  )
}

export default OrderForm