import React, { createContext, useState } from 'react'
import { cakesGallery } from '../GalleryContent/GalleryData';
export const cartContext = createContext();

const CartContext = (props) => {
    const getDefaultCartItem = ()=>{
        let cart={}
        for(let i=1; i<=cakesGallery.length;i++){
            cart[i]=0
        }
        return cart;
    }
    const [cartItems, setCartItems] = useState(getDefaultCartItem)
    // console.log(cartItems);
    
    // const[price,setPrice] =useState({
    //     fP:'**', 
    //     qty:'**'
        
    // })

    const[finalP, setFinal]=useState()


    const addToCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }

    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const updateCartItemCount=(newAmount, itemId)=>{
        setCartItems((prev)=>({...prev, [itemId]:newAmount}))
    }

    const getTotalCartAmount=()=>{
        let totalAmount = 0;
        for(const item in cartItems){
            totalAmount += cartItems[item]* finalP
        }
        return totalAmount;
    }


    const handlePrice=(itemId,halfPrice)=>{
        if(halfPrice){
           setFinal(cakesGallery[itemId].price.halfKg)
        }
        else if(!halfPrice){
            setFinal(cakesGallery[itemId].price.oneKg)
        }
    }
    const contextValue={
        cartItems, 
        addToCart, 
        removeFromCart,
        updateCartItemCount,
        getTotalCartAmount,
        handlePrice,
    }

  return (
    <cartContext.Provider value={contextValue}>
        {props.children}
    </cartContext.Provider>
  )
}

export default CartContext