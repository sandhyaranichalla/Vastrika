import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import "./Productdetailspage.css";
import { CartContext } from "./Cartcontext";

const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

const Productdetailspage = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(
          `${API_BASE_URL}/api/products/${id}`
        );
        setProduct(res.data);
        console.log("Product Data:", res.data);
      } catch (error) {
        console.log("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <h2 style={{ padding: "150px 60px" }}>Loading...</h2>;
  }

  return (
    <div>
      <Navbar />
      <div className="details-container">
        <div className="details-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="details-info">
          <h2>{product.name}</h2>
          <p className="details-price">₹{product.price}</p>
          <p>{product.description}</p>

          <button
            className="buy-btn"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Productdetailspage;


