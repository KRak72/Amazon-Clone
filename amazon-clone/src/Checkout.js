import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { useState } from 'react';

function Checkout() {
    const [{ basket,user }, dispatch] = useStateValue();

    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img className='checkout__ad'
                    src="https://www.bigbasket.com/media/uploads/banner_images/B2c_hp_m_SBF_FrozenFest_460_280623.jpg"
                    alt="" />
                <div>
                    <h3>Hello,{user?.email}</h3>
                    <h2 className='checkout__title'>Your Shopping Basket</h2>
                    {/* CheckoutProduct */}
                    <div className='checkout__item'>
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                                visible="on"
                            />
                        ))}
                    </div>

                    {/* BasketItem */}
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout;
//https://www.bigbasket.com/media/uploads/banner_images/1904223_gourmet-snacks_460_1st.jpg