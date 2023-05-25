import React from 'react';
import Carousel from './Carousel';
import { kidsTheme } from './GalleryData';

const MyCarouselKidsTheme = () => {

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
                    {kidsTheme.map((product, index) => {
                        return (
                            <div id={index} className='drycakecontainer'>

                                <div style={{ padding: 8 }}>
                                    <img
                                        src={product.src}
                                        alt="placeholder"
                                        style={{ width: "100%" }} />
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

export default MyCarouselKidsTheme;