import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

import Header from '../../components/Header'

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
      <Header />
      <main className='container'>
        <div className='product-detail'>
          <div className="product-detail__item">
            <img className='product-detail__img' src={product.image} alt={product.name} />
            <div className="product-detail__info">
              <h2 className='product-detail__name'>{product.name}</h2>
              <button className='product-detail__button'>Objednat </button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default ProductPage