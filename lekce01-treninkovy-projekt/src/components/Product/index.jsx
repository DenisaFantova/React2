import React from 'react'
import { Link } from 'react-router-dom';


const Product = ({id, name, image, product}) => {
  
  console.log(product)

  return (
    <li>
      <Link to={`/product/${id}`}>
          <img src={image} alt={name} />
          <span>{name}</span>
      </Link>
    </li>
  )
}

export default Product