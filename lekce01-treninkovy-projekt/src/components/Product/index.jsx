import React from 'react'
import { Link } from 'react-router-dom';


const Product = ({id, name, image}) => {

  return (
    <li className='products__item'>
      <Link to={`/product/${id}`} className='products__link'>
          <img className='products__img' src={image} alt={name} />
          <span className='products__text'>{name}</span>
      </Link>
    </li>
  )
}

export default Product