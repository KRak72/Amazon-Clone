import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from './Checkout';
import { useStateValue } from "./StateProvider";
import Login from './Login';
import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {auth} from './firebase';
import Payment from './Payment'
import Orders from './Orders';
import Slide from './Slide';
import Footer from './Footer';
import { useState } from 'react';
import { initialState } from './reducer';
import Latest_Product from './Latest_Product';
import Contact from './Contact';


// const promise = loadStripe(
//   "pk_test_51NIp5PSJNml4MJ9soBa6uTLr7eDfIGDQ5wY8UWx1Zsv8Cm1yuIDoRlR3C1zmfuSz4rjRIxKp1e6uU2akIhmhzRl900hnLMrFxv"
// );


function App() {

  const[{basket},dispatch]=useStateValue();

  useEffect(() => {
    localStorage.setItem('Basket',JSON.stringify(basket));
    //console.log("Product: ",basket);
  },[basket]);

  useEffect(() => {
    // will only run once the app component loads...
    onAuthStateChanged(auth,(user) => {
      //console.log('The user is ---> ',user);

      if(user){
        // the user just logged in / the user was logged in
        dispatch({
          type:'SET_USER',
          user:user
        })
      }
      else{
        // the user is logged out
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })
    
  },[])

  return (
    <Router>
      <div className="app">
        
        <Routes>
          <Route path='/orders' element={[<Orders/>]}/>
        <Route path="/login" element={[<Login/>]} />
          <Route path="/checkout" element={[<Header />,<Checkout />]} />
          <Route path="/payment" element={[<Header />,<Payment/>]} />
          <Route path="/contact" element={[<Contact/>]}/>
          {/* The Default Route should always be in bottom */}
          <Route path="/" element={[<Header />,<Home />,<Slide/>,<Latest_Product/>]} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
