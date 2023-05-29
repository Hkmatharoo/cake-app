import React, { useContext } from 'react'
import { cakesGallery } from '../GalleryContent/GalleryData'
import { cartContext } from '../context/CartContext'
import CartItems from './CartItems'
import './Cart.css'
const Cart = () => {
    const { cartItems } = useContext(cartContext)
    return (
        <>
            <img className='galleryimg' src='/images/pink4.jpg' alt="gallery" height={400} width={400} />
            <h1 className='carthead gallery-logo'>Your cart Items</h1>

            <table className='cart'  style={{marginTop:'150px', border:'1px solid black'}}>

                <tbody style={{border:'1px solid black'}}>
                    <div className='CartItems'>
                    <tr style={{border:'1px solid black'}}>
                        <th style={{border:'1px solid black'}}>Product</th>
                        <th style={{border:'1px solid black'}}>Product name</th>
                        <th style={{border:'1px solid black'}}>Flavour</th>
                        <th style={{border:'1px solid black'}}>Price</th>
                        <th style={{border:'1px solid black'}}>Quantity</th>
                        <th style={{border:'1px solid black'}}>Total</th>
                        <th style={{border:'1px solid black'}}>Close</th>
                    </tr>
                        {cakesGallery.map((product) => {
                            if (cartItems[product.id] !== 0) {
                                return <CartItems data={product} key={product.id} />
                            }
                        })}
                        <div>
                            {/* <p><b>Sub Total =</b></p> */}
                        </div>
                    </div>
                </tbody>
            </table>

        </>
    )
}

export default Cart

// import React, { useContext } from 'react'
// import { cakesGallery } from '../GalleryContent/GalleryData'
// import { cartContext } from '../context/CartContext'
// import CartItem from './CartItems'
// import './Cart.css'

// const Cart = () => {
//   const { CartItems } = useContext(cartContext)

//   return (
//     <>
//       <div className='cart'>
//         <img className='galleryimg' src='/images/pink4.jpg' alt="gallery" height={400} width={400} />
//         <h1 className='carthead gallery-logo'>Your cart Items</h1>
//         <thead>
//           <tr>
//             <th>Product</th>
//             <th>Product name</th>
//             <th>Flavour</th>
//             <th>Price</th>
//             <th>Quantity</th>
//             <th>Total</th>
//             <th>Close</th>
//           </tr>
//         </thead>
//       </div>
//       <div className='CartItems'>
//         {cakesGallery.map((product) => {
//           if (CartItems[product.id] !== 0) {
//             return <CartItem data={product} key={product.id} />
//           }
//           return null; // Make sure to include a return statement for non-matching items in the map function
//         })}
//         <div>
//           {/* <p><b>Sub Total =</b></p> */}
//         </div>
//       </div>
//     </>
//   )
// }

// export default Cart;
