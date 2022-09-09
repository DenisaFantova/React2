import React from 'react'

import Header from '../../components/Header'
import ProductsList from '../../components/ProductList'

const HomePage = ({products}) => {
  return (
    <>
      <Header />
        <h1>Aktuální nabídka</h1>
        <p>Nejnovější prémiové produkty od předních českých designerů.</p>
        <p>Doprava zdarma až k vám domů, na cenu nehleďte.</p>
      <ProductsList products={products}/>
    </>
    )
}

export default HomePage