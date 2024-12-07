// src/components/Navbar.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useSelector } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();

     const cart = useSelector((state) => state.cart);
     const cartItemCount = Object.values(cart).reduce(
       (acc, item) => acc + item.quantity,
       0
     );
  return (
    <nav className="nav-bar">
      <div className="nav-div-img">
        <img src="./logo.png" alt="Logo" className="nav-img" />
        <p className="nav-img-par">Your Company</p>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/signin">Sign In</Link>
        </li>
        {/* <li>
          <Link to="/signup">Sign Up</Link>
        </li> */}
        <li>
          <Link to="/myorder">My Order</Link>
        </li>
      </ul>
      <div className="nav-search">
        <select className="search-select">
          <option>All</option>
          {/* other options */}
        </select>
        <input type="text" className="search-input" placeholder="Search..." />
        <div className="search-icon">
          <i className="fas fa-search"></i>
        </div>
      </div>
      <ul className="nav-links2">
        <li>
          <Link to="/signup">Sign up</Link>
        </li>
        <li>
          <Link to="/signin">Log Out</Link>
        </li>
      </ul>
      <div className="nav-cart">
        <button className="nav-cart-button" onClick={() => navigate("/cart")}>
          Cart ({cartItemCount})
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
