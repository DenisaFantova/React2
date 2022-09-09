import React from 'react'

import Product from '../Product'

const ProductList = ({products}) => {

  return (

    <>
    <ul>
        {
        products?.map(product => <Product key={product.id} id={product.id} name={product.name} image={product.image} product={product}/>)
        }
    </ul>
    </>
  )
}

export default ProductList