import React from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";

const OrderSuccessPage = () => {
  const location = useLocation();
  const orderId = location.state?.orderId || Math.floor(Math.random() * 1000000);

  return (
    <>
      <Navbar />
      <div style={{ padding: "200px 60px", textAlign: "center" }}>
        <h2>🎉 Order Placed Successfully!</h2>
        <p>Your Order ID: #{orderId}</p>
        <Link to="/">
          <button style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#800020",
            color: "white",
            border: "none",
            borderRadius: "5px"
          }}>
            Continue Shopping
          </button>
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default OrderSuccessPage;
