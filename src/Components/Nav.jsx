import React, { Component } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Nav(){
    const nav= useNavigate();

        return (
            <>
                <section>
                    <nav className="myNav">
                        <ul className='ul'>
                            <Link to={'/'} className='linkstyle'><li><a href="#">HOME</a></li></Link>
                            <Link to={'/menu'} className='linkstyle'><li><a href="#menu">OUR MENU</a></li></Link>
                            <div className="btn-group" role="group">
                                <li data-bs-toggle="dropdown" onClick={()=>nav('/gallery')} >
                                    <a href="#gallery">GALLERY <span><i className="fa-solid fa-caret-down"></i></span></a>
                                    <ul className="dropdown-menu">
                                        <li className="dropdown-items" onClick={()=>nav('/drycakes')}>Dry Cakes</li>
                                        <li className="dropdown-items" onClick={()=>nav('/birthdaycakes')}>Birthday Cakes</li>
                                        <li className="dropdown-items" onClick={()=>nav('/twoTier&Ringcakes')}>Two Tier & Ring Cakes</li>
                                        <li className="dropdown-items" onClick={()=>nav('/kidstheme')}>Kids Theme</li>
                                        <li className="dropdown-items" onClick={()=>nav('/cupcakes')}>Cupcakes</li>
                                        <li className="dropdown-items" onClick={()=>nav('/cheesecakes')}>CheeseCakes</li>
                                        <li className="dropdown-items" onClick={()=>nav('/others')}>Others</li>
                                    </ul>
                                </li>
                            </div>
                            <img className="logo" src="/images/ms cakeaholic2.jpg" width="110px" height="110px" />
                            <div className="btn-group">
                                <li data-bs-toggle="dropdown">
                                    <a href="#shop">SHOP<span> <i className="fa-solid fa-caret-down"></i></span></a>
                                    <ul className="dropdown-menu">
                                        <li className="dropdown-items" onClick={()=>nav('/cart')}>Cart</li>
                                        <li className="dropdown-items" onClick={()=>nav('/wishlist')}>Wishlist</li>
                                        <li className="dropdown-items" onClick={()=>nav('/booking')}>Booking</li>
                                        <li className="dropdown-items" onClick={()=>nav('/checkout')}>Checkout</li>
                                        <li className="dropdown-items" onClick={()=>nav('/reviews')}>Reviews</li>
                                    </ul>
                                </li>
                            </div>
                            <li><a href="#contact us" onClick={()=>nav('/contact')}>CONTACT US</a></li>
                            <li><a href="login" onClick={()=>nav('/login')}>LOG IN</a></li>
                            {/* <li><a><i class="fa-solid fa-cart-shopping"></i></a></li> */}
                        </ul>
                    </nav>

                </section>

            </>
        )

}
