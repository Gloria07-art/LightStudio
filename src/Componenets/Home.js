import React from "react";
import img from "../assets/Untitled design(1).png";
import hero from "../assets/4795513_2383990.jpg";
import room from "../assets/a64b9ac92a67c7c9cefe06a9cd74f555.jpg";
import shower from "../assets/Rectangle 25.png";
import wifi from "../assets/Rectangle 26.png";
import phone from "../assets/Rectangle 27.png";
import fb from '../assets/facebook.png';
import inst from '../assets/instagram.png';
import twit from '../assets/twitter.png';

import "../styles/Home.css";

export const Home = () => {
  return (
    <div className="main">
      <div className="header">
        <div className="headerItem">
          <img src={img} alt="" style={{ width: "80px", height: "60px" }} />{" "}
        </div>
        <div className="headerItem2">
          <h3>Rooms</h3>
          <buttom className="btnsNav">Login</buttom>
          <button className="btnsNav">Register</button>
        </div>
      </div>

      <div className="heroSection">
        <div className="heroTxt">
          <h1>
            Find suitable room,
            <br />
            In Light Studio
            <br />
            Hotel, Just Search
          </h1>

          <h2>The right room for you to wined down.</h2>
        </div>

        <div className="heroImg">
          <img
            src={hero}
            alt=""
            style={{
              width: "600px",
              height: "500px",
              flexShrink: "0",
              marginLeft: "0px",
            }}
          />
        </div>
      </div>

      <div className="ViewSection">
        <div>
          <h2>
            Rooms we recommend for <br />
            our customers
          </h2>
        </div>
        <div>
          <button className="viewNav">View rooms here</button>
        </div>
      </div>

      <div className="ImgView">
        <div className="imgContainer">
          <img src={room} alt="" style={{ width: "346px", height: "360px" }} />
          <div className="viewTxt">
          <h3>Deluxe Contrast Room</h3>
          <div className="smallImg">
            {" "}
            <img
              src={shower}
              alt=""
              style={{ width: "30px", height: "30px" }}
            />{" "}
            <h5>1</h5>
            <img
              src={wifi}
              alt=""
              style={{ width: "30px", height: "30px" }}
            />{" "}
            <h5>1</h5>
            <img
              src={phone}
              alt=""
              style={{ width: "30px", height: "30px" }}
            />{" "}
            <h5>1</h5>
          </div>
          <h4>R800</h4>
          </div>
        </div>

        <div className="imgContainer">
          <img src={room} alt="" style={{ width: "346px", height: "360px" }} />
          <div className="viewTxt">
          <h3>Deluxe Contrast Room</h3>
          <div className="smallImg">
            {" "}
            <img
              src={shower}
              alt=""
              style={{ width: "30px", height: "30px" }}
            />{" "}
            <h5>1</h5>
            <img
              src={wifi}
              alt=""
              style={{ width: "30px", height: "30px" }}
            />{" "}
            <h5>1</h5>
            <img
              src={phone}
              alt=""
              style={{ width: "30px", height: "30px" }}
            />{" "}
            <h5>1</h5>
          </div>
          <h4>R800</h4>
          </div>
        </div>

        <div className="imgContainer">
          <img src={room} alt="" style={{ width: "346px", height: "360px" }} />

          <button className="imgButton">20 off</button> 

          
          <div className="viewTxt">
          <h3>Deluxe Contrast Room</h3>
          <div className="smallImg">
            {" "}
            <img
              src={shower}
              alt=""
              style={{ width: "30px", height: "30px" }}
            />{" "}
            <h5>1</h5>
            <img
              src={wifi}
              alt=""
              style={{ width: "30px", height: "30px" }}
            />{" "}
            <h5>1</h5>
            <img
              src={phone}
              alt=""
              style={{ width: "30px", height: "30px" }}
            />{" "}
            <h5>1</h5>
          </div>
          <h4>R800</h4>
          </div>
        </div>
      </div>

      <footer className="footer">
        {" "}
        <div className="footerHeader">
        <h1>Lets Stay in Touch</h1> </div>
        <div className="txtContainer">
          <div>
            {" "}
            <h2>Company</h2>
            <h4>Partnership<br/> News<br/> Blogs<br/> Appointment<br/> Hotel</h4>
          </div>{" "}
          <div>
            {" "}
            <h2>Connect with Us</h2>
            <h4>Lorem Ipsum is<br/> simply dummy text<br/> of the printing and </h4>
            <div> <img src={fb} alt="" style={{width:'30px', height:'30px', margin:'10px'}}/>
            <img src={inst} alt="" style={{width:'30px', height:'30px', margin:'10px'}}/>
            <img src={twit} alt="" style={{width:'30px', height:'30px', margin:'10px'}}/></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

