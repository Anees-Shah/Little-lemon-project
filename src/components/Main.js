import React from "react";
import img2 from "../images/restauranfood.jpg";
import {Link} from "react-router-dom";
import menuData from "./menuData";
import userData from "./userData";
import {FiFacebook} from "react-icons/fi";
import {FiInstagram} from "react-icons/fi";
import {BsWhatsapp} from "react-icons/bs";
import {FiPhoneCall} from "react-icons/fi";
import {FaAppStoreIos,FaAndroid} from "react-icons/fa";

function Main(){
    return(
        <>
        <div className="box1"><br/>
            <span className="brand">Little Lemon</span><br/>
            <span className="loc">Chicago</span><br/><br/>
            <p className="detail">We are Family owned Mediterranean restaurant,<br/>focused on traditional recipes served with modern twist.</p>
          <div className="box2">  
          <img className="food" src={img2} alt="food" />
          </div>
          <Link to="/reservation">
        <div className="res">Reserve a table</div>
        </Link>
        </div><br/>
         <span className="menu">Check our Menu!!</span><br/>
         <div className="menu-item">
        {menuData.map((menuItem, index) => (
          <div className="card" key={index}>
            <img src={menuItem.image} alt={menuItem.name} />
            <h3>{menuItem.name}</h3>
            <p className="price">{menuItem.price}</p>
            <span className="description">{menuItem.des}</span><br/><br/>
            <button className="res">Order now</button><br/><br/>
          </div>
        ))}
      </div>
      <span className="menu">Reviews Time!!</span><br/><br/>
      <div className="user">
        {userData.map((userItem, index) =>(
          <div className="user-card" key={index}>
            <img className="user-img" src={userItem.image} alt={userItem.name} />
            <h3 className="user-name">{userItem.name}</h3>
            <article className="comment">{userItem.com}</article>
            </div> 
            
        ))}
      </div><br/><br/>
      <h3 className="menu">How was your Experience visiting<span className="brand">Little Lemon</span></h3>
      <section className="user-exp">
      <form className="review-form">
        
        <input className="email" type="email" name="email" placeholder="Email Address"/><br/><br/>
        <input className="msg" type="text" name="text" placeholder="Reviews"/><br/><br/>
        <input className="review-btn"type="submit"/>
      </form>
      </section><br/><br/>
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

export default Main;
