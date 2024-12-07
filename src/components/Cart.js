import React from "react";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

const Cart = ({ cart, removeItem }) => {
  const total = cart.reduce(
    (acc, current) => acc + current.price * current.quantity,
    0
  );
  const navigate = useNavigate();

  return (
    <div className="main-cart">
      <div className="cart">
        <h3>CART</h3>
        <ol>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - Quantity: {item.quantity} - Price: $
              {item.price * item.quantity}
              <button
                className="cart-button"
                onClick={() => removeItem(item.name)}
              >
                Remove
              </button>
            </li>
          ))}
        </ol>
        <br></br>
        <p>Your Total is : ${total}</p>
        <p>Happy Shopping from FahamStore 😊</p>
        <button
          style={{
            color: "black",
            backgroundColor: "rgb(222, 166, 64)",
            padding: "10px",
            borderRadius: "5px",
          }}
          onClick={() => navigate("/checkout")}
        >
          Checkout
        </button>
        <br></br>
      </div>
    </div>
  );
};

export default Cart;
