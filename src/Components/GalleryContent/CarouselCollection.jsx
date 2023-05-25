import React from 'react'
import MyCarouselDryCake from './MyCarouselDryCake'
import MyCarouselTwoTierRingCakes from './MyCarouselTwoTierRingCakes'
import MyCarouseKidsTheme from './MyCarouselKidsTheme'
import MyCarouselCupcakes from './MyCarouselCupcakes'
import MyCarouselCheesecakes from './MyCarouselCheesecakes'
import MyCarouselOthers from './MyCarouselOthers'
import MyCarouselCake from './MyCarouselCake'
import { galleryDryCake } from './GalleryData'
import CartContext from '../context/CartContext'

const CarouselCollection = () => {
  return (
    <>
    <div className='color'>
        <img className='galleryimg' src='/images/pink4.jpg' alt="gallery" height={400} width={400} />
        <h2 className='gallery-logo'>GALLERY</h2>

        <img className='galleryhead'src='/images/pink5.png' alt="gallery" height={100} width={200} />
        <h1 className='CarouselHeading bg-line-top'>DRY CAKES</h1>

        {/* {galleryDryCake.map((product,index)=><MyCarouselDryCake key={index} data={product} />)} */}
        <MyCarouselDryCake />

        <img className='galleryhead'src='/images/pink5.png' alt="gallery" height={100} width={200} />
        <h1 className='CarouselHeading  bg-line-top'>CAKES</h1>
        <MyCarouselCake/>

        <img className='galleryhead bg1'src='/images/pink5.png' alt="gallery" height={100} width={200} />
        <h1 className='CarouselHeading bg-line-top'>TWO TIER & RING CAKES</h1>
        <MyCarouselTwoTierRingCakes />

        <img className='galleryhead'src='/images/pink5.png' alt="gallery" height={100} width={200} />
        <h1 className='CarouselHeading  bg-line-top'>KIDS THEME</h1>
        <MyCarouseKidsTheme />

        <img className='galleryhead'src='/images/pink5.png' alt="gallery" height={100} width={200} />
        <h1 className='CarouselHeading bg-line-top'>CUPCAKES</h1>
        <MyCarouselCupcakes />

        <img className='galleryhead'src='/images/pink5.png' alt="gallery" height={100} width={200} />
        <h1 className='CarouselHeading bg-line-top'>CHEESECAKES</h1>
        <MyCarouselCheesecakes />

        <img className='galleryhead'src='/images/pink5.png' alt="gallery" height={100} width={200} />
        <h1 className='CarouselHeading bg-line-top'>OTHERS</h1>
        <MyCarouselOthers />

        
    </div>
    </>
  )
}

export default CarouselCollection