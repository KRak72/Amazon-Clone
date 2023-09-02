import React, { useEffect, useState } from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from './reducer';
import { useNavigate } from 'react-router-dom';
import {db} from './firebase'
import { collection, addDoc } from "firebase/firestore";

function Payment() {

    const navigate = useNavigate();
    const [{ basket, user }, dispatch] = useStateValue();

    // const handleChange = e => {

    // }

    const handleSubmit = async (event) => {
        // event.preventdefault();
        const userData = {};

        basket.forEach((user, index) => {
            userData[`item${index + 1}`] = {
              id: user.id,
              title: user.title,
              image: user.image,
              price: user.price
            };
          });
          
        
        const res = await fetch(
            'https://challenge-811f2-default-rtdb.firebaseio.com/userDataRecords/Items.json',
            {
            method:"POST",
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify(userData),
            }
        );

        if(res){
            alert('Data stored');
        }
        else{
            alert('Choose items');
        }

        navigate('/orders',{replace:true})
    }

    return (
        <div className='payment'>
            <div className='payment__container'>

                <h1>
                    Checkout (<Link to='/checkout'>{basket?.length} items</Link>)
                </h1>

                {/* Payment Section --> Delievery address */}
                <div className="payment__section">
                    <div className='payment__title'>
                        <h3>Delievery Address</h3>
                    </div>

                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>East Indra Nagar</p>
                        <p>Patna,Bihar</p>
                    </div>
                </div>

                {/* Payment Section --> Review Items */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review Items and Delievery</h3>
                    </div>

                    <div className="payment__items">
                        {/* All the products in the basket will be shown here */}
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
                </div>

                <div className='payment__section'>
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    
                    <div className="payment__details">
                            {/* Stripe magic will go */}

                         
                                {/* <CardElement onChange={handleChange}/> */}

                                <div className='payment__priceContainer'>
                                    <CurrencyFormat
                                        renderText={(value) => (
                                            <h3>Order Total: {value}</h3>
                                        )}
                                        decimalScale={2}
                                        value={getBasketTotal(basket)}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"₹"}
                                    />
                                    <button onClick={handleSubmit}>
                                       Buy Now
                                    </button>
                                </div>
                           
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment