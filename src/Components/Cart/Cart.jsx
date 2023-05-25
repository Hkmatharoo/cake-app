import React, { useContext } from 'react'
import { galleryDryCake } from '../GalleryContent/GalleryData'
import CartContext, { cartContext } from '../context/CartContext'
import CartItems from './CartItems'

const Cart = () => {
    const {dryCakeCartItems} = useContext(cartContext)
    return (
        <>
            <div className='cart'>
                <h1>Your cart Items</h1>
            </div>
            <div className='cartItems'>
                {galleryDryCake.map((product)=>{
                    if(dryCakeCartItems[product.id] !==0){
                        return <CartItems data={product} />
                    }
                })}
            </div>
        </>
    )
}

export default Cart
