import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';



const ProductPage = () => {
const {id} = useParams()
  const [product, setProduct] = useState(null)
 
  useEffect(
    () => {
        fetch(`https://apps.kodim.cz/react-2/xxxmuck/products/${id}`)
        .then((response) => response.json())
        .then((data) => {setProduct(data)})
    },
    []
  )

  return (
    product &&
    <>
      <img src={product.image} alt={product.name} />
      <p>{product.name}</p>
      <button>Objednat </button>
    </>
  )
}

export default ProductPage