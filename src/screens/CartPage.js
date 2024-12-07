import React from "react";
import Cart from "../components/Cart";
import "./CartPage.css";

const CartPage = ({ cart, removeItem }) => {
  return (
    <div className="cart-page">
      <Cart cart={cart} removeItem={removeItem} />
    </div>
  );
};

export default CartPage;
