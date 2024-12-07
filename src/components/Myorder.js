
import React, { useEffect, useState } from "react";
import "./Order.css";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

 
const Myorder = ({ cart, removeItem }) => {
     const navigate = useNavigate();
  const [myorder, setMyorder] = useState([]);
  const userEmail = useSelector((state) => state.user.email);

  useEffect(() => {
    const fetchMyorder = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/myorder?userEmail=${userEmail}`
        );
        setMyorder(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchMyorder();
  }, [userEmail]);

  return (
    <div className="main-order-cart">
      {myorder.length === 0 ? (
        <div className="no-orders">
          <div className="image-container">
            <button
              onClick={() => navigate(`/products`)}
              className="order-now-button"
            >
              Order Now
            </button>
            <img
              src="./order.jpg"
              alt="No Orders"
              className="order-image-container"
            />
          </div>
        </div>
      ) : (
        myorder.map((order) => (
          <div className="cart" key={order.id}>
            <h3>Checkout</h3>
            <ol>
              {order.items.map((item, index) => (
                <li key={index}>
                  {item.name} - Quantity: {item.quantity} - Price: $
                  {item.price * item.quantity}
                </li>
              ))}
            </ol>
            <br />
            <p>Your Total is : ${order.total}</p>
            <p>Happy Shopping from FahamStore 😊</p>
            <br />
          </div>
        ))
      )}
    </div>
  );
};

export default Myorder;
