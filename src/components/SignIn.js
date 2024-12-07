// src/components/SignIn.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUserEmail } from "../redux/userActions";

const SignIn = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/signin", { email, password })
      .then((result) => {
        if (result.data.success === "Success") {
          dispatch(setUserEmail(result.data.email));
          navigate(`/products`);
        }
        console.log(result);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
      <div className="signup-link">
        <p>
          Don't have an account?{" "}
          <button onClick={() => navigate("/signup")}>Sign Up</button>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
