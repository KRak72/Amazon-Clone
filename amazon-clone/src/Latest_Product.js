import React from 'react'
import { useState } from 'react';
import { top_fashions } from './Help'
import {database} from './firebase'
import { useEffect } from 'react';
import { getDatabase, ref, set, onValue,get} from 'firebase/database';
import firebase from "./firebase"; // Adjust the import path based on your project structure
import { useFirebaseDatabase } from "react-firebase-hooks/database";
import './Latest_Product.css'
import { useStateValue } from "./StateProvider";

function Latest_Product() {

  const [{basket}, dispatch] = useStateValue();
  const [minPrice, setMinPrice] = useState(Number.NEGATIVE_INFINITY);
  const [maxPrice, setMaxPrice] = useState(Number.POSITIVE_INFINITY);
  const [filteredData, setFilteredData] = useState([]);
  const[data,setData]=useState([]);
  const dataRef = ref(database,'data');

  const addToBasket = (items) => {
      //console.log("Adding: ",props.id);
      dispatch({
          type: "ADD_TO_BASKET",
          item: {
              id: items.id,
              title: items.name,
              image: items.image,
              price: items.price,
          },
      });
  };

  // inserting data
  useEffect(() => {
    
    // Reference to the data location in Firebase
    // const dataRef = ref(database, 'data');
    
    // Check if data is present in the database
    onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      if (!data) {
        // Data is not present, insert the help data from help.js
        set(dataRef, top_fashions);
        console.log('Data inserted successfully into Firebase!');
      } else {
        console.log('Data already exists in Firebase. Skipping insertion.');
      }
    });
  }, []);

    // Apply filter and update filteredData
    const applyFilter = () => {
      let filtered = data;
  
      if (minPrice !== undefined) {
        filtered = filtered.filter(item => item.price >= minPrice);
      }
  
      if (maxPrice !== undefined) {
        filtered = filtered.filter(item => item.price <= maxPrice);
      }
  
      setFilteredData(filtered);
    };

  // fetching data
  useEffect(() => {
    const fetchdata = async () => {

      try{
        const snapshot = await get(dataRef);
        if(snapshot.exists()){
          setData(snapshot.val());
        }
        else{
          console.log("No Data Availabel")
        }

      }catch(error){
        console.log("Error fetching Data: ",error);
      }

    };
    fetchdata();
  },[]);

  // UseEffect to apply filter when minPrice or maxPrice changes
  useEffect(() => {
    applyFilter();
  }, [minPrice,maxPrice]);

  useEffect(() => {
    setFilteredData(data);
  },[data]);

  return (
    <div className='main'>
      <div className='title'>
        Best Fashion Brands For You!
      <div className="filter">

          <input type="number"
          value={minPrice || ''}
          onChange={e => setMinPrice(e.target.value !=='' ? Number(e.target.value) : undefined)}
          placeholder='Min Price'
          className="input-field"
          />

          <input type="number"
          value={maxPrice || ''}
          onChange={e => setMaxPrice(e.target.value !=='' ? Number(e.target.value) : undefined)}
          placeholder='Max Price'
          className="input-field"
          />

          <button onClick={applyFilter} className="apply-button">Apply Filter</button>
      </div>
      </div>

      
      
        <div className='container'>
      {
        filteredData.map(items => {
          return(
            <div className='product__details'>
              <img src={items.image} alt="" />
              <h4>{items.name}</h4>
              <h4>₹{items.price}</h4>
              
        <p>
        <button onClick={() => addToBasket(items)}>Add to Cart</button>
        </p>
        </div>
          )
        })
      }
      {
        filteredData.map(items => {
          return(
            <div className='product__details'>
              <img src={items.image} alt="" />
              <h4>{items.name}</h4>
              <h4>₹{items.price}</h4> 
              <p>
                <button onClick={() => addToBasket(items)}>Add to Cart</button>
              </p>
            </div>
          )
        })
      }

      {
        filteredData.map(items => {
          return(
            <div className='product__details'>
              <img src={items.image} alt="" />
              <h4>{items.name}</h4>
              <h4>₹{items.price}</h4>  
              <p>
                <button onClick={() => addToBasket(items)}>Add to Cart</button>
              </p>
            </div>
          )
        })
      }
    </div>
    </div>
  )
}

export default Latest_Product

