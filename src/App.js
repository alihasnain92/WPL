// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import CartPage from "./screens/CartPage";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import { addItem, removeItem } from "./redux/cartActions";
import Checkout from "./components/Checkout";
import Myorder from "./components/Myorder";

function App() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleAddItemToCart = (item, price) => {
    dispatch(addItem(item, price));
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/myorder" element={<Myorder />} />

          <Route
            path="/products"
            element={<Products addItemToCart={handleAddItemToCart} />}
          />
          <Route
            path="/cart"
            element={
              <CartPage
                cart={Object.values(cart)}
                removeItem={handleRemoveItem}
              />
            }
          />
          <Route
            path="/checkout"
            element={
              <Checkout
                cart={Object.values(cart)}
                removeItem={handleRemoveItem}
              />
            }
          />
        </Routes>
        <footer className="footer">
          <div className="containers">
            <span className="a">Fahams Store &copy; 2024 </span>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
