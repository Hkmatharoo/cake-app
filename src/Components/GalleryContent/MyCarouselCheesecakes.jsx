import React from 'react';
import Carousel from './Carousel';
import { useDispatch, useSelector } from 'react-redux'
import { gallerycheesecakes } from './GalleryData';

const MyCarouselCheesecakes = () => {

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
                    {gallerycheesecakes.map((product, index) => {
                        return (
                            <div id={index} className='drycakecontainer'>
                                <div style={{ padding: 8 }}>
                                    <img
                                        src={product.src}
                                        alt="placeholder"
                                        style={{ width: "100%" }}
                                    />
                                    <div class="overlay">{product.divData}<i className="fa-solid fa-heart like"></i><i class="fa-solid fa-square-plus like" ></i>
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

export default MyCarouselCheesecakes;