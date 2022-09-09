import React from 'react'
import { useParams } from 'react-router-dom';



const ProductPage = () => {

  const {id} = useParams()
console.log(id)

  //const product = products.find(product => product.id == id)

  return (
    <>
    <img src="" alt="" />
    <p>{name}</p>
    <button>Objednat </button>
    </>
  )
}

export default ProductPage