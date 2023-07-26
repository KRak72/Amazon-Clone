import React from 'react'
import './SlideProduct.css'
import { useStateValue } from "./StateProvider";

function SlideProduct(props) {

    const [{basket}, dispatch] = useStateValue();
    const addToBasket = () => {
        //console.log("Adding: ",props.id);
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: props.id,
                title: props.name,
                image: props.url,
                price: props.price,
            },
        });
    };

  return (
    <div className="card">
        <img className="product--image" src={props.url} alt="product image" />
        <h2>{props.name}</h2>

        <p className="price">₹{props.price}</p>
        <p>{props.description}</p>

        <p>
        <button onClick={addToBasket}>Add to Cart</button>
        </p>
  </div>
  )
}

export default SlideProduct