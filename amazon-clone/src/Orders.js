import React, { useState } from 'react'
import './Orders.css'
import moment from "moment";
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from "react-currency-format";


function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className='orders'>
      
      <h1>Orders successfully executed</h1>
      <h3>{moment().format('MMMM Do YYYY, h:mm:ss a')}</h3>

      {basket.map(item => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          visible="off"
        />
      ))}


    </div>
  )
}

export default Orders