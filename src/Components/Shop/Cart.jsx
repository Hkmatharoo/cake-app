import React, { useContext } from 'react';
import { cartContextMain } from './CartContext/CartContext';

const Cart = () => {
    const {cake, cakePrice, handleInc, cartItems} = useContext(cartContextMain)
//   const handleClick = (cake) => {
//     removeFromCart(cake);
//   };
console.log(cake);
  return (
    <div className="cart">
      <h2>Cart</h2>

        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}
              <button onClick={() => handleInc(item)}>Remove</button>
              <h2>Cake : {cake}</h2>
              <h2>Cake Price : {cakePrice} </h2>
            </li>
          ))}
        </ul>

    </div>
  );
};

export default Cart;