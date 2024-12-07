import React from "react";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Checkout = ({ cart, removeItem }) => {
  const dispatch = useDispatch();
  const total = cart.reduce(
    (acc, current) => acc + current.price * current.quantity,
    0
  );
  const userEmail = useSelector((state) => state.user.email);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const items = cart.map((item) => ({
      name: item.name,
      quantity: item.quantity,
      price: item.price,
    }));
    axios
      .post("http://localhost:5000/order", { userEmail, total, items })
      .then((result) => {
        console.log(result);
        dispatch({ type: "CLEAR_CART" });
        navigate("/products");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="main-cart">
      <div className="cart">
        <h3>Checkout</h3>
        <ol>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - Quantity: {item.quantity} - Price: $
              {item.price * item.quantity}
            </li>
          ))}
        </ol>
        <br></br>
        <p>Your Total is : ${total}</p>
        <p>Happy Shopping from FahamStore 😊</p>
        <button
          onClick={handleSubmit}
          style={{
            color: "black",
            backgroundColor: "rgb(222, 166, 64)",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          Confirm Order
        </button>

        <br></br>
      </div>
    </div>
  );
};

export default Checkout;
