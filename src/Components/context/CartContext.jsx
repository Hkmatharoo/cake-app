import React, { createContext, useState } from 'react'
import { galleryDryCake } from '../GalleryContent/GalleryData';
export const cartContext = createContext();

const CartContext = (props) => {
    const getDefaultCartItemDryCake = ()=>{
        let cart={}
        for(let i=1; i<=galleryDryCake.length;i++){
            cart[i]=0
        }
        return cart;
    }
    const [dryCakeCartItems, setdryCakeCartItems] = useState(getDefaultCartItemDryCake)
    console.log(dryCakeCartItems);

    const addDryCakeToCart=(itemId)=>{
        setdryCakeCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }

    const removeDryCakeToCart=(itemId)=>{
        setdryCakeCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const updateCartItemCount=(newAmount, itemId)=>{
        setdryCakeCartItems((prev)=>({...prev, [itemId]:newAmount}))
    }

    const getTotalCartAmount=()=>{
        let totalAmount = 0;
        for(const item in dryCakeCartItems){
            let itemInfo = galleryDryCake.find((product)=>product.id===Number(item))
            totalAmount += dryCakeCartItems[item]* itemInfo.price
        }
    }

    const contextValue={
        dryCakeCartItems, 
        addDryCakeToCart, 
        removeDryCakeToCart,
        updateCartItemCount,
        getTotalCartAmount
    }

  return (
    <cartContext.Provider value={contextValue}>
        {props.children}
    </cartContext.Provider>
  )
}

export default CartContext