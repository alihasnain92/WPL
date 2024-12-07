import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";
import axios from "axios";

const SignUp = () => {
  const [Username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/signup", { email, password, Username })
      .then((result) => {
        console.log(result);
        navigate("/signin");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            value={Username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
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
        <button type="submit">Sign Up</button>
      </form>
      <div className="signin-link">
        <p>
          Already have an account?{" "}
          <button onClick={() => navigate("/signin")}>Sign In</button>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
