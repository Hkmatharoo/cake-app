import React, { useContext, useState } from 'react'
import { cartContext } from '../context/CartContext'

const OrderSummaryCart = (props) => {
    const { cartItems, addToCart, removeFromCart, updateCartItemCount, handlePrice } = useContext(cartContext)

    const { id, src, divData, price } = props.data
    const [halfP, setHalfP] = useState();

    const pp = (x) => {
        setHalfP(x);
        const res = handlePrice(id, x)
        console.log(res);
    }

    return (
        <div >
            <div className='cartItems' style={{ marginTop: '100px' }}>
                <img src={src} alt="" width='100px' height='100px' />
                <p><b>{divData}</b></p>
                <button onClick={() => pp(true)}>1/2Kg</button>
                ____
                <button onClick={() => pp(false)}>1Kg</button>
                {halfP ? <><p><b>Half Kg : </b></p>Rs.{price.halfKg} </> : <><p><b>One Kg : </b></p>Rs.{price.oneKg} </>}

            </div>
            <div className='countHandler'>
                <button onClick={() => removeFromCart(id)}>-</button>
                <input type="text" style={{ display: 'inline' }} value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)} />
                <button onClick={() => addToCart(id)}>+</button>
            </div>
        </div>
    )
}

export default OrderSummaryCart