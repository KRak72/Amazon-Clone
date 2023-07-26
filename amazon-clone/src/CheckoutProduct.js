import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

function CheckoutProduct({id,image,title,price,rating,visible}) {
    const [{basket},dispatch]=useStateValue();

    const removeFromBasket = () => {
        // remove item from the basket

        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id:id,
        })
    }

    console.log(visible);

        return (
            <div className='checkoutProduct'>
                <img className="checkoutProduct__image" src={image} alt="" 
                />
        
                <div className="checkoutProduct__info">
                    <p className='checkoutProduct__title'>{title}</p>
                    <p className='checkoutProduct__price'>
                        <small>₹</small>
                        <strong>{price}</strong>
                    </p>
                    <div className='checkoutProduct__rating'>
                        {Array(rating)
                        .fill()
                        .map(() => (
                            <p>🌟</p>
                        ))}
                    </div>
                    {visible==="on" && <button className='checkout__btn' onClick={removeFromBasket}>Remove from Basket</button>}
                </div>
            </div>
          )
}

export default CheckoutProduct