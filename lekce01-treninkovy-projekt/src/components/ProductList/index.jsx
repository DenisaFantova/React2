import React from 'react'

import Product from '../Product'

const ProductList = ({products}) => {

  return (

    <div className='products'>
    <ul className='products__list'>
        {
        products?.map(product => <Product key={product.id} id={product.id} name={product.name} image={product.image}/>)
        }
    </ul>
    </div>
  )
}

export default ProductList