import React, { useContext } from 'react'
import { cakesGallery } from '../GalleryContent/GalleryData'
import { cartContext } from '../context/CartContext'
import OrderSummaryCart from './OrderSummaryCart'
// import Cart


const OrderSummaryComponent = () => {
    
    const {cartItems, getTotalCartAmount} = useContext(cartContext)
    return (
        <>
            <div className='cart'>
                <h1>Your Order Summary</h1>
            </div>
            <div className='cartItems'>
                {cakesGallery.map((product)=>{
                    if(cartItems[product.id] !==0){
                        return < OrderSummaryCart data={product} />
                    }
                })}
                <div>
                    <p><b>Sub Total = {getTotalCartAmount()}</b></p>
                    {console.log(getTotalCartAmount())}
                </div>
            </div>
        </>
    )
}

export default OrderSummaryComponent



