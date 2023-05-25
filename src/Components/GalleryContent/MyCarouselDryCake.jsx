import React, { useContext } from 'react';
import Carousel from './Carousel';
import {useDispatch, useSelector} from 'react-redux'
import { galleryDryCake } from './GalleryData';
import { cartContext } from '../context/CartContext';

const MyCarouselDryCake = () => {

    const {addDryCakeToCart, dryCakeCartItems} = useContext(cartContext)

    return (
        <>
            <div
                style={{
                    maxWidth: 1280,
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: 64
                }}
            >
                <Carousel show={4}>
                    {galleryDryCake.map((product,index)=>{
                        const{id}=product;
                        return(
                            <div id={index} className='drycakecontainer'>
                                <div style={{ padding: 8 }}>
                            <img
                                src={product.src}
                                alt="placeholder"
                                style={{ width: "100%" }} />
                            <div className="overlay">{product.divData} {dryCakeCartItems[id]>0 && <>({dryCakeCartItems[id]})</>} <i class="fa-solid fa-square-plus like" id='addIcon' onClick={()=>addDryCakeToCart(id)}></i>
                            </div>
                        </div>
                    </div>

                        )
                    })}
                    
                </Carousel>
            </div>
        </>
    );
};

export default MyCarouselDryCake;