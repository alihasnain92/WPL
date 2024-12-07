import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Products.css";
import { useSelector } from "react-redux";
import axios from "axios";

const Products = ({ addItemToCart }) => {
  // const products = [
  //   { id: 1, name: "Instant Camera", price: 499, image: "./camera.jpg" },
  //   { id: 2, name: "Nike Trainer 5.0", price: 44, image: "./nike.jpg" },
  //   {
  //     id: 3,
  //     name: "Rayban Wayfarer",
  //     price: 109.98,
  //     image: "./sunglasses.jpg",
  //   },
  //   { id: 4, name: "Sonica 1 Eco", price: 360, image: "./shoe.jpg" },
  //   { id: 5, name: "Curology Moisturizer", price: 129, image: "./shampoo.jpg" },
  //   { id: 6, name: "Laptop Bag", price: 99, image: "./bag.jpg" },
  //   { id: 7, name: "Vinta Travel", price: 179, image: "./mature-bag.jpg" },
  //   {
  //     id: 8,
  //     name: "Nikon D750",
  //     price: 1400,
  //     image: "./varun-gaba-dcgB3CgidlU-unsplash.jpg",
  //   },
  //   { id: 9, name: "Android Watch", price: 400, image: "./watch.jpg" },
  // ];

  const [products, setProducts] = useState([]);
  const cart = useSelector((state) => state.cart);
  const cartItemCount = Object.values(cart).reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/products"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);
  return (
    <section className="products" id="product">
      <div className="product-text">
        <h1>Trending Products</h1>
      </div>
      <div className="product">
        {products.map((product) => (
          <div key={product.id} className="product-box">
            <div className="product-image-box">
              <img
                src={product.image}
                alt={`product-${product.id} pic`}
                className="product-image"
              />
            </div>
            <div className="product-buttons">
              {product.name} <br />
              price ${product.price}
              <button
                className="button add-to-cart"
                onClick={() => addItemToCart(product.name, product.price)}
              >
                Add to Cart
              </button>
              <button className="button see-details">See Details</button>
            </div>
          </div>
        ))}
      </div>
      <div className="view-cart">
        <Link to="/cart">
          <button className="button view-cart-button">
            {" "}
            Cart ({cartItemCount}){" "}
          </button>
        </Link>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </section>
  );
};

export default Products;
