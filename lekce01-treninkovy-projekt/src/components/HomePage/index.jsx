import React from 'react'

import Header from '../../components/Header'
import ProductsList from '../../components/ProductList'

const HomePage = ({products}) => {
  return (
    <>
      <Header />
        <main className="container">
          <div className="homepage">
            <h1 className='homepage__title'>Aktuální nabídka</h1>
            <p className='homepage__text'>Nejnovější prémiové produkty od předních českých designerů.</p>
            <p className='homepage__text'>Doprava zdarma až k vám domů, na cenu nehleďte.</p>
          </div>
        <ProductsList products={products}/>
      </main>
    </>
    )
}

export default HomePage