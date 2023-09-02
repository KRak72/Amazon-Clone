import React, { useEffect } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Product from './Product'
import SlideProduct from './SlideProduct';
// import { productData, responsive } from "./data";
import {responsive} from './data';
import axios from 'axios'
import { useState } from 'react';

async function fetchData() {
  const response = await axios.get(`https://challenge-811f2-default-rtdb.firebaseio.com/userDataRecords/Products_data.json`);
  return response.data["-Nb436EJvYXJHYv1gRdT"].productData;
}

function Slide() {

  const [collection, setCollection] = useState([]);

  useEffect(() => {
    fetchData().then(data => setCollection(data));
  }, []);

  return (
    <div>
        <Carousel responsive={responsive}>
          {/* {product} */}
          {
            collection.map((item) => (
            <SlideProduct
              id={item.id}
              name={item.name}
              url={item.image}
              price={item.price}
              description={item.description}
            />
          ))
          }
        </Carousel>;
    </div>
  )
}

export default Slide

// const product = collection.map((item) => (
//   <SlideProduct
//     id={item.id}
//     name={item.name}
//     url={item.image}
//     price={item.price}
//     description={item.description}
//   />
// ));