import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <Link to='/' className='header__link'>
      <div className="container">
        <h1 className='header__title'>XXXMuck</h1>
      </div>
      </Link>
    </div>
  )
}

export default Header