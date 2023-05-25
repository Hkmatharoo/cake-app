import React, { useContext } from 'react'
import { cartContext } from '../context/CartContext'

const CartItems = (props) => {
    const{dryCakeCartItems, addDryCakeToCart,removeDryCakeToCart, updateCartItemCount} = useContext(cartContext)

    const{id, src, divData, price}=props.data
  return (
    <div>
        <div className='cartItems' style={{marginTop:'100px'}}>
        <img src={src} alt="" width='100px' height='100px' />
        <p><b>{divData}</b></p>
        <button>1/2Kg</button> <button>1Kg</button>
        <p>Rs. {price}</p>

        </div>
        <div className='countHandler'>
            <button onClick={()=>removeDryCakeToCart(id)}>-</button>
            <input type="text" style={{display:'inline'}} value={dryCakeCartItems[id]} onChange={(e)=>updateCartItemCount(Number(e.target.value), id)} />
            <button onClick={()=>addDryCakeToCart(id)}>+</button>
        </div>
    </div>
  )
}

export default CartItems