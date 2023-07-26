import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Product from './Product'
import SlideProduct from './SlideProduct';
import { productData, responsive } from "./data";

function Slide() {

    const product = productData.map((item) => (
        <SlideProduct
          id={item.id}
          name={item.name}
          url={item.image}
          price={item.price}
          description={item.description}
        />
      ));

  return (
    <div>
        <Carousel responsive={responsive}>
          {product}
        </Carousel>;
    </div>
  )
}

export default Slide