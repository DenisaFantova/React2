import React, {useEffect, useState} from 'react'

import Product from '../Product'

const ProductList = () => {

    const [products, setProducts] = useState(null)

    useEffect(
        () => {
        fetch('https://apps.kodim.cz/react-2/xxxmuck/products')
        .then((response) => response.json())
        .then((data) => {setProducts(data)})
    },
    []
    )

  return (

    <>
    <ul>
        {
        products?.map(product => <Product key={product.id} name={product.name} image={product.image}/>)
        }
    </ul>
    </>
  )
}

export default ProductList