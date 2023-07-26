import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {

  // const year = new Date().getFullYear();
  // console.log(year);

  const GoToTop = () => {
    window.scrollTo({top:0,left:0,behavior:"smooth"});
  }

  return (
    <div>
      <div className='footer_above'>
        <button className='btn' onClick={GoToTop}>Back To Top</button>
      </div>
      <div className="footer_container">
                <div className="footer_details">
                    <h4>Get to Know US</h4>
                    <p>About us</p>
                    <p>Careers</p>
                    <p>Press Releases</p>
                    
                </div>
                <div className="footer_details">
                    <h4>Connect with Us</h4>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                </div>
                <div className="footer_details">
                    <h4>Make Money with Us</h4>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                </div>
                <div className="footer_details">
                    <h4>Let Us Help You</h4>
                    <p>Covid-19 and Shopify</p>
                    <p>Your Account</p>
                    <p>Help</p>
                </div>
            </div>
    </div>
  )
}

export default Footer