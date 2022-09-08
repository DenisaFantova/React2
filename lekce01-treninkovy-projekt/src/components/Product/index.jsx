import React from 'react'

const Product = ({id, name, image}) => {
  return (
    <li >
        <img src={image} alt="{name}" />
        <span>{name}</span>
    </li>
  )
}

export default Product