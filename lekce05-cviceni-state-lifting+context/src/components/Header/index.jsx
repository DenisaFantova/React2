import React, { useContext } from 'react'
import { useLogin } from '../../login-context';
import './style.css';

const Header = () => {
  const {login, logout} = useLogin();
 
  const handleClick = () => {
    logout();
  }
  
  return (
    <header className='header'>
      <span>{login && login.username}</span>
      {
        login ? <button onClick={handleClick}>Odhlásit</button> : <span>Nejste přihlášen</span>
      }
      </header>
  )
}

export default Header;