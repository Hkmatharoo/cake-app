import React, { useContext, useState } from 'react'
import { cartContext } from '../context/CartContext'
import './Cart.css'

const CartItems = (props) => {
    const{cartItems, addToCart,removeFromCart, updateCartItemCount, handlePrice} = useContext(cartContext)

    const{id, src, divData, price}=props.data
    
    const[finalProduct, setFinalProduct]= useState ({
        id:id,
        fP:price.halfkg,
        qty:'Half Kg'
    })

    const pp=(x)=>{
        const res = handlePrice(id,x)
        console.log(res);
        setFinalProduct((prev)=>({...prev,...res}))
    }
  return (
    <>
    <tr style={{border:'1px solid black'}}>
        <td style={{border:'1px solid black'}}><img src={src} alt="" width='200px' height='200px' /></td>
        <td style={{border:'1px solid black'}}><b>{divData}</b></td>
        <td style={{border:'1px solid black'}}>
            <select name="flavor options" id="">
            <option value="Mango">Mango</option>
            </select>
        </td>
        <td style={{border:'1px solid black'}}>
        <button onClick={()=>pp(true)}>1/2Kg</button> 
        <button onClick={()=>pp(false)}>1Kg</button>
        </td>
        <td style={{border:'1px solid black'}}>
            <button onClick={()=>removeFromCart(id)}>-</button>

            <input type="text" style={{display:'inline'}} value={cartItems[id]} onChange={(e)=>updateCartItemCount(Number(e.target.value), id)} />
            
            <button onClick={()=>addToCart(id)}>+</button>
        </td>
        <td style={{border:'1px solid black'}}><b>{finalProduct.qty}:</b> Rs.{finalProduct.fP}</td>
        <td style={{border:'1px solid black'}}><button type='close' onClick={()=>{cartItems[id]=0}}>x</button></td>
    </tr>
        {/* <div className='CartItems' style={{marginTop:'100px'}}>
        <img src={src} alt="" width='200px' height='200px' />
        <p><b>{divData}</b></p>
        <button onClick={()=>pp(true)}>1/2Kg</button> 
        <button onClick={()=>pp(false)}>1Kg</button>
        <p><b>{finalProduct.qty}:</b> Rs.{finalProduct.fP}</p>

        </div>
        <div className='countHandler'>
            <button onClick={()=>removeFromCart(id)}>-</button>
            <input type="text" style={{display:'inline'}} value={cartItems[id]} onChange={(e)=>updateCartItemCount(Number(e.target.value), id)} />
            <button onClick={()=>addToCart(id)}>+</button>
        </div> */}
    </>
  )
}

export default CartItems