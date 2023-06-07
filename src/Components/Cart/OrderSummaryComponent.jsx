import React, { useContext, useEffect, useState } from 'react'
import { cakesGallery } from '../GalleryContent/GalleryData'
import { cartContext } from '../context/CartContext'
import OrderSummaryCart from './OrderSummaryCart'
import './Cart.css'

const OrderSummaryComponent = () => {

    const { cartItems, getTotalCartAmount } = useContext(cartContext)
    const[getCakes, setGetCakes] = useState(false)
    const[cartCakes, setCartCakes] = useState([]);
    
    useEffect(()=>{
        let cakesArr = JSON.parse(localStorage.getItem('Cart Arr'))
        setCartCakes(()=>(cakesArr))
        console.log(cakesArr);
        setGetCakes(true)
    },[cartItems])

    return (
        <>
            <section className='cart'>
                <div>
                    <h1>Your Order Summary</h1>
                </div>
                <div className='cartItems'>
                    {cakesGallery.map((product) => {

                        if (cartItems[product.id] !== 0) {
                            return <>< OrderSummaryCart data={product} /><hr/></>
                        }
                    })}
                    {/* {cartCakes.map((product) => {
                        return < OrderSummaryCart data={product} />
                    })} */}

                    <div>
                        <p><b>Sub Total = {getTotalCartAmount()}</b></p>
                        {console.log(getTotalCartAmount())}
                    </div>
                </div>
            </section>
        </>
    )
}
export default OrderSummaryComponent



