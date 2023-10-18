import { useState } from "react";
import "../styles/SignUp.css";
import img from "../assets/Untitled design(1).png";



export const SignUp = () => {
   

    return (

<div className="main">
    <h1 className="heading"> Register for Light Studio Hotel</h1>
    <div className="container">

    <div>
          <img
            src={img}
            alt=""
            style={{ marginTop: "-35px", width: "150px", height: "92px" }}
          />{" "}
        </div>
        <div className="inputMain">
          <input
            className="inputStyle"
            type="email"
            placeholder="Enter Email"
          />
          {""}

          <input
            className="inputStyle"
            type="text"
            placeholder="Enter Password"
          />
          {""}
        </div>

        <div className="buttonContainer">
          <button className="registerBut">Register</button>

<div className="buttonMain">

          <h4>Already registered?</h4>

          <button className="login" >Login</button>
          </div>
        </div>
    </div>
</div>
    )}

