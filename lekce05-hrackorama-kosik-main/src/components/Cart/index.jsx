import React, {useState} from "react";
import CartItem from "../CartItem";
import './style.css';

const products = [
  {
    name: 'Hrad z kostek',
    price: 450,
    amount: 2,
  },
  {
    name: 'Autíčko na ovládání',
    price: 1500,
    amount: 1,
  },
  {
    name: 'Domeček pro panenky',
    price: 1350,
    amount: 1,
  },
  {
    name: 'Dětský telefon',
    price: 730,
    amount: 1,
  },
];

const Cart = () => {

  const [cartProducts, setCartProducts] = useState(products);

  const handleAmountChange = (index, newAmount) => {
    const newProducts = [...cartProducts];
    newProducts[index].amount = newAmount;
    setCartProducts(newProducts);
  }

  let productCount = 0;
  cartProducts.forEach((product) => productCount += product.amount);

  // const totalCount = cartProducts.map(t=>t.amount).reduce((item, prev) => prev + item, 0);
  // }

  // const productCount = cartProducts.reduce((total, product) => (productCount += product.amount), 0);

  return (
    <div className="cart">
      <div className="cart__head">
        <h2>Košík</h2>
        <span>Položek: {productCount}</span>
      </div>
      <div className="cart__items">
        {products.map((product, index) => (
          <CartItem
            product={product}
            onAmountChange={(newAmount) => handleAmountChange(index, newAmount)} />
        ))}
      </div>
    </div>
  )
};

export default Cart;
