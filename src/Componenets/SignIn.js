import { useState } from "react";
import "../styles/SignIn.css";
import img from "../assets/Untitled design(1).png";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Config/firebase"
import { Link, useNavigate } from "react-router-dom";


export const SignIn = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const goToHomePage = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("Logged in successfully");
        navigate("/Home");
      })
      .catch((error) => {});
  };

  return (
    <div className="Container">
      <div className="main-box">
        <div>
          <img
            src={img}
            alt=""
            style={{ marginTop: "-35px", width: "100px", height: "70px" }}
          />{" "}
        </div>
        <div className="inputMain">
          <input
            className="inputStyle"
            type="email"
            placeholder="Enter Email"
            onChange={(event) => setEmail(event.target.value)}
          />
          {""}

          <input
            className="inputStyle"
            type="text"
            placeholder="Enter Password"
            onChange={(event) => setPassword(event.target.value)}
          />
          {""}
        </div>
        <div className="forgotP">
        <Link to="/SignUp">Forgot Password</Link>
        </div>
        <div className="buttonContainer">
          <button className="loginbut" onClick= {goToHomePage}>Login</button>
          <button className="adminbt" onClick={goToHomePage}>Admin</button>
        </div>
      </div>
    </div>
  );
};
