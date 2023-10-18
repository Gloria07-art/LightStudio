import React from "react";
import img from "../assets/Untitled design(1).png";
import "../styles/Home.css";

export const Home = () => {
  return (
    <div>
      <div className="header">
        <div className="headerItem" >
          <img src={img} alt="" style={{ width: "45%", height: "60%" }} /> </div>
        <div className="headerItem2">
          <button class="button button1">Rooms</button> <buttom class="button button2">SignIn</buttom> <button class="button button2">SignUp</button>
        </div>
      </div>
      <div className="heroSection">
        <h1>
          Find suitable room,
          <br />
          In Light Studio
          <br />
          Hotel, Just Search
        </h1>

        <h2>The right room for you to wined down.</h2>
      </div>
    </div>
  );
};
