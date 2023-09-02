import {React,useState} from 'react'
import './contact.css'
import { Link } from 'react-router-dom'
import axios from 'axios'


function Contact() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:5001/challenge-811f2/us-central1/api/submit', formData);
      console.log(response.data.message);
      alert('Email sent successfully');
      
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    console.log(formData);
  };




  return (
    <>
      <div className='heading'>
            <h1>Reach Out to Us</h1>
            <p>We are only a step away from you</p>
        </div>

      <div className='main__container'>
      <div className='container__map'>
          <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248842.7495196891!2d77.51356708520535!3d12.961101909913516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1178c027230f%3A0x9a78f5ba6e534866!2sAmazon%20Development%20Center%2C%20Aquila!5e0!3m2!1sen!2sin!4v1691835400974!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>

            <div>
                <h2><b>Contact Us</b></h2>
                  <p><b>Address:</b>  Amazon Store, Bailey Road, 2nd floor</p>
                  <p><b>Phone:</b>  <a href="tel:+1234567890">Call us at 989898989</a></p>
                  <p><b>Hours:</b>  From 8 a.m To 6 p.m</p>
                  <p>An "Amazon Store" refers to a feature offered by Amazon that allows brands and businesses to create their own customized, multi-page online store within the Amazon platform. It's a way for businesses to showcase their products in a more curated and branded environment compared to the individual product listings on Amazon's marketplace.</p>
            </div>
      </div>

    <div className='details__section'>
        <h2>Leave Us A message</h2>
                <form onSubmit={handleSubmit}>
              <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} />
              <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} />
              <input type="email" name="email" placeholder="Email" onChange={handleChange} />
              <textarea name="message" placeholder="Message" onChange={handleChange}></textarea>
              <button type="submit">Submit</button>
            </form>
        {/* <div>
              <div>
                <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
              </div>
              <div>
                <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
              </div>
              <div className='col-12'>
              <label htmlFor="exampleFormControlInput1" className="form-label mb-3">Enter Your Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email" />
                   
              </div>
              <div>
                  <label htmlFor="exampleFormControlTextarea1" className="form-label">Type in your message</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div>
                <button id='button-link' type="submit">Submit</button>
                </div>
            </div> */}
          </div>
        </div>
    </>
  )
}

export default Contact

{/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63826.53634427054!2d37.09345325!3d-1.04201225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f4e5b27c66117%3A0xb6f8a7e126152c26!2sThika!5e0!3m2!1sen!2ske!4v1668532780442!5m2!1sen!2ske"
allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
