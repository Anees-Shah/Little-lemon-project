import React, {useState} from "react";
 import img9 from "../images/restaurant.jpg";
 import Navbar from "./Navbar";
 import {FiFacebook} from "react-icons/fi";
import {FiInstagram} from "react-icons/fi";
import {BsWhatsapp} from "react-icons/bs";
import {FiPhoneCall} from "react-icons/fi";
import {FaAppStoreIos,FaAndroid} from "react-icons/fa";



function Reservation() {
  const [diners, setDiners] = useState('');
  const [time, setTime] = useState('one');
  const [date, setDate] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (diners && time && date && email && phone) {
      alert('Booking confirmed!');
      // Additional logic to submit the form or perform other actions can be added here
    } else {
      alert('Please fill in all required fields.');
    }
  };

    return(
        <>
        <Navbar/>
<div className="reserve">
      <h1 className="menu">Online reservation at <span className="brand">Little Lemon</span></h1>
      <img className="back-img" src={img9} alt="restaurant" />
      <section className="form1">
        <form className="form2" onSubmit={handleSubmit}>
          <label>Diners</label>
          <input type="number" value={diners} onChange={(e) => setDiners(e.target.value)} /><br /><br />

          <label htmlFor="time">Time</label>
          <select className="time" name="time" id="time" value={time} onChange={(e) => setTime(e.target.value)}>
            <option value="one">Brunch 11:30am</option>
            <option value="two">Lunch 1:00pm</option>
            <option value="three">Dinner 7:30pm</option>
            <option value="four">Others</option>
          </select><br /><br />

          <label>Date</label>
          <input className="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} /><br /><br />

          <label>Email</label>
          <input className="email1" type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br /><br />

          <label>Phone No.</label>
          <input className="phone" type="text" value={phone} onChange={(e) => setPhone(e.target.value)} /><br /><br />

          <input className="form-submit" type="submit" /><br />
        </form>
      </section>
    </div><br/>

     <footer>
        <section className="footer">
          
          <h4>You can Contact Us via</h4>
          <div className="contact">
          <FiFacebook className="icon" size={30}/>
          <FiInstagram className="icon" size={30}/>
          <BsWhatsapp className="icon" size={30}/>
          <FiPhoneCall className="icon" size={30}/>
          </div>
          
          <h4>Get your online booking through app on </h4>
          <div className="book">
          <h5>For IOS users</h5>
          <FaAppStoreIos className="icon1" size={30}/>
          <h5>For ANDROID users</h5>
          <FaAndroid className="icon1" size={30}/>
          </div>
          <span className="end">All Rights Reserved</span>
        </section>
      </footer>

        </>
    )
}

export default Reservation;