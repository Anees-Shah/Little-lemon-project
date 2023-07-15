import React from "react";
import img10 from "../images/Mario and Adrian A.jpg";
import img11 from "../images/Mario and Adrian b.jpg";
import img12 from "../images/restaurant chef B.jpg";
import Navbar from "./Navbar";
import {FiFacebook} from "react-icons/fi";
import {FiInstagram} from "react-icons/fi";
import {BsWhatsapp} from "react-icons/bs";
import {FiPhoneCall} from "react-icons/fi";
import {FaAppStoreIos,FaAndroid} from "react-icons/fa";

export default function About(){
    return(
        <>
        <Navbar/>
        <h1 className="menu">Meet the team of <span className="brand">Little Lemon</span></h1>
        <div className="chef">
        <img className="chef0" src={img10} width="450" height="300" alt="chef"/>
        <p className="chef1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum, nisl quis semper pharetra, tellus lorem eleifend lorem, a mattis magna metus nec ligula. Aliquam quam mi, elementum sed ligula a, scelerisque dignissim diam. Curabitur euismod tincidunt arcu, sed rutrum mauris tincidunt eget. Fusce feugiat, lectus quis egestas rutrum, ante ante rhoncus augue, euismod faucibus risus ex a dui.lectus quis egestas rutrum, ante ante rhoncus augue, euismod faucibus risus ex a dui.lectus quis egestas rutrum, ante ante rhoncus augue, euismod faucibus risus ex a dui.lectus quis egestas rutrum, ante ante rhoncus augue, euismod faucibus risus ex a dui.</p>
        </div>
        <div className="chef">
        <p className="chef1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum, nisl quis semper pharetra, tellus lorem eleifend lorem, a mattis magna metus nec ligula. Aliquam quam mi, elementum sed ligula a, scelerisque dignissim diam. Curabitur euismod tincidunt arcu, sed rutrum mauris tincidunt eget. Fusce feugiat, lectus quis egestas rutrum, ante ante rhoncus augue, euismod faucibus risus ex a dui.lectus quis egestas rutrum, ante ante rhoncus augue, euismod faucibus risus ex a dui.lectus quis egestas rutrum, ante ante rhoncus augue, euismod faucibus risus ex a dui.lectus quis egestas rutrum, ante ante rhoncus augue, euismod faucibus risus ex a dui.</p>
        <img className="chef0" src={img11} width="450" height="300" alt="chef"/>
        </div>
        <div className="chef">
        <img className="chef0" src={img12} width="450" height="300" alt="chef" />
        <p className="chef1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum, nisl quis semper pharetra, tellus lorem eleifend lorem, a mattis magna metus nec ligula. Aliquam quam mi, elementum sed ligula a, scelerisque dignissim diam. Curabitur euismod tincidunt arcu, sed rutrum mauris tincidunt eget. Fusce feugiat, lectus quis egestas rutrum, ante ante rhoncus augue, euismod faucibus risus ex a dui.lectus quis egestas rutrum, ante ante rhoncus augue, euismod faucibus risus ex a dui.lectus quis egestas rutrum, ante ante rhoncus augue, euismod faucibus risus ex a dui.lectus quis egestas rutrum, ante ante rhoncus augue, euismod faucibus risus ex a dui.</p>
       </div>

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