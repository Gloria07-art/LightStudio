import React from "react";
import img from "../assets/Untitled design(1).png";
import "../styles/Home.css";

export const Home = () => {
  return (
    <div>
      <div className="header">
        <img src={img} alt="" style={{ width: "5%", height: "10%" }} />
        <div className="buttonSection">
          <button>Rooms</button> SignIn <button>SignUp</button>
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
